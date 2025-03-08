import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      fr: typeof fr;
    };
  }
}
