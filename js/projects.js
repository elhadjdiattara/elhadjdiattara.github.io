/* 
   PROJECTS.JS
   ------------------------------------------------------------
   Rôle : gérer le "voir le détail / masquer le détail" de
   chaque projet. Utilisé uniquement sur projects.html.
    */

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-project-toggle]");

  toggles.forEach((btn) => {
    const project = btn.closest(".project");
    const details = project.querySelector(".project__details");

    btn.addEventListener("click", () => {
      const isOpen = project.classList.toggle("is-open");

      if (isOpen) {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.querySelector("span").textContent = "Masquer le détail";
        btn.setAttribute("aria-expanded", "true");
      } else {
        details.style.maxHeight = "0px";
        btn.querySelector("span").textContent = "Voir le détail";
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Si la fenêtre est redimensionnée pendant qu'un projet est ouvert,
  // on recalcule sa hauteur pour éviter que le contenu soit coupé.
  window.addEventListener("resize", () => {
    document.querySelectorAll(".project.is-open").forEach((project) => {
      const details = project.querySelector(".project__details");
      details.style.maxHeight = details.scrollHeight + "px";
    });
  });
});
