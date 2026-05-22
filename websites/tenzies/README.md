# Tenzies

A fast-paced React dice game where you hold matching dice, race the timer, and try to beat your best score.

## Run Locally

### 1) Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm (comes with Node.js)

Check installed versions:

```bash
node -v
npm -v
```

### 2) Install dependencies

From this project folder, run:

```bash
npm install
```

### 3) Start the development server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open that URL in your browser.

### 4) Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5) Preview the production build locally

```bash
npm run preview
```

## Useful Scripts

- `npm run dev` - start local dev server with hot reload
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

## Troubleshooting

- If `npm install` fails, delete `node_modules` and `package-lock.json`, then run `npm install` again.
- If the port is already in use, Vite may automatically choose another port and print it in the terminal.
- If commands are not recognized, restart your terminal after installing Node.js.
