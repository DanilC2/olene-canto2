import { pageMetadata } from "@/lib/site";

// Description reuses the text shown at the top of the Our Story page.
export const metadata = pageMetadata({
  title: "Our Story | Olene Canto",
  description:
    "From our roots in Northern Kerala, we continue to grow through quality, consistency and meaningful collaborations. Our products are built to reach customers through trusted retail and distribution networks across Kerala and beyond.",
  path: "/our-story",
});

export default function OurStoryLayout({ children }) {
  return children;
}
