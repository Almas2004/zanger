const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://zangerconsultinggroup.kz";
const OG_IMAGE = `${SITE}/assets/logo/zanger-logo-horizontal.webp`;

function loadServices() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "js", "services-data.js"), "utf8"), context);
  return context.window.ZANGER_SERVICES;
}

const kkServices = {
  "yuridicheskoe-soprovozhdenie-biznesa": {
    title: "Бизнесті заңгерлік сүйемелдеу",
    description: "Компанияға тұрақты құқықтық қолдау: шарттар, талаптар, тәуекелдер және операциялық мәселелер.",
    tasks: ["Шарттық жұмыс", "Талап-хат алмасу", "Контрагенттерді тексеру", "Құқықтық тәуекелдерді азайту"],
    steps: ["Кеңес", "Құжаттарды талдау", "Әрекет жоспары", "Сүйемелдеу"]
  },
  "sudebnoe-predstavitelstvo": {
    title: "Сотта өкілдік ету",
    description: "Ұстаным дайындау, процессуалдық құжаттар әзірлеу және клиент мүддесін сотта қорғау.",
    tasks: ["Талап арыздар", "Пікірлер мен қарсылықтар", "Сот отырыстарына қатысу", "Атқарушылық істерді сүйемелдеу"],
    steps: ["Перспективаны бағалау", "Дәлелдерді жинау", "Құжаттар", "Өкілдік"]
  },
  "vzyskanie-dolgov": {
    title: "Берешекті өндіріп алу",
    description: "Берешекпен сотқа дейінгі және соттағы жұмыс, келіссөздер және шешімдерді орындау.",
    tasks: ["Сотқа дейінгі талаптар", "Келіссөздер", "Сот арқылы өндіріп алу", "Атқарушылық іс жүргізу"],
    steps: ["Берешекті талдау", "Талап", "Сот", "Орындау"]
  },
  "bankrotstvo-fizicheskih-lic": {
    title: "Банкроттық",
    description: "Қарыз жағдайын бағалау, құжаттарды дайындау және рәсімді сүйемелдеу.",
    tasks: ["Қарыз жүктемесін бағалау", "Құжаттарды дайындау", "Рәсімді сүйемелдеу", "Қатысушылармен байланыс"],
    steps: ["Алғашқы бағалау", "Құжаттар", "Өтініш беру", "Сүйемелдеу"]
  },
  "registraciya-ip-i-too": {
    title: "Бизнесті тіркеу",
    description: "ИП, ЖШС немесе АҚ ашу үшін нысанды таңдауға, құжаттарды дайындауға және іске қосуға көмектесу.",
    tasks: ["Бизнес нысанын таңдау", "Құжаттарды дайындау", "Тіркеу әрекеттері", "Алғашқы кеңестер"],
    steps: ["Өтінім", "Дайындау", "Тіркеу", "Құжаттарды беру"]
  },
  "razrabotka-i-proverka-dogovorov": {
    title: "Шарттық жұмыс",
    description: "Тәуекелдерді түсінікті бағалай отырып, шарттарды әзірлеу, тексеру және түзету.",
    tasks: ["Жеткізу шарттары", "Қызмет және мердігерлік", "Жалдау", "Корпоративтік құжаттар"],
    steps: ["Міндет", "Жоба", "Келісу", "Қорытынды нұсқа"]
  },
  "bankrotstvo-yuridicheskih-lic": {
    title: "Заңды тұлғалардың банкроттығы",
    description: "Күрделі қарыз және рәсімдік мәселелерде компания мен басшыларды сүйемелдеу.",
    tasks: ["Басшы тәуекелдерін бағалау", "Кредиторлармен жұмыс", "Рәсімдік құжаттар", "Компания мүддесін қорғау"],
    steps: ["Талдау", "Стратегия", "Рәсім", "Бақылау"]
  },
  "pravovoy-audit": {
    title: "Құқықтық аудит",
    description: "Құжаттарды, процестерді және міндеттемелерді тексеріп, құқықтық тәуекелдерді алдын ала көру.",
    tasks: ["Шарттар аудиті", "Міндеттемелерді тексеру", "Персонал тәуекелдері", "Ұсынымдар"],
    steps: ["Деректер жинау", "Тексеру", "Есеп", "Түзету жоспары"]
  },
  "soprovozhdenie-sdelok": {
    title: "Мәмілелерді сүйемелдеу",
    description: "Келіссөздерді, құжаттарды және мәмілені жабуды заңгерлік сүйемелдеу.",
    tasks: ["Шарттарды тексеру", "Шарттық құрылым", "Келіссөздер", "Мәмілені жабу"],
    steps: ["Тексеру", "Құрылым", "Құжаттар", "Жабу"]
  },
  "semeynye-spory": {
    title: "Отбасылық даулар",
    description: "Отбасылық мәселелер мен мүліктік келіспеушіліктер бойынша мұқият құқықтық көмек.",
    tasks: ["Мүлікті бөлу", "Алимент", "Келісімдер", "Сот құжаттары"],
    steps: ["Кеңес", "Ұстаным", "Құжаттар", "Сүйемелдеу"]
  },
  "trudovye-spory": {
    title: "Еңбек даулары",
    description: "Жұмыс берушілер мен қызметкерлерге еңбек даулары мен құжаттар бойынша көмек.",
    tasks: ["Бұйрықтарды тексеру", "Өтемақылар", "Жұмыстан босату", "Сотқа дейін реттеу"],
    steps: ["Талдау", "Ұстаным", "Құжаттар", "Қорғау"]
  },
  "spory-s-gosudarstvennymi-organami": {
    title: "Мемлекеттік органдармен даулар",
    description: "Мемлекеттік органдармен өзара әрекетте шағымдар, өтініштер және ұстаным дайындау.",
    tasks: ["Шағымдар", "Хаттар", "Сотта қорғау", "Тексерулерді сүйемелдеу"],
    steps: ["Тексеру", "Ұстаным", "Жүгіну", "Жауапты бақылау"]
  }
};

