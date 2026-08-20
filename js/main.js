(function () {
  const icons = {
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
    user: '<svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path d="M12 22s7-5.4 7-12A7 7 0 0 0 5 10c0 6.6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="m12 2 2.6 6.9L22 12l-7.4 3.1L12 22l-2.6-6.9L2 12l7.4-3.1L12 2Z"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5h8v2M3 12h18"/></svg>',
    gavel: '<svg viewBox="0 0 24 24"><path d="m14 5 5 5M5 14l5 5M9 10l5 5M3 21h8M13 6l-7 7 5 5 7-7-5-5Z"/></svg>',
    coins: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    scale: '<svg viewBox="0 0 24 24"><path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7Z"/></svg>',
    landmark: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M12 3 4 8h16l-8-5Z"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M4 21V5a2 2 0 0 1 2-2h9v18M15 8h3a2 2 0 0 1 2 2v11M8 7h3M8 11h3M8 15h3"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
    handshake: '<svg viewBox="0 0 24 24"><path d="m8 12 3 3a2 2 0 0 0 3 0l1-1M7 17l-4-4 4-4M17 17l4-4-4-4M3 13h5l3-3a2 2 0 0 1 3 0l2 2h5"/></svg>',
    users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>'
  };

  function renderIcon(name) {
    return icons[name] || icons.shield;
  }

  function renderServices() {
    document.querySelectorAll("[data-services-grid]").forEach((grid) => {
      const allServices = window.ZANGER_I18N?.services ? window.ZANGER_I18N.services() : window.ZANGER_SERVICES;
      const limit = Number(grid.dataset.limit || allServices.length);
      const services = allServices.slice(0, limit);
      grid.innerHTML = services.map((service) => `
        <article class="service-card">
          <i>${renderIcon(service.icon)}</i>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href="${window.ZANGER_I18N?.lang === "kk" ? "/kk" : ""}${service.seoPath || `/service.html?slug=${encodeURIComponent(service.slug)}`}">${window.ZANGER_I18N?.t("servicePage.more") || "Подробнее →"}</a>
        </article>
      `).join("");
    });
  }

  function renderOffices() {
    const target = document.querySelector("[data-offices]");
    if (!target) return;
    const offices = window.ZANGER_I18N?.offices ? window.ZANGER_I18N.offices() : window.ZANGER_CONFIG.offices;
    target.innerHTML = offices.map((office) => `
      <article class="contact-card${office.isMain ? " contact-card-main" : ""}">
        <i>${renderIcon("map")}</i>
        <h3>${office.city}</h3>
        <p>${office.address}</p>
        <a target="_blank" rel="noopener noreferrer" href="${office.mapUrl || `https://2gis.kz/search/${encodeURIComponent(office.address)}`}">${window.ZANGER_I18N?.t("contacts.map") || "Открыть на карте"}</a>
      </article>
    `).join("");
  }

  function whatsappServiceHref(serviceName) {
    const greeting = window.ZANGER_I18N?.t("forms.whatsappGreeting") || "Здравствуйте! Хочу получить юридическую консультацию.";
    const serviceLabel = window.ZANGER_I18N?.t("forms.fieldService") || "Услуга";
    const message = `${greeting}\n\n${serviceLabel}: ${serviceName}`;
    return `https://wa.me/${window.ZANGER_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function heroWhatsappHref() {
    const message = window.ZANGER_I18N?.t("home.heroWhatsappMessage") || "Здравствуйте! Хочу получить юридическую консультацию.";
    return `https://wa.me/${window.ZANGER_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function updateHeroWhatsapp() {
    document.querySelectorAll("[data-hero-whatsapp]").forEach((link) => {
      link.href = heroWhatsappHref();
      link.setAttribute("aria-label", window.ZANGER_I18N?.t("home.heroWhatsappAria") || "Написать в WhatsApp для получения юридической консультации");
      link.setAttribute("title", window.ZANGER_I18N?.t("home.heroWhatsappTitle") || "Написать в WhatsApp");
    });
  }

  function renderServiceCatalog() {
    const target = document.querySelector("[data-service-catalog]");
    if (!target || !window.ZANGER_I18N?.catalog) return;
    const categories = window.ZANGER_I18N.catalog();
    const countLabel = window.ZANGER_I18N.t("servicesPage.itemCount");
    const actionLabel = window.ZANGER_I18N.t("servicesPage.writeWhatsapp");

    target.innerHTML = categories.map((category, index) => `
      <details class="service-category" ${index === 0 ? "open" : ""}>
        <summary>
          <span>${category.title}</span>
          <small>${category.items.length} ${countLabel}</small>
        </summary>
        <div class="service-category-list">
          ${category.items.map((item) => `
            <a class="service-line" href="${whatsappServiceHref(item)}" target="_blank" rel="noopener noreferrer" aria-label="${actionLabel}: ${item}">
              <span>${item}</span>
              <b aria-hidden="true">→</b>
            </a>
          `).join("")}
        </div>
      </details>
    `).join("");
  }

  function refresh() {
    document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = renderIcon(node.dataset.icon); });
    document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
    document.querySelectorAll("[data-phone-link]").forEach((node) => { node.textContent = window.ZANGER_CONFIG.phone; node.href = window.ZANGER_CONFIG.phoneHref; });
    document.querySelectorAll("[data-whatsapp-link]").forEach((node) => { node.href = window.ZANGER_CONFIG.whatsappHref; });
    document.querySelectorAll("[data-email-link]").forEach((node) => { node.textContent = window.ZANGER_CONFIG.email; node.href = window.ZANGER_CONFIG.emailHref; });
    window.ZANGER_I18N?.applyTranslations?.();
    renderServices();
    renderOffices();
    renderServiceCatalog();
    updateHeroWhatsapp();
  }

  window.ZANGER_MAIN = { refresh, renderServices, renderOffices, renderServiceCatalog, renderIcon };

  document.addEventListener("DOMContentLoaded", () => {
    refresh();
    const observer = "IntersectionObserver" in window && new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: .12 });
    document.querySelectorAll(".section-animate").forEach((section) => observer ? observer.observe(section) : section.classList.add("is-visible"));
  });
})();
