import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { fr } from "@/assets/translations/fr";
import { en } from "@/assets/translations/en";

i18next
  // detect user language, see: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next, for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    defaultNS: "pages",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        pages: fr,
      },
      en: {
        pages: en,
      },
    },
    react: {
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },
  });

export default i18next;
