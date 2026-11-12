# Portfolio Philip (React + Vite)
Lancer : `npm install` puis `npm run dev`. Build : `npm run build`.

- **Ajouter un projet** : `src/donnees/projets.js` → copier un objet, le coller à la fin. Captures : `public/projets/` puis `images: ['/projets/x.png']`.
- **Textes** : `src/i18n/locales/fr.json` et `en.json` (mêmes clés).
- **Couleurs** : variables dans `src/index.css` (`:root` = clair, `.dark` = sombre).
- **Photo** : `src/composants/sections/APropos.jsx` (placeholder). **Logo** : `public/favicon.svg` + Navbar.
- **Contact** : créez un formulaire sur formspree.io, mettez son id dans `src/config/site.js` (`formspreeId`). WhatsApp/e-mail dans le même fichier.
- **Compétences / chiffres** : `src/donnees/competences.js`, `site.chiffres`.
- **Témoignages** : `afficherTemoignages: true` dans `site.js`.
- **Vercel** : poussez sur GitHub → vercel.com → Import → preset « Vite » → Deploy.
