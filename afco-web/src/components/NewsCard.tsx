import Link from "next/link";
import type { NewsArticle } from "@/data/content";

type NewsCardProps = {
  article: NewsArticle;
  index?: number;
};

export default function NewsCard({ article, index = 0 }: NewsCardProps) {
  return (
    <article className="group relative flex min-h-[360px] flex-col overflow-hidden border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-950 hover:shadow-[0_24px_70px_rgba(8,16,43,0.15)]">
      <div className="absolute right-3 top-0 text-[110px] font-black leading-none text-slate-100 transition duration-500 group-hover:-translate-y-2 group-hover:text-yellow-400/20">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative flex items-center justify-between">
        <p className="bg-yellow-400 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-950">
          {article.category}
        </p>
        <time className="text-xs font-semibold text-slate-500" dateTime={article.date}>
          {article.dateLabel}
        </time>
      </div>
      <div className="relative mt-auto pt-20">
        <h3 className="text-2xl font-black leading-[1.05] tracking-[-0.035em] text-blue-950 transition group-hover:text-blue-800">
          {article.title}
        </h3>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {article.excerpt}
        </p>
        <Link
          href={`/actualites/${article.slug}`}
          className="mt-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-blue-950"
        >
          Lire l&apos;article
          <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-950 text-white transition duration-300 group-hover:translate-x-2 group-hover:bg-yellow-400 group-hover:text-blue-950">→</span>
        </Link>
      </div>
    </article>
  );
}
