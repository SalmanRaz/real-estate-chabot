import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.POSTGRES_URL ?? "postgres://user:password@localhost/placeholder";

export const sql = neon(connectionString);

let schemaReady: Promise<void> | null = null;

export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`CREATE EXTENSION IF NOT EXISTS vector`;

      await sql`
        CREATE TABLE IF NOT EXISTS documents (
          id text PRIMARY KEY,
          category text NOT NULL,
          title text NOT NULL,
          content text NOT NULL,
          embedding vector(384)
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS chat_sessions (
          id uuid PRIMARY KEY,
          created_at timestamptz NOT NULL DEFAULT now(),
          last_active_at timestamptz NOT NULL DEFAULT now()
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS chat_messages (
          id bigserial PRIMARY KEY,
          session_id uuid NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
          role text NOT NULL,
          content text NOT NULL,
          created_at timestamptz NOT NULL DEFAULT now()
        )
      `;

      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id bigserial PRIMARY KEY,
          session_id uuid REFERENCES chat_sessions(id) ON DELETE SET NULL,
          name text NOT NULL,
          email text NOT NULL,
          phone text,
          budget text,
          created_at timestamptz NOT NULL DEFAULT now()
        )
      `;
    })();
  }

  return schemaReady;
}

export async function touchSession(sessionId: string) {
  await sql`
    INSERT INTO chat_sessions (id)
    VALUES (${sessionId})
    ON CONFLICT (id) DO UPDATE SET last_active_at = now()
  `;
}

export async function saveMessage(
  sessionId: string,
  role: string,
  content: string,
) {
  if (!content.trim()) {
    return;
  }

  await sql`
    INSERT INTO chat_messages (session_id, role, content)
    VALUES (${sessionId}, ${role}, ${content})
  `;
}
