# Editing the Gaurav Jain site with Claude Code

This guide is for anyone helping edit https://gaurav-jain-site.vercel.app. It takes about 10 minutes to set up.

Here's how it works: you describe a change to Claude Code, check it on your own computer at `localhost`, and when you say **"deploy"**, Claude pushes it to GitHub and the live site updates within about a minute.

## What you need

- **A GitHub account.** Send your GitHub username to the site owner, who will add you as a collaborator.
- **Claude Code.** That's the Code tab in the Claude desktop app, or the `claude` command-line tool. A regular Claude chat can't do this, because it can't run commands on your computer.
- **On your computer:** `git`, `python3` and the GitHub CLI `gh` (https://cli.github.com). macOS already has `git` and `python3`. Claude will tell you if anything is missing.
- **You don't need a Vercel account.** Publishing happens through GitHub.

## Step 1: accept the GitHub invite

The site owner adds you to https://github.com/angrynoodles591/gaurav-jain-site. GitHub sends you an email; accept the invite. You can't publish until you do.

## Step 2: start Claude Code in an empty folder

Make a new folder, for example `Documents/Gaurav Jain Site`, and open Claude Code in it. In the desktop app: Code tab, then pick the folder.

## Step 3: paste this prompt

```
I'm helping edit a client website. Please set it up on my computer:

1. Clone https://github.com/angrynoodles591/gaurav-jain-site into this folder and work from inside it.
2. Read CLAUDE.md first and follow it for everything. Then read README.md and DESIGN.md so you know the design rules and history.
3. Do the first-time setup from CLAUDE.md: check git, python3 and gh; if I'm not signed in to GitHub, start the browser sign-in and let me finish it; set this repo's git name and email to my GitHub no-reply address; and confirm I have write access to the repo.
4. Start the local preview on http://localhost:4321 and show me the site.

From now on, make every change on localhost only and show me the result. Do not commit, push or deploy anything until I explicitly say "deploy". When I do, pull the latest changes, commit, push to main, and confirm the live site at https://gaurav-jain-site.vercel.app shows the change.
```

When GitHub asks you to sign in, finish it in your browser. Claude never needs your password.

## Day to day

1. **Ask for a change**, for example: *"Make the hero headline a little smaller on phones."*
2. **Review it on localhost.** Claude shows you screenshots, and you can open http://localhost:4321 yourself.
3. **Ask for adjustments** until it looks right.
4. **Say "deploy"** to publish. Claude pushes to GitHub, waits for Vercel, and confirms the change is live.

To undo something that's already live, ask Claude to *"revert the last deploy"*. It will undo it with a new commit, so nothing is lost.

## Good to know

- **Two people edit this site.** Claude pulls the latest version before starting and again before deploying, so you won't overwrite each other's work.
- **The design rules are in `CLAUDE.md`:** colours, fonts, the dark/light section rhythm, and no blur, carousels or invented content. Claude follows them automatically. If you want to break one, say so explicitly.
- **If a deploy is blocked:** tell the site owner. They can see why in their Vercel dashboard.
- **Placeholders still waiting on the client:** the book link, the LinkedIn link and the email address. Give Claude the real values when you have them.
