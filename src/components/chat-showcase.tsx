"use client";

import { DefaultChatTransport, type UIMessage } from "ai";
import { useChat } from "@ai-sdk/react";
import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  BedDouble,
  ChevronDown,
  Home,
  Loader2,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  SendHorizonal,
  UserRoundPlus,
  Wallet,
  X,
} from "lucide-react";

const markdownComponents = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-2 last:mb-0">{children}</p>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">{children}</ol>
  ),
};

const SESSION_STORAGE_KEY = "aurora-estates-session-id";

const promptSuggestions = [
  "What is the starting price for waterfront apartments?",
  "Do you offer installment payment plans?",
  "Can I schedule a site visit this weekend?",
];

type LeadForm = {
  name: string;
  email: string;
  phone: string;
  budget: string;
};

const initialLead: LeadForm = {
  name: "",
  email: "",
  phone: "",
  budget: "",
};

function getMessageText(
  parts: Array<{ type: string; text?: string }> | undefined,
) {
  return (
    parts
      ?.filter((part) => part.type === "text")
      .map((part) => part.text ?? "")
      .join("") ?? ""
  );
}

function readOrCreateSessionId() {
  if (typeof window === "undefined") {
    return "";
  }

  const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (existing) {
    return existing;
  }

  const created = crypto.randomUUID();
  window.localStorage.setItem(SESSION_STORAGE_KEY, created);
  return created;
}