const serviceMeta = {
  "registraciya-ip-i-too": {
    ruTitle: "Регистрация ИП, ТОО и АО в Казахстане",
    kkTitle: "Қазақстанда ИП, ЖШС және АҚ тіркеу",
    ruDescription: "Помощь с выбором организационно-правовой формы, подготовкой документов и регистрацией ИП, ТОО и АО в Казахстане. Консультация ZANGER Consulting Group.",
    kkDescription: "Қазақстанда ИП, ЖШС және АҚ тіркеуге, ұйымдық-құқықтық нысанды таңдауға және құжаттарды дайындауға көмек. ZANGER Consulting Group кеңесі."
  },
  "yuridicheskoe-soprovozhdenie-biznesa": {
    ruTitle: "Юридическое сопровождение бизнеса в Казахстане",
    kkTitle: "Қазақстанда бизнесті заңгерлік сүйемелдеу"
  },
  "vzyskanie-dolgov": {
    ruTitle: "Взыскание задолженности в Казахстане",
    kkTitle: "Қазақстанда берешекті өндіріп алу"
  },
  "bankrotstvo-fizicheskih-lic": {
    ruTitle: "Банкротство в Казахстане",
    kkTitle: "Қазақстанда банкроттық рәсімін сүйемелдеу"
  },
  "razrabotka-i-proverka-dogovorov": {
    ruTitle: "Договорная работа и проверка договоров",
    kkTitle: "Шарттық жұмыс және шарттарды тексеру"
  },
  "sudebnoe-predstavitelstvo": {
    ruTitle: "Судебное представительство в Казахстане",
    kkTitle: "Қазақстанда сотта өкілдік ету"
  }
};

