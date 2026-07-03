# Hand In Hand Ministry Website

This repository contains the rebrand of the [live Hand In Hand Ministry website](https://www.handinhandministry.online/).

## Project goal

The goal is to rebuild the current website in the new Hand In Hand visual style while preserving its existing information. Use the live website as the source of truth for page content, including copy, ministry details, and other factual information. The content may be reorganized into the new layouts and reusable sections, but it should not be rewritten, removed, or materially changed without approval.

Much of the new visual language and several reusable page sections already exist in this repository. The remaining work is primarily to:

- compare each page with the live website;
- bring over any missing copy and information;
- present that content using the new design system and existing components;
- complete unfinished pages, links, forms, and responsive states; and
- check the finished site for accuracy, accessibility, and consistency.

Before creating new patterns, review [`PRODUCT.md`](./PRODUCT.md), [`DESIGN.md`](./DESIGN.md), and the components in `src/lib/components`. Reuse what is already here whenever it fits.

## Getting started

You will need [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/installation) installed.

1. Clone the repository and enter its folder.

   ```sh
   git clone <repository-url>
   cd hand-in-hand
   ```

2. Install the dependencies.

   ```sh
   pnpm install
   ```

3. Create your local environment file.

   ```sh
   cp .env.example .env
   ```

   For local development, set `DATABASE_URL` in `.env` to `file:local.db`. Leave `DATABASE_AUTH_TOKEN` present; a non-empty placeholder such as `local` is sufficient for a local SQLite database. Set `BETTER_AUTH_SECRET` to a private random value of at least 32 characters. Never commit the `.env` file.

4. Apply the database migrations.

   ```sh
   pnpm db:migrate
   ```

5. Start the development server.

   ```sh
   pnpm dev --open
   ```

   If a browser does not open automatically, visit `http://localhost:5173`.

## How to work on the project

Do not make changes directly on `main`. Create a branch for each piece of work:

```sh
git switch main
git pull
git switch -c your-name/short-description
```

For example: `git switch -c alex/finish-about-page`.

Keep each branch focused on one page or one clearly related task. When the work is ready:

```sh
git add <files-you-changed>
git commit -m "Finish the About page"
git push -u origin your-name/short-description
```

Then open a pull request on GitHub so the changes can be reviewed before they are merged into `main`. If you are unsure about a content or design decision, leave it unchanged and ask rather than guessing.

## Checks before opening a pull request

Run these commands and fix any reported problems:

```sh
pnpm check
pnpm lint
pnpm build
```

Also compare your page with the live website and check it at both desktop and mobile widths. Confirm that the copy is accurate, links and forms work, text is readable, and keyboard focus is visible.

## Useful commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm check` | Check Svelte and TypeScript code |
| `pnpm lint` | Check formatting and lint rules |
| `pnpm format` | Automatically format files |
| `pnpm build` | Create a production build |
| `pnpm db:migrate` | Apply existing database migrations |
| `pnpm db:studio` | Open Drizzle Studio to inspect local data |

## Technology

The site uses SvelteKit, TypeScript, Tailwind CSS, Drizzle ORM, SQLite/Turso, Better Auth, and Vercel.
