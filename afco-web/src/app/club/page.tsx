import type { Metadata } from "next";
import StaffCard from "@/components/StaffCard";
import SectionHeading from "@/components/SectionHeading";
import { club, staff, values } from "@/data/content";

export const metadata: Metadata = {
  title: "Le Club",
  description: `Histoire, mission et organisation de ${club.fullName}.`,
};

export default function ClubPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="page-shell !py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            {club.name}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black uppercase md:text-5xl">
            Notre histoire
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">
            Fondée en {club.founded} à {club.city}, l&apos;{club.fullName} est née de la
            volonté de promouvoir le football et de développer la jeunesse à travers le
            sport.
          </p>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Depuis sa création, le club s&apos;est engagé à former des jeunes talents
              dans un esprit de discipline, de respect et de fair-play. Notre devise —{" "}
              <strong className="text-blue-900">{club.motto}</strong> — guide chaque jour
              notre action sur et en dehors du terrain.
            </p>
            <p>
              En 2026, l&apos;AFCO franchit une étape majeure avec sa toute première
              participation au championnat de Ligue 3 régionale, confirmant la progression
              d&apos;une académie déterminée à faire briller Ouahigouya.
            </p>
            <p>{club.mission}</p>
          </div>

          <div className="rounded-2xl bg-blue-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">
              En bref
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="font-bold text-yellow-300">Fondation :</span> {club.founded}
              </li>
              <li>
                <span className="font-bold text-yellow-300">Ville :</span> {club.city},{" "}
                {club.country}
              </li>
              <li>
                <span className="font-bold text-yellow-300">Catégorie :</span> {club.category}
              </li>
              <li>
                <span className="font-bold text-yellow-300">Compétition :</span> {club.league}
              </li>
              <li>
                <span className="font-bold text-yellow-300">Devise :</span> {club.motto}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="page-shell !py-0">
          <SectionHeading
            eyebrow="Organisation"
            title="Bureau & encadrement"
            description="Une équipe engagée pour le développement du club et de sa jeunesse."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <StaffCard key={`${member.role}-${member.name}`} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeading eyebrow="Valeurs" title="Ce qui nous guide" />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-blue-950">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
