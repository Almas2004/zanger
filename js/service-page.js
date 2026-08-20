(function () {
  function getRelatedServices(current) {
    const services = window.ZANGER_I18N?.services ? window.ZANGER_I18N.services() : window.ZANGER_SERVICES;
    return services
      .filter((service) => service.slug !== current.slug)
      .slice(0, 3);
  }

  function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function render() {
    const root = document.querySelector("[data-service-page]");
    if (!root) return;

    const allServices = window.ZANGER_I18N?.services ? window.ZANGER_I18N.services() : window.ZANGER_SERVICES;
    const t = (key) => window.ZANGER_I18N?.t(key) || key;
    const slug = new URLSearchParams(window.location.search).get("slug");
    const service = allServices.find((item) => item.slug === slug) || allServices[0];
    const related = getRelatedServices(service);

    document.title = `${service.title} — ZANGER CONSULTING GROUP`;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", service.description);

    root.innerHTML = `
      <section class="service-hero section-animate is-visible">
        <div class="container service-hero-grid">
          <div class="service-hero-copy">
            <nav class="breadcrumbs" aria-label="${t("servicePage.breadcrumbLabel")}">
              <a href="index.html">${t("servicePage.home")}</a>
              <span>${t("servicePage.services")}</span>
            </nav>
            <p class="eyebrow">${t("servicePage.eyebrow")}</p>
            <h1>${service.title}</h1>
            <p>${service.description}</p>
            <div class="service-hero-actions">
              <button class="btn btn-dark" data-open-modal type="button">${t("servicePage.consultation")}</button>
              <a class="btn btn-outline" href="services.html">${t("servicePage.allServices")}</a>
            </div>
          </div>
          <aside class="service-summary">
            <i data-icon="${service.icon}"></i>
            <h2>${t("servicePage.included")}</h2>
            <ul>${renderList(service.tasks.slice(0, 4))}</ul>
          </aside>
        </div>
      </section>

      <section class="section service-body section-animate">
        <div class="container service-body-grid">
          <article class="detail-card detail-card-large">
            <p class="eyebrow">${t("servicePage.tasksEyebrow")}</p>
            <h2>${t("servicePage.tasksTitle")}</h2>
            <ul class="premium-list">${renderList(service.tasks)}</ul>
          </article>
          <article class="detail-card detail-card-large">
            <p class="eyebrow">${t("servicePage.processEyebrow")}</p>
            <h2>${t("servicePage.processTitle")}</h2>
            <ol class="numbered-list">${service.steps.map((step) => `<li><span>${step}</span></li>`).join("")}</ol>
          </article>
        </div>
      </section>

      <section class="service-cta section-animate">
        <div class="container service-cta-grid">
          <div>
            <p class="eyebrow">${t("servicePage.ctaEyebrow")}</p>
            <h2>${t("servicePage.ctaTitle")}</h2>
            <p>${t("servicePage.ctaText")}</p>
          </div>
          <button class="btn btn-dark" data-open-modal type="button">${t("servicePage.ctaButton")}</button>
        </div>
      </section>

      <section class="section section-soft service-related section-animate">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">${t("servicePage.relatedEyebrow")}</p>
            <h2>${t("servicePage.relatedTitle")}</h2>
          </div>
          <div class="services-grid service-related-grid">
            ${related.map((item) => `
              <article class="service-card">
                <i data-icon="${item.icon}"></i>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${window.ZANGER_I18N?.lang === "kk" ? "/kk" : ""}${item.seoPath || `/service.html?slug=${encodeURIComponent(item.slug)}`}">${t("servicePage.more")}</a>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;

    root.querySelectorAll("[data-open-modal]").forEach((button) => {
      button.addEventListener("click", () => window.ZANGER_UI && window.ZANGER_UI.openModal());
    });

    setTimeout(() => {
      document.querySelectorAll("[data-service-select]").forEach((select) => { select.value = service.title; });
    }, 0);
  }

  window.ZANGER_SERVICE_PAGE = { render };
  document.addEventListener("DOMContentLoaded", render);
})();
