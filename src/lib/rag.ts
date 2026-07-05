import { ensureSchema, sql } from "@/lib/db";
import { embed, toVectorLiteral } from "@/lib/embeddings";

export type RetrievedDocument = {
  id: string;
  category: string;
  title: string;
  content: string;
};

export async function retrieveContext(
  query: string,
  limit = 3,
): Promise<RetrievedDocument[]> {
  await ensureSchema();

  const queryEmbedding = toVectorLiteral(await embed(query));

  const rows = await sql`
    SELECT id, category, title, content
    FROM documents
    ORDER BY embedding <=> ${queryEmbedding}::vector
    LIMIT ${limit}
  `;

  return rows as RetrievedDocument[];
}

export async function buildContextBlock(query: string) {
  const matches = await retrieveContext(query);

  if (matches.length === 0) {
    return "No strong knowledge-base match was found. Ask the assistant to respond carefully and recommend human follow-up.";
  }

  return matches
    .map(
      (doc, index) =>
        `Source ${index + 1}: ${doc.title}\nCategory: ${doc.category}\n${doc.content}`,
    )
    .join("\n\n");
}
