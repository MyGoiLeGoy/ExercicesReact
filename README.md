
# Exercice 3: Installation d'un store (Tanstack Store)

## Intitulé

Nous allons implémenter un exemple simplifié du Quick Start de Tanstack.
J'en ai profité pour vous préparer les pages afin que vous puissiez vous concentrer sur l'implémentation du Store.

L'idée est d'installer un **compteur de petits chats** 😺 dans un magasin de chats.

L'accueil est ainsi devenu une devanture de magasin, le compteur est devenu votre terminal pour commander plus de chats

Pour que votre terminal puisse fonctionner, vous devez :

- Implémenter **un store** qui va garder en mémoire le nombre de chats présents dans la boutique
- Implémenter une **fonction d'incrémentation** du compteur de chats

Et pour que votre devanture de magasin affiche combien de chats vous avez en stock, vous devez:

- Récupérer le nombre de chats en stock
- Afficher ce nombre sur la page d'accueil.

## Idée d'implémentation

- Installer tanstack store `npm install @tanstack/react-store`
- Créer un fichier `catStore.ts`
- Implémenter une interface `<CatState>` avec pour seul attribut le `count` qui va stocker le nombre de chats
- Implémenter le store avec `export const catStore = new Store<CatState>()` et qui va initialiser le compte à 0.
- Implémenter dans un `catStoreActions`, une fonction `addCat()`
- Lier le compteur de `index.tsx` au `count` de `catStore`
- Lier le compteur de `compteur.tsx` au `count` de `catStore`
- Lier le bouton de `compteur.tsx` à la fonction `addCat()`

## Quand vous aurez fini

- Incrémentez le nombre de chats à 10
- Naviguez à l'accueil
- Et ta-da ! Voyez ici l'intérêt d'un store: c'est le partage global d'un state !

> Sans store, vous auriez dû, traditionnellement, passer en prop le nombre de chats et gérer les manipulations du state manuellement !

## NOTE: Pour les plus curieux qui auront fait F5

Oui, le compte des petits chats est perdu si vous ne le sauvegardez pas en DB 😘
Non, vous n'avez rien fait de mal car **le store n'a pas pour vocation à remplacer la persistence des données**.
