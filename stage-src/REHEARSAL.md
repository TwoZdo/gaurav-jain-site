# Framework stage: source and rehearsal notes

The animated phone in the "three questions" section. The built files are in `assets/stage/` (`framework-stage.js` and `stageshow.css`) and load from `index.html` into `#framework-stage`.

## Source

These files are copies; the working copy lives in the stageshow skill at
`~/.claude/skills/stageshow/examples/money-marketed/`, because it imports that skill's React kit (`../../kit`).
To rebuild: edit there, then run `npx vite build` from the skill folder with a library config whose entry is `mount.tsx` and whose output is `assets/stage/`.

## Story (about 15 seconds, looping)

1. **The market:** a savings app lists competing offers, and a note names them.
2. **The product:** a tap opens High-Yield Savings into its detail view, and the note moves to the rate.
3. **The customer:** a tap on "Open account" shows "Opening", then "Account opened", and the note lands on the decision.
4. A tap on close folds the card back into the list, and the notes clear.

The poster frame (what you see with reduced motion turned on, and in screenshots) is the finished state: the account is open and the customer note is active.

- **Started from:** the `phone-touch` example (a card that opens into its screen). Leaders and notes follow `references/annotations.md`.
- **Checked:** the film gate passed at the shown width (760) and at 390 wide, after fixes for leader jumps, a clipped title, the label layout, framing and an empty band.
- **Not checked:** dark mode (the site has none) and a fresh outside review (`references/review.md`).
- **Demo data:** "4.10% APY" and the account names are illustrative, not a real product. Swap them if a real example is preferred.
