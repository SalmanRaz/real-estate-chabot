import { ensureSchema, sql } from "@/lib/db";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  sessionId?: string;
};

export async function POST(request: Request) {
  const body: LeadPayload = await request.json();
  const { name, email, phone, budget, sessionId } = body;

  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return Response.json(
      { error: "Name, email, and phone are required." },
      { status: 400 },
    );
  }

  await ensureSchema();

  await sql`
    INSERT INTO leads (session_id, name, email, phone, budget)
    VALUES (${sessionId ?? null}, ${name}, ${email}, ${phone}, ${budget ?? null})
  `;

  return Response.json({ ok: true });
}
