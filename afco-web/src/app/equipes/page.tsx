import type { Metadata } from "next";
import Image from "next/image";
import MatchResults from "@/components/MatchResults";
import SectionHeading from "@/components/SectionHeading";
import { club, getSeasonRecord, matches } from "@/data/content";

export const metadata: Metadata = {
  title: "Équipes",
  description: `Équipe ${club.category} de l'AFCO évoluant en ${club.league}.`,
};

export default function EquipesPage() {
  const record = getSeasonRecord();

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="page-shell !py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            Compétition
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase md:text-5xl">Nos équipes</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">
            L&apos;AFCO accueille les jeunes à partir de la catégorie {club.category}. Notre
            équipe évolue actuellement en {club.league}.
          </p>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/team-hero.jpg"
              alt="Photo officielle de l'équipe AFCO"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/team-field.jpg"
              alt="Équipe AFCO à l'entraînement"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="page-shell !py-0">
          <SectionHeading
            eyebrow="Saison 2026"
            title="Résultats Ligue 3"
            description="Première participation de l'AFCO au championnat régional."
          />
          <div className="mb-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-2xl bg-green-100 p-5 text-center">
              <p className="text-3xl font-black text-green-800">{record.wins}</p>
              <p className="text-sm font-bold text-green-700">Victoires</p>
            </div>
            <div className="rounded-2xl bg-yellow-100 p-5 text-center">
              <p className="text-3xl font-black text-yellow-800">{record.draws}</p>
              <p className="text-sm font-bold text-yellow-700">Nuls</p>
            </div>
            <div className="rounded-2xl bg-red-100 p-5 text-center">
              <p className="text-3xl font-black text-red-800">{record.losses}</p>
              <p className="text-sm font-bold text-red-700">Défaites</p>
            </div>
            <div className="rounded-2xl bg-blue-100 p-5 text-center">
              <p className="text-3xl font-black text-blue-900">
                {record.goalsFor}:{record.goalsAgainst}
              </p>
              <p className="text-sm font-bold text-blue-800">Buts pour:contre</p>
            </div>
          </div>
          <MatchResults matches={matches} />
        </div>
      </section>

      <section className="page-shell">
        <div className="rounded-2xl bg-blue-950 p-8 text-white">
          <h2 className="text-2xl font-black uppercase">Objectif de la saison</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-blue-100">
            Nous préparons nos joueurs avec rigueur et ambition, dans l&apos;objectif de
            progresser sportivement tout en restant fidèles à notre mission : former et
            inspirer les talents de demain.
          </p>
        </div>
      </section>
    </>
  );
}
