# AFCO — Site web officiel

Site vitrine de l'**Académie Football Club de Ouahigouya** (AFCO).

## Pages

- **Accueil** — Hero, mission, actualités, résultats
- **Le Club** — Histoire, bureau, valeurs
- **Équipes** — U15+, Ligue 3, résultats
- **Actualités** — Articles et résultats de matchs
- **Contact** — Téléphone, WhatsApp, email

## Démarrage

```bash
cd afco-web
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Remplacer les images

Placez vos fichiers dans `public/images/` :

| Fichier | Usage |
|---------|--------|
| `logo.png` ou `logo.svg` | Logo circulaire AFCO |
| `team-hero.jpg` | Photo équipe (hero accueil) |
| `team-field.jpg` | Photo équipe (page club/équipes) |

Puis mettez à jour les chemins dans les pages si vous utilisez `.jpg` au lieu de `.svg`.

## Mise en ligne

```bash
npm run build
```

Déployable gratuitement sur [Vercel](https://vercel.com) ou [Netlify](https://netlify.com).

## Contacts AFCO

- Téléphone : 56 07 29 82
- Email : afcouahigouya@gmail.com
