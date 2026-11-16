# Ilmir Bakirov — portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Lucide, and locally bundled Geist fonts.

## Local development

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` publishes the site on pushes to `master`. It can also be started manually from the Actions tab. It installs locked dependencies, checks TypeScript, builds the static site, and deploys `out/` through the official GitHub Pages actions. No custom secrets are required.

Repository Settings → Pages → Build and deployment → Source must be **GitHub Actions**.

The workflow obtains the site's URL and path from GitHub Pages, so asset URLs and metadata match the deployment. The default project URL is https://bakigoal.github.io/cv/.

To reproduce the Pages build locally:

```sh
BASE_PATH=/cv SITE_URL=https://bakigoal.github.io/cv npm run build
npm run typecheck
```

The generated `out/` directory can also be deployed to another static host. Omit `BASE_PATH` for hosting at the domain root, and set `SITE_URL` to the production URL.

## Source

- `src/data/portfolio.ts`: typed professional content, structured for later localization.
- `src/components/sections.tsx`: server-rendered portfolio sections.
- `src/components/interactions.tsx`: mobile navigation, expandable career history, and clipboard interaction.
- `src/app/globals.css`: responsive visual system and reduced-motion styles.
- `src/app/layout.tsx`: metadata, canonical URL, local fonts, document shell.
- `public/opengraph-image.png`: Open Graph image, served as a PNG on static hosting.

Navigation closes on selection and Escape. Email uses a functional mailto link and an accessible copy button. The earlier-experience expansion and anchor navigation respect reduced-motion preferences.
