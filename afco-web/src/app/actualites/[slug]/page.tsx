import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { club, getNewsBySlug, news } from "@/data/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="page-shell !py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            {article.category} · {article.dateLabel}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="page-shell">
        <article className="mx-auto max-w-3xl">
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-slate-200 pt-8">
            <Link
              href="/actualites"
              className="rounded-lg bg-blue-900 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"
            >
              ← Retour aux actualités
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-blue-900 px-5 py-3 text-sm font-bold text-blue-900 hover:bg-blue-50"
            >
              Contacter {club.name}
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
