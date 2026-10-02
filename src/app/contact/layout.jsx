import JsonLd from "@/components/JsonLd";
import { SITE_URL, pageMetadata } from "@/lib/site";

// Rendered per request so the page's ?type= parameter is read on the server and the full contact
// content is in the HTML search engines receive (otherwise only the "Loading…" placeholder was).
export const dynamic = "force-dynamic";

// Description reuses the text shown at the top of the Contact page.
export const metadata = pageMetadata({
  title: "Contact Us | Olene Canto",
  description:
    "Whether you are seeking wholesale bakery supply, exploring franchise expansion, or getting in touch with our team, we are here to assist you with transparent, ethical service.",
  path: "/contact",
});

// Mirrors the visible "Home / Contact & Inquiries" breadcrumb.
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact & Inquiries", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
