(function () {
  function getRelatedServices(current) {
    return window.ZANGER_SERVICES
      .filter((service) => service.slug !== current.slug)
      .slice(0, 3);
  }

  function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-service-page]");
    if (!root) return;

    const slug = new URLSearchParams(window.location.search).get("slug");
    const service = window.ZANGER_SERVICES.find((item) => item.slug === slug) || window.ZANGER_SERVICES[0];
    const related = getRelatedServices(service);

    document.title = `${service.title} — ZANGER CONSULTING GROUP`;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", service.description);

    root.innerHTML = `
      <section class="service-hero section-animate is-visible">
        <div class="container service-hero-grid">
          <div class="service-hero-copy">
            <nav class="breadcrumbs" aria-label="Хлебные крошки">
              <a href="index.html">Главная</a>
              <span>Услуги</span>
            </nav>
            <p class="eyebrow">Юридическая услуга</p>
            <h1>${service.title}</h1>
            <p>${service.description}</p>
            <div class="service-hero-actions">
              <button class="btn btn-dark" data-open-modal type="button">Получить консультацию</button>
              <a class="btn btn-outline" href="services.html">Все услуги</a>
            </div>
          </div>
          <aside class="service-summary">
            <i data-icon="${service.icon}"></i>
            <h2>Что входит в работу</h2>
            <ul>${renderList(service.tasks.slice(0, 4))}</ul>
          </aside>
        </div>
      </section>

      <section class="section service-body section-animate">
        <div class="container service-body-grid">
          <article class="detail-card detail-card-large">
            <p class="eyebrow">Задачи</p>
            <h2>Какие вопросы решаем</h2>
            <ul class="premium-list">${renderList(service.tasks)}</ul>
          </article>
          <article class="detail-card detail-card-large">
            <p class="eyebrow">Процесс</p>
            <h2>Как проходит работа</h2>
            <ol class="numbered-list">${service.steps.map((step) => `<li><span>${step}</span></li>`).join("")}</ol>
          </article>
        </div>
      </section>

      <section class="service-cta section-animate">
        <div class="container service-cta-grid">
          <div>
            <p class="eyebrow">Консультация</p>
            <h2>Разберём вашу ситуацию и предложим следующий шаг</h2>
            <p>Опишите задачу, город и удобный способ связи. Сообщение будет сформировано для WhatsApp.</p>
          </div>
          <button class="btn btn-dark" data-open-modal type="button">Написать в WhatsApp</button>
        </div>
      </section>

      <section class="section section-soft service-related section-animate">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">Похожие направления</p>
            <h2>Другие услуги ZANGER Consulting Group</h2>
          </div>
          <div class="services-grid service-related-grid">
            ${related.map((item) => `
              <article class="service-card">
                <i data-icon="${item.icon}"></i>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="service.html?slug=${encodeURIComponent(item.slug)}">Подробнее →</a>
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
  });
})();
