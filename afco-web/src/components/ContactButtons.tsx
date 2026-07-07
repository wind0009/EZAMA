import Link from "next/link";
import { club } from "@/data/content";

type ContactButtonsProps = {
  compact?: boolean;
};

export default function ContactButtons({ compact = false }: ContactButtonsProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition";
  const size = compact ? "px-3 py-2 text-xs" : "px-5 py-3 text-sm";

  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-2"}`}>
      <a
        href={`tel:${club.phoneIntl}`}
        className={`${base} ${size} bg-yellow-400 text-blue-950 hover:bg-yellow-300`}
      >
        Appeler
      </a>
      <a
        href={`https://wa.me/${club.phoneIntl.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${size} bg-green-600 text-white hover:bg-green-500`}
      >
        WhatsApp
      </a>
      <a
        href={`mailto:${club.email}`}
        className={`${base} ${size} border border-yellow-400 text-yellow-300 hover:bg-yellow-400/10`}
      >
        Email
      </a>
      {!compact && (
        <Link
          href="/contact"
          className={`${base} ${size} bg-blue-700 text-white hover:bg-blue-600`}
        >
          Page contact
        </Link>
      )}
    </div>
  );
}