const labels = {
  ru: {
    services: "Услуги",
    home: "Главная",
    advantages: "Преимущества",
    about: "О компании",
    contacts: "Контакты",
    allServices: "Все услуги",
    more: "Подробнее →",
    catalogTitle: "Юридические услуги в Казахстане",
    catalogText: "Выберите направление юридической помощи: сопровождение бизнеса, судебное представительство, взыскание задолженности, банкротство, регистрация бизнеса, договорная работа и другие услуги.",
    included: "Что входит в работу",
    tasks: "Какие вопросы решаем",
    process: "Как проходит работа",
    consult: "Получить консультацию",
    ctaTitle: "Разберём вашу ситуацию и предложим следующий шаг",
    ctaText: "Опишите задачу, город и удобный способ связи. Сообщение будет сформировано для WhatsApp.",
    footer: "Защита ваших интересов — наша профессия",
    privacy: "Политика конфиденциальности",
    terms: "Пользовательское соглашение"
  },
  kk: {
    services: "Қызметтер",
    home: "Басты бет",
    advantages: "Артықшылықтар",
    about: "Компания туралы",
    contacts: "Байланыс",
    allServices: "Барлық қызметтер",
    more: "Толығырақ →",
    catalogTitle: "Қазақстандағы заң қызметтері",
    catalogText: "Заңгерлік көмек бағытын таңдаңыз: бизнесті сүйемелдеу, сотта өкілдік ету, берешекті өндіріп алу, банкроттық, бизнесті тіркеу, шарттық жұмыс және басқа қызметтер.",
    included: "Жұмысқа не кіреді",
    tasks: "Қандай мәселелерді шешеміз",
    process: "Жұмыс қалай өтеді",
    consult: "Кеңес алу",
    ctaTitle: "Жағдайыңызды талдап, келесі қадамды ұсынамыз",
    ctaText: "Міндетті, қаланы және ыңғайлы байланыс тәсілін жазыңыз. Хабарлама WhatsApp үшін қалыптастырылады.",
    footer: "Мүддеңізді қорғау — біздің кәсібіміз",
    privacy: "Құпиялылық саясаты",
    terms: "Пайдаланушы келісімі"
  }
};

function htmlEscape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function write(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content.replace(/\n{3,}/g, "\n\n"), "utf8");
}

function serviceFor(service, lang) {
  return lang === "kk" ? { ...service, ...kkServices[service.slug] } : service;
}

function localizedPath(service, lang) {
  return `${lang === "kk" ? "/kk" : ""}${service.seoPath}`;
}

