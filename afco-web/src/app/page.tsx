import Image from "next/image";
import Link from "next/link";
import MatchCenter from "@/components/MatchCenter";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { club, getSeasonRecord, matches, news, values } from "@/data/content";

export default function HomePage() {
  const latestMatch = matches[0];
  const featuredNews = news.find((article) => article.featured);
  const recentNews = news.slice(0, 3);
  const record = getSeasonRecord();

  return (
    <>
      <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/team-hero.jpg"
          alt="Équipe AFCO sur le terrain"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="noise-layer absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10rem] font-black uppercase tracking-[-0.06em] text-white/[0.035] xl:block">
          Ouahigouya
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-7xl flex-col justify-center px-5 pb-44 pt-16 sm:px-8 lg:pb-40">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-yellow-300">
              <span className="pulse-ring h-2.5 w-2.5 rounded-full bg-yellow-400" />
              Ligue 3 régionale · Saison 2026
            </p>
            <h1 className="mt-7 text-[clamp(3.9rem,11vw,9.5rem)] font-black uppercase leading-[0.76] tracking-[-0.075em]">
              <span className="block">La jeunesse</span>
              <span className="mt-4 block text-yellow-400">vivante.</span>
            </h1>
            <p className="mt-9 max-w-xl border-l-2 border-yellow-400 pl-5 text-base leading-relaxed text-blue-100 sm:text-lg">
              {club.fullName}. Nous formons les talents de demain avec discipline, passion et ambition.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/club" className="group inline-flex items-center gap-4 bg-yellow-400 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-blue-950 transition hover:bg-white">
                Découvrir l&apos;AFCO <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/equipes" className="group inline-flex items-center gap-4 border border-white/45 bg-white/5 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-blue-950">
                Voir la saison <span className="transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#07112f]/90 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-[1.5fr_.8fr_.8fr]">
            <div className="flex items-center gap-5 border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r sm:px-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow-400 text-lg font-black text-blue-950">✓</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">Dernier résultat</p>
                <p className="mt-1 text-xl font-black">AFCO {latestMatch.scoreHome} : {latestMatch.scoreAway} {latestMatch.opponent}</p>
              </div>
            </div>
            <div className="hidden items-center px-8 py-5 sm:flex sm:border-r sm:border-white/10">
              <p><span className="block text-3xl font-black text-yellow-300">{record.wins}-{record.draws}-{record.losses}</span><span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">V · N · D</span></p>
            </div>
            <div className="hidden items-center px-8 py-5 sm:flex">
              <p><span className="block text-3xl font-black">{club.founded}</span><span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Année de création</span></p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-yellow-500 bg-yellow-400 py-3 text-blue-950">
        <div className="marquee-track flex items-center">
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center">
              {["AFCO", "FORMATION", "DISCIPLINE", "PASSION", "OUAHIGOUYA", "JEUNESSE VIVANTE"].map((item) => (
                <span key={`${set}-${item}`} className="flex items-center text-xs font-black uppercase tracking-[0.24em]">
                  <span className="mx-6 text-lg">◆</span>{item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section-reveal page-shell">
        <SectionHeading
          eyebrow="Actualités"
          title="Au cœur du club"
          description="Résultats, annonces et vie de l'académie : vivez l'AFCO au plus près du terrain."
          actionHref="/actualites"
          actionLabel="Toutes les actualités"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {recentNews.map((article, index) => (
            <NewsCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </section>

      <section className="section-reveal overflow-hidden bg-blue-950 text-white">
        <div className="page-shell relative">
          <div className="outline-text absolute -right-12 top-6 text-[9rem] font-black uppercase leading-none opacity-30">Match</div>
          <SectionHeading
            eyebrow="Match center"
            title="La saison en direct"
            description="Naviguez entre les derniers résultats de notre première saison en Ligue 3 régionale."
            light
          />
          <MatchCenter matches={matches} />
        </div>
      </section>

      <section className="section-reveal bg-white">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div className="relative min-h-[420px] sm:min-h-[560px]">
            <div className="absolute inset-0 overflow-hidden bg-blue-950">
              <Image src="/images/team-field.jpg" alt="Équipe AFCO à l'entraînement" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 bg-yellow-400 p-6 text-blue-950 sm:-right-8 sm:p-8">
              <p className="text-6xl font-black leading-none tracking-[-0.08em]">{new Date().getFullYear() - club.founded}+</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em]">années de passion</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Notre identité" title="Un club. Une ville. Un avenir." description={club.mission} />
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Fondée en {club.founded}, l&apos;AFCO évolue en {club.league} avec des joueurs {club.category}. Sur le terrain comme dans la vie, nous transmettons l&apos;envie de progresser ensemble.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-px bg-slate-200 border border-slate-200">
              <div className="bg-white p-5"><p className="text-3xl font-black text-blue-950">{club.category}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Catégorie</p></div>
              <div className="bg-white p-5"><p className="text-3xl font-black text-blue-950">L3</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Championnat</p></div>
            </div>
            <Link href="/club" className="group mt-9 inline-flex items-center gap-4 border-b-2 border-blue-950 pb-2 text-xs font-black uppercase tracking-[0.15em] text-blue-950 hover:border-yellow-500 hover:text-yellow-600">
              Notre histoire <span className="transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-reveal page-shell">
        <SectionHeading eyebrow="Nos valeurs" title="Plus qu'un club" description="Trois principes qui guident chaque entraînement, chaque match et chaque jeune." />
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {values.map((value, index) => (
            <article key={value.title} className="group relative min-h-72 overflow-hidden bg-white p-8 transition hover:bg-blue-950 sm:p-10">
              <p className="text-[11px] font-black tracking-[0.2em] text-yellow-600 transition group-hover:text-yellow-300">0{index + 1}</p>
              <h3 className="mt-16 text-3xl font-black uppercase tracking-[-0.04em] text-blue-950 transition group-hover:text-white">{value.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 transition group-hover:text-blue-100">{value.description}</p>
              <span className="absolute bottom-8 right-8 grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-blue-950 transition duration-300 group-hover:rotate-45 group-hover:border-yellow-300 group-hover:bg-yellow-300">↗</span>
            </article>
          ))}
        </div>
      </section>

      {featuredNews && (
        <section className="section-reveal relative overflow-hidden bg-yellow-400 text-blue-950">
          <div className="noise-layer absolute inset-0 opacity-20" />
          <div className="page-shell relative grid items-end gap-10 lg:grid-cols-[1.4fr_.6fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.27em]">À la une · {featuredNews.dateLabel}</p>
              <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{featuredNews.title}</h2>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-blue-950/75">{featuredNews.excerpt}</p>
              <Link href={`/actualites/${featuredNews.slug}`} className="group mt-7 inline-flex items-center gap-4 bg-blue-950 px-6 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-blue-950">
                Lire l&apos;article <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-reveal overflow-hidden bg-[#08102b] text-white">
        <div className="sport-grid relative px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-300">Écrivez la suite avec nous</p>
          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.065em] sm:text-7xl lg:text-8xl">Prêt à rejoindre <span className="text-yellow-400">l&apos;équipe ?</span></h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-blue-200">Inscriptions, partenariats ou informations : notre équipe est à votre écoute.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/${club.phoneIntl.replace("+", "")}`} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 bg-yellow-400 px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-blue-950 transition hover:bg-white">Nous écrire sur WhatsApp <span className="transition-transform group-hover:translate-x-1">→</span></a>
            <Link href="/contact" className="inline-flex items-center border border-white/30 px-7 py-4 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-white hover:text-blue-950">Tous les contacts</Link>
          </div>
        </div>
      </section>
    </>
  );
}
