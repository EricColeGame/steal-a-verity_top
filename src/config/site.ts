export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Steal A Verity Wiki",
  shortName: "Steal A Verity",
  logoText: "SV",
  tagline: "Verity Pets, Codes, Tier Lists & Stealing Guides",
  description: "Your ultimate guide to Steal A Verity on Roblox! Steal boxes from Monster Verity, collect Verity Pets, train your Speed, upgrade your base, and become the richest player on the server.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://steal-a-verity.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://steal-a-verity.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/107164765081465/Steal-A-Verity",
  heroVideoId: "M2Hbmh2s2mQ", // ROBLOX STEAL A VERITY! gameplay walkthrough
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