function pageHead({ lang, title, description, canonical, alternateRu, alternateKk, type = "website", schema = [] }) {
  const schemaBlocks = schema.map((item) => `    <script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n");
  return `  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>${htmlEscape(title)}</title>
    <meta name="description" content="${htmlEscape(description)}">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="ru-KZ" href="${alternateRu}">
    <link rel="alternate" hreflang="kk-KZ" href="${alternateKk}">
    <link rel="alternate" hreflang="x-default" href="${alternateRu}">
    <meta property="og:title" content="${htmlEscape(title)}">
    <meta property="og:description" content="${htmlEscape(description)}">
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#071A33">
    <link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/variables.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/components.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
${schemaBlocks}
  </head>`;
}

function fallbackHeader(lang) {
  const l = labels[lang];
  const prefix = lang === "kk" ? "/kk" : "";
  return `<div id="site-header">
      <header class="site-header">
        <div class="container header-inner">
          <a class="logo" href="${prefix}/" aria-label="ZANGER Consulting Group"><img class="logo-image" src="/assets/logo/zanger-logo-horizontal.webp" alt="ZANGER Consulting Group" width="1953" height="516"></a>
          <nav class="main-nav" aria-label="${htmlEscape(l.services)}">
            <a href="${prefix}/services/">${htmlEscape(l.services)}</a>
            <a href="${prefix}/#advantages">${htmlEscape(l.advantages)}</a>
            <a href="${prefix}/#about">${htmlEscape(l.about)}</a>
            <a href="${prefix}/#contacts">${htmlEscape(l.contacts)}</a>
          </nav>
        </div>
      </header>
    </div>`;
}

function fallbackFooter(lang) {
  const l = labels[lang];
  const prefix = lang === "kk" ? "/kk" : "";
  return `<div id="site-footer">
      <footer class="footer">
        <div class="container footer-grid">
          <div><img class="footer-logo" src="/assets/logo/zanger-logo-horizontal.webp" alt="ZANGER Consulting Group" width="1953" height="516"><p>${htmlEscape(l.footer)}</p></div>
          <div><h3>${htmlEscape(l.services)}</h3><a href="${prefix}/services/">${htmlEscape(l.allServices)}</a><a href="${prefix}/#contacts">${htmlEscape(l.contacts)}</a></div>
          <div><h3>${htmlEscape(l.contacts)}</h3><a href="tel:+77027771253">+7 702 777 12 53</a><a href="https://wa.me/77027771253">WhatsApp: +7 702 777 12 53</a><a href="mailto:zanger.consulting.group001@gmail.com">zanger.consulting.group001@gmail.com</a></div>
          <div><h3>${htmlEscape(l.services)}</h3><p>Астана, Алматы, Қаскелең, Шымкент</p><a href="${prefix}/privacy.html">${htmlEscape(l.privacy)}</a><a href="${prefix}/terms.html">${htmlEscape(l.terms)}</a></div>
        </div>
      </footer>
    </div>`;
}

function scripts() {
  return `    <script src="/js/config.js"></script>
    <script src="/js/services-data.js"></script>
    <script src="/js/i18n.js"></script>
    <script src="/js/layout.js"></script>
    <script src="/js/navigation.js"></script>
    <script src="/js/form.js"></script>
    <script src="/js/main.js"></script>`;
}

function serviceCards(services, lang, limit = services.length) {
  return services.slice(0, limit).map((base) => {
    const service = serviceFor(base, lang);
    return `            <article class="service-card">
              <i data-icon="${base.icon}"></i>
              <h3>${htmlEscape(service.title)}</h3>
              <p>${htmlEscape(service.description)}</p>
              <a href="${localizedPath(base, lang)}">${htmlEscape(labels[lang].more)}</a>
            </article>`;
  }).join("\n");
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "ZANGER Consulting Group",
    url: SITE,
    image: OG_IMAGE,
    telephone: "+77027771253",
    email: "zanger.consulting.group001@gmail.com",
    areaServed: ["Казахстан", "Астана", "Алматы", "Каскелен", "Шымкент"],
    address: [
      { "@type": "PostalAddress", addressLocality: "Астана", streetAddress: "проспект Мәңгілік Ел, 30, БЦ ASTANA PARTNERS", addressCountry: "KZ" },
      { "@type": "PostalAddress", addressLocality: "Алматы", streetAddress: "проспект Аль-Фараби, 5/2, ТЦ Jurek Tau, офис P1/P2", addressCountry: "KZ" },
      { "@type": "PostalAddress", addressLocality: "Каскелен", streetAddress: "ул. Момышулы, 10, бизнес-центр Тау, офис 310", addressCountry: "KZ" },
      { "@type": "PostalAddress", addressLocality: "Шымкент", streetAddress: "ул. Тәуке Хана, 93А", addressCountry: "KZ" }
    ]
  };
}

function serviceSchema(base, service, lang) {
  const url = `${SITE}${localizedPath(base, lang)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "LegalService", name: "ZANGER Consulting Group", url: SITE },
    areaServed: { "@type": "Country", name: lang === "kk" ? "Қазақстан" : "Казахстан" },
    url
  };
}

