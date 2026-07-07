import Image from "next/image";
import Link from "next/link";
import { club, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-auto overflow-hidden bg-[#060d27] text-white">
      <div className="sport-grid relative">
        <div className="outline-text pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[22vw] font-black uppercase leading-none tracking-[-0.08em] opacity-40">
          AFCO
        </div>
        <div className="page-shell relative !py-16 lg:!py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-4">
                <span className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-yellow-400/70">
                  <Image src="/images/logo.jpg" alt="Logo AFCO" fill sizes="64px" className="object-cover" />
                </span>
                <span>
                  <span className="block text-4xl font-black tracking-[-0.06em]">AFCO<span className="text-yellow-400">.</span></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">La Jeunesse Vivante</span>
                </span>
              </Link>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-100/80">{club.mission}</p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-400">Navigation</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-blue-100">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-yellow-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-400">Parlons football</p>
              <a href={`tel:${club.phoneIntl}`} className="mt-6 block text-2xl font-black transition hover:text-yellow-300">{club.phone}</a>
              <a href={`mailto:${club.email}`} className="mt-2 block text-sm text-blue-100 transition hover:text-yellow-300">{club.email}</a>
              <p className="mt-4 text-sm text-blue-200">{club.city}, {club.country}</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {club.fullName}</p>
            <p>Fondé en {club.founded} · Ouahigouya</p>
          </div>
        </div>
        <p className="relative pb-5 text-center text-[10px] font-normal normal-case tracking-wide text-blue-400/40">
          Développé par Windson
        </p>
      </div>
    </footer>
  );
}
