(function () {
  function isHomePage() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path === "index.html" || path === "";
  }

  function sectionHref(section) {
    return isHomePage() ? `#${section}` : `index.html#${section}`;
  }

  function renderHeader() {
    const target = document.getElementById("site-header");
    if (!target) return;
    target.innerHTML = `
      <header class="site-header" data-header>
        <div class="container header-inner">
          <a class="logo" href="index.html" aria-label="ZANGER Consulting Group">
            <img class="logo-image" src="assets/logo/zanger-logo-horizontal.webp" alt="ZANGER Consulting Group" width="1953" height="516">
          </a>
          <nav class="main-nav" data-nav aria-label="Главная навигация">
            <a href="${sectionHref("services")}">Услуги</a>
            <a href="${sectionHref("advantages")}">Преимущества</a>
            <a href="${sectionHref("about")}">О компании</a>
            <a href="${sectionHref("contacts")}">Контакты</a>
          </nav>
          <div class="header-actions">
            <a class="header-phone" data-phone-link href="tel:+77071633899">+7 707 163 3899</a>
            <button class="btn btn-dark" data-open-modal type="button">Получить консультацию</button>
            <button class="menu-toggle" data-menu-toggle type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const target = document.getElementById("site-footer");
    if (!target) return;
    target.innerHTML = `
      <footer class="footer">
        <div class="container footer-grid">
          <div><img class="footer-logo" src="assets/logo/zanger-logo-horizontal.webp" alt="ZANGER Consulting Group" width="1953" height="516"><p>Защита ваших интересов — наша профессия</p></div>
          <div><h3>Навигация</h3><a href="${sectionHref("services")}">Услуги</a><a href="${sectionHref("advantages")}">Преимущества</a><a href="${sectionHref("about")}">О компании</a><a href="${sectionHref("contacts")}">Контакты</a></div>
          <div><h3>Контакты</h3><a data-phone-link href="tel:+77071633899">+7 707 163 3899</a><a data-whatsapp-link href="https://wa.me/77027771253">+7 702 777 12 53</a><a data-email-link href="mailto:zanger.consulting.group001@gmail.com">zanger.consulting.group001@gmail.com</a></div>
          <div><h3>Офисы</h3><p>Астана, проспект Мәңгілік Ел, 30<br>БЦ ASTANA PARTNERS</p><p>Алматы: проспект Аль-Фараби, 5/2, ТЦ Jurek Tau, офис P1/P2</p><p>Каскелен: ул. Момышулы, 10, бизнес-центр Тау, офис 310</p><p>Шымкент: ул. Тәуке Хана, 93А</p><a data-whatsapp-link href="https://wa.me/77027771253">WhatsApp: +7 702 777 12 53</a><p>Пн–Пт: 09:00–18:00</p></div>
        </div>
        <div class="container footer-bottom">
          <span>© <span data-year></span> ZANGER Consulting Group</span>
          <ul class="footer-legal-links" aria-label="Юридические ссылки">
            <li><a href="privacy.html">Политика конфиденциальности</a></li>
            <li><a href="terms.html">Пользовательское соглашение</a></li>
          </ul>
        </div>
      </footer>
      <button class="scroll-top" data-scroll-top type="button" aria-label="Наверх">↑</button>
      <a class="whatsapp-float" data-whatsapp-link href="https://wa.me/77027771253" target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp" title="WhatsApp">
        <img src="assets/icons/whatsapp.png" alt="" width="30" height="30">
      </a>
      <div class="modal" data-modal aria-hidden="true">
        <div class="modal-backdrop" data-close-modal></div>
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" data-close-modal type="button" aria-label="Закрыть">×</button>
          <h2 id="modal-title">Получить консультацию</h2>
          <p>Заполните форму, и мы подготовим сообщение для WhatsApp.</p>
          <form class="consult-form" data-consult-form>
            <input name="name" placeholder="Ваше имя" required>
            <input name="phone" data-phone-mask placeholder="+7 ___ ___ __ __" required>
            <input name="city" placeholder="Город">
            <select name="service" data-service-select aria-label="Интересующая услуга"></select>
            <textarea name="message" placeholder="Описание вопроса" required></textarea>
            <label class="agree"><input type="checkbox" name="agree" required> Согласен с политикой конфиденциальности</label>
            <p class="form-error" data-form-error></p>
            <button class="btn btn-dark" type="submit">Отправить заявку</button>
          </form>
        </div>
      </div>
    `;
  }

  window.ZANGER_LAYOUT = { renderHeader, renderFooter };
  renderHeader();
  renderFooter();
})();
