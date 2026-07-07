"use client";

import Link from "next/link";
import { useState } from "react";
import type { MatchResult } from "@/data/content";
import { getMatchOutcome } from "@/data/content";

type MatchCenterProps = {
  matches: MatchResult[];
};

const labels = {
  win: "Victoire",
  draw: "Match nul",
  loss: "Défaite",
};

export default function MatchCenter({ matches }: MatchCenterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = matches[activeIndex];
  const outcome = getMatchOutcome(active);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + matches.length) % matches.length);
  };

  return (
    <div className="grid overflow-hidden border border-white/15 bg-white/5 lg:grid-cols-[1fr_1.2fr]">
      <div className="sport-grid flex flex-col justify-between border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-10">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-yellow-300">Ligue 3 régionale</p>
            <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${outcome === "win" ? "bg-emerald-400 text-emerald-950" : outcome === "draw" ? "bg-yellow-300 text-yellow-950" : "bg-rose-400 text-rose-950"}`}>
              {labels[outcome]}
            </span>
          </div>
          <p className="mt-8 text-sm font-semibold text-blue-200">{active.dateLabel}</p>
          <div className="mt-4 flex items-center gap-5">
            <div>
              <p className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">AFCO</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-300">Domicile</p>
            </div>
            <div className="flex items-center gap-3 text-4xl font-black text-yellow-300 sm:text-6xl">
              <span>{active.scoreHome}</span><span className="text-white/30">:</span><span>{active.scoreAway}</span>
            </div>
            <div>
              <p className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">{active.opponent}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-blue-300">Adversaire</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <button type="button" onClick={() => move(-1)} className="grid h-11 w-11 place-items-center border border-white/25 text-xl transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-blue-950" aria-label="Match précédent">←</button>
          <button type="button" onClick={() => move(1)} className="grid h-11 w-11 place-items-center border border-white/25 text-xl transition hover:border-yellow-300 hover:bg-yellow-300 hover:text-blue-950" aria-label="Match suivant">→</button>
          <span className="ml-2 text-xs font-bold tracking-widest text-blue-300">0{activeIndex + 1} / 0{matches.length}</span>
        </div>
      </div>

      <div className="p-7 lg:p-10">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-blue-200">Derniers matchs</p>
          <Link href="/equipes" className="text-[10px] font-black uppercase tracking-[0.17em] text-yellow-300 hover:text-white">Tout voir →</Link>
        </div>
        <div className="mt-7 space-y-3">
          {matches.map((match, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={`${match.date}-${match.opponent}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`grid w-full grid-cols-[1fr_auto_auto] items-center gap-4 border p-4 text-left transition ${selected ? "border-yellow-300 bg-yellow-300 text-blue-950" : "border-white/10 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"}`}
                aria-pressed={selected}
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-wider">AFCO — {match.opponent}</span>
                  <span className={`mt-1 block text-[10px] ${selected ? "text-blue-800" : "text-blue-300"}`}>{match.dateLabel}</span>
                </span>
                <span className="text-xl font-black">{match.scoreHome} : {match.scoreAway}</span>
                <span className="text-lg">{selected ? "●" : "○"}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
