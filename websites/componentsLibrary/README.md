# Components Library

Small React + Vite project for building and experimenting with UI components.

## Quick Start

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Run Locally

### 1. Prerequisites

- Node.js 20+ (LTS recommended)
- npm (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

### 2. Install dependencies

From this folder (`websites/componentsLibrary`), run:

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

## Available Scripts

- `npm run dev`: Start local development server with hot reload.
- `npm run build`: Create an optimized production build in `dist/`.
- `npm run preview`: Serve the production build locally for testing.
- `npm run lint`: Run ESLint checks.

## Local Production Preview

To verify the production bundle on your machine:

```bash
npm run build
npm run preview
```

## Troubleshooting

- If dependencies fail to install, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If the dev server port is busy, Vite will suggest another port automatically.
- If `npm` is not recognized, reinstall Node.js from the official site and restart your terminal.
