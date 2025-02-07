# Exercice 2: Installation d'un routeur (Tanstack Router)

## Intitulé

- Initialiser un routeur react
- Faire deux pages `index.tsx` et `compteur.tsx` à la racine de `Pages` 
- Definir les routes vers les pages en question

Conseil: Pour faire simple, faîtes des routes dites [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing]("file-based") et [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#flat-routes]("flat")

## Idée d'implémentation:
- Installez et configurez le plugin Vite en ajoutant `TanStackRouterVite({ autoCodeSplitting: true }),` dans le tableau `defineConfig.plugins` de `vite.config.ts`
- Ensuite créez vos pages index.tsx et compteur.tsx
- Créez un dossier routes dans src/routes/
- Créez un fichier `__root.tsx`
  ```tsx
  import { createRootRoute, Outlet } from '@tanstack/react-router'
  import { TanStackRouterDevtools } from '@tanstack/router-devtools'

  export const Route = createRootRoute({
    component: () => (
      <>        
        <Outlet />
        <TanStackRouterDevtools />
      </>
    ),
  })```
- Pour chaque page, créez un fichier éponyme dans routes/ et utilisez "createFileRoute"
- Faites un `npm run dev` pour générer le `routeTree.gen.ts`
- Faites vos boutons-liens dans index.tsx et compteur.tsx

## Ressources

- [https://tanstack.com/router/latest/docs/framework/react/installation](Installation de Tanstack Router)
- [https://tanstack.com/router/latest/docs/framework/react/quick-start#manual-setup](Démarrage rapide)
- [https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing#configuration-with-vite](Configuration avec Vite)
