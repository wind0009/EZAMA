import type { Metadata } from "next";
import ContactButtons from "@/components/ContactButtons";
import { club } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${club.fullName} par téléphone, WhatsApp ou email.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="page-shell !py-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            {club.name}
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase md:text-5xl">Contact</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100">
            Une question, une inscription ou un partenariat ? Contactez l&apos;AFCO.
          </p>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-blue-950">Coordonnées</h2>
            <div className="mt-6 space-y-5 text-slate-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                  Club
                </p>
                <p className="mt-1 font-semibold text-blue-950">{club.fullName}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                  Téléphone / WhatsApp
                </p>
                <a
                  href={`tel:${club.phoneIntl}`}
                  className="mt-1 block font-semibold text-blue-900 hover:text-yellow-600"
                >
                  {club.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                  Email
                </p>
                <a
                  href={`mailto:${club.email}`}
                  className="mt-1 block font-semibold text-blue-900 hover:text-yellow-600"
                >
                  {club.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                  Adresse
                </p>
                <p className="mt-1 font-semibold text-blue-950">
                  {club.city}, {club.country}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <ContactButtons />
            </div>
          </div>

          <div className="rounded-2xl bg-blue-950 p-8 text-white">
            <h2 className="text-2xl font-black">Rejoindre l&apos;AFCO</h2>
            <p className="mt-4 leading-relaxed text-blue-100">{club.mission}</p>
            <ul className="mt-6 space-y-3 text-sm text-blue-100">
              <li>Inscriptions jeunes {club.category}</li>
              <li>Informations sur la Ligue 3 régionale</li>
              <li>Partenariats et sponsoring</li>
              <li>Communication avec le club</li>
            </ul>
            <p className="mt-8 text-sm italic text-yellow-300">{club.motto}</p>
          </div>
        </div>
      </section>
    </>
  );
}
