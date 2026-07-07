import type { MatchResult } from "@/data/content";
import { getMatchOutcome } from "@/data/content";

type MatchResultsProps = {
  matches: MatchResult[];
  compact?: boolean;
};

const outcomeStyles = {
  win: "bg-green-100 text-green-800",
  draw: "bg-yellow-100 text-yellow-800",
  loss: "bg-red-100 text-red-800",
};

const outcomeLabels = {
  win: "Victoire",
  draw: "Nul",
  loss: "Défaite",
};

export default function MatchResults({ matches, compact = false }: MatchResultsProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm ${compact ? "" : "p-1"}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-blue-950 text-yellow-300">
            <tr>
              <th className="px-4 py-3 font-bold">Date</th>
              <th className="px-4 py-3 font-bold">Match</th>
              <th className="px-4 py-3 font-bold">Score</th>
              {!compact && <th className="px-4 py-3 font-bold">Issue</th>}
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => {
              const outcome = getMatchOutcome(match);
              return (
                <tr key={`${match.date}-${match.opponent}`} className="border-t border-slate-100">
                  <td className="px-4 py-3 text-slate-600">{match.dateLabel}</td>
                  <td className="px-4 py-3 font-semibold text-blue-950">
                    AFCO vs {match.opponent}
                  </td>
                  <td className="px-4 py-3 font-black text-blue-900">
                    {match.scoreHome} - {match.scoreAway}
                  </td>
                  {!compact && (
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${outcomeStyles[outcome]}`}
                      >
                        {outcomeLabels[outcome]}
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
