# How to edit the AHDO website with Claude

Everything here is plain English that you type into Claude Code. You never write
code, deploy anything, or touch Vercel.

## The one rule to remember
The site is already live and publishes itself. Whenever Claude pushes your change
to the `main` branch, the live site at **https://aseanhdo-site.vercel.app** updates
by itself in about a minute. You do not deploy anything.

If Claude ever offers to "deploy," run `vercel`, "create a branch," or "open a pull
request," say: **"No, just push to main."** That keeps you on the simple path.

---

## 1. Start of every session (paste this once)

> I'm a collaborator on this Next.js website. It's already live on Vercel and it
> auto-publishes whenever we push to the `main` branch. So never deploy anything
> yourself, never use the Vercel CLI, and never create branches or pull requests:
> always work directly on `main`. To start: switch me to `main`, pull the latest,
> and tell me when we're ready.

## 2. Making a change

Describe what you want and tell it to publish, all in one message:

> Pull the latest first. Then [describe the change]. When it's done, commit it and
> push to `main` so it goes live.

Examples you can copy the shape of:

> Pull the latest first. Then on the About page, change the founder's title to
> "Founder and Chair." Commit and push to `main`.

> Pull the latest first. Then add a sentence to the homepage announcing our 2026
> conference. Commit and push to `main`.

> Pull the latest first. Then replace the photo at the top of the Contact page with
> the one I just dropped in the folder. Commit and push to `main`.

## 3. If you want to see a change before it goes live

Split it into two messages. First:

> Pull the latest, then [describe the change]. Show me what you changed but don't
> publish yet.

Then once you're happy:

> Looks good, commit and push it to `main`.

---

## Good habits
- **Start** each session by pulling the latest (the message in section 1 does this).
- **End** by making sure your change is pushed. If unsure, ask Claude: "Is my
  change pushed to `main`?"
- **Avoid editing the same page as someone else at the same time.** If Claude ever
  mentions a "conflict," say: "Pull the latest and merge it," and it will sort it out.

Stuck on anything? Describe the problem to Claude Code in plain English. It can
almost always help.
