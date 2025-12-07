"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface TestimonialsProps {
  headline: string;
  bullets: string[];
  reviews: { quote: string; author: string }[];
  ctaLabel: string;
  ctaHref?: string;
}

export default function Testimonials({
  headline,
  bullets,
  reviews,
  ctaLabel,
  ctaHref = "/contact",
}: TestimonialsProps) {
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto mt-10 bg-[#F2F2F2] rounded-2xl p-6 md:p-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
        {headline}
      </h2>
      <ul className="mt-4 list-disc pl-5 text-gray-800 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((r, i) => (
          <motion.blockquote
            key={i}
            className="bg-white rounded-xl p-4 border"
            whileHover={{ y: -2 }}
          >
            <p className="text-gray-800">“{r.quote}”</p>
            <footer className="mt-2 text-sm text-gray-600">— {r.author}</footer>
          </motion.blockquote>
        ))}
      </div>
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
