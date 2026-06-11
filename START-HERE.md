# Start here — editing the AHDO website

Welcome! This gets you from zero to making changes on the AHDO website, even if
you've never used GitHub, a terminal, or Claude Code before. Go one step at a
time — you don't need to know any code.

## How this works (the 30-second version)
- The website's files live in a shared online folder on **GitHub** (like a
  Dropbox for a website).
- You make changes using **Claude Code**, an AI assistant on your computer, by
  describing what you want in plain English. It does all the technical bits for you.
- When you save ("publish") your changes, the live site at
  **https://aseanhdo-site.vercel.app** updates by itself within about a minute.

---

## Part 1 — One-time setup (do once, ~20 minutes)

### Step 1 — Accept the GitHub invitation
1. If you don't have a GitHub account, create a free one at
   https://github.com/signup, then tell Ozzie your GitHub username.
2. Ozzie sends you an invite to the project. Open it and click **Accept**.
   (Nothing else will work until you've accepted.)

### Step 2 — Get a Claude subscription
Claude Code needs a paid plan — **Claude Pro** or **Claude Max**. The free version
won't work. Sign up at https://claude.com/pricing.

### Step 3 — Install Claude Code
Open your computer's terminal and paste **one** command.

**On a Mac:** open **Terminal** (press Cmd+Space, type `Terminal`, press Enter),
then paste and press Enter:
```
curl -fsSL https://claude.ai/install.sh | bash
```

**On Windows:** open **PowerShell** (click Start, type `PowerShell`, press Enter),
then paste and press Enter:
```
irm https://claude.ai/install.ps1 | iex
```
It installs everything it needs — you don't have to install anything else first.

### Step 4 — Start Claude Code and sign in
In the same terminal, type `claude` and press Enter. The first time, it opens your
web browser to sign in to Claude — approve it. You stay logged in after that.

### Step 5 — Connect your GitHub account
So your changes can be saved to the shared site, log in to GitHub once. In the
terminal, type:
```
gh auth login
```
Use the arrow keys + Enter to choose: **GitHub.com** → **HTTPS** → **Login with a
web browser**. It shows a short code; press Enter, your browser opens, paste the
code, and approve.

✅ Setup done.

---

## Part 2 — Get the website onto your computer (once)

In the terminal, start Claude Code (type `claude`, Enter), then type this in plain
English:

> Clone the repository https://github.com/olivercrocco/aseanhdo-site into this
> folder, then go into it.

Claude downloads the project. (Do this from a sensible place like your Documents
folder.)

---

## Part 3 — Making a change (every time)

1. **Open the project.** In the terminal:
   ```
   cd aseanhdo-site
   claude
   ```
   (Not sure where it is? Ask Claude: "Where is the aseanhdo-site folder?")

2. **Get the latest first.** Tell Claude:
   > Pull the latest changes before we start.

3. **Describe your change in plain English.** For example:
   > On the About page, change the founder's title to "Founder and Chair".

   > Add a sentence to the homepage about our 2026 conference.

   Claude makes the edit and shows you. Ask it to adjust anything.

4. **Preview it (optional).** Ask Claude:
   > Start the website so I can see it in my browser.

5. **Publish.** When you're happy:
   > Save and publish my changes.

   About a minute later, refresh **https://aseanhdo-site.vercel.app** to see it live.

---

## A few simple habits
- **Start every session** by asking Claude to "pull the latest." **End** by asking
  it to "push my changes." That keeps you and Ozzie in sync.
- **Avoid editing the same page as someone else at the same time.** If Claude ever
  mentions a "conflict," just say "pull the latest and merge it" and it'll sort it out.
- **Stuck on anything?** Describe the problem to Claude Code in plain English — it
  can almost always help, including with setup hiccups.

## Your first-day test
Ask Claude, one at a time:
1. "Show me what files are in this project." (it can see the site)
2. "Make a tiny test edit to the README and publish it." (the full save → publish cycle)
3. Then open https://github.com/olivercrocco/aseanhdo-site — you should see your change. ✅

You're ready to collaborate.
