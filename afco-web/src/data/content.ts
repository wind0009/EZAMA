export const club = {
  name: "AFCO",
  fullName: "Académie Football Club de Ouahigouya",
  motto: "La Jeunesse Vivante",
  founded: 2018,
  city: "Ouahigouya",
  country: "Burkina Faso",
  mission:
    "L'AFCO est un club engagé pour le développement de la jeunesse à travers le sport. Nous formons et inspirons les talents de demain.",
  category: "U15+",
  league: "Ligue 3 — Championnat régional",
  phone: "56 07 29 82",
  phoneIntl: "+22656072982",
  email: "afcouahigouya@gmail.com",
};

export const staff = [
  { role: "Président", name: "Walid Mira" },
  { role: "Entraîneur", name: "Kodjo Marcel Kowou" },
  { role: "Secrétaire général", name: "Boureima Ouédraogo" },
  { role: "Trésorier", name: "Salam Ouédraogo" },
  { role: "Encadrement", name: "Yssouf Koyba" },
  { role: "Management & communication", name: "Cheik Boune" },
  { role: "Management & communication", name: "Aof Ouédraogo" },
];

export const values = [
  {
    title: "Formation",
    description:
      "Développer les compétences techniques et humaines de chaque joueur.",
  },
  {
    title: "Discipline",
    description: "Respect, assiduité et esprit d'équipe au quotidien.",
  },
  {
    title: "Communauté",
    description: "Un club ancré à Ouahigouya, ouvert aux jeunes motivés.",
  },
];

export type MatchResult = {
  date: string;
  dateLabel: string;
  opponent: string;
  scoreHome: number;
  scoreAway: number;
  isHome: boolean;
};

export const matches: MatchResult[] = [
  {
    date: "2026-05-10",
    dateLabel: "10 mai 2026",
    opponent: "ASPAC",
    scoreHome: 1,
    scoreAway: 0,
    isHome: true,
  },
  {
    date: "2026-05-02",
    dateLabel: "2 mai 2026",
    opponent: "ASPAC",
    scoreHome: 0,
    scoreAway: 3,
    isHome: true,
  },
  {
    date: "2026-04-18",
    dateLabel: "18 avril 2026",
    opponent: "COR",
    scoreHome: 1,
    scoreAway: 1,
    isHome: true,
  },
];

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
};

export const news: NewsArticle[] = [
  {
    slug: "premiere-participation-ligue-3",
    title: "L'AFCO dispute sa première saison en Ligue 3 régionale",
    date: "2026-04-18",
    dateLabel: "18 avril 2026",
    category: "Actualité",
    featured: true,
    excerpt:
      "L'Académie Football Club de Ouahigouya entre dans une nouvelle étape de son histoire avec sa toute première participation au championnat de Ligue 3 de la région.",
    content: [
      "L'Académie Football Club de Ouahigouya entre dans une nouvelle étape de son histoire : sa toute première participation au championnat de Ligue 3 de la région.",
      "Cette montée en compétition officielle récompense le travail de l'académie, de l'encadrement et des jeunes joueurs. Pour l'AFCO, cette saison est autant une aventure sportive qu'une occasion de faire briller Ouahigouya sur la scène régionale.",
      "Jeunesse Vivante — nous formons et inspirons les talents de demain.",
    ],
  },
  {
    slug: "afco-1-0-aspac",
    title: "AFCO 1 - 0 ASPAC",
    date: "2026-05-10",
    dateLabel: "10 mai 2026",
    category: "Résultat",
    excerpt:
      "Revanche réussie ! L'AFCO s'impose 1-0 contre ASPAC en Ligue 3 régionale.",
    content: [
      "Revanche réussie ! L'AFCO s'impose 1-0 contre ASPAC et remporte une victoire importante en Ligue 3 régionale.",
      "Félicitations aux joueurs et à l'encadrement pour cette performance collective.",
    ],
  },
  {
    slug: "afco-0-3-aspac",
    title: "AFCO 0 - 3 ASPAC",
    date: "2026-05-02",
    dateLabel: "2 mai 2026",
    category: "Résultat",
    excerpt:
      "L'AFCO s'incline 0-3 face à ASPAC mais continue de progresser.",
    content: [
      "L'AFCO s'incline 0-3 face à ASPAC. Malgré le score, l'équipe continue d'apprendre et de progresser dans ce championnat exigeant.",
      "Chaque match est une occasion de grandir et de renforcer la cohésion du groupe.",
    ],
  },
  {
    slug: "afco-1-1-cor",
    title: "AFCO 1 - 1 COR",
    date: "2026-04-18",
    dateLabel: "18 avril 2026",
    category: "Résultat",
    excerpt:
      "Pour son premier match en Ligue 3, l'AFCO accroche le nul 1-1 face à COR.",
    content: [
      "Pour son premier match en Ligue 3 régionale, l'AFCO accroche le nul 1-1 face à COR.",
      "Un résultat encourageant qui marque le début de cette première saison historique pour le club.",
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/club", label: "Le Club" },
  { href: "/equipes", label: "Équipes" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export function getMatchOutcome(match: MatchResult): "win" | "draw" | "loss" {
  if (match.scoreHome > match.scoreAway) return "win";
  if (match.scoreHome < match.scoreAway) return "loss";
  return "draw";
}

export function getSeasonRecord() {
  return matches.reduce(
    (acc, match) => {
      const outcome = getMatchOutcome(match);
      if (outcome === "win") acc.wins += 1;
      if (outcome === "draw") acc.draws += 1;
      if (outcome === "loss") acc.losses += 1;
      acc.goalsFor += match.scoreHome;
      acc.goalsAgainst += match.scoreAway;
      return acc;
    },
    { wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 },
  );
}

export function getNewsBySlug(slug: string) {
  return news.find((article) => article.slug === slug);
}
