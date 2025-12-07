"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface FeatureListProps {
  headline: string;
  copy: string;
  features: string[];
  note?: string;
  ctaLabel: string;
  ctaHref?: string;
}

export default function FeatureList({
  headline,
  copy,
  features,
  note,
  ctaLabel,
  ctaHref = "/contact",
}: FeatureListProps) {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        {headline}
      </h2>
      <p className="mt-3 text-gray-700">{copy}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {features.map((f, i) => (
          <motion.span
            key={i}
            className="bg-gray-200 text-gray-700 rounded-xl border border-black flex items-center justify-center py-1 md:py-2"
            whileHover={{ y: -2 }}
          >
            <p className="text-[11px] md:text-[14px] px-2 md:px-3">{f}</p>
          </motion.span>
        ))}
      </div>
      {note && <p className="mt-3 text-xs md:text-sm text-gray-600">{note}</p>}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push(ctaHref)}
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base"
      >
        {ctaLabel}
      </motion.button>
    </section>
  );
}