function breadcrumbSchema(base, service, lang) {
  const prefix = lang === "kk" ? "/kk" : "";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels[lang].home, item: `${SITE}${prefix}/` },
      { "@type": "ListItem", position: 2, name: labels[lang].services, item: `${SITE}${prefix}/services/` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE}${localizedPath(base, lang)}` }
    ]
  };
}

function catalogPage(services, lang) {
  const prefix = lang === "kk" ? "/kk" : "";
  const title = lang === "kk" ? "Қазақстандағы заң қызметтері | ZANGER Consulting Group" : "Юридические услуги в Казахстане | ZANGER Consulting Group";
  const description = lang === "kk"
    ? "ZANGER Consulting Group заң қызметтері: бизнесті сүйемелдеу, сотта қорғау, берешекті өндіріп алу, банкроттық, бизнесті тіркеу және шарттық жұмыс."
    : "Каталог юридических услуг ZANGER Consulting Group: сопровождение бизнеса, суды, взыскание задолженности, банкротство, регистрация бизнеса и договорная работа.";
  return `<!doctype html>
<html lang="${lang}">
${pageHead({ lang, title, description, canonical: `${SITE}${prefix}/services/`, alternateRu: `${SITE}/services/`, alternateKk: `${SITE}/kk/services/`, schema: [organizationSchema()] })}
  <body data-page="services">
    ${fallbackHeader(lang)}
    <main>
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">${htmlEscape(labels[lang].allServices)}</p>
          <h1>${htmlEscape(labels[lang].catalogTitle)}</h1>
          <p>${htmlEscape(labels[lang].catalogText)}</p>
        </div>
      </section>
      <section class="section section-soft">
        <div class="container">
          <div class="services-grid" data-services-grid>
${serviceCards(services, lang)}
          </div>
        </div>
      </section>
    </main>
    ${fallbackFooter(lang)}
${scripts()}
  </body>
</html>
`;
}

function servicePage(base, services, lang) {
  const service = serviceFor(base, lang);
  const meta = serviceMeta[base.slug] || {};
  const h1 = lang === "kk" ? meta.kkTitle || service.title : meta.ruTitle || service.title;
  const title = `${h1} | ZANGER Consulting Group`;
  const description = lang === "kk"
    ? meta.kkDescription || `${service.description} ZANGER Consulting Group кеңесі.`
    : meta.ruDescription || `${service.description} Консультация ZANGER Consulting Group.`;
  const prefix = lang === "kk" ? "/kk" : "";
  const related = services.filter((item) => item.slug !== base.slug).slice(0, 3);
  const canonical = `${SITE}${localizedPath(base, lang)}`;
  const alternateRu = `${SITE}${localizedPath(base, "ru")}`;
  const alternateKk = `${SITE}${localizedPath(base, "kk")}`;
  return `<!doctype html>
