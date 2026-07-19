# STEP 1: Update vite.config.js 

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or vue(), etc.

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', 
})
```


# STEP 2: Install the gh-pages Package

npm install gh-pages --save-dev


# STEP 3: Add Deployment Scripts to package.json

Add Homepage: At the top level of the JSON object, add the homepage property:

"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


# STEP 4: Push Your Source Code to GitHub


# STEP 5: Run the Deployment Command

npm run deploy










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