export function ChatShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [leadSaved, setLeadSaved] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [sessionId] = useState(readOrCreateSessionId);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { sessionId },
      }),
    [sessionId],
  );

  const { messages, sendMessage, status, error, setMessages } = useChat({
    transport,
  });

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const response = await fetch(
          `/api/chat/history?sessionId=${encodeURIComponent(sessionId)}`,
        );
        if (!response.ok || cancelled) {
          return;
        }

        const { messages: history } = (await response.json()) as {
          messages: Array<{ id: number; role: string; content: string }>;
        };

        if (history.length === 0 || cancelled) {
          return;
        }

        setMessages(
          history.map((entry) => ({
            id: String(entry.id),
            role: entry.role === "user" ? "user" : "assistant",
            parts: [{ type: "text", text: entry.content }],
          })) as UIMessage[],
        );
      } catch {
        // Restoring history is a nice-to-have; ignore failures silently.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [sessionId, setMessages]);

  const recentMessages = useMemo(
    () =>
      messages
        .slice(-5)
        .map((message) => ({
          id: message.id,
          role: message.role,
          text: getMessageText(
            message.parts as Array<{ type: string; text?: string }> | undefined,
          ),
        }))
        .filter((message) => message.text.trim().length > 0),
    [messages],
  );

  useEffect(() => {
    if (!leadSaved) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setLeadSaved(false);
    }, 2800);

    return () => window.clearTimeout(timeout);
  }, [leadSaved]);

  const isStreaming = status === "submitted" || status === "streaming";

  const handlePrompt = async (prompt: string) => {
    setInput("");
    await sendMessage({ text: prompt });
    setIsOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    const currentInput = input;
    setInput("");
    await sendMessage({ text: currentInput });
  };

  const handleLeadSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLeadError(null);

    if (!lead.name || !lead.email || !lead.phone) {
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, sessionId }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setLead(initialLead);
      setLeadSaved(true);
    } catch {
      setLeadError("Could not save your details right now. Please try again.");
    }
  };

  return (
    <>
      <div className="fixed right-5 bottom-5 z-50 sm:right-6 sm:bottom-6">
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#0f2f6a] text-white shadow-[0_22px_55px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-1"
            aria-label="Open chat widget"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute -top-1 -left-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
          </button>
        ) : null}

        <div
          className={`origin-bottom-right overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.24)] transition-all duration-300 ${
            isOpen
              ? "pointer-events-auto h-[min(640px,calc(100vh-7rem))] w-[min(26rem,calc(100vw-2rem))] scale-100 opacity-100"
              : "pointer-events-none h-0 w-0 scale-90 opacity-0"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between bg-[#153471] px-5 py-5 text-white">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/90 transition hover:bg-white/10"
                  aria-label="Close chat widget"
                >
                  <X className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                    Aurora Estates
                  </p>
                  <h2 className="text-[1.35rem] font-medium">Property Assistant</h2>
                </div>
              </div>
              <div className="rounded-full bg-white/10 p-2">
                <Home className="h-5 w-5 text-amber-300" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-white px-4 py-4">
              <div className="mx-auto max-w-[18rem] text-center text-sm text-slate-500">
                Real estate chatbot
              </div>

              <div className="mt-5 flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100">
                  <Home className="h-5 w-5 text-slate-700" />
                </div>
                <div className="max-w-[15rem] rounded-[1rem] bg-[#173d83] px-4 py-3 text-[1.05rem] text-white">
                  👋 Hi! How can we help?
                </div>
              </div>

              <div className="mt-6 flex flex-col items-end gap-3">
                {promptSuggestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void handlePrompt(prompt)}
                    className="rounded-[0.9rem] border border-[#c8d2e4] bg-white px-4 py-3 text-right text-base text-[#173d83] transition hover:bg-slate-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {recentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.role === "user"
                        ? "ml-auto max-w-[16rem] rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                        : "mr-auto max-w-[16rem] rounded-[1rem] bg-[#173d83] px-4 py-3 text-sm leading-7 text-white"
                    }
                  >
                    <ReactMarkdown components={markdownComponents}>
                      {message.text}
                    </ReactMarkdown>
                  </div>
                ))}

                {isStreaming ? (
                  <div className="mr-auto inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching property details...
                  </div>
                ) : null}
              </div>

              <div className="mt-6 rounded-[1.35rem] border border-slate-200 bg-slate-50 p-4">
                <button
                  type="button"
                  onClick={() => setIsLeadFormOpen((current) => !current)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-100 p-3 text-amber-800">
                      <UserRoundPlus className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Request agent follow-up
                      </p>
                      <p className="text-xs text-slate-500">
                        Capture buyer details inside the widget
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-500 transition-transform ${
                      isLeadFormOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLeadFormOpen ? (
                  <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                    <input
                      value={lead.name}
                      onChange={(event) =>
                        setLead((current) => ({ ...current, name: event.target.value }))
                      }
                      placeholder="Full name"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    />
                    <input
                      value={lead.email}
                      onChange={(event) =>
                        setLead((current) => ({ ...current, email: event.target.value }))
                      }
                      placeholder="Email address"
                      type="email"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    />
                    <input
                      value={lead.phone}
                      onChange={(event) =>
                        setLead((current) => ({ ...current, phone: event.target.value }))
                      }
                      placeholder="Phone number"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    />
                    <input
                      value={lead.budget}
                      onChange={(event) =>
                        setLead((current) => ({ ...current, budget: event.target.value }))
                      }
                      placeholder="Budget range"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    />
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#153471] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#102b5d]"
                    >
                      <Mail className="h-4 w-4" />
                      Save lead for agent
                    </button>
                    {leadSaved ? (
                      <p className="text-sm text-emerald-700">
                        Lead captured. Our team will follow up shortly.
                      </p>
                    ) : null}
                    {leadError ? (
                      <p className="text-sm text-red-700">{leadError}</p>
                    ) : null}
                  </form>
                ) : null}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-slate-500">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                  <MapPinned className="mx-auto mb-1 h-4 w-4 text-slate-700" />
                  Locations
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                  <Wallet className="mx-auto mb-1 h-4 w-4 text-slate-700" />
                  Pricing
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
                  <BedDouble className="mx-auto mb-1 h-4 w-4 text-slate-700" />
                  Units
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  The assistant could not answer right now. Please check the model configuration.
                </p>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white px-4 py-3">
              <div className="flex items-end gap-3">
                <label className="block flex-1">
                  <span className="sr-only">Ask a property question</span>
                  <textarea
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        event.currentTarget.form?.requestSubmit();
                      }
                    }}
                    rows={2}
                    placeholder="Type here and press enter..."
                    className="min-h-16 w-full resize-none rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isStreaming}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#f59e0b] px-5 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  Lead-ready handoff
                </span>
                <span>Retrieval-backed answers</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
