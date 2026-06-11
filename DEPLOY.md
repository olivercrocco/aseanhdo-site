# Deploying the AHDO site (preview for Bob)

The site is a static Next.js 16 app. It's ready to deploy; the only step I can't
do for you is logging into the host.

## Recommended: Vercel (private preview)

From this folder (`aseanhdo-site/`):

```bash
# 1. One-time: install the CLI and log in (browser opens; sign in with GitHub/email)
npm i -g vercel
vercel login

# 2. Deploy a preview build and get a shareable URL
vercel
```

`vercel` prints a URL like `https://aseanhdo-site-xxxx.vercel.app` — that's the
link to send Bob. Re-run `vercel` after any change to redeploy, or `vercel --prod`
to promote it to the project's main URL.

## Keep it private until launch

This preview is already set to **not be indexed** by search engines:
- `robots: { index: false, follow: false }` in `src/app/layout.tsx`
- `public/robots.txt` disallows all crawlers

For a stronger gate (so only people with the password can view), turn on
**Deployment Protection → Password** (or Vercel Authentication) in the Vercel
project settings after the first deploy. Then share the link + password with Bob.

**Before going public:** remove the `robots` line in `layout.tsx`, delete/replace
`public/robots.txt`, and (optionally) flip `images.unoptimized` off in
`next.config.ts` so Vercel optimises the images.

## Images

All photos are served locally from `public/images/` (no dependency on the old
aseanhdo.com CDN). They were the organisation's own photos from the legacy site.

## Alternatives

- **Netlify / Cloudflare Pages** — same idea; connect the repo or drag the build.
- **Static export** — for a host without a Node runtime, add `output: "export"`
  to `next.config.ts` and run `npm run build`; serve the `out/` folder.
