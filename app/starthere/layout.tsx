import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We’re Detoplea Marketing bold thinkers transforming brands with creative, data-backed strategies that drive growth, visibility, and customer trust.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
