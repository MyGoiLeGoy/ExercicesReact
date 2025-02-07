# Exercices

## Préambule

Vous trouverez les corrigés dans les différentes branches du projet 😊

## Prérequis

Vous devez avoir au préalable installé:

- NodeJS
- Un package manager si vous préférez (pnpm ou yarn par exemple)

## Exercice 1: créer son application Vite

### Intitulé de l'exercice

**Initialiser une application React avec Vite avec pour nom "exercices-react" en Typescript**

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

### Ressources

[Guide Vite](https://vite.dev/guide/)

## Exercice 2: Installation d'un routeur (Tanstack Router)

### Intitulé

- Initialiser un routeur react
- Faire deux pages "Accueil" et "Compteur react"
- Definir les routes vers les pages en question

Conseil: Pour faire simple, faîtes des routes dites "[file-based](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing)" et "[flat](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#flat-routes)"

### Ressources

- [Installation de Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/installation)
- [Démarrage rapide](https://tanstack.com/router/latest/docs/framework/react/quick-start)
- [Configuration avec Vite](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#configuration-with-vite)
