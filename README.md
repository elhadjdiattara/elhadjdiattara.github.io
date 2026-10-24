# Portfolio — Elhadj Diattara

Portfolio professionnel 
## Identité visuelle

- **Fond blanc, texte bleu marine, un seul bleu vif** (outremer) pour
  les boutons, les liens et le grand bloc de l'accueil.
- **Une seule police, Archivo.** C'est une police "variable".
  Les grands titres sont écrits en version large et très grasse
  (c'est la signature du site), le texte courant en version normale.
  Le fichier est dans `assets/fonts/` et déclaré par `@font-face`
  en haut de `css/base.css`.
- **Une seule animation d'ambiance** : à l'ouverture de l'accueil, le
  nom monte dans le bloc bleu (`css/animations.css`). Le reste ne
  bouge qu'en réponse à un geste (survol, clic).


Toutes les couleurs, tailles et espacements sont dans
`css/variables.css` : pour changer l'apparence, je modifie ce fichier.

## Le texte de présentation (page "À propos")

Il suit la méthode P.R.O.F. du document de méthodologie :
**P**résentation (nom, formation, année), **R**ôle / domaine
d'intérêt, **O**bjectif, **F**orces. En dessous, les points forts (rigueur, autonomie,
discipline, travail d'équipe).

## Structure du projet

```
portfolio/
├── index.html              Accueil (nom en grand + liste des pages)
├── about.html              À propos (présentation P.R.O.F.)
├── skills.html             Compétences
├── certifications.html     Certifications
├── projects.html           Projets
├── parcours.html           Parcours (liste chronologique)
├── contact.html            Contact
│
├── css/
│   ├── variables.css        Couleurs, tailles, espacements (le "design system")
│   ├── reset.css            Neutralise les styles par défaut du navigateur
│   ├── base.css             Police, titres, boutons, étiquettes, mise en page
│   ├── animations.css       La seule animation d'ambiance (nom de l'accueil)
│   ├── components.css       Ce qui est sur TOUTES les pages : en-tête/menu, pied de page
│   └── pages.css            Les styles propres à chaque page (+ leur responsive)
│
├── js/
│   ├── menu.js             Menu (lien actif, fermeture avec Échap, année du pied de page)
│   ├── projects.js         Ouverture/fermeture du détail d'un projet
│   └── contact-form.js     Validation + envoi du formulaire (via Formspree)
│
└── assets/
    ├── cv/          CV_Elhadj_Diattara.pdf
    ├── documents/   Attestation du Bac Pro, version publique (date de naissance et clé masquées)
    ├── fonts/        Archivo (fichier .woff2) + sa licence libre (SIL OFL)
    └── images/       portrait-elhadj.jpg (page À propos)
```

**Chaque page HTML répète l'en-tête et le pied de page (copiés-collés), plutôt que de les charger dynamiquement en JavaScript.**


