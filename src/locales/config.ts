// Central locale configuration.
//
// To add a new language (e.g. German, Korean) we only touch THREE things:
//   1. Add an entry to LOCALES below.
//   2. Create src/locales/<code>/*.json (one file per namespace).
//   3. Create src/pages/<code>/*.astro (copy an existing locale folder).
// Then register the new JSON imports in src/i18n.ts.
//
// The language switcher, internal link helper (useLocalePath), and the
// URL-based language detection all read from this file, so they pick up new
// languages automatically: no more binary "/fr vs en" checks scattered around.

export interface LocaleDef {
  /** i18next key AND the URL path segment, e.g. "fr", "zh-tw". Keep it lowercase. */
  code: string;
  /** Label shown in the language switcher, e.g. "EN", "FR", "中文". */
  label: string;
  /** Value for the <html lang> attribute (BCP-47), e.g. "en", "fr", "zh-TW". */
  htmlLang: string;
}

/** The locale served at the root (no URL prefix). */
export const DEFAULT_LOCALE = "en";

export const LOCALES: LocaleDef[] = [
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "fr", label: "FR", htmlLang: "fr" },
  { code: "zh-tw", label: "中文", htmlLang: "zh-TW" },
];

/** All locale codes, e.g. ["en", "fr", "zh-tw"]. */
export const LOCALE_CODES = LOCALES.map((l) => l.code);

/** Codes that appear as a URL prefix (everything except the default). */
export const PREFIXED_CODES = LOCALE_CODES.filter((c) => c !== DEFAULT_LOCALE);

/**
 * Detect the locale from a URL path's first segment.
 *   "/zh-tw/biography" -> "zh-tw"
 *   "/contact"         -> "en"
 */
export function detectLocale(pathname: string): string {
  const seg = pathname.split("/")[1]?.toLowerCase();
  return seg && PREFIXED_CODES.includes(seg) ? seg : DEFAULT_LOCALE;
}

/**
 * Strip any locale prefix, returning the canonical (default-locale) path.
 *   "/zh-tw/biography" -> "/biography"
 *   "/zh-tw"           -> "/"
 *   "/contact"         -> "/contact"
 */
export function stripLocale(pathname: string): string {
  const loc = detectLocale(pathname);
  if (loc === DEFAULT_LOCALE) return pathname || "/";
  const rest = pathname.slice(loc.length + 1); // drop the leading "/<loc>"
  return rest === "" || rest === "/" ? "/" : rest;
}

/**
 * Build the equivalent path in `targetCode` from any current path.
 *   localizePath("zh-tw", "/contact")        -> "/zh-tw/contact"
 *   localizePath("en", "/zh-tw/contact")     -> "/contact"
 *   localizePath("fr", "/")                   -> "/fr"
 */
export function localizePath(targetCode: string, pathname: string): string {
  const base = stripLocale(pathname); // canonical path, always starts with "/"
  if (targetCode === DEFAULT_LOCALE) return base;
  return base === "/" ? `/${targetCode}` : `/${targetCode}${base}`;
}
