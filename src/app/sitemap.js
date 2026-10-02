import { CATEGORIES_SHOWCASE } from "@/lib/categoriesData";
import { SITE_URL } from "@/lib/site";

// Only canonical, indexable pages. Excluded on purpose: /business (redirects to /), /api/*,
// and alias category URLs such as /categories/whiteloaf-cookies (duplicates of a canonical category).
export default function sitemap() {
  const lastModified = new Date();

  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/categories", changeFrequency: "weekly", priority: 0.9 },
    { path: "/our-story", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    ...CATEGORIES_SHOWCASE.map((category) => ({
      path: `/categories/${category.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
