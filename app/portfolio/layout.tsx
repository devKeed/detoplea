import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients We’ve Worked With",
  description:
    "See how we’ve helped Nigerian startups and SMEs grow visibility, engagement, and sales through bold marketing and creative strategy.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
