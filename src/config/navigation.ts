import type { LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// Navigation is intentionally empty for this build; content types and menu
// entries will be rebuilt once the new game's guides are authored.
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
