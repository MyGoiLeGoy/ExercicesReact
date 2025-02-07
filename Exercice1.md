# Exercice 1: créer son application Vite

## Intitulé de l'exercice

### Initialiser une application React avec Vite avec pour nom "exercices-react" en Typescript

> *Optionnel: si vous ne voulez pas faire tout ça, vous pouvez changer de branche directement vers le corrigé de l'exercice*
> Le but de cet exercice est de vous donner une architecture de base pour vos projets react !

- Retirer ou déplacer quelques fichiers dits "de base":
  - App.css et App.tsx -> Déplacer vers un dossier /src/pages/CompteurReact (toutes vos pages doivent être dans PAGES)
  - Supprimer le index.css
  - Refaire les références aux autres fichiers css
- Etablir une architecture de base:

```
exercices-react
└───public
└───src
│   └─── assets       
│   └─── components
│   └─── context
│   └─── pages
|       └─── accueil.tsx
|       └─── compteurReact.tsx
|       └─── compteur.css
│   └─── layouts
│   index.css
│   main.tsx
|   vite-env.d.ts
.gitignore
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Ressources

[https://vite.dev/guide/](Guide Vite)