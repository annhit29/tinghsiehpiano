import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { detectLocale, DEFAULT_LOCALE } from "./locales/config";

// Import translation files directly so they are bundled (no async HTTP fetching).
// This ensures translations are available synchronously on first render — no hydration mismatch.
import enCalendar from "./locales/en/calendar.json";
import frCalendar from "./locales/fr/calendar.json";
import zhCalendar from "./locales/zh-tw/calendar.json";
import enContact from "./locales/en/contact.json";
import frContact from "./locales/fr/contact.json";
import zhContact from "./locales/zh-tw/contact.json";
import enBiography from "./locales/en/biography.json";
import frBiography from "./locales/fr/biography.json";
import zhBiography from "./locales/zh-tw/biography.json";
import enHomepage from "./locales/en/homepage.json";
import frHomepage from "./locales/fr/homepage.json";
import zhHomepage from "./locales/zh-tw/homepage.json";
import enNavigation from "./locales/en/navigation.json";
import frNavigation from "./locales/fr/navigation.json";
import zhNavigation from "./locales/zh-tw/navigation.json";
import enFooter from "./locales/en/footer.json";
import frFooter from "./locales/fr/footer.json";
import zhFooter from "./locales/zh-tw/footer.json";

// Detect language from the URL path (e.g. /fr/* → "fr", /zh-tw/* → "zh-tw").
const detectedLng =
  typeof window !== "undefined"
    ? detectLocale(window.location.pathname)
    : DEFAULT_LOCALE;

i18n
  .use(initReactI18next)
  .init({
    lng: detectedLng,
    fallbackLng: DEFAULT_LOCALE,
    // Keep region codes lowercase ("zh-tw") so they match our resource keys
    // instead of i18next's default "zh-TW" formatting.
    lowerCaseLng: true,
    ns: ["calendar", "contact", "biography", "homepage", "navigation", "footer"],
    defaultNS: "calendar",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        calendar: enCalendar,
        contact: enContact,
        biography: enBiography,
        homepage: enHomepage,
        navigation: enNavigation,
        footer: enFooter
      },
      fr: {
        calendar: frCalendar,
        contact: frContact,
        biography: frBiography,
        homepage: frHomepage,
        navigation: frNavigation,
        footer: frFooter
      },
      "zh-tw": {
        calendar: zhCalendar,
        contact: zhContact,
        biography: zhBiography,
        homepage: zhHomepage,
        navigation: zhNavigation,
        footer: zhFooter
      },
    },
  });

export default i18n;
