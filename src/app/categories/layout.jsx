import { pageMetadata } from "@/lib/site";

// Applies to /categories; each category page overrides it in categories/[slug]/layout.jsx.
// Description reuses the certification text shown on the Categories page.
export const metadata = pageMetadata({
  title: "Categories | Olene Canto",
  description:
    "All food categories under Olene Foods Pvt. Ltd. operate under strict zero-preservative standards, certified European hygienic processing lines, and rigorous ISO & Halal compliance.",
  path: "/categories",
});

export default function CategoriesLayout({ children }) {
  return children;
}
