/*
  REXY APP landing page interactions.
  IMPORTANT: Replace the placeholder values below with the real public download URLs.
  Example: androidApkUrl: "downloads/rexy-app.apk" or your hosted HTTPS APK URL.
*/
const REXY_DOWNLOADS = {
  androidApkUrl: "download/app-debug.apk", // APK included in the download folder
  webAppUrl: "https://github.com/Vince-cmd-alt/dinodev/releases/latest/download/app-debug.apk"      // e.g. "https://your-rexy-web-app.example.com"
};

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const androidDownload = document.getElementById("androidDownload");
const webAppLink = document.getElementById("webAppLink");
const downloadHelp = document.getElementById("downloadHelp");

function configureDownloadLink(anchor, url, label) {
  if (url && url.trim()) {
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.addEventListener("click", () => {
      downloadHelp.textContent = `Opening the official ${label} link. Follow the instructions on that page to continue.`;
    });
    return true;
  }
  anchor.href = "#download";
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    downloadHelp.textContent = `The ${label} link has not been configured yet. Add the official URL in script.js before publishing the website.`;
    downloadHelp.classList.add("attention");
    setTimeout(() => downloadHelp.classList.remove("attention"), 1200);
  });
  return false;
}

const hasAndroid = configureDownloadLink(androidDownload, REXY_DOWNLOADS.androidApkUrl, "Android download");
const hasWebApp = configureDownloadLink(webAppLink, REXY_DOWNLOADS.webAppUrl, "web app");

if (hasAndroid || hasWebApp) {
  const available = [hasAndroid && "Android download", hasWebApp && "web app"].filter(Boolean).join(" and ");
  downloadHelp.textContent = `Ready to go! ${available} ${hasAndroid && hasWebApp ? "links are" : "link is"} configured.`;
}
