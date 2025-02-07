# Exercices

## Préambule

Vous trouverez les corrigés dans les différentes branches du projet 😊

## Prérequis

Vous devez avoir au préalable installé:

- NodeJS
- Un package manager si vous préférez (pnpm ou yarn par exemple)

## Exercice 1: créer son application Vite

### Intitulé de l'exercice

- Initialiser une application React avec Vite avec pour nom "exercices-react" en Typescript
- Etablir une architecture de base:

```
exercices-react
└───public
└───src
│   └───assets       
│   └───components
│   └───context
│   └───pages
│   └───layouts
|   App.css
│   App.tsx
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

[https://vite.dev/guide/](Guide Vite)

## Exercice 2: Installation d'un routeur (Tanstack Router)

### Intitulé

- Initialiser un routeur react
- Faire deux pages "Accueil" et "Compteur react"
- Definir les routes vers les pages en question

Conseil: Pour faire simple, faîtes des routes dites [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing]("file-based") et [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#flat-routes]("flat")

### Ressources

- [https://tanstack.com/router/latest/docs/framework/react/installation](Installation de Tanstack Router)
- [https://tanstack.com/router/latest/docs/framework/react/quick-start](Démarrage rapide)
- [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#configuration-with-vite](Configuration avec Vite)