<html lang="${lang}">
${pageHead({ lang, title, description, canonical, alternateRu, alternateKk, type: "article", schema: [serviceSchema(base, service, lang), breadcrumbSchema(base, service, lang)] })}
  <body data-page="service-static">
    ${fallbackHeader(lang)}
    <main>
      <section class="service-hero section-animate is-visible">
        <div class="container service-hero-grid">
          <div class="service-hero-copy">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="${prefix}/">${htmlEscape(labels[lang].home)}</a>
              <span>${htmlEscape(labels[lang].services)}</span>
            </nav>
            <p class="eyebrow">${htmlEscape(labels[lang].services)}</p>
            <h1>${htmlEscape(h1)}</h1>
            <p>${htmlEscape(service.description)}</p>
            <div class="service-hero-actions">
              <button class="btn btn-dark" data-open-modal type="button">${htmlEscape(labels[lang].consult)}</button>
              <a class="btn btn-outline" href="${prefix}/services/">${htmlEscape(labels[lang].allServices)}</a>
            </div>
          </div>
          <aside class="service-summary">
            <i data-icon="${base.icon}"></i>
            <h2>${htmlEscape(labels[lang].included)}</h2>
            <ul>${service.tasks.map((task) => `<li>${htmlEscape(task)}</li>`).join("")}</ul>
          </aside>
        </div>
      </section>
      <section class="section service-body section-animate is-visible">
        <div class="container service-body-grid">
          <article class="detail-card detail-card-large">
            <p class="eyebrow">${htmlEscape(labels[lang].services)}</p>
            <h2>${htmlEscape(labels[lang].tasks)}</h2>
            <ul class="premium-list">${service.tasks.map((task) => `<li>${htmlEscape(task)}</li>`).join("")}</ul>
          </article>
          <article class="detail-card detail-card-large">
            <p class="eyebrow">${htmlEscape(labels[lang].services)}</p>
            <h2>${htmlEscape(labels[lang].process)}</h2>
            <ol class="numbered-list">${service.steps.map((step) => `<li><span>${htmlEscape(step)}</span></li>`).join("")}</ol>
          </article>
        </div>
      </section>
      <section class="service-cta section-animate is-visible">
        <div class="container service-cta-grid">
          <div>
            <p class="eyebrow">${htmlEscape(labels[lang].consult)}</p>
            <h2>${htmlEscape(labels[lang].ctaTitle)}</h2>
            <p>${htmlEscape(labels[lang].ctaText)}</p>
          </div>
          <button class="btn btn-dark" data-open-modal type="button">${htmlEscape(labels[lang].consult)}</button>
        </div>
      </section>
      <section class="section section-soft service-related section-animate is-visible">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">${htmlEscape(labels[lang].allServices)}</p>
            <h2>${htmlEscape(lang === "kk" ? "Ұқсас заң қызметтері" : "Похожие юридические услуги")}</h2>
          </div>
          <div class="services-grid service-related-grid">
${serviceCards(related, lang)}
          </div>
        </div>
      </section>
    </main>
    ${fallbackFooter(lang)}
${scripts()}
  </body>
</html>
`;
}

function kkHome(services) {
  const title = "Қазақстандағы заң қызметтері | ZANGER Consulting Group";
  const description = "Бизнес пен жеке клиенттерге заңгерлік көмек: ИП, ЖШС және АҚ тіркеу, сотта қорғау, берешекті өндіріп алу, банкроттық және шарттық жұмыс.";
  return `<!doctype html>
<html lang="kk">
${pageHead({ lang: "kk", title, description, canonical: `${SITE}/kk/`, alternateRu: `${SITE}/`, alternateKk: `${SITE}/kk/`, schema: [organizationSchema()] })}
  <body data-page="home">
    ${fallbackHeader("kk")}
    <main id="top">
      <section class="hero section-animate is-visible" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <p class="eyebrow">Мүддеңізді қорғау — біздің кәсібіміз</p>
            <h1>Қазақстандағы <span>бизнес пен жеке клиенттерге</span><br><span class="hero-line">арналған заң қызметтері</span></h1>
            <p class="hero-lead">Заң мәселелеріндегі сенімді серіктесіңіз: кеңес беру, сотта қорғау, берешекті өндіріп алу, банкроттық, бизнесті тіркеу және шарттық жұмыс.</p>
            <div class="hero-actions">
              <a class="btn btn-dark hero-whatsapp" href="https://wa.me/77027771253" target="_blank" rel="noopener noreferrer">WhatsApp арқылы жазу</a>
              <a class="btn btn-outline" href="/kk/services/">Негізгі қызметтер</a>
            </div>
          </div>
          <div class="hero-photo" aria-label="ZANGER Consulting Group командасы">
            <picture>
              <source media="(max-width: 768px)" srcset="/assets/images/hero-team-mobile-centered.webp" type="image/webp">
              <source srcset="/assets/images/hero-team.webp" type="image/webp">
              <img src="/assets/images/hero-team.webp" alt="ZANGER Consulting Group командасы" width="1672" height="941">
            </picture>
          </div>
        </div>
      </section>
      <section class="section section-soft section-animate is-visible" id="services">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">Негізгі қызметтер</p>
            <h2>Біз өз мойнымызға алатын заң міндеттері</h2>
          </div>
          <div class="services-grid" data-services-grid data-limit="6">
