import { useState, useEffect, useCallback } from "react";
import { detectLocale, DEFAULT_LOCALE } from "../locales/config";

export function useLocalePath() {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(detectLocale(window.location.pathname));
  }, []);

  return useCallback(
    (path: string) => {
      if (locale === DEFAULT_LOCALE) return path;
      if (path === "/") return `/${locale}`;
      return `/${locale}${path}`;
    },
    [locale]
  );
}
