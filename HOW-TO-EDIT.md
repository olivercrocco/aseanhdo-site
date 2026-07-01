# How to edit the AHDO website (browser only)

You do everything in a web browser at github.com. Nothing to install, no Terminal,
no git, no setup on your computer. When you save a change, the live site updates
itself in about a minute.

## The one rule to remember
Every time you save ("Commit changes") on the **main** branch, the live site at
**https://aseanhdo-site.vercel.app** updates by itself within about a minute. That
is what "publishing" means here. You never deploy anything.

---

## One-time
1. Sign in at https://github.com (make a free account if you don't have one, and
   tell Ozzie your username so he can give you edit access).
2. Open the website's code:
   https://github.com/olivercrocco/aseanhdo-site
   (This link keeps working even after we move the site under the AHDO organization.)

## Change some words on a page
1. In the repo, click into the file for the page you want. If you're not sure which
   file, don't guess: ask Ozzie, or ask Claude "which file is the About page text
   in?" Most page wording lives in the `src/content/` folder.
2. Click the **pencil icon** (Edit this file) near the top right of the file.
3. Make your change.
4. Click the green **Commit changes...** button. Leave **"Commit directly to the
   main branch"** selected. Confirm.
5. Wait about a minute, then refresh the live site.

## Add a photo or a PDF report
1. Go to the folder it belongs in: photos go in `public/images/`, report PDFs go in
   `public/reports/`.
2. Click **Add file → Upload files**.
3. Drag your file in.
4. Click **Commit changes** (to the main branch).
5. The file is now uploaded, but it still needs to be *shown* on a page. Ask Ozzie
   or Claude to link it in, or do a text edit that references it.

---

## Two honest cautions
- **Simple text and file uploads are safe and easy.** Anything that looks like
  code (lots of brackets, tags, or punctuation) is easy to break by accident. For
  those, describe what you want to Claude or hand it to Ozzie rather than editing
  the code by hand.
- **You can't permanently break anything.** Every version is saved. If a change
  looks wrong or doesn't appear after a few minutes (usually a small typo in code),
  just edit again, or ask to "undo my last change." Nothing is ever lost.

## When in doubt
Open Claude, describe the change you want in plain English, and ask it to tell you
exactly which file to edit and what to type. It can also make the edit for you.
