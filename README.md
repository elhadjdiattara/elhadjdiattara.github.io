# Portfolio — Elhadj Diattara

Portfolio professionnel réalisé en **HTML5 / CSS3 / JavaScript pur**
(aucune librairie, aucun framework, aucune étape de build).

## Comment l'ouvrir

Aucune installation nécessaire : double-clique simplement sur
`index.html`, il s'ouvrira dans ton navigateur. Le site fonctionne
sans connexion internet (la police est dans le dossier).

(Astuce : pour un rendu identique à un vrai site en ligne, tu peux
aussi ouvrir le dossier avec l'extension "Live Server" de VS Code.)

## Identité visuelle

- **Fond blanc, texte bleu marine, un seul bleu vif** (outremer) pour
  les boutons, les liens et le grand bloc de l'accueil. Pas de
  dégradé, pas d'ombre, pas de "cartes" : la hiérarchie vient de la
  taille et de la graisse du texte, et de traits fins.
- **Une seule police, Archivo.** C'est une police "variable" : on
  règle sa graisse (`font-weight`) et sa largeur (`font-stretch`).
  Les grands titres sont écrits en version large et très grasse
  (c'est la signature du site), le texte courant en version normale.
  Le fichier est dans `assets/fonts/` et déclaré par `@font-face`
  en haut de `css/base.css`.
- **Une seule animation d'ambiance** : à l'ouverture de l'accueil, le
  nom monte dans le bloc bleu (`css/animations.css`). Le reste ne
  bouge qu'en réponse à un geste (survol, clic).
- Pas de niveaux ni de jauges sur la page des compétences : une jauge
  en pourcentage est difficile à justifier objectivement ("pourquoi
  72 % et pas 68 % ?"). Chaque compétence est décrite par une phrase
  sur ce qu'elle permet de faire.

Toutes les couleurs, tailles et espacements sont dans
`css/variables.css` : pour changer l'apparence, on modifie ce fichier.

## Le texte de présentation (page "À propos")

Il suit la méthode P.R.O.F. du document de méthodologie :
**P**résentation (nom, formation, année), **R**ôle / domaine
d'intérêt, **O**bjectif, **F**orces. Il fait 6 lignes et se lit en
15 secondes. En dessous, les points forts (rigueur, autonomie,
discipline, travail d'équipe) viennent de ton CV.

## Structure du projet

```
portfolio/
├── index.html              Accueil (nom en grand + liste des pages)
├── about.html               À propos (présentation P.R.O.F.)
├── skills.html                Compétences
├── certifications.html          Certifications
├── projects.html                 Projets
├── parcours.html                  Parcours (liste chronologique)
├── contact.html                    Contact
│
├── css/
│   ├── variables.css        Couleurs, tailles, espacements (le "design system")
│   ├── reset.css              Neutralise les styles par défaut du navigateur
│   ├── base.css                 Police, titres, boutons, étiquettes, mise en page
│   ├── animations.css            La seule animation d'ambiance (nom de l'accueil)
│   ├── components.css              Ce qui est sur TOUTES les pages : en-tête/menu, pied de page
│   └── pages.css                     Les styles propres à chaque page (+ leur responsive)
│
├── js/
│   ├── menu.js             Menu (lien actif, fermeture avec Échap, année du pied de page)
│   ├── projects.js              Ouverture/fermeture du détail d'un projet
│   └── contact-form.js            Validation + envoi du formulaire (via Formspree)
│
└── assets/
    ├── cv/          CV_Elhadj_Diattara.pdf
    ├── documents/     Attestation du Bac Pro, version publique (date de naissance et clé masquées)
    ├── fonts/           Archivo (fichier .woff2) + sa licence libre (SIL OFL)
    └── images/            portrait-elhadj.jpg (page À propos)
```

**Pourquoi plusieurs pages plutôt qu'une seule ?** Chaque page HTML
répète l'en-tête et le pied de page (copiés-collés), plutôt que de
les charger dynamiquement en JavaScript. C'est un choix volontaire :
cela fonctionne parfaitement même en ouvrant les fichiers en
double-clic (sans serveur), alors qu'une solution "dynamique" aurait
pu être bloquée par le navigateur pour des raisons de sécurité
(CORS).

**Pourquoi un menu en `<details>` plutôt qu'un menu "hamburger" fait
main ?** `<details>`/`<summary>` est un élément HTML natif, accessible
par défaut (clavier, lecteurs d'écran) : il s'ouvre et se ferme sans
JavaScript et fonctionne à l'identique sur grand écran et sur mobile.
L'icône à trois barres est dessinée en CSS (`.menu__bars`) et devient
une croix quand le menu est ouvert.

**Pourquoi la police est-elle dans le dossier plutôt que chargée
depuis Google Fonts ?** Pour que le site s'affiche exactement pareil
partout, même sans internet (par exemple en salle de soutenance).

## Avant de mettre le site en ligne, pense à :

1. **Tester le formulaire de contact une fois le site en ligne** : envoie-toi
   un message de test et vérifie qu'il arrive bien dans ta boîte mail (pense
   à regarder les courriers indésirables). Le site étant 100 % statique, sans
   serveur, c'est [Formspree](https://formspree.io) qui reçoit le message et
   te le transmet par email : l'adresse de ton formulaire est en haut de
   `js/contact-form.js` (`FORM_ENDPOINT`).
2. **Relire les faits de la page "À propos"** (formation, objectif,
   forces) : ils viennent de ton CV, mais c'est toi qui les défends
   à l'oral.

## Mettre le site en ligne gratuitement

Comme il s'agit d'un site 100 % statique, tu peux le déposer
gratuitement sur **GitHub Pages**, **Netlify** ou **Vercel** en
quelques minutes (glisser-déposer le dossier suffit sur Netlify).
