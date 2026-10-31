# Omi · The Rainfall Shrine

A reference-inspired, rain-soaked **2.5D side-scrolling adventure**. The main page now uses an original painted forest environment, an illustrated human child monk, glowing mushrooms, fern layers, moving rain, mossy floating platforms and visible water streams. The world is rendered with Three.js: layered artwork and character planes sit alongside mesh ledges, mushrooms, enemies and water geometry. The environment painting is a generated original image, included locally at `public/art/rainfall-shrine.png`; the human character is drawn procedurally. The reference's masked character has not been copied.

## Play

Choose **Enter the rain**.

- **A / D or left / right arrows**: move.
- **Space / W / up arrow**: jump. Run and jump to cross gaps.
- **Hold J**: cast water projectiles.
- **E**: large water surge; also restores a little health.
- **Shift**: dodge dash with brief damage protection.
- **P / Escape**: pause. Losing browser focus also pauses.
- **Phone / tablet**: left/right movement buttons and on-screen Jump, Water, Surge and Dash controls.

Cross the Lantern Woods, reach the Moss Shrine checkpoint, then defeat the Rain Warden and enter the light at the far right. Collect spirit shards for healing; every four shards attune stronger water attacks. Enemy defeats award additional shards. The two checkpoints restore health; falling into a gap returns you to the last checkpoint and costs health. Omi is the only player character; there are no AI companions. This is a compact single-player level with three regions, not the old chapter-based team campaign. Progress resets on refresh or restart.

## Other games

- `courtyard.html`: the earlier solo 3D courtyard prototype, retained for comparison.
- `arcade.html`: Lumen Drift.

## Host without installing developer tools

If Netlify is connected to `yamehta93-creator/Games`, production branch `main`, pushes here trigger a new deployment. Build command: `npm run build`; publish directory: `dist`. The cloud workspace cannot confirm deployment on your Netlify account.

For manual hosting, [download the website ZIP](https://github.com/yamehta93-creator/Games/raw/refs/heads/main/release/legends-of-the-elements-web.zip), extract it, and upload the folder containing `index.html` to your Netlify project's Deploys page. All images are included. The same ZIP works with ordinary static hosting. Vercel configuration is included. GitHub Pages can serve the prebuilt `docs` directory from `main` → `/docs`.

## Cloud development

Use the existing isolated `/workspace/Games` checkout. No separate worktree is needed.

```
npm ci
npm run dev
npm test
npm run build
npm run preview
```

With the preview server running on port 4173:

```
npm run test:adventure
npm run test:courtyard
```

The new adventure tests cover every required platform gap, falling, landing, region progression, water damage, cooldowns, healing, checkpoint recovery, defeat, and boss/gate victory conditions. Desktop/mobile browser checks verify image loading, start, jumping, water attacks, pause/resume and responsive layout. They require system Chromium at `/usr/bin/chromium` and use software rendering in this cloud environment. The retained arcade browser check (`npm run test:browser`) uses the dev server on port 5173.
