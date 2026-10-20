/* ============================================================
   MENU.JS
   ------------------------------------------------------------
   Rôle : tout ce qui concerne le menu de l'en-tête. Le menu
   lui-même est un élément HTML natif <details> : il s'ouvre et
   se ferme tout seul au clic sur "Menu", sans JavaScript.
   Ce fichier ajoute trois petits détails :

   1. Mise en évidence du lien correspondant à la page actuelle
   2. Fermeture du menu avec la touche Échap
   3. Année automatique dans le pied de page
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");

  /* ---------- 1. LIEN ACTUEL ---------- */
  // On compare l'adresse de la page ouverte avec le lien de chaque entrée
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu__panel a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page"); // pour les lecteurs d'écran
    }
  });

  /* ---------- 2. FERMER AVEC ÉCHAP ---------- */
  if (menu) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.hasAttribute("open")) {
        menu.removeAttribute("open");
        menu.querySelector("summary").focus(); // le focus revient sur "Menu"
      }
    });
  }

  /* ---------- 3. ANNÉE AUTOMATIQUE ---------- */
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
