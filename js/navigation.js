(function () {
  const body = document.body;
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const modal = document.querySelector("[data-modal]");
  const scrollTop = document.querySelector("[data-scroll-top]");

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("is-open");
    body.classList.remove("is-locked");
  }

  function openModal() {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("is-locked");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("is-locked");
  }

  window.ZANGER_UI = { openModal, closeModal, closeMenu };

  toggle && toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    body.classList.toggle("is-locked", isOpen);
  });

  document.querySelectorAll("[data-open-modal]").forEach((button) => button.addEventListener("click", openModal));
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });
  document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", closeMenu));

  if (scrollTop) {
    scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
      scrollTop.classList.toggle("is-visible", window.scrollY > 600);
      document.querySelector("[data-header]")?.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".main-nav a[href^='#']"));
  if (sections.length && navLinks.length) {
    window.addEventListener("scroll", () => {
      let active = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) active = section.id;
      });
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === "#" + active));
    }, { passive: true });
  }
})();
