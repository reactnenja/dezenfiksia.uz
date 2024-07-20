import i18n from "i18next";
import laungageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locales/en.json";
import ruTranslation from "../public/locales/ru.json";
import uzTranslation from "../public/locales/uz.json";

const laungage = localStorage.getItem("i18nextLng") || "uz";

i18n.use(Backend)
    //tilni aniqlab beradi.
    .use(laungageDetector)
    //bog'lanish
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: laungage,
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
            ru: { translation: ruTranslation },
        },
    });

export default i18n;
