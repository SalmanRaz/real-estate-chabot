import { ensureSchema, sql } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return Response.json({ messages: [] });
  }

  await ensureSchema();

  const rows = await sql`
    SELECT id, role, content, created_at
    FROM chat_messages
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
  `;

  return Response.json({ messages: rows });
}
