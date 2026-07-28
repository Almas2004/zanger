(function () {
  const body = document.body;

  function closeMenu() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;
    nav.classList.remove("is-open");
    body.classList.remove("is-locked");
  }

  function openModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("is-locked");
  }

  function closeModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("is-locked");
  }

  window.ZANGER_UI = { openModal, closeModal, closeMenu };

  function bind() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const scrollTop = document.querySelector("[data-scroll-top]");

    if (toggle && !toggle.dataset.navBound) {
      toggle.dataset.navBound = "true";
      toggle.addEventListener("click", () => {
        const currentNav = document.querySelector("[data-nav]");
        const isOpen = currentNav.classList.toggle("is-open");
        body.classList.toggle("is-locked", isOpen);
      });
    }

    document.querySelectorAll("[data-open-modal]").forEach((button) => {
      if (button.dataset.modalBound) return;
      button.dataset.modalBound = "true";
      button.addEventListener("click", openModal);
    });
    document.querySelectorAll("[data-close-modal]").forEach((button) => {
      if (button.dataset.closeBound) return;
      button.dataset.closeBound = "true";
      button.addEventListener("click", closeModal);
    });
    document.querySelectorAll(".main-nav a").forEach((link) => {
      if (link.dataset.navLinkBound) return;
      link.dataset.navLinkBound = "true";
      link.addEventListener("click", closeMenu);
    });

    if (scrollTop) {
      if (scrollTop.dataset.scrollBound) return;
      scrollTop.dataset.scrollBound = "true";
      scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  window.ZANGER_NAV = { bind };
  bind();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });
  window.addEventListener("scroll", () => {
    document.querySelector("[data-scroll-top]")?.classList.toggle("is-visible", window.scrollY > 600);
    document.querySelector("[data-header]")?.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

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
