export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

// Navigation categories mirror the keyword clusters in 关键词.json and the
// article directories under content/<locale>/. Keep key/path/isContentType in
// sync with src/lib/content.ts (GROUP_TITLES/GROUP_ORDER) and the en.json nav
// object. Consumers (site.tsx header/footer) read both key and path.
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "base", path: "/base", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
