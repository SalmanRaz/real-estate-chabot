## Aurora Estates — AI Property Assistant

A Next.js real estate website with a floating AI chat widget backed by real
retrieval-augmented generation. The assistant answers buyer questions from a
Postgres + pgvector knowledge base, captures leads, remembers chat history
per visitor, and reports on all of it through a live dashboard.

### What it includes

- Real estate marketing site (listings, about, reviews, contact) with a
  floating bottom-right chat widget
- Retrieval-augmented answers: queries are embedded locally
  (`@xenova/transformers`, no external API key) and matched against a
  Postgres `pgvector` knowledge base of listings, FAQs, and policies
- Persistent chat history per visitor (Postgres-backed, restored on reload)
- Lead capture that saves directly to the database
- A `/dashboard` page showing live conversation, message, and lead counts
  (open — no login, since this is a public demo)
- OpenRouter's `openrouter/free` router for live chat responses — no paid
  model required

### Run locally

1. Install dependencies:

```bash
npm install
```

2. Create a Postgres database. The easiest path is Vercel Postgres:
   - In your Vercel project, open the **Storage** tab and add **Postgres**
     (this provisions Neon under the hood, which fully supports `pgvector`).
   - Run `vercel env pull .env.local` to pull `POSTGRES_URL` into your local
     environment, or copy it manually from the Vercel dashboard.

   If you're not using Vercel, any Postgres instance with the `pgvector`
   extension available works — just set `POSTGRES_URL` yourself.

3. Copy the example environment file and fill in the values:

```bash
cp .env.example .env.local
```

4. Seed the knowledge base (creates tables, generates local embeddings, and
   loads the listing/FAQ documents):

```bash
npm run seed
```

5. Start the app:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Visit
[http://localhost:3000/dashboard](http://localhost:3000/dashboard) to see
live conversation and lead stats.

### Environment variables

```env
OPENROUTER_API_KEY=sk-or-your-key-here
OPENROUTER_MODEL=openrouter/free

POSTGRES_URL=postgres://user:password@host/dbname?sslmode=require
```

### Notes

- Embeddings run locally inside the Node.js server (no OpenAI or paid
  embedding API needed), so the whole stack works on OpenRouter's free
  models end to end.
- Re-run `npm run seed` any time you edit `src/lib/knowledge-base.ts` to
  refresh the stored documents and their embeddings.
