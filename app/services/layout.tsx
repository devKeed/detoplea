import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "Explore our services: social media management, paid ads, brand strategy, business growth and content marketing that deliver measurable business growth.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
