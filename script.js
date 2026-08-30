const buttons = document.querySelectorAll("[data-language]");
const panels = document.querySelectorAll("[data-panel]");

function setLanguage(language) {
  document.documentElement.lang = language;
  document.title = language === "de"
    ? "Mein Leben mit einem SCS-Implantat | Carsten Nacke"
    : "Living with an SCS implant | Carsten Nacke";

  buttons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== language;
  });

  localStorage.setItem("preferred-language", language);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem("preferred-language") === "en" ? "en" : "de");