${serviceCards(services, "kk", 6)}
          </div>
        </div>
      </section>
      <section class="advantages section-animate is-visible" id="advantages">
        <div class="container advantages-grid">
          <div class="advantages-heading">
            <p class="eyebrow">Артықшылықтар</p>
            <h2>Заң мәселелеріндегі сенімді серіктесіңіз</h2>
          </div>
          <article><i data-icon="shield"></i><h3>Жеке стратегия</h3><p>Жағдайды талдап, артық уәдесіз түсінікті әрекет жоспарын ұсынамыз.</p></article>
          <article><i data-icon="lock"></i><h3>Құпиялылық</h3><p>Құжаттармен, келіссөздермен және сезімтал ақпаратпен мұқият жұмыс істейміз.</p></article>
          <article><i data-icon="map"></i><h3>Төрт қаладағы өкілдіктер</h3><p>Клиенттерді Астана, Алматы, Қаскелең және Шымкент қалаларында қабылдаймыз.</p></article>
        </div>
      </section>
      <section class="section about section-animate is-visible" id="about">
        <div class="container about-grid">
          <div class="about-panel" aria-label="ZANGER Consulting Group командасы">
            <img src="/assets/images/about-team.webp" alt="ZANGER Consulting Group командасы" width="1672" height="941">
          </div>
          <div class="about-copy">
            <p class="eyebrow">Компания туралы</p>
            <h2>Сот жүйесін ішінен білеміз</h2>
            <p>«Zanger Consulting Group» — бірегей сарапшылар командасын біріктірген жетекші заң компаниясы. Біздің мамандар қатарында бұрынғы судьялар, прокуратураның бұрынғы қызметкерлері, адвокаттар және сот процестерін жүргізуде мол тәжірибесі бар заң кеңесшілері бар.</p>
            <p>Құқық қорғау және сот жүйелерінің жұмысын «ішінен» терең түсінуіміздің арқасында біз күрделі құқықтық жағдайларда тиімді шешімдер табуға көмектесеміз.</p>
            <div class="principles">
              <span>Клиент мүддесі үшін</span>
              <span>Жеке стратегия</span>
              <span>Құпиялылық</span>
              <span>Түсінікті тіл</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section contact-consult section-animate is-visible" id="contacts">
        <div class="container">
          <div class="section-title">
            <p class="eyebrow">Өкілдіктер және кеңес</p>
            <h2>Бізбен өзіңізге ыңғайлы тәсілмен байланысыңыз</h2>
          </div>
          <div class="contacts-grid">
            <article class="contact-card contact-card-main"><h3>Астана</h3><p>Астана қ., Мәңгілік Ел даңғылы, 30, ASTANA PARTNERS БО</p><a href="tel:+77027771253">+7 702 777 12 53</a></article>
            <article class="contact-card"><h3>Алматы</h3><p>Алматы қ., Әл-Фараби даңғылы, 5/2, «Jurek Tau» СҮ, P1/P2 кеңсе</p><a href="tel:+77027771253">+7 702 777 12 53</a></article>
            <article class="contact-card"><h3>Қаскелең</h3><p>Қаскелең қ., Момышұлы көшесі, 10, «Тау» бизнес-орталығы, 310 кеңсе</p><a href="tel:+77027771253">+7 702 777 12 53</a></article>
            <article class="contact-card"><h3>Шымкент</h3><p>Шымкент қ., Тәуке хан көшесі, 93А</p><a href="tel:+77027771253">+7 702 777 12 53</a></article>
          </div>
        </div>
      </section>
    </main>
    ${fallbackFooter("kk")}
${scripts()}
  </body>
