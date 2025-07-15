import type { CookieConsentConfig } from "vanilla-cookieconsent";

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "bar",
      position: "bottom",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log("onFirstAction fired");
  },

  onConsent: function ({ cookie }) {
    console.log("onConsent fired", cookie);

    window.gtag &&
      window.gtag("consent", "update", {
        analytics_storage: cookie.categories.includes("analytics")
          ? "granted"
          : "denied",
        ad_storage: cookie.categories.includes("marketing")
          ? "granted"
          : "denied",
      });
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log("onChange fired", changedCategories, cookie);

    window.gtag &&
      window.gtag("consent", "update", {
        analytics_storage: cookie.categories.includes("analytics")
          ? "granted"
          : "denied",
        ad_storage: cookie.categories.includes("marketing")
          ? "granted"
          : "denied",
      });
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    functionality: { enabled: true },
    analytics: { enabled: true },
    marketing: { enabled: true },
  },

  language: {
    default: "en",

    translations: {
      en: {
        consentModal: {
          title: "Этот веб-сайт использует файлы cookie",
          description:
            "Мы используем файлы cookie для персонализации контента и рекламы, предоставления функций социальных сетей и анализа нашего трафика. Мы также делимся информацией о том, как вы используете наш сайт, с нашими партнерами по социальным сетям, рекламе и аналитике, которые могут объединять ее с другой информацией, которую вы им предоставили или которую они собрали в результате использования вами их услуг.",
          acceptAllBtn: "Принять все",
          acceptNecessaryBtn: "Отклонить все",
          showPreferencesBtn: "Управление настройками",
        },
        preferencesModal: {
          title: "Настройки файлов cookie",
          acceptAllBtn: "Принять все",
          acceptNecessaryBtn: "Отклонить все",
          savePreferencesBtn: "Сохранить настройки",
          closeIconLabel: "Закрыть",
          sections: [
            {
              title: "Использование файлов cookie",
              description:
                "Файлы cookie — это небольшие текстовые файлы, которые веб-сайты могут использовать для повышения эффективности работы пользователя.\n\nЗакон гласит, что мы можем хранить файлы cookie на вашем устройстве, если они строго необходимы для работы этого сайта. Для всех остальных типов файлов cookie нам требуется ваше разрешение.\n\nЭтот сайт использует различные типы файлов cookie. Некоторые файлы cookie размещаются сторонними службами, которые отображаются на наших страницах.\n\nВы можете в любое время изменить или отозвать свое согласие из Заявления о файлах cookie на нашем веб-сайте.",
            },
            {
              title:
                'Строго необходимые файлы cookie <span class="pm__badge">Всегда включены</span>',
              description:
                "Необходимые файлы cookie помогают сделать веб-сайт пригодным для использования, обеспечивая базовые функции, такие как навигация по страницам и доступ к защищенным областям веб-сайта. Веб-сайт не может нормально функционировать без этих файлов cookie.",
              linkedCategory: "necessary",
            },
            {
              title: "Функциональные файлы cookie",
              description:
                "Функциональные файлы cookie позволяют веб-сайту запоминать информацию, которая изменяет его поведение или внешний вид, например, ваш предпочитаемый язык или регион, в котором вы находитесь.",
              linkedCategory: "functionality",
            },
            {
              title: "Аналитические файлы cookie",
              description:
                "Аналитические файлы cookie помогают владельцам веб-сайтов понять, как посетители взаимодействуют с веб-сайтами, собирая и сообщая информацию анонимно.",
              linkedCategory: "analytics",
            },
            {
              title: "Маркетинговые файлы cookie",
              description:
                "Маркетинговые файлы cookie используются для отслеживания посетителей на разных веб-сайтах. Их цель — показывать рекламу, которая актуальна и интересна для отдельного пользователя, и, следовательно, более ценна для издателей и сторонних рекламодателей.",
              linkedCategory: "marketing",
            },
            {
              title: "Дополнительная информация",
              description:
                'По любым вопросам, касающимся моей политики в отношении файлов cookie и ваших вариантов выбора, пожалуйста, <a class="cc__link" href="https://t.me/EvgeniiaOrlova">свяжитесь со мной</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
