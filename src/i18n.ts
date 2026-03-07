import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files directly so they are bundled (no async HTTP fetching).
// This ensures translations are available synchronously on first render — no hydration mismatch.
import enCalendar from "./locales/en/calendar.json";
import frCalendar from "./locales/fr/calendar.json";
import enContact from "./locales/en/contact.json";
import frContact from "./locales/fr/contact.json";
import enBiography from "./locales/en/biography.json";
import frBiography from "./locales/fr/biography.json";
import enHomepage from "./locales/en/homepage.json";
import frHomepage from "./locales/fr/homepage.json";
import enNavigation from "./locales/en/navigation.json";
import frNavigation from "./locales/fr/navigation.json";
import enFooter from "./locales/en/footer.json";
import frFooter from "./locales/fr/footer.json";

// Detect language from URL path: /fr/* → "fr", everything else → "en"
const detectedLng =
  typeof window !== "undefined" && window.location.pathname.startsWith("/fr")
    ? "fr"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    lng: detectedLng,
    fallbackLng: "en",
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
    },
  });

export default i18n;
