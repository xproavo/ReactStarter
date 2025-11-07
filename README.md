# React Boilerplate

Un boilerplate pour démarrer rapidement des projets **React + TypeScript + Vite + TailwindCSS**.

---

## Stack technique

- **[React 19](https://react.dev/)** – bibliothèque front-end moderne
- **[Vite](https://vitejs.dev/)** – build ultra rapide et DX fluide
- **[TypeScript](https://www.typescriptlang.org/)** – typage statique pour un code plus sûr
- **[TailwindCSS 4](https://tailwindcss.com/)** – design system utilitaire
- **[ESLint](https://eslint.org/)** + **TypeScript ESLint** – qualité et cohérence du code
- **[React Router DOM](https://reactrouter.com/)** – gestion de la navigation

---

## Installation

```bash
git clone https://github.com/tonpseudo/react-boilerplate.git
cd react-boilerplate
npm install
```

## Commandes disponibles


|Commande  |Description  |
|---------|---------|
|``npm run dev``     | Démarre le serveur de développement |
|``npm run devhost`` |  Démarre le serveur de développement en mode host (disponoble en réseau local) |
|``npm run build``   | Compile le projet pour la production |
|``npm run preview`` | Lance un serveur local de prévisualisation  |
|``npm run lint``    | Analyse le code avec ESLint |


## Structure du projet

```python 
├── src/
│   ├── assets/          # Images, polices, etc.
│   ├── components/      # Composants réutilisables
│   ├── hooks/           # Custom hooks React
│   ├── pages/           # Pages principales (routes)
│   ├── routes/          # Configuration de React Router
│   ├── utils/           # Fonctions utilitaires
│   ├── App.tsx          # Entrée principale de l’app
│   └── main.tsx         # Point d’entrée du bundle
│
├── public/              # Fichiers statiques
├── tailwind.config.js   # Config TailwindCSS
├── tsconfig.json        # Config TypeScript
├── vite.config.ts       # Config Vite
└── package.json
```

> Mise à jour : xproavo - 08/11/25
