# Smart Template — Everything Smart Client Starter

## Stack
- **Framework:** Astro 6 + Tailwind CSS v4
- **Hosting:** Everything Smart VPS (Dokploy + Traefik)
- **Deploy:** Push to GitHub → auto-deploy
- **Container:** nginx (static HTML)

## Templates

### AstroWind (root) — General Business
Professional business site. Config-driven, light/dark mode, blog, services, pricing, contact.
```
src/config.yaml     ← Edit: business name, domain, brand colours
src/navigation.ts   ← Edit: nav links, footer links
public/logo.png     ← Replace: your logo
```

### Tailcast (templates/tailcast/) — Dark Theme / Podcast / Media
Dark-themed podcast/media template. Copy to root for use.
```
cp -r templates/tailcast/* .   # move to root
npm install
npm run build
```

## Deploy
Push to `main` on GitHub. Dokploy auto-deploys from root Dockerfile.

## For a new client
```bash
gh repo create blakethebuilder/<client-name> --private --template blakethebuilder/smart_template
```
Then edit config.yaml, swap logo, push.

## Setup
```bash
npm install
npm run dev     # local dev at localhost:4321
npm run build   # production build → dist/
```
