# Editing the AHDO website by chatting with Claude

You change the website by describing what you want, in plain English, to Claude in
your web browser. Nothing to install. No Terminal. When you approve a change, the
live site updates itself a few minutes later.

---

## First time only (about 5 minutes)

1. Go to **https://claude.ai/code** and sign in with your Claude account (the one
   with your Pro plan).
2. It asks to connect GitHub. Click to connect. When GitHub opens, choose your
   account (**BobAubrey**) and click **Authorize / Install**.
3. When it asks which repositories, choose **"Only select repositories,"** tick
   **aseanhdo-site**, and click **Install**. (Choosing "All repositories" also works.)
4. If it offers to "Create an environment," just accept the defaults and click
   **Create**. You don't need to change anything.

That is the whole setup. You won't do it again.

---

## Making a change (every time)

1. Go to **https://claude.ai/code**.
2. Choose the project **aseanhdo/aseanhdo-site**. Leave the branch as **main**.
3. Type what you want, in plain English. For example:
   - "On the About page, change the director's title to Chair."
   - "Add a sentence to the homepage about our 2026 conference."
4. Press **Enter**. Claude does the work and shows you exactly what it changed. You
   can ask it to adjust anything, just like a conversation.

## Publishing it (the one button that matters)

When you're happy with the change:

1. Click **Create PR**, then **Open as a full PR**. (A "PR" is just a saved change
   waiting to go live. It doesn't touch the live site yet.)
2. Claude creates it on GitHub and gives you a link. Open the link, click the green
   **Merge pull request** button, then **Confirm merge**.
3. That's it. A few minutes later, refresh **https://aseanhdo-site.vercel.app** and
   your change is live.

That green Merge button is the "publish" step. Until you click it, the live site
doesn't change, so you can always take your time reviewing first.

---

## A few things to know

- **You can't break anything permanently.** Every version is saved. If something
  looks off, just chat another change or ask Claude to undo the last one.
- **Your session sticks around.** If you close the tab, come back to claude.ai/code
  any time and it's still there.
- **Adding a photo or a PDF report:** the simplest way is on GitHub itself. Open the
  folder (photos go in `public/images`, reports in `public/reports`), click
  **Add file → Upload files**, drag it in, and commit. Then ask Claude to show it on
  the right page.
- **Stuck on anything?** Describe the problem to Claude in plain English. It can walk
  you through it, including the setup steps above.
