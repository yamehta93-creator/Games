# Lumen Drift

An original neon survival arcade game built with React, TypeScript, and HTML Canvas. The supplied Claude artifact could not be inspected because the environment proxy returned HTTP 403; this game is an original design.

## Play

Collect mint crystals, avoid pink hazards, and survive with three lives. Pick up crystals within three seconds of one another to grow your score multiplier to 5×. Every 500 points advances a sector, up to sector 12; hazards get faster and more frequent. Dash gives a brief burst of speed and immunity, with a 2.6-second cooldown. Best scores are saved in your current browser when storage is available.

- Desktop: WASD or arrow keys to move; Space to dash; P or Esc to pause.
- Mobile: hold and drag anywhere inside the arena to steer; tap DASH with your other finger to escape.
- Use the sound button to mute synthesized effects. Sound begins after starting a run.
- The game pauses when the browser loses focus. Resume using the on-screen button.
- After losing three lives, choose **Drift again**.

## Get a public link without installing developer tools

### Fastest: Netlify Drop

1. Download the prepared `lumen-drift-web.zip` supplied with this project.
2. Extract the ZIP using your device’s built-in archive support. The resulting folder contains `index.html` and an `assets` folder.
3. Sign in to a free Netlify account and open https://app.netlify.com/drop .
4. Drag that extracted folder onto the upload area (or use the upload chooser). Upload the folder containing `index.html`, not the source project.
5. Netlify supplies a public HTTPS address ending in `.netlify.app`. Open it on your phone or computer to play and share it with friends. You can rename the site in Netlify settings.

No terminal, Node.js installation, backend, API key, or database is needed. Netlify account limits and free-plan terms apply. A hosting upload is still required; this project has not been published automatically.

### Vercel or Netlify with automatic updates

Once these source files are uploaded to your GitHub repository using GitHub’s web interface (or pushed from this cloud workspace), import that repository at https://vercel.com/new or Netlify’s “Import an existing project”. Select Vite, build command `npm run build`, and output directory `dist`. Leave the root directory at the repository root. Configuration files for both hosts are included. The host builds the game in the cloud and returns a public HTTPS URL; future repository updates redeploy automatically.

## Development in the cloud workspace

Use `/workspace/Games`, the existing isolated checkout. A separate Git worktree is unnecessary.

```
npm ci
npm run dev
npm test
npm run build
```

`npm run preview` serves the production output. `npm test` runs nine rules and simulation tests covering progression, score chains, collision detection, damage protection, game over, dash cooldown, and pausing. `node tests/browser.mjs` exercises desktop and mobile behavior against the dev server using system Chromium at `/usr/bin/chromium`; browser verification needs a machine allowed to launch a browser and access the server. Screenshots go to `/tmp`.

The production `dist` directory is a static website. No server-side runtime is required. Visuals are drawn procedurally and sounds use Web Audio, with no third-party game assets. Google Fonts are optional; system fonts provide fallback if unavailable.
