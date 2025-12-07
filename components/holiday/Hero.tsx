"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref?: string;
}

export default function Hero({
  headline,
  subheadline,
  ctaLabel,
  ctaHref = "/contact",
}: HeroProps) {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#F2F2F2] rounded-2xl max-w-6xl mx-auto mt-8 p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          {headline}
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          {subheadline}
        </p>
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push(ctaHref)}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </motion.button>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-black/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}
