import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

// Single source of truth for the supported locales.
// Keep this list in sync with src/i18n/request.ts, src/components/language-switcher.tsx
// and the files in src/locales/*.json.
export const locales = ["en", "es", "pt", "fr"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as (typeof locales)[number],
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
