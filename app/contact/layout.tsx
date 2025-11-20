import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to scale your brand? Contact Detoplea Marketing today for bold, ROI-driven strategies that help your business grow fast.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
