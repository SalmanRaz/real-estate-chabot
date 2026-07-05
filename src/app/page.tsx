import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock,
  Database,
  Landmark,
  Mail,
  MapPin,
  MapPinned,
  MessageSquareMore,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ChatShowcase } from "@/components/chat-showcase";
import { SiteHeader } from "@/components/site-header";
import {
  aboutAgency,
  featuredProperties,
  portfolioHighlights,
  serviceCards,
  testimonials,
  useCaseTimeline,
} from "@/lib/knowledge-base";

const stack = [
  "Next.js",
  "Vercel AI SDK",
  "OpenRouter",
  "Vector RAG",
  "Postgres + pgvector",
  "Lead capture",
  "Chat widget",
  "Live dashboard",
];

const valueProps = [
  {
    icon: MessageSquareMore,
    title: "Answers real estate questions instantly",
    copy:
      "The assistant handles neighborhoods, pricing ranges, booking steps, financing basics, and property availability questions.",
  },
  {
    icon: Database,
    title: "Grounded in approved listing knowledge",
    copy:
      "Responses are pulled from property details, buyer FAQs, payment policies, booking info, and agent-approved notes.",
  },
  {
    icon: Sparkles,
    title: "Qualifies buyers while they chat",
    copy:
      "When visitors ask serious buying questions, the bot smoothly collects their name, email, budget, and timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Designed for trust-heavy decisions",
    copy:
      "The bot stays clear, transparent, and helpful instead of sounding pushy or making unsupported promises.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="overflow-hidden bg-[#f7f2eb]">
        <div className="relative overflow-hidden bg-[#06111e]">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(251,191,36,0.28),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(56,189,248,0.26),transparent_24%),radial-gradient(circle_at_56%_80%,rgba(167,139,250,0.2),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

          <section className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-22 pt-12 sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-8">
                <div className="space-y-5">
                  <p className="inline-flex rounded-full border border-sky-300/40 bg-sky-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100 shadow-[0_0_24px_rgba(56,189,248,0.15)]">
                    Premium Property Group
                  </p>
                  <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-white sm:text-6xl lg:text-[5.5rem]">
                    Answer
                    <span className="bg-[linear-gradient(135deg,#fcd34d,#f97316)] bg-clip-text text-transparent">
                      {" "}property questions{" "}
                    </span>
                    instantly and turn
                    <span className="bg-[linear-gradient(135deg,#38bdf8,#a78bfa)] bg-clip-text text-transparent">
                      {" "}curious visitors{" "}
                    </span>
                    into qualified buyers.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    Aurora Estates markets premium apartments, villas, and waterfront
                    homes. Our AI assistant helps visitors understand listings,
                    neighborhoods, payment plans, and visit scheduling while
                    capturing qualified leads for our agents, 24/7.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                    <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                      Buyer-friendly pricing answers
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                      Visit scheduling intent
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                      CRM-ready lead capture
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#properties"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_34px_rgba(245,158,11,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Explore featured listings
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/16"
                  >
                    Talk to an agent
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {portfolioHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.75rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] p-5 shadow-[0_16px_34px_rgba(2,6,23,0.3)] backdrop-blur-md"
                    >
                      <p className="text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-8 hidden h-36 w-36 rounded-full bg-amber-300/20 blur-3xl lg:block" />
                <div className="absolute -right-6 bottom-10 hidden h-40 w-40 rounded-full bg-sky-400/15 blur-3xl lg:block" />
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(30,41,59,0.9))] shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-xl">
                  <div className="h-56 bg-[linear-gradient(135deg,#1e3a8a_0%,#0f172a_38%,#6d28d9_100%)] p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                          Signature listing
                        </p>
                        <h2 className="mt-3 font-serif text-3xl text-white">
                          Aurora Bay Residences
                        </h2>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">
                          Waterfront apartments with marina views, concierge service,
                          and payment-plan guidance handled directly inside the chatbot.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-white/15 p-3 text-amber-200">
                        <Landmark className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-white">
                      <span className="rounded-full bg-white/15 px-3 py-1.5">From 1.45M AED</span>
                      <span className="rounded-full bg-white/15 px-3 py-1.5">1-3 Beds</span>
                      <span className="rounded-full bg-white/15 px-3 py-1.5">Marina District</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
                          Visitor experience
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-white">
                          What the assistant does on the site
                        </h2>
                      </div>
                      <Building2 className="h-10 w-10 rounded-2xl bg-white/12 p-2.5 text-sky-200" />
                    </div>

                    <div className="mt-6 grid gap-4">
                      {valueProps.map(({ icon: Icon, title, copy }, index) => {
                        const accents = [
                          "bg-amber-400/20 text-amber-200",
                          "bg-sky-400/20 text-sky-200",
                          "bg-violet-400/20 text-violet-200",
                          "bg-emerald-400/20 text-emerald-200",
                        ];
                        return (
                          <div
                            key={title}
                            className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09]"
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`rounded-2xl p-3 ${accents[index % accents.length]}`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          id="properties"
          className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                <MapPinned className="h-4 w-4 text-amber-500" />
                Featured Listings
              </div>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-slate-950">
                Communities our buyers ask about most.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Every listing here is grounded in the assistant&apos;s knowledge
              base, so pricing, availability, and handover answers stay
              accurate whether you ask an agent or the chat widget.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProperties.map((property) => (
              <article
                key={property.name}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.35))]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {property.badge}
                  </span>
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-950">
                      {property.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900">
                      {property.status}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{property.copy}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
                    <span className="font-semibold text-slate-900">{property.price}</span>
                    <span className="text-slate-500">{property.beds}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4 rounded-[2rem] border border-slate-200/90 bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
              <h3 className="font-serif text-2xl text-slate-950">
                How buyers usually reach us
              </h3>
              <div className="grid gap-3">
                {useCaseTimeline.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12"
        >
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                <Building2 className="h-4 w-4 text-sky-600" />
                About Aurora Estates
              </div>
              <h2 className="font-serif text-3xl text-slate-950">
                A local team, backed by an assistant that never sleeps.
              </h2>
              <p className="text-base leading-8 text-slate-600">{aboutAgency.story}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutAgency.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                <Database className="h-4 w-4 text-sky-600" />
                Solution stack
              </div>
              <h2 className="mt-4 font-serif text-3xl text-slate-950">
                Built for real estate conversations, not generic support replies
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Case study
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  This chatbot logs every conversation and captured lead to a real
                  Postgres + pgvector database. The numbers behind it are live,
                  not mocked.
                </p>
                <Link
                  href="/dashboard"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#153471] hover:underline"
                >
                  View the live dashboard
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div
              id="workflow"
              className="rounded-[2rem] border border-slate-200 bg-[#fffaf3] p-7 shadow-[0_24px_90px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-500">
                Widget workflow
              </p>
              <h2 className="mt-4 font-serif text-3xl text-slate-950">
                How the floating real estate widget works
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  "A visitor opens the bottom-right widget to ask about price, location, amenities, payment plan, or site visits.",
                  "The assistant embeds the question and retrieves the closest matching listings, FAQs, and policy documents by vector similarity.",
                  "The assistant responds with clear property guidance and stays grounded in approved real estate content.",
                  "If the visitor shows buying intent, the widget collects contact details and saves the lead for agent follow-up.",
                ].map((line, index) => (
                  <div
                    key={line}
                    className="flex gap-4 rounded-[1.5rem] border border-amber-100 bg-white p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-7 text-slate-700">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              <Quote className="h-4 w-4 text-amber-500" />
              Buyer reviews
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-slate-950">
              What buyers say after chatting with the assistant.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
              >
                <Quote className="h-6 w-6 text-amber-400" />
                <p className="flex-1 text-sm leading-7 text-slate-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153471] text-sm font-semibold text-white">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-slate-200 bg-[#06111e] text-slate-300">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-slate-950">
                  AE
                </span>
                Aurora Estates
              </div>
              <p className="max-w-sm text-sm leading-7 text-slate-400">
                Marketing premium apartments, villas, and waterfront homes,
                backed by an AI assistant that answers buyer questions and
                qualifies leads around the clock.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-semibold uppercase tracking-[0.24em] text-slate-400">
                Contact
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-300" />
                Harbor District, Marina Walk, Building 4
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-300" />
                +971 4 000 1234
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-300" />
                hello@aurora-estates.example
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p className="font-semibold uppercase tracking-[0.24em] text-slate-400">
                Office hours
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-300" />
                Sat - Thu: 9 AM - 6 PM
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-300" />
                Fri: 2 PM - 6 PM
              </p>
              <p className="pt-2 text-slate-400">
                Outside office hours, the chat widget keeps answering and can
                request an agent call-back for you.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500 sm:px-8 lg:px-12">
            &copy; Aurora Estates. All listings shown are illustrative demo
            content.
          </div>
        </footer>
      </main>

      <ChatShowcase />
    </>
  );
}
