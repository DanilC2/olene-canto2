import JsonLd from "@/components/JsonLd";
import { CATEGORIES_SHOWCASE, getCategoryById, getProductsByCategory } from "@/lib/categoriesData";
import { SITE_URL, absoluteUrl, pageMetadata } from "@/lib/site";

// Pre-render the real category pages at build time. Alias URLs (e.g. /categories/whiteloaf-cookies)
// still work and point their canonical at the real category.
export function generateStaticParams() {
  return CATEGORIES_SHOWCASE.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategoryById(slug);

  if (!category) {
    // The page shows "Category Not Found"; keep it out of search results.
    return {
      title: "Category Not Found | Olene Canto",
      robots: { index: false, follow: true },
      alternates: { canonical: null },
    };
  }

  // Title and description use the category name and description shown on the page.
  return pageMetadata({
    title: `${category.title} | Olene Canto`,
    description: category.description,
    path: `/categories/${category.id}`,
  });
}

// "₹320" -> "320"; anything without a clear number is left out rather than guessed.
function priceValue(price) {
  const match = typeof price === "string" ? price.replace(/,/g, "").match(/\d+(\.\d+)?/) : null;
  return match ? match[0] : null;
}

function structuredData(category) {
  const url = `${SITE_URL}/categories/${category.id}`;
  const products = getProductsByCategory(category.id);

  // Mirrors the visible "Home > Categories > {category}" breadcrumb.
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Categories", item: `${SITE_URL}/categories` },
      { "@type": "ListItem", position: 3, name: category.title, item: url },
    ],
  };

  // Only fields the product cards and quick-view already show: name, image, description, price.
  const productList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    url,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => {
      const price = priceValue(product.price);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          ...(product.image ? { image: absoluteUrl(product.image) } : {}),
          ...(product.description ? { description: product.description } : {}),
          ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "INR", url } } : {}),
        },
      };
    }),
  };

  return [breadcrumb, productList];
}

export default async function CategoryLayout({ children, params }) {
  const { slug } = await params;
  const category = getCategoryById(slug);

  return (
    <>
      {category && <JsonLd data={structuredData(category)} />}
      {children}
    </>
  );
}
