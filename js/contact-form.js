/* ============================================================
   CONTACT-FORM.JS
   ------------------------------------------------------------
   Rôle : vérifier les champs du formulaire de contact dans le
   navigateur, puis envoyer le message à Formspree.

   IMPORTANT (à expliquer en soutenance) :
   Ce site est 100% statique (HTML/CSS/JS, sans serveur) : il ne
   peut pas envoyer d'email tout seul. J'utilise donc Formspree,
   un service gratuit qui joue le rôle de serveur : le script lui
   envoie les champs avec fetch(), et Formspree les transmet par
   email à Elhadj.
   ============================================================ */

// Adresse du formulaire créé sur formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/mnpjyzbv";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusBox = document.getElementById("form-status");

  // Règles de validation simples pour chaque champ
  const validators = {
    name: (value) => value.trim().length >= 2 || "Merci d'indiquer votre nom (2 caractères minimum).",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || "Merci d'indiquer une adresse email valide.",
    subject: (value) => value.trim().length >= 3 || "Merci d'indiquer un sujet.",
    message: (value) => value.trim().length >= 10 || "Votre message doit contenir au moins 10 caractères.",
  };

  function validateField(field) {
    const rule = validators[field.name];
    if (!rule) return true;

    const result = rule(field.value);
    const group = field.closest(".field");
    const errorEl = group.querySelector(".field__error");

    if (result === true) {
      group.classList.remove("has-error");
      errorEl.textContent = "";
      return true;
    } else {
      group.classList.add("has-error");
      errorEl.textContent = result;
      return false;
    }
  }

  // Validation "en direct" dès que l'utilisateur quitte un champ
  form.querySelectorAll(".field__control").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  // Envoie les champs à Formspree. Renvoie true si le message est bien parti.
  async function sendForm() {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      return response.ok;
    } catch (error) {
      return false; // par exemple : pas de connexion internet
    }
  }

  function showStatus(type, message) {
    statusBox.textContent = message;
    statusBox.className = "form-status is-" + type;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fields = Array.from(form.querySelectorAll(".field__control"));
    const allValid = fields.map(validateField).every(Boolean);

    if (!allValid) {
      showStatus("error", "Merci de corriger les champs indiqués ci-dessus.");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>Envoi en cours…</span>";

    const sent = await sendForm();

    if (sent) {
      showStatus("success", "Message envoyé avec succès ! Je vous répondrai rapidement.");
      form.reset();
    } else {
      showStatus("error", "L'envoi a échoué. Vous pouvez m'écrire directement à diattaraelhadj@gmail.com.");
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;
  });
});
