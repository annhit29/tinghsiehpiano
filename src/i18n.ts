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
    ns: ["calendar", "contact", "biography"],
    defaultNS: "calendar",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        calendar: enCalendar,
        contact: enContact,
        biography: enBiography,
      },
      fr: {
        calendar: frCalendar,
        contact: frContact,
        biography: frBiography,
      },
    },
  });

export default i18n;
