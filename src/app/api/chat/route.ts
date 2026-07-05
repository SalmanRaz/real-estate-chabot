import { convertToModelMessages, streamText, UIMessage } from "ai";
import { buildContextBlock } from "@/lib/rag";
import { defaultModel, openrouter } from "@/lib/openrouter";
import { ensureSchema, saveMessage, touchSession } from "@/lib/db";

// A cold start needs to download the local embedding model plus round-trip
// the database; Vercel's default timeout can be too short for that first
// request, so extend it up to the Hobby-plan ceiling.
export const maxDuration = 60;

function extractLatestUserMessage(messages: UIMessage[]) {
  const latestMessage = [...messages].reverse().find((message) => {
    return message.role === "user";
  });

  return (
    latestMessage?.parts
      ?.filter((part) => part.type === "text")
      .map((part) => ("text" in part ? part.text : ""))
      .join("") ?? ""
  );
}

export async function POST(request: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return Response.json(
      {
        error:
          "Missing OPENROUTER_API_KEY. Add it to your environment file to enable live chat responses.",
      },
      { status: 500 },
    );
  }

  const {
    messages,
    sessionId,
  }: { messages: UIMessage[]; sessionId?: string } = await request.json();
  const latestQuestion = extractLatestUserMessage(messages);
  const contextBlock = await buildContextBlock(latestQuestion);

  if (sessionId) {
    await ensureSchema();
    await touchSession(sessionId);
    await saveMessage(sessionId, "user", latestQuestion);
  }

  const result = streamText({
    model: openrouter(defaultModel),
    abortSignal: request.signal,
    system: `You are a real estate lead qualification assistant for Aurora Estates.

Answer with a polished, trustworthy, premium real-estate tone.
Only use the approved context below. If the answer is not fully supported, say that a human teammate should follow up.
If the visitor asks about pricing, payment plans, availability, financing, discounts, site visits, or handover timing, invite them to share their contact details for an agent follow-up.
If the visitor asks something unavailable in the approved context, do not invent facts. Offer a helpful handoff to an agent.
Keep answers concise, useful, and easy to scan.

Formatting rules (this renders in a narrow ~300px chat widget, not a document):
- Never use markdown tables or pipe characters. They do not fit and render as broken text.
- Prefer short paragraphs or a simple "- " bullet list, one fact per line.
- You may use **bold** for key numbers or names, but keep it sparing.

Approved knowledge base:
${contextBlock}`,
    messages: await convertToModelMessages(messages),
    onFinish: async ({ text }) => {
      if (sessionId) {
        await saveMessage(sessionId, "assistant", text);
      }
    },
  });

  return result.toUIMessageStreamResponse();
}
