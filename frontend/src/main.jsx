import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import faviconIco from "./assets/favicon_io(5)/favicon.ico";
import appleTouchIcon from "./assets/favicon_io(5)/apple-touch-icon.png";
import icon192 from "./assets/favicon_io(5)/android-chrome-192x192.png";
import icon512 from "./assets/favicon_io(5)/android-chrome-512x512.png";
import siteManifest from "./assets/favicon_io(5)/site.webmanifest";

// Ensure favicon and PWA icons are registered without requiring files in public/
function ensureLink(rel, attributes) {
  const selectorParts = [
    `link[rel="${rel}"]`,
    attributes.sizes ? `[sizes="${attributes.sizes}"]` : "",
    attributes.type ? `[type="${attributes.type}"]` : "",
  ].filter(Boolean);
  const existing = document.head.querySelector(selectorParts.join(""));
  const link = existing || document.createElement("link");
  link.rel = rel;
  Object.entries(attributes).forEach(([key, value]) => {
    if (value) link.setAttribute(key, value);
  });
  if (!existing) document.head.appendChild(link);
}

function injectFavicons() {
  if (typeof document === "undefined") return;
  ensureLink("icon", { type: "image/x-icon", href: faviconIco });
  ensureLink("icon", { type: "image/png", sizes: "192x192", href: icon192 });
  ensureLink("icon", { type: "image/png", sizes: "512x512", href: icon512 });
  ensureLink("apple-touch-icon", { sizes: "180x180", href: appleTouchIcon });
  ensureLink("manifest", { href: siteManifest });
}

injectFavicons();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
