import Link from "next/link";
import { ensureSchema, sql } from "@/lib/db";

export const dynamic = "force-dynamic";

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  budget: string | null;
  created_at: string;
};

type SessionSummary = {
  id: string;
  last_active_at: string;
  first_message: string | null;
  message_count: number;
};

async function getDashboardData() {
  await ensureSchema();

  const [
    sessionCountRows,
    messageCountRows,
    leadCountRows,
    documentCountRows,
    leads,
    sessions,
  ] = await Promise.all([
    sql`SELECT COUNT(*)::int AS count FROM chat_sessions`,
    sql`SELECT COUNT(*)::int AS count FROM chat_messages`,
    sql`SELECT COUNT(*)::int AS count FROM leads`,
    sql`SELECT COUNT(*)::int AS count FROM documents`,
    sql`
      SELECT id, name, email, phone, budget, created_at
      FROM leads
      ORDER BY created_at DESC
      LIMIT 20
    `,
    sql`
      SELECT
        s.id,
        s.last_active_at,
        (
          SELECT content FROM chat_messages m
          WHERE m.session_id = s.id
          ORDER BY m.created_at ASC
          LIMIT 1
        ) AS first_message,
        (
          SELECT COUNT(*)::int FROM chat_messages m
          WHERE m.session_id = s.id
        ) AS message_count
      FROM chat_sessions s
      ORDER BY s.last_active_at DESC
      LIMIT 20
    `,
  ]);

  return {
    totalSessions: (sessionCountRows[0]?.count as number) ?? 0,
    totalMessages: (messageCountRows[0]?.count as number) ?? 0,
    totalLeads: (leadCountRows[0]?.count as number) ?? 0,
    totalDocuments: (documentCountRows[0]?.count as number) ?? 0,
    leads: leads as unknown as Lead[],
    sessions: sessions as unknown as SessionSummary[],
  };
}

export default async function DashboardPage() {
  let data: Awaited<ReturnType<typeof getDashboardData>> | null = null;

  try {
    data = await getDashboardData();
  } catch {
    data = null;
  }

  if (!data) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="font-serif text-3xl text-slate-950">
          Dashboard unavailable
        </h1>
        <p className="mt-4 text-slate-600">
          Could not connect to the database. Make sure{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5">
            POSTGRES_URL
          </code>{" "}
          is set and{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5">
            npm run seed
          </code>{" "}
          has been run.
        </p>
      </main>
    );
  }

  const stats = [
    { label: "Conversations", value: data.totalSessions },
    { label: "Messages exchanged", value: data.totalMessages },
    { label: "Leads captured", value: data.totalLeads },
    { label: "Knowledge base documents", value: data.totalDocuments },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Aurora Estates
          </p>
          <h1 className="mt-2 font-serif text-4xl text-slate-950">
            Chatbot dashboard
          </h1>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 underline underline-offset-4"
        >
          Back to site
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-950">Recent leads</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Budget</th>
                <th className="px-4 py-3">Captured</th>
              </tr>
            </thead>
            <tbody>
              {data.leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-slate-500"
                  >
                    No leads captured yet.
                  </td>
                </tr>
              ) : (
                data.leads.map((lead) => (
                  <tr key={lead.id} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{lead.email}</td>
                    <td className="px-4 py-3 text-slate-600">{lead.phone}</td>
                    <td className="px-4 py-3 text-slate-600">
                      {lead.budget ?? "-"}
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {new Date(lead.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 mb-16">
        <h2 className="text-xl font-semibold text-slate-950">
          Recent conversations
        </h2>
        <div className="mt-4 space-y-3">
          {data.sessions.length === 0 ? (
            <p className="text-slate-500">No conversations yet.</p>
          ) : (
            data.sessions.map((session) => (
              <div
                key={session.id}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{session.message_count} messages</span>
                  <span>{new Date(session.last_active_at).toLocaleString()}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  {session.first_message ?? "No messages yet."}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
