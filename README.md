# REXY APP Download Website

A responsive, kid-friendly comic-book landing page made with plain HTML, CSS, and JavaScript.

## Files

- `index.html` — page structure and content
- `styles.css` — comic styling, layout, and responsive breakpoints
- `script.js` — mobile navigation and download-link configuration
- `assets/rexytrike.png`, `assets/rexy1.png`, `assets/rexyhuh.png` — supplied Rexy artwork
- `logos/team.png`, `logos/game.png` — team and game logos
- `download/app-debug.apk` — Android APK supplied with the project

## Add the real download links

Open `script.js` and update:

```js
const REXY_DOWNLOADS = {
  androidApkUrl: "download/app-debug.apk",
  webAppUrl: "https://YOUR-DOMAIN/rexy-web-app"
};
```

The Android button is configured to download the included APK from `download/app-debug.apk`. Keep that folder and filename unchanged when uploading the website. Add your hosted web app URL to `webAppUrl` when it is available.

For a direct APK download, host the APK on your own web host or a trusted release page and put that public URL in `androidApkUrl`. Do not commit private signing keys or passwords to this project.

## Run locally

1. Extract the project folder.
2. Open `index.html` in a modern browser.
3. For production, upload all files while preserving the folder structure to your web host.

No build step or framework is required. Google Fonts are used for the display type; the page falls back to system fonts if offline.
