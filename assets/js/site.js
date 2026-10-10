/* ============================================================
   SITE CONFIG — EDIT THIS ONE OBJECT TO REBRAND THE WHOLE SITE
   ============================================================ */
const SITE_CONFIG = {
  brand: "Digital Kit Shop",                // ← change the brand name here
  tagline: "Practical digital kits for real life",
  storeEmail: "saqibnaseer077@gmail.com",   // public contact
  gumroadProfile: "https://saqibnaseer.gumroad.com"
};

document.addEventListener("DOMContentLoaded", () => {
  // Stamp the brand name into every element marked with data-brand
  document.querySelectorAll("[data-brand]").forEach(el => {
    el.textContent = SITE_CONFIG.brand;
  });
  document.title = document.title.replace("{{BRAND}}", SITE_CONFIG.brand);
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Homepage category pills: filter the product grid inline (no reload)
  const pills = document.querySelectorAll(".pill");
  const grid = document.getElementById("all-grid");
  if (pills.length && grid) {
    const cards = grid.querySelectorAll(".prod");
    pills.forEach(pill => pill.addEventListener("click", () => {
      pills.forEach(p => { p.classList.remove("active"); p.setAttribute("aria-pressed", "false"); });
      pill.classList.add("active");
      pill.setAttribute("aria-pressed", "true");
      const cat = pill.getAttribute("data-cat");
      cards.forEach(card => {
        const show = cat === "all" || card.getAttribute("data-cat") === cat;
        card.classList.toggle("hide", !show);
      });
    }));
  }
});
