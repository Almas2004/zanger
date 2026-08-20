(function () {
  const STORAGE_KEY = "zanger-language";
  const DEFAULT_LANG = "ru";
  const SUPPORTED = ["ru", "kk"];

  const dictionaries = {
    ru: {
      meta: {
        homeTitle: "ZANGER CONSULTING GROUP — юридические услуги в Казахстане",
        homeDescription: "ZANGER CONSULTING GROUP — юридическое сопровождение бизнеса и частных клиентов в Астане, Алматы, Каскелене и Шымкенте.",
        servicesTitle: "Услуги — ZANGER CONSULTING GROUP",
        servicesDescription: "Все юридические услуги ZANGER CONSULTING GROUP.",
        serviceTitle: "Услуга — ZANGER CONSULTING GROUP",
        serviceDescription: "Подробное описание юридической услуги ZANGER CONSULTING GROUP.",
        privacyTitle: "Политика конфиденциальности — ZANGER",
        termsTitle: "Пользовательское соглашение — ZANGER"
      },
      header: {
        navLabel: "Главная навигация",
        services: "Услуги",
        advantages: "Преимущества",
        about: "О компании",
        contacts: "Контакты",
        cta: "Получить консультацию",
        whatsapp: "Написать в WhatsApp",
        menu: "Открыть меню"
      },
      footer: {
        tagline: "Защита ваших интересов — наша профессия",
        nav: "Навигация",
        contacts: "Контакты",
        offices: "Офисы",
        hours: "Пн–Пт: 09:00–18:00",
        legalLabel: "Юридические ссылки",
        privacy: "Политика конфиденциальности",
        terms: "Пользовательское соглашение",
        toTop: "Наверх",
        whatsapp: "Написать в WhatsApp",
        modalText: "Заполните форму, и мы подготовим сообщение для WhatsApp."
      },
      home: {
        heroEyebrow: "Защита ваших интересов — наша профессия",
        heroTitle: 'Ваш <span>надёжный партнёр</span><br><span class="hero-line">в юридических вопросах</span>',
        heroLead: "Юридическое сопровождение бизнеса и частных клиентов: консультации, судебная защита, взыскание задолженности, банкротство и договорная работа.",
        heroCta: "Написать в WhatsApp",
        heroWhatsappMessage: "Здравствуйте! Хочу получить юридическую консультацию.",
        heroWhatsappAria: "Написать в WhatsApp для получения юридической консультации",
        heroWhatsappTitle: "Написать в WhatsApp",
        heroServices: "Основные услуги",
        badgeStrategy: "Правовая стратегия",
        badgePrivacy: "Конфиденциальность",
        badgeCities: "Работаем по всему Казахстану",
        servicesEyebrow: "Основные услуги",
        servicesTitle: "Юридические задачи, которые мы берём на себя",
        showAll: "Смотреть все услуги",
        advantagesEyebrow: "Преимущества",
        advantagesTitle: "Ваш надёжный партнёр в юридических вопросах",
        advantageOneTitle: "Персональная стратегия",
        advantageOneText: "Разбираем ситуацию и предлагаем понятный план действий без лишних обещаний.",
        advantageTwoTitle: "Конфиденциальность",
        advantageTwoText: "Деликатно работаем с документами, переговорами и чувствительной информацией.",
        advantageThreeTitle: "Представительства в четырёх городах",
        advantageThreeText: "Принимаем клиентов в Астане, Алматы, Каскелене и Шымкенте.",
        aboutImageLabel: "Команда ZANGER Consulting Group",
        aboutImageAlt: "Команда ZANGER Consulting Group",
        aboutEyebrow: "О компании",
        aboutTitle: "Знаем судебную систему изнутри",
        aboutTextOne: "«Zanger Consulting Group» — ведущая юридическая компания, объединившая уникальную команду экспертов. Среди наших специалистов — экс-судьи, бывшие сотрудники прокуратуры, адвокаты и юрисконсульты с колоссальным опытом ведения судебных процессов. Благодаря глубокому пониманию работы правоохранительной и судебной систем «изнутри», мы находим эффективные решения даже в самых сложных и нестандартных правовых ситуациях. Наша главная цель — безупречная защита интересов вашего бизнеса.",
        aboutTextTwo: "«Знаем судебную систему изнутри» — это снимает главный страх клиента перед непредсказуемостью судов. «Прогнозируем исход дела с высокой точностью» — за счёт опыта судейства мы видим слабые места в любой позиции. «Защита на 360 градусов» — от гражданских споров до уголовно-правовой защиты бизнеса.",
        aboutTextFour: "Ведение гражданских и уголовных дел.",
        principleOne: "В интересах клиента",
        principleTwo: "Индивидуальная стратегия",
        principleThree: "Конфиденциальность",
        principleFour: "Понятный язык",
        contactsEyebrow: "Представительства и консультация",
        contactsTitle: "Свяжитесь с нами удобным способом",
        consultationEyebrow: "Консультация",
        consultationTitle: "Нужна юридическая помощь?",
        consultationText: "Опишите ситуацию, и мы подготовим сообщение для связи через WhatsApp.",
        submit: "Отправить заявку"
      },
      servicesPage: {
        eyebrow: "Все услуги",
        title: "Юридическая поддержка для бизнеса и частных клиентов",
        text: "Выберите направление, чтобы посмотреть подробности и отправить заявку.",
        catalogEyebrow: "Полный каталог",
        catalogTitle: "Услуги по категориям",
        catalogText: "Список сгруппирован по направлениям, чтобы быстро найти нужный запрос и написать нам в WhatsApp.",
        itemCount: "услуг",
        writeWhatsapp: "Написать в WhatsApp"
      },
      servicePage: {
        home: "Главная",
        services: "Услуги",
        breadcrumbLabel: "Хлебные крошки",
        eyebrow: "Юридическая услуга",
        consultation: "Получить консультацию",
        allServices: "Все услуги",
        included: "Что входит в работу",
        tasksEyebrow: "Задачи",
        tasksTitle: "Какие вопросы решаем",
        processEyebrow: "Процесс",
        processTitle: "Как проходит работа",
        ctaEyebrow: "Консультация",
        ctaTitle: "Разберём вашу ситуацию и предложим следующий шаг",
        ctaText: "Опишите задачу, город и удобный способ связи. Сообщение будет сформировано для WhatsApp.",
        ctaButton: "Написать в WhatsApp",
        relatedEyebrow: "Похожие направления",
        relatedTitle: "Другие услуги ZANGER Consulting Group",
        more: "Подробнее →"
      },
      forms: {
        servicePlaceholder: "Интересующая услуга",
        serviceAria: "Интересующая услуга",
        name: "Ваше имя",
        city: "Город",
        message: "Описание вопроса",
        agree: "Согласен с политикой конфиденциальности",
        error: "Заполните имя, корректный телефон, описание вопроса и согласие.",
        whatsappGreeting: "Здравствуйте! Хочу получить юридическую консультацию.",
        fieldName: "Имя",
        fieldPhone: "Телефон",
        fieldCity: "Город",
        fieldService: "Услуга",
        fieldMessage: "Описание ситуации",
        notSpecified: "не указан",
        notSelected: "не выбрана"
      },
      contacts: { map: "Открыть на карте" },
      legal: {
        privacyTitle: "Политика конфиденциальности",
        privacyOne: "Данные, отправленные через формы сайта, используются только для связи с клиентом и подготовки ответа на юридический запрос.",
        privacyTwo: "Сайт не хранит заявки на сервере: сообщение формируется в браузере пользователя и передается через WhatsApp.",
        termsTitle: "Пользовательское соглашение",
        termsOne: "Информация на сайте носит справочный характер и не является публичной офертой или гарантией результата по делу.",
        termsTwo: "Для получения правовой позиции необходимо обратиться за индивидуальной консультацией.",
        home: "На главную"
      }
    },
    kk: {
      meta: {
        homeTitle: "ZANGER CONSULTING GROUP — Қазақстандағы заң қызметтері",
        homeDescription: "ZANGER CONSULTING GROUP — Астана, Алматы, Қаскелең және Шымкенттегі бизнес пен жеке клиенттерге заңгерлік сүйемелдеу.",
        servicesTitle: "Қызметтер — ZANGER CONSULTING GROUP",
        servicesDescription: "ZANGER CONSULTING GROUP ұсынатын барлық заң қызметтері.",
        serviceTitle: "Қызмет — ZANGER CONSULTING GROUP",
        serviceDescription: "ZANGER CONSULTING GROUP заң қызметінің толық сипаттамасы.",
        privacyTitle: "Құпиялылық саясаты — ZANGER",
        termsTitle: "Пайдаланушы келісімі — ZANGER"
      },
      header: {
        navLabel: "Негізгі навигация",
        services: "Қызметтер",
        advantages: "Артықшылықтар",
        about: "Компания туралы",
        contacts: "Байланыс",
        cta: "Кеңес алу",
        whatsapp: "WhatsApp арқылы жазу",
        menu: "Мәзірді ашу"
      },
      footer: {
        tagline: "Мүддеңізді қорғау — біздің кәсібіміз",
        nav: "Навигация",
        contacts: "Байланыс",
        offices: "Кеңселер",
        hours: "Дс–Жм: 09:00–18:00",
        legalLabel: "Заңды сілтемелер",
        privacy: "Құпиялылық саясаты",
        terms: "Пайдаланушы келісімі",
        toTop: "Жоғары",
        whatsapp: "WhatsApp-қа жазу",
        modalText: "Форманы толтырыңыз, біз WhatsApp үшін хабарламаны дайындаймыз."
      },
      home: {
        heroEyebrow: "Мүддеңізді қорғау — біздің кәсібіміз",
        heroTitle: 'Сіздің <span>сенімді серіктесіңіз</span><br><span class="hero-line">заң мәселелерінде</span>',
        heroLead: "Бизнес пен жеке клиенттерді заңгерлік сүйемелдеу: кеңес беру, сотта қорғау, берешекті өндіріп алу, банкроттық және шарттық жұмыс.",
        heroCta: "WhatsApp арқылы жазу",
        heroWhatsappMessage: "Сәлеметсіз бе! Заңгерлік консультация алғым келеді.",
        heroWhatsappAria: "Заңгерлік консультация алу үшін WhatsApp арқылы жазу",
        heroWhatsappTitle: "WhatsApp арқылы жазу",
        heroServices: "Негізгі қызметтер",
        badgeStrategy: "Құқықтық стратегия",
        badgePrivacy: "Құпиялылық",
        badgeCities: "Қазақстан бойынша жұмыс істейміз",
        servicesEyebrow: "Негізгі қызметтер",
        servicesTitle: "Біз өз мойнымызға алатын заң міндеттері",
        showAll: "Барлық қызметтерді көру",
        advantagesEyebrow: "Артықшылықтар",
        advantagesTitle: "Заң мәселелеріндегі сенімді серіктесіңіз",
        advantageOneTitle: "Жеке стратегия",
        advantageOneText: "Жағдайды талдап, артық уәдесіз түсінікті әрекет жоспарын ұсынамыз.",
        advantageTwoTitle: "Құпиялылық",
        advantageTwoText: "Құжаттармен, келіссөздермен және сезімтал ақпаратпен мұқият жұмыс істейміз.",
        advantageThreeTitle: "Төрт қаладағы өкілдіктер",
        advantageThreeText: "Клиенттерді Астана, Алматы, Қаскелең және Шымкент қалаларында қабылдаймыз.",
        aboutImageLabel: "ZANGER Consulting Group командасы",
        aboutImageAlt: "ZANGER Consulting Group командасы",
        aboutEyebrow: "Компания туралы",
        aboutTitle: "Сот жүйесін ішінен білеміз",
        aboutTextOne: "«Zanger Consulting Group» — бірегей сарапшылар командасын біріктірген жетекші заң компаниясы. Біздің мамандар қатарында бұрынғы судьялар, прокуратураның бұрынғы қызметкерлері, адвокаттар және сот процестерін жүргізуде мол тәжірибесі бар заң кеңесшілері бар. Құқық қорғау және сот жүйелерінің жұмысын «ішінен» терең түсінуіміздің арқасында біз ең күрделі және стандартты емес құқықтық жағдайларда да тиімді шешімдер табамыз. Басты мақсатымыз — бизнесіңіздің мүдделерін мінсіз қорғау.",
        aboutTextTwo: "«Сот жүйесін ішінен білеміз» — бұл клиенттің соттардың болжап болмайтындығына қатысты негізгі алаңдаушылығын азайтады. «Істің нәтижесін жоғары дәлдікпен болжаймыз» — судьялық тәжірибе кез келген ұстанымның әлсіз тұстарын көруге мүмкіндік береді. «360 градус қорғаныс» — азаматтық даулардан бастап бизнесті қылмыстық-құқықтық қорғауға дейін.",
        aboutTextFour: "Азаматтық және қылмыстық істерді жүргізу.",
        principleOne: "Клиент мүддесі үшін",
        principleTwo: "Жеке стратегия",
        principleThree: "Құпиялылық",
        principleFour: "Түсінікті тіл",
        contactsEyebrow: "Өкілдіктер және кеңес",
        contactsTitle: "Бізбен өзіңізге ыңғайлы тәсілмен байланысыңыз",
        consultationEyebrow: "Кеңес",
        consultationTitle: "Заңгерлік көмек қажет пе?",
        consultationText: "Жағдайыңызды сипаттаңыз, біз WhatsApp арқылы байланысуға арналған хабарламаны дайындаймыз.",
        submit: "Өтінімді жіберу"
      },
      servicesPage: {
        eyebrow: "Барлық қызметтер",
        title: "Бизнес пен жеке клиенттерге арналған заңгерлік қолдау",
        text: "Толық ақпаратты көру және өтінім жіберу үшін бағытты таңдаңыз.",
        catalogEyebrow: "Толық каталог",
        catalogTitle: "Қызметтер санаттар бойынша",
        catalogText: "Қажетті сұрауды тез табу және WhatsApp арқылы жазу үшін қызметтер бағыттар бойынша топтастырылды.",
        itemCount: "қызмет",
        writeWhatsapp: "WhatsApp арқылы жазу"
      },
      servicePage: {
        home: "Басты бет",
        services: "Қызметтер",
        breadcrumbLabel: "Навигациялық жол",
        eyebrow: "Заң қызметі",
        consultation: "Кеңес алу",
        allServices: "Барлық қызметтер",
        included: "Жұмысқа не кіреді",
        tasksEyebrow: "Міндеттер",
        tasksTitle: "Қандай мәселелерді шешеміз",
        processEyebrow: "Процесс",
        processTitle: "Жұмыс қалай өтеді",
        ctaEyebrow: "Кеңес",
        ctaTitle: "Жағдайыңызды талдап, келесі қадамды ұсынамыз",
        ctaText: "Міндетті, қаланы және ыңғайлы байланыс тәсілін жазыңыз. Хабарлама WhatsApp үшін қалыптастырылады.",
        ctaButton: "WhatsApp-қа жазу",
        relatedEyebrow: "Ұқсас бағыттар",
        relatedTitle: "ZANGER Consulting Group басқа қызметтері",
        more: "Толығырақ →"
      },
      forms: {
        servicePlaceholder: "Қызықтыратын қызмет",
        serviceAria: "Қызықтыратын қызмет",
        name: "Атыңыз",
        city: "Қала",
        message: "Сұрақтың сипаттамасы",
        agree: "Құпиялылық саясатымен келісемін",
        error: "Атыңызды, дұрыс телефонды, сұрақ сипаттамасын және келісімді толтырыңыз.",
        whatsappGreeting: "Сәлеметсіз бе! Заңгерлік кеңес алғым келеді.",
        fieldName: "Аты",
        fieldPhone: "Телефон",
        fieldCity: "Қала",
        fieldService: "Қызмет",
        fieldMessage: "Жағдай сипаттамасы",
        notSpecified: "көрсетілмеген",
        notSelected: "таңдалмаған"
      },
      contacts: { map: "Картадан ашу" },
      legal: {
        privacyTitle: "Құпиялылық саясаты",
        privacyOne: "Сайт формалары арқылы жіберілген деректер клиентпен байланысу және заң сұрағына жауап дайындау үшін ғана пайдаланылады.",
        privacyTwo: "Сайт өтінімдерді серверде сақтамайды: хабарлама пайдаланушы браузерінде қалыптасып, WhatsApp арқылы жіберіледі.",
        termsTitle: "Пайдаланушы келісімі",
        termsOne: "Сайттағы ақпарат анықтамалық сипатта және жария оферта немесе іс бойынша нәтижеге кепілдік болып саналмайды.",
        termsTwo: "Құқықтық ұстаным алу үшін жеке кеңеске жүгіну қажет.",
        home: "Басты бетке"
      }
    }
  };

  const serviceTranslations = {
    kk: {
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
    }
  };

  const serviceCatalog = [
    {
      id: "business-registration",
      title: {
        ru: "Регистрация, перерегистрация и ликвидация бизнеса",
        kk: "Бизнесті тіркеу, қайта тіркеу және тарату"
      },
      items: [
        { ru: "Регистрация ИП", kk: "ЖК тіркеу" },
        { ru: "Регистрация ТОО", kk: "ЖШС тіркеу" },
        { ru: "Регистрация ТОО с иностранным участием", kk: "Шетелдік қатысуы бар ЖШС тіркеу" },
        { ru: "Регистрация АО", kk: "АҚ тіркеу" },
        { ru: "Регистрация филиала юридического лица", kk: "Заңды тұлғаның филиалын тіркеу" },
        { ru: "Регистрация некоммерческих организаций", kk: "Коммерциялық емес ұйымдарды тіркеу" },
        { ru: "Регистрация проспекта выпуска акций", kk: "Акциялар шығарылымы проспектісін тіркеу" },
        { ru: "Реорганизация юридического лица", kk: "Заңды тұлғаны қайта ұйымдастыру" },
        { ru: "Перерегистрация юридического лица", kk: "Заңды тұлғаны қайта тіркеу" },
        { ru: "Ликвидация юридического лица", kk: "Заңды тұлғаны тарату" },
        { ru: "Ликвидация филиала или представительства", kk: "Филиалды немесе өкілдікті тарату" },
        { ru: "Ликвидация ИП", kk: "ЖК-ні тарату" },
        { ru: "Перерегистрация АО", kk: "АҚ-ны қайта тіркеу" },
        { ru: "Регистрация объединения собственников имущества (ОСИ)", kk: "Мүлік иелері бірлестігін (МИБ) тіркеу" }
      ]
    },
    {
      id: "registration-actions",
      title: {
        ru: "Регистрационные и прочие действия",
        kk: "Тіркеу және өзге де әрекеттер"
      },
      items: [
        { ru: "Получение БИН для нерезидентов", kk: "Бейрезиденттер үшін БСН алу" },
        { ru: "Получение ИИН для нерезидентов", kk: "Бейрезиденттер үшін ЖСН алу" },
        { ru: "Получение ЭЦП", kk: "ЭЦҚ алу" },
        { ru: "Регистрация кассового аппарата", kk: "Бақылау-касса аппаратын тіркеу" },
        { ru: "Смена руководителя юридического лица", kk: "Заңды тұлғаның басшысын ауыстыру" },
        { ru: "Увеличение уставного капитала", kk: "Жарғылық капиталды ұлғайту" },
        { ru: "Регистрация товарного знака", kk: "Тауар белгісін тіркеу" },
        { ru: "Содействие в открытии банковского счёта", kk: "Банк шотын ашуға жәрдемдесу" },
        { ru: "Получение апостиля на документах", kk: "Құжаттарға апостиль алу" },
        { ru: "Получение лицензии на охранную деятельность", kk: "Күзет қызметіне лицензия алу" }
      ]
    },
    {
      id: "legal-support",
      title: {
        ru: "Юридическое сопровождение",
        kk: "Заңгерлік сүйемелдеу"
      },
      items: [
        { ru: "Юридический аутсорсинг", kk: "Заңгерлік аутсорсинг" },
        { ru: "Сопровождение сделок", kk: "Мәмілелерді сүйемелдеу" },
        { ru: "Юридические консультации", kk: "Заңгерлік консультациялар" },
        { ru: "Разработка договоров", kk: "Шарттарды әзірлеу" },
        { ru: "Сдача отчёта об итогах размещения акций", kk: "Акцияларды орналастыру қорытындылары туралы есепті тапсыру" },
        { ru: "Сдача отчёта о корпоративных событиях в ДФО", kk: "Қаржылық есептілік депозитарийіне корпоративтік оқиғалар туралы есепті тапсыру" },
        { ru: "Правовой аудит", kk: "Құқықтық аудит" },
        { ru: "Сдача отчёта об аффилированных лицах", kk: "Үлестес тұлғалар туралы есепті тапсыру" },
        { ru: "Внесение изменений и дополнений в проспект выпуска объявленных акций", kk: "Жарияланған акциялар шығарылымының проспектісіне өзгерістер мен толықтырулар енгізу" },
        { ru: "Сопровождение сделок с недвижимостью", kk: "Жылжымайтын мүлікпен мәмілелерді сүйемелдеу" },
        { ru: "Проверка контрагентов на благонадёжность", kk: "Контрагенттердің сенімділігін тексеру" }
      ]
    },
    {
      id: "court-representation",
      title: {
        ru: "Судебное представительство",
        kk: "Сотта өкілдік ету"
      },
      items: [
        { ru: "Взыскание долгов", kk: "Берешекті өндіріп алу" },
        { ru: "Семейные споры", kk: "Отбасылық даулар" },
        { ru: "Защита прав заёмщиков", kk: "Қарыз алушылардың құқықтарын қорғау" },
        { ru: "Хозяйственные споры", kk: "Шаруашылық даулар" },
        { ru: "Трудовые споры", kk: "Еңбек даулары" },
        { ru: "Гражданско-правовые споры", kk: "Азаматтық-құқықтық даулар" },
        { ru: "Банкротство", kk: "Банкроттық" },
        { ru: "Споры с государственными органами", kk: "Мемлекеттік органдармен даулар" },
        { ru: "Споры в сфере недвижимости и земельных отношений", kk: "Жылжымайтын мүлік және жер қатынастары саласындағы даулар" },
        { ru: "Взыскание задолженности в рамках судебного производства", kk: "Сот өндірісі шеңберінде берешекті өндіріп алу" }
      ]
    }
  ];

  const officeTranslations = {
    kk: {
      "Астана": {
        city: "Астана",
        address: "Астана қ., Мәңгілік Ел даңғылы, 30, ASTANA PARTNERS БО"
      },
      "Алматы": {
        city: "Алматы",
        address: "Алматы қ., Әл-Фараби даңғылы, 5/2, «Jurek Tau» СҮ, P1/P2 кеңсе"
      },
      "Каскелен": {
        city: "Қаскелең",
        address: "Қаскелең қ., Момышұлы көшесі, 10, «Тау» бизнес-орталығы, 310 кеңсе"
      },
      "Шымкент": {
        city: "Шымкент",
        address: "Шымкент қ., Тәуке хан көшесі, 93А"
      }
    }
  };

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(fromUrl) ? fromUrl : SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    const next = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, next);
    window.ZANGER_I18N.lang = next;
    applyTranslations();
    window.ZANGER_LAYOUT?.renderHeader?.();
    window.ZANGER_LAYOUT?.renderFooter?.();
    window.ZANGER_FORM?.fillSelects?.();
    window.ZANGER_SERVICE_PAGE?.render?.();
    window.ZANGER_MAIN?.refresh?.();
    window.ZANGER_NAV?.bind?.();
  }

  function t(path) {
    return path.split(".").reduce((acc, key) => acc && acc[key], dictionaries[window.ZANGER_I18N.lang]) || path;
  }

  function service(service) {
    return { ...service, ...(serviceTranslations[window.ZANGER_I18N.lang]?.[service.slug] || {}) };
  }

  function services() {
    return (window.ZANGER_SERVICES || []).map(service);
  }

  function catalog() {
    return serviceCatalog.map((category) => ({
      id: category.id,
      title: category.title[window.ZANGER_I18N.lang],
      items: category.items.map((item) => item[window.ZANGER_I18N.lang])
    }));
  }

  function offices() {
    return (window.ZANGER_CONFIG?.offices || []).map((office) => ({
      ...office,
      ...(officeTranslations[window.ZANGER_I18N.lang]?.[office.city] || {})
    }));
  }

  function applyTranslations(root = document) {
    document.documentElement.lang = window.ZANGER_I18N.lang;
    root.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
    root.querySelectorAll("[data-i18n-html]").forEach((node) => { node.innerHTML = t(node.dataset.i18nHtml); });
    root.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    root.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", t(node.dataset.i18nAria)); });
    root.querySelectorAll("[data-i18n-alt]").forEach((node) => { node.alt = t(node.dataset.i18nAlt); });
    root.querySelectorAll("[data-i18n-content]").forEach((node) => { node.setAttribute("content", t(node.dataset.i18nContent)); });
    root.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langButton === window.ZANGER_I18N.lang);
      button.setAttribute("aria-pressed", String(button.dataset.langButton === window.ZANGER_I18N.lang));
    });
    updatePageChrome();
  }

  function updatePageChrome() {
    const page = document.body?.dataset.page;
    const titleKeys = {
      home: "meta.homeTitle",
      services: "meta.servicesTitle",
      service: "meta.serviceTitle",
      privacy: "meta.privacyTitle",
      terms: "meta.termsTitle"
    };
    const descriptionKeys = {
      home: "meta.homeDescription",
      services: "meta.servicesDescription",
      service: "meta.serviceDescription"
    };
    if (titleKeys[page]) document.title = t(titleKeys[page]);
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && descriptionKeys[page]) descriptionMeta.setAttribute("content", t(descriptionKeys[page]));
  }

  function bindLanguageButtons(root = document) {
    root.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", () => setLang(button.dataset.langButton));
    });
  }

  window.ZANGER_I18N = {
    lang: getLang(),
    t,
    setLang,
    applyTranslations,
    bindLanguageButtons,
    service,
    services,
    catalog,
    offices
  };
})();
