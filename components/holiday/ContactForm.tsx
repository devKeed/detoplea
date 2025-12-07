"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO: connect to your API route or external CRM
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto mt-10 bg-[#F2F2F2] rounded-2xl p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Let’s Get Your Holiday Campaign Started
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Your info is safe with us. Let’s make this holiday your most profitable
        season yet!
      </p>

      {sent ? (
        <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
          Thanks! We’ll reach out shortly to confirm your Holiday Performance
          Pack.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <input
            name="name"
            required
            placeholder="Name"
            className="px-4 py-3 rounded-xl border"
          />
          <input
            name="businessName"
            required
            placeholder="Business Name"
            className="px-4 py-3 rounded-xl border"
          />
          <input
            name="phone"
            required
            placeholder="Phone / WhatsApp Number"
            className="px-4 py-3 rounded-xl border"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="px-4 py-3 rounded-xl border"
          />
          <input
            name="budget"
            placeholder="Monthly Marketing Budget"
            className="px-4 py-3 rounded-xl border"
          />
          <textarea
            name="message"
            placeholder="Message / Notes"
            rows={4}
            className="px-4 py-3 rounded-xl border"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send My Holiday Pack Request"}
          </motion.button>
        </form>
      )}
    </section>
  );
}
