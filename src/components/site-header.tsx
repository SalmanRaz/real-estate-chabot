"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { href: "#properties", label: "Listings" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06111e]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="#top"
          className="flex items-center gap-2 text-lg font-semibold text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-300 text-sm font-bold text-slate-950">
            AE
          </span>
          Aurora Estates
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+97140001234"
            className="hidden items-center gap-2 text-sm text-slate-200 sm:flex"
          >
            <Phone className="h-4 w-4 text-amber-300" />
            +971 4 000 1234
          </a>
          <Link
            href="#contact"
            className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:inline-flex"
          >
            Book a visit
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#06111e] px-6 py-4 sm:px-8 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3">
            <a
              href="tel:+97140001234"
              className="flex items-center gap-2 px-3 text-sm text-slate-200"
            >
              <Phone className="h-4 w-4 text-amber-300" />
              +971 4 000 1234
            </a>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Book a visit
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
