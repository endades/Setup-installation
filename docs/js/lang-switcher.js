document.addEventListener("DOMContentLoaded", function() {
  const langMap = {
    "es": "/es/",
    "en": "/en/",
    "it": "/it/",
    "pt": "/pt/"
  };
  
  const langSelector = document.createElement("select");
  langSelector.id = "lang-switcher";
  langSelector.style.marginLeft = "1rem";

  for (const [key, val] of Object.entries(langMap)) {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = key.toUpperCase();
    if (window.location.pathname.startsWith(val)) opt.selected = true;
    langSelector.appendChild(opt);
  }

  langSelector.addEventListener("change", e => {
    window.location.href = langSelector.value;
  });

  const nav = document.querySelector(".wy-nav-side");
  if (nav) nav.insertBefore(langSelector, nav.firstChild);
});
