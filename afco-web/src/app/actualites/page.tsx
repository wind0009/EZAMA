import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";
import { club, news } from "@/data/content";

export const metadata: Metadata = {
  title: "Actualités",
  description: `Actualités, résultats et nouvelles de ${club.fullName}.`,
};

export default function ActualitesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="page-shell !py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            News
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase md:text-5xl">Actualités</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">
            Résultats, annonces et nouvelles du club AFCO.
          </p>
        </div>
      </section>

      <section className="page-shell">
        <SectionHeading
          title="Toutes les news"
          description="Suivez la première saison de l'AFCO en Ligue 3 régionale."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
