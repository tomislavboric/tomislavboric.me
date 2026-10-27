import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Tomislav Borić — Frontend engineer who ships whole products";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tomislavboric.me"),
  title,
  description:
    "Senior frontend engineer from Zagreb. 17 years of web work, five of them in a SaaS product team, and a campsite-operations platform built solo with Vue and Supabase.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: "Product UI, full-stack delivery and honest code. Selected work: Camppy, Move by Erika, Sched.",
    images: ["/img/tomislav-boric-1000.webp"],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b1017",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
