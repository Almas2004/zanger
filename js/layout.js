(function () {
  const i18n = window.ZANGER_I18N;
  const t = (key) => i18n ? i18n.t(key) : key;

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
          <nav class="main-nav" data-nav aria-label="${t("header.navLabel")}">
            <a href="${sectionHref("services")}">${t("header.services")}</a>
            <a href="${sectionHref("advantages")}">${t("header.advantages")}</a>
            <a href="${sectionHref("about")}">${t("header.about")}</a>
            <a href="${sectionHref("contacts")}">${t("header.contacts")}</a>
            <div class="mobile-nav-actions">
              <a class="header-phone" data-phone-link href="${window.ZANGER_CONFIG.phoneHref}">${window.ZANGER_CONFIG.phone}</a>
              <a class="mobile-whatsapp-link" data-whatsapp-link href="${window.ZANGER_CONFIG.whatsappHref}" target="_blank" rel="noopener noreferrer">${t("header.whatsapp")}</a>
              <div class="lang-switcher" aria-label="Language">
                <button type="button" data-lang-button="ru">RU</button>
                <button type="button" data-lang-button="kk">KZ</button>
              </div>
            </div>
          </nav>
          <div class="header-actions">
            <a class="header-phone" data-phone-link href="tel:+77071633899">+7 707 163 3899</a>
            <div class="lang-switcher" aria-label="Language">
              <button type="button" data-lang-button="ru">RU</button>
              <button type="button" data-lang-button="kk">KZ</button>
            </div>
            <button class="menu-toggle" data-menu-toggle type="button" aria-label="${t("header.menu")}"><span></span><span></span><span></span></button>
          </div>
        </div>
      </header>
    `;
    i18n?.applyTranslations(target);
    i18n?.bindLanguageButtons(target);
  }

  function renderFooter() {
    const target = document.getElementById("site-footer");
    if (!target) return;
    target.innerHTML = `
      <footer class="footer">
        <div class="container footer-grid">
          <div><img class="footer-logo" src="assets/logo/zanger-logo-horizontal.webp" alt="ZANGER Consulting Group" width="1953" height="516"><p>${t("footer.tagline")}</p></div>
          <div><h3>${t("footer.nav")}</h3><a href="${sectionHref("services")}">${t("header.services")}</a><a href="${sectionHref("advantages")}">${t("header.advantages")}</a><a href="${sectionHref("about")}">${t("header.about")}</a><a href="${sectionHref("contacts")}">${t("header.contacts")}</a></div>
          <div><h3>${t("footer.contacts")}</h3><a data-phone-link href="${window.ZANGER_CONFIG.phoneHref}">${window.ZANGER_CONFIG.phone}</a><a data-whatsapp-link href="${window.ZANGER_CONFIG.whatsappHref}">${window.ZANGER_CONFIG.whatsapp}</a><a data-email-link href="mailto:zanger.consulting.group001@gmail.com">zanger.consulting.group001@gmail.com</a></div>
          <div><h3>${t("footer.offices")}</h3>${(i18n?.offices ? i18n.offices() : window.ZANGER_CONFIG.offices).map((office) => `<p>${office.address}</p>`).join("")}<a data-whatsapp-link href="${window.ZANGER_CONFIG.whatsappHref}">WhatsApp: ${window.ZANGER_CONFIG.whatsapp}</a><p>${t("footer.hours")}</p></div>
        </div>
        <div class="container footer-bottom">
          <span>© <span data-year></span> ZANGER Consulting Group</span>
          <ul class="footer-legal-links" aria-label="${t("footer.legalLabel")}">
            <li><a href="privacy.html">${t("footer.privacy")}</a></li>
            <li><a href="terms.html">${t("footer.terms")}</a></li>
          </ul>
        </div>
      </footer>
      <button class="scroll-top" data-scroll-top type="button" aria-label="${t("footer.toTop")}">↑</button>
      <a class="whatsapp-float" data-whatsapp-link href="${window.ZANGER_CONFIG.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="${t("footer.whatsapp")}" title="WhatsApp">
        <img src="assets/icons/whatsapp.png" alt="" width="30" height="30">
      </a>
      <div class="modal" data-modal aria-hidden="true">
        <div class="modal-backdrop" data-close-modal></div>
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" data-close-modal type="button" aria-label="Закрыть">×</button>
          <h2 id="modal-title">${t("header.cta")}</h2>
          <p>${t("footer.modalText")}</p>
          <form class="consult-form" data-consult-form>
            <input name="name" placeholder="${t("forms.name")}" required>
            <input name="phone" data-phone-mask placeholder="+7 ___ ___ __ __" required>
            <input name="city" placeholder="${t("forms.city")}">
            <select name="service" data-service-select aria-label="${t("forms.serviceAria")}"></select>
            <textarea name="message" placeholder="${t("forms.message")}" required></textarea>
            <label class="agree"><input type="checkbox" name="agree" required> ${t("forms.agree")}</label>
            <p class="form-error" data-form-error></p>
            <button class="btn btn-dark" type="submit">${t("home.submit")}</button>
          </form>
        </div>
      </div>
    `;
    i18n?.applyTranslations(target);
    i18n?.bindLanguageButtons(target);
    window.ZANGER_FORM?.fillSelects?.();
  }

  window.ZANGER_LAYOUT = { renderHeader, renderFooter };
  renderHeader();
  renderFooter();
})();
