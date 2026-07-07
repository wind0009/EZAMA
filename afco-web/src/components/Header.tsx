"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { club, navLinks } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-[0_12px_36px_rgba(8,16,43,0.08)] backdrop-blur-xl"
          : "border-slate-200/80 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Accueil AFCO" onClick={() => setOpen(false)}>
          <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-950/10 transition group-hover:rotate-3 group-hover:ring-yellow-400">
            <Image src="/images/logo.jpg" alt="" fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[-0.04em] text-blue-950">
              {club.name}<span className="text-yellow-500">.</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Ouahigouya · Depuis {club.founded}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-xs font-black uppercase tracking-[0.13em] transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-yellow-400 after:transition-transform ${
                  active
                    ? "text-blue-950 after:scale-x-100"
                    : "text-slate-600 after:scale-x-0 hover:text-blue-950 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${club.phoneIntl.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-blue-950 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-yellow-400 hover:text-blue-950"
          >
            Rejoindre le club
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center border border-slate-300 text-blue-950 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-[76px] bg-blue-950 text-white transition duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="sport-grid flex h-full flex-col justify-between px-6 py-10">
          <nav className="flex flex-col" aria-label="Navigation mobile">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-5 text-3xl font-black uppercase tracking-tight"
              >
                <span><span className="mr-4 text-xs text-yellow-400">0{index + 1}</span>{link.label}</span>
                <span className="text-yellow-400 transition-transform group-hover:translate-x-2">→</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-end justify-between text-sm text-blue-200">
            <p>{club.city}<br />{club.country}</p>
            <a href={`tel:${club.phoneIntl}`} className="font-bold text-yellow-300">{club.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
