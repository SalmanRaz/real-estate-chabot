import { knowledgeBaseDocuments } from "@/lib/knowledge-base";
import { embed, toVectorLiteral } from "@/lib/embeddings";
import { ensureSchema, sql } from "@/lib/db";

async function main() {
  await ensureSchema();

  for (const doc of knowledgeBaseDocuments) {
    const embedding = toVectorLiteral(
      await embed(`${doc.title}\n${doc.content}`),
    );

    await sql`
      INSERT INTO documents (id, category, title, content, embedding)
      VALUES (${doc.id}, ${doc.category}, ${doc.title}, ${doc.content}, ${embedding}::vector)
      ON CONFLICT (id) DO UPDATE SET
        category = EXCLUDED.category,
        title = EXCLUDED.title,
        content = EXCLUDED.content,
        embedding = EXCLUDED.embedding
    `;

    console.log(`Seeded: ${doc.id}`);
  }

  console.log(`Done. Seeded ${knowledgeBaseDocuments.length} documents.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
