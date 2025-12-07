"use client";

import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  caption: string;
  image?: string;
}

interface PortfolioGridProps {
  headline: string;
  copy: string;
  items: PortfolioItem[];
}

export default function PortfolioGrid({
  headline,
  copy,
  items,
}: PortfolioGridProps) {
  return (
    <section className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        {headline}
      </h2>
      <p className="mt-3 text-gray-700">{copy}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            className="rounded-xl overflow-hidden border bg-[#F9F9F9]"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              {it.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  Visual placeholder
                </span>
              )}
            </div>
            <figcaption className="p-3">
              <p className="font-medium text-gray-900">{it.title}</p>
              <p className="text-sm text-gray-700">{it.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
