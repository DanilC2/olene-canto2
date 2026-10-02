import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import InitialPageLoader from "@/components/InitialPageLoader";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE, ORGANIZATION_JSON_LD, SITE_URL, WEBSITE_JSON_LD } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Olene Canto | Haute Boulangerie & Pâtisserie",
  description:
    "Artisanal slow-fermented breads, 27-layer Normandy butter viennoiserie, and sculptured French pâtisserie. A decade of bakery heritage and craft.",
  keywords: [
    "Olene Canto",
    "Olene Foods",
    "Haute Boulangerie",
    "French Patisserie",
    "Sourdough Bakery",
    "Du Four Export",
    "White Loaf",
  ],
  icons: {
    icon: "/logo.jpg",
  },
  // Home page canonical; every other route sets its own in its layout.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Olene Canto | Haute Boulangerie & Pâtisserie",
    description:
      "Artisanal slow-fermented breads, 27-layer Normandy butter viennoiserie, and sculptured French pâtisserie. A decade of bakery heritage and craft.",
    url: "/",
    siteName: "Olene Canto",
    type: "website",
    locale: "en_IN",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: "Olene Canto | Haute Boulangerie & Pâtisserie",
    description:
      "Artisanal slow-fermented breads, 27-layer Normandy butter viennoiserie, and sculptured French pâtisserie. A decade of bakery heritage and craft.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans-clean antialiased selection:bg-black selection:text-white">
        <JsonLd data={[ORGANIZATION_JSON_LD, WEBSITE_JSON_LD]} />
        <InitialPageLoader>{children}</InitialPageLoader>
      </body>
    </html>
  );
}
