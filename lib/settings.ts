import siteSettings from '@/content/settings/site.json';

export interface SiteSettings {
  site: {
    title: string;
    description: string;
    url: string;
    locale: string;
  };
  author: {
    name: string;
    bio: string;
    email: string;
    image: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    accentColor: string;
  };
  seo: {
    keywords: string[];
    ogImage: string;
    twitterCard: string;
  };
}

/**
 * Get site settings - runs at build time (server-side)
 * This ensures all settings are baked into the static HTML for SEO
 */
export function getSiteSettings(): SiteSettings {
  return siteSettings as SiteSettings;
}

/**
 * Get CSS variables from theme settings
 * These will be injected into the HTML for dynamic theming
 */
export function getThemeVariables() {
  const settings = getSiteSettings();
  return {
    '--color-primary': settings.theme.primaryColor,
    '--color-background': settings.theme.backgroundColor,
    '--color-text': settings.theme.textColor,
    '--color-accent': settings.theme.accentColor,
  };
}