</html>
`;
}

function legalPage(lang, kind) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? labels[lang].privacy : labels[lang].terms;
  const description = lang === "kk"
    ? isPrivacy ? "ZANGER Consulting Group сайтындағы деректерді өңдеу қағидалары." : "ZANGER Consulting Group сайтын пайдалану шарттары."
    : isPrivacy ? "Правила обработки данных на сайте ZANGER Consulting Group." : "Условия использования сайта ZANGER Consulting Group.";
  const prefix = lang === "kk" ? "/kk" : "";
  const body = lang === "kk"
    ? isPrivacy
      ? ["Сайт формалары арқылы жіберілген деректер клиентпен байланысу және заң сұрағына жауап дайындау үшін ғана пайдаланылады.", "Сайт өтінімдерді серверде сақтамайды: хабарлама пайдаланушы браузерінде қалыптасып, WhatsApp арқылы жіберіледі."]
      : ["Сайттағы ақпарат анықтамалық сипатта және жария оферта немесе іс бойынша нәтижеге кепілдік болып саналмайды.", "Құқықтық ұстаным алу үшін жеке кеңеске жүгіну қажет."]
    : isPrivacy
      ? ["Данные, отправленные через формы сайта, используются только для связи с клиентом и подготовки ответа на юридический запрос.", "Сайт не хранит заявки на сервере: сообщение формируется в браузере пользователя и передается через WhatsApp."]
      : ["Информация на сайте носит справочный характер и не является публичной офертой или гарантией результата по делу.", "Для получения правовой позиции необходимо обратиться за индивидуальной консультацией."];
  return `<!doctype html>
<html lang="${lang}">
${pageHead({ lang, title: `${title} | ZANGER Consulting Group`, description, canonical: `${SITE}${prefix}/${kind}.html`, alternateRu: `${SITE}/${kind}.html`, alternateKk: `${SITE}/kk/${kind}.html` })}
  <body data-page="legal-static">
    ${fallbackHeader(lang)}
    <main class="legal-page container">
      <h1>${htmlEscape(title)}</h1>
      ${body.map((paragraph) => `<p>${htmlEscape(paragraph)}</p>`).join("\n      ")}
      <a class="btn btn-dark" href="${prefix}/">${htmlEscape(labels[lang].home)}</a>
    </main>
    ${fallbackFooter(lang)}
${scripts()}
  </body>
</html>
`;
}

function sitemap(services) {
  const urls = [
    "/",
    "/kk/",
    "/services/",
    "/kk/services/",
    "/privacy.html",
    "/terms.html",
    "/kk/privacy.html",
    "/kk/terms.html",
    ...services.flatMap((service) => [service.seoPath, `/kk${service.seoPath}`])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE}${url}</loc></url>`).join("\n")}
</urlset>
`;
}

function main() {
  const services = loadServices();
  write(path.join(ROOT, "services.html"), catalogPage(services, "ru"));
  write(path.join(ROOT, "services", "index.html"), catalogPage(services, "ru"));
  write(path.join(ROOT, "kk", "index.html"), kkHome(services));
  write(path.join(ROOT, "kk", "services", "index.html"), catalogPage(services, "kk"));
  write(path.join(ROOT, "privacy.html"), legalPage("ru", "privacy"));
  write(path.join(ROOT, "terms.html"), legalPage("ru", "terms"));
  write(path.join(ROOT, "kk", "privacy.html"), legalPage("kk", "privacy"));
  write(path.join(ROOT, "kk", "terms.html"), legalPage("kk", "terms"));

  services.forEach((service) => {
    write(path.join(ROOT, service.seoPath, "index.html"), servicePage(service, services, "ru"));
    write(path.join(ROOT, "kk", service.seoPath, "index.html"), servicePage(service, services, "kk"));
  });

  write(path.join(ROOT, "sitemap.xml"), sitemap(services));
  write(path.join(ROOT, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
}

main();
