import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <p className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] ${light ? "text-yellow-300" : "text-yellow-600"}`}>
            <span className="h-px w-9 bg-current" />
            {eyebrow}
          </p>
        )}
        <h2 className={`mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.045em] md:text-6xl ${light ? "text-white" : "text-blue-950"}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-5 max-w-2xl text-base leading-relaxed ${light ? "text-blue-100" : "text-slate-600"}`}>
            {description}
          </p>
        )}
      </div>
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className={`group inline-flex shrink-0 items-center gap-4 border-b pb-2 text-xs font-black uppercase tracking-[0.15em] transition ${light ? "border-yellow-300 text-yellow-300 hover:border-white hover:text-white" : "border-blue-950 text-blue-950 hover:border-yellow-500 hover:text-yellow-600"}`}
        >
          {actionLabel}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}
