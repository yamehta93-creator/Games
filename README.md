# Omi — solo water guardian

The current adventure focuses on one human child monk inspired by Omi. The three companions, companion AI, formation controls, species selector, and group upgrade UI have been removed from active play. The earlier versions remain in Git history. Lumen Drift remains at `arcade.html`.

## Current visual scope

The human has revised child proportions, smaller eyes, a modeled nose, eyelids, ears and lips. Water streams use reflective physical materials; the scene uses environment reflections, filmic output, and restrained bloom. Choose **Inspect Omi & preview water** on the title screen for a close view. This is still a procedural browser prototype. It does **not** meet PS4 Spider-Man/FIFA character or environment fidelity. That target needs professionally authored and rigged character models, detailed PBR textures, authored animation, environment assets, and further art/optimization work. No soldier model or other mismatched stock character has been substituted for the child monk.

## Play

- WASD / arrows: move.
- Hold J / Strike: attack nearby enemies.
- E / Water surge: freeze nearby enemies and restore health.
- Space / Dodge: brief invulnerability and fast movement.
- U / Upgrade Omi: improve damage, health, or mastery.
- P / Escape: pause.
- Mobile: virtual stick and on-screen action buttons.

Defeat each chapter's raiders and boss, then walk into the spirit gate at the north end of the path. Three chapters retain your upgrades and end in a final showdown. Enemy counts and boss health have been reduced for solo combat; health and surge healing have been increased. Refreshing or beginning a new journey resets campaign progress.

## Hosting

Netlify/Vercel: build `npm run build`, publish `dist`. GitHub Pages: publish `main` / `docs` (prebuilt output). Your hosting project must be linked to `yamehta93-creator/Games`, production branch `main`, for pushes here to redeploy it. Deployment on your Netlify account cannot be confirmed by this workspace.

A prebuilt ZIP is at [release/legends-of-the-elements-web.zip](https://github.com/yamehta93-creator/Games/raw/refs/heads/main/release/legends-of-the-elements-web.zip). Download, extract, and upload the folder containing `index.html` to your project's manual deployment area if needed. No local developer tools are required.

## Development

Use the existing isolated checkout `/workspace/Games`; do not create a separate worktree unless requested.

```
npm ci
npm run dev
npm test
npm run build
npm run preview
```

With the preview server on port 4173, run `npm run test:adventure` to verify the solo human, water rendering, mobile layout, upgrades and campaign entry using system Chromium. `npm run test:browser` checks the retained arcade game against the dev server on port 5173. Tests use software rendering on this cloud machine and should run sequentially.
