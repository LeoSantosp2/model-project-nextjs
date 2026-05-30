# Model Project Next.js

A minimal and opinionated Next.js starter template configured with TypeScript,
ESLint, and Prettier.

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) 9 with the flat config format
- [Prettier](https://prettier.io/)

## Requirements

- Node.js 20.9 or later
- npm

## Getting Started

Create a new project from this template:

```bash
npx create-next-app . --example https://github.com/LeoSantosp2/model-project-nextjs
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after running `npm run build`.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
.
|-- public/              # Static assets
|-- src/
|   `-- app/             # Next.js App Router files
|       |-- layout.tsx   # Root layout
|       `-- page.tsx     # Home page
|-- eslint.config.mjs    # ESLint flat configuration
|-- next.config.js       # Next.js configuration
|-- package.json         # Scripts and dependencies
|-- tsconfig.json        # TypeScript configuration
`-- .prettierrc.js       # Prettier configuration
```

## Code Quality

This template uses ESLint and Prettier together:

- ESLint is configured with `eslint-config-next`, TypeScript support, and Core
  Web Vitals rules.
- Prettier is configured for consistent formatting.
- `eslint-plugin-prettier` reports formatting issues through ESLint.
- `eslint-config-prettier` disables ESLint rules that conflict with Prettier.

For the best editor experience, enable format on save with the Prettier
extension.

Example VS Code settings:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## TypeScript

TypeScript is configured in strict mode and uses:

```json
{
  "moduleResolution": "bundler"
}
```

This module resolution strategy matches modern Next.js projects and avoids the
deprecated `node` resolution mode.

## Path Aliases

The project includes the following import alias:

```ts
import Component from '@/components/Component';
```

The `@/*` alias points to `./src/*`.

## Deployment

The easiest way to deploy this project is with
[Vercel](https://vercel.com/new), the platform created by the Next.js team.

You can also deploy the production build to any platform that supports Node.js.
