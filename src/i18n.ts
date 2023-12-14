import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locale/en.json';
import roJSON from './locale/ro.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    ro: { ...roJSON },
  },
  lng: "en", // Set the initial language of the App
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});