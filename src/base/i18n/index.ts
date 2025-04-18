import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {},
  lng: "en",
  fallbackLng: ["en", "ar"],
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
