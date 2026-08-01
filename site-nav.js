(() => {
  const mobileMenuQuery = window.matchMedia("(max-width: 1280px)");
  const header = document.querySelector(".site-header");
  const nav = header?.querySelector("nav");

  if (!header || !nav) return;

  document.body.classList.add("has-mobile-menu");

  const toggle = document.createElement("button");
  toggle.className = "menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open navigation");
  toggle.setAttribute("aria-controls", "site-navigation");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<span class="menu-toggle-line"></span><span class="menu-toggle-line"></span>';

  if (!nav.id) nav.id = "site-navigation";
  header.append(toggle);

  const closeMenu = () => {
    document.body.classList.remove("is-menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };

  const openMenu = () => {
    document.body.classList.add("is-menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation");
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("is-menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  mobileMenuQuery.addEventListener("change", (event) => {
    if (!event.matches) closeMenu();
  });
})();
