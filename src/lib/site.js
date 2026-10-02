// Site-wide technical SEO settings. All business details below are taken from what the website already shows
// (footer, contact page, Instagram link); nothing here is new information.

export const SITE_URL = (process.env.SITE_URL || "https://www.olenecanto.com").replace(/\/$/, "");
export const SITE_NAME = "Olene Canto";
export const DEFAULT_OG_IMAGE = { url: "/logo.jpg", width: 552, height: 561, alt: "Olene Canto Logo" };

export function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Page-level metadata with a canonical URL. Open Graph is repeated here because Next.js replaces
// (rather than merges) a parent's openGraph object when a page defines its own.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Olene Foods Pvt. Ltd.",
  url: SITE_URL,
  logo: absoluteUrl("/logo.jpg"),
  email: "info@olenecanto.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thadapparambu, Payyanad PO",
    addressLocality: "Manjeri",
    addressRegion: "Kerala",
    postalCode: "676122",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/olenecanto/"],
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};
