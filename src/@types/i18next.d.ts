import "i18next";

// Augment i18next to accept any string key.
// This avoids TypeScript issues with namespace scoping in useTranslation().
// TODO: Re-enable strict key typing once all namespaces are finalized.
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "calendar";
    // Allow any string key so useTranslation("contact") works without prefix:
    allowObjectInHTMLChildren: true;
  }
}