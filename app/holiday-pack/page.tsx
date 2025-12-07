"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { sendHolidayPackRequest } from "@/lib/emailjs";
import clsx from "clsx";


function Hero({
  headline,
  subheadline,
  ctaLabel,
  ctaHref = "/contact",
  imageSrc,
}: {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSrc?: string;
}) {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-[#F2F2F2] rounded-2xl max-w-6xl mx-auto mt-8 p-6 md:p-12">
      {/* Decorative background circle */}
      <motion.div
        className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-black/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            {headline}
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            {subheadline}
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(ctaHref ?? "/contact")}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </motion.button>
        </motion.div>

        {/* Optional Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100"
        >
          {imageSrc ? (
            <Image
              src="/images/detoplea.jpg"
              alt="Holiday campaign visuals"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-emerald-700/70 text-sm"></span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureList({
  headline,
  copy,
  features,
  note,
  ctaLabel,
  ctaHref = "/contact",
  imageSrc,
  invert = false,
}: {
  headline: string;
  copy: string;
  features: string[];
  note?: string;
  ctaLabel: string;
  ctaHref?: string;
  imageSrc?: string;
  invert?: boolean; // toggles background color for alternation
}) {
  const router = useRouter();
  return (
    <section
      className={clsx(
        "max-w-6xl mx-auto mt-10 rounded-2xl p-6 md:p-10",
        invert ? "bg-[#0A0A0A]" : "bg-white"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className={clsx(
              "text-2xl md:text-4xl font-semibold",
              invert ? "text-white" : "text-gray-900"
            )}
          >
            {headline}
          </h2>
          <p
            className={clsx("mt-3", invert ? "text-gray-300" : "text-gray-700")}
          >
            {copy}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {features.map((f, i) => (
              <motion.span
                key={i}
                className={clsx(
                  "rounded-xl border flex items-center justify-center py-1 md:py-2",
                  invert
                    ? "bg-white/10 text-white border-white/20"
                    : "bg-gray-100 text-gray-800 border-black/10"
                )}
                whileHover={{ y: -2 }}
              >
                <p className="text-[11px] md:text-[14px] px-2 md:px-3">{f}</p>
              </motion.span>
            ))}
          </div>
          {note && (
            <p
              className={clsx(
                "mt-3 text-xs md:text-sm",
                invert ? "text-gray-300" : "text-gray-600"
              )}
            >
              {note}
            </p>
          )}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(ctaHref ?? "/contact")}
            className={clsx(
              "mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base",
              invert ? "bg-white text-black" : "bg-black text-white"
            )}
          >
            {ctaLabel}
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "relative aspect-[4/3] w-full rounded-xl overflow-hidden",
            invert
              ? "bg-gradient-to-br from-slate-800 to-slate-700"
              : "bg-gradient-to-br from-rose-50 to-rose-100"
          )}
        >
          {imageSrc ? (
            <Image
              src="images/all-in.jpg"
              alt="What’s included visuals"
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={clsx(
                  "text-sm",
                  invert ? "text-white/70" : "text-rose-700/70"
                )}
              >
                Visual placeholder
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials({
  headline,
  bullets,
  reviews,
  ctaLabel,
  ctaHref,
  invert,
}: {
  headline: string;
  bullets: string[];
  reviews: { quote: string; author: string }[];
  ctaLabel: string;
  ctaHref?: string;
  imageStrip?: string[];
  invert?: boolean;
}) {
  const router = useRouter();
  return (
    <section
      className={clsx(
        "max-w-6xl mx-auto mt-10 rounded-2xl p-6 md:p-10",
        invert ? "bg-[#F2F2F2]" : "bg-white"
      )}
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            {headline}
          </h2>
          <ul className="mt-4 list-disc pl-5 text-gray-800 space-y-1">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={i}
              className="bg-[#FAFAFA] rounded-xl p-4 border"
              whileHover={{ y: -2 }}
            >
              <p className="text-gray-800">“{r.quote}”</p>
              <footer className="mt-2 text-sm text-gray-600">
                — {r.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => router.push(ctaHref ?? "/contact")}
          className="mt-2 inline-flex w-max items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base"
        >
          {ctaLabel}
        </motion.button>
      </div>
    </section>
  );
}

function PortfolioGrid({
  headline,
  copy, 
  items,
  invert = false,
}: {
  headline: string;
  copy: string;
  items: { title: string; caption: string; image?: string }[];
  invert?: boolean;
}) {
  return (
    <section
      className={clsx(
        "max-w-6xl mx-auto mt-10 rounded-2xl p-6 md:p-10",
        invert ? "bg-[#f2720d]" : "bg-white"
      )}
    >
      <h2
        className={clsx(
          "text-2xl md:text-4xl font-semibold",
          invert ? "text-white" : "text-gray-900"
        )}
      >
        {headline}
      </h2>
      <p className={clsx("mt-3", invert ? "text-gray-300" : "text-gray-700")}>
        {copy}
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            className={clsx(
              "rounded-xl overflow-hidden border",
              invert
                ? "bg-white/5 border-white/10"
                : "bg-[#F9F9F9] border-gray-200"
            )}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={clsx(
                "relative aspect-video",
                invert ? "bg-slate-800" : "bg-gray-200"
              )}
            >
              {it.image ? (
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={clsx(
                      "text-sm",
                      invert ? "text-white/70" : "text-gray-600"
                    )}
                  >
                    Visual placeholder
                  </span>
                </div>
              )}
            </div>
            <figcaption
              className={clsx("p-3", invert ? "text-white" : "text-gray-900")}
            >
              <p className="font-medium">{it.title}</p>
              <p
                className={clsx(
                  "text-sm",
                  invert ? "text-gray-300" : "text-gray-700"
                )}
              >
                {it.caption}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export default function HolidayPackPage() {
  // EmailJS submission state for the holiday form
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      businessName: String(formData.get("businessName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      source: "Holiday Performance Pack",
    };

    try {
      await sendHolidayPackRequest(payload);
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="px-4 md:px-6 lg:px-8 py-6 md:py-10">
      <Hero
        headline="Make This Holiday Season Your Best Ever!!!"
        subheadline="Detoplea’s Holiday Performance Pack gives you ads, creatives, landing page, sales system, and 1-month social media management so you can focus on your business while we bring the customers to you."
        ctaLabel="Let’s Boost My Sales"
        ctaHref="#holiday-form"
        imageSrc="/images/holiday/hero-campaign.jpg"
      />

      <FeatureList
        headline="Your All-in-One Holiday Growth Pack"
        copy="The holidays mean busy markets and online shoppers looking for great deals. We take care of everything so you can shine without stress:"
        features={[
          "Offer Creation: Seasonal deals that speak to your local customers.",
          "Creative Ads: Eye-catching Meta & TikTok ads designed for Ghanaian audiences.",
          "Landing Page: Mobile-first, fast-loading page that converts clicks into buyers.",
          "Sales System: Capture leads and follow up automatically—we handle the tech.",
          "1-Month Social Media Management: Keep your brand top-of-mind on Instagram, Facebook, and TikTok.",
        ]}
        note="Note: Ad spend is not included and is paid directly to Meta/TikTok."
        ctaLabel="Claim My Holiday Pack"
        ctaHref="#holiday-form"
        imageSrc="/images/holiday/features-collage.jpg"
      />

      <Testimonials
        headline="Why Businesses Trust Detoplea"
        bullets={[
          "Quick launch in under 7 days—perfect for the busy holiday season.",
          "Performance-driven campaigns that get real customers.",
          "Creatives and messaging tailored to local trends and cultural habits.",
        ]}
        reviews={[
          {
            quote:
              "Detoplea made our holiday sales stress-free—our ads performed so well, we were sold out!",
            author: "Kofi Inventories, Accra",
          },
          {
            quote:
              "Professional and results-focused. Perfect for the startups market!",
            author: "Glow Cosmetics, Kumasi",
          },
        ]}
        ctaLabel="Boost My Sales Now"
        ctaHref="#holiday-form"
        imageStrip={[
          "/images/1.jpg",
          "/images/22.jpg",
          "/images/3.jpg",
          "/images/4.jpg",
        ]}
      />

      <PortfolioGrid
        headline="Proof That Our Strategies Work"
        copy="We’ve helped brands across Africa, including Ghana, increase revenue fast:"
        items={[
          {
            title: "Glow Cosmetics (Nigeria)",
            caption: "+250% ROAS in 2 weeks.",
            image: "/images/glow.png",
          },
          {
            title: "FreshFace Skincare (Nigeria)",
            caption: "+400 leads in 1 week with ads + landing page.",
            image: "/images/ff-skin.jpeg",
          },
          {
            title: "FoodRun App (Nigeria)",
            caption: "Holiday campaign drove 150% more downloads.",
            image: "/images/food.png",
          },
        ]}
        invert
      />

      <section className="max-w-6xl mx-auto mt-10 rounded-2xl p-6 md:p-10 bg-[#F2F2F2]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
              About Detoplea Marketing
            </h2>
            <p className="mt-3 text-gray-700">
              At Detoplea Marketing, we help Ghanaian businesses grow
              visibility, attract customers, and increase sales online. We
              combine creativity, strategy, and results-driven marketing so you
              can focus on your business while we handle the digital side.
            </p>
            <div className="mt-6">
              <a
                href="#holiday-form"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm md:text-base"
              >
                Work With Detoplea
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
            <Image
              src="/images/hero1.png"
              alt="Detoplea team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture Form (EmailJS) */}
      <section
        id="holiday-form"
        className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-10 border"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Let’s Get Your Holiday Campaign Started
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Your info is safe with us. Let’s make this holiday your most
          profitable season yet!
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
              autoComplete="name"
            />
            <input
              name="businessName"
              required
              placeholder="Business Name"
              className="px-4 py-3 rounded-xl border"
              autoComplete="organization"
            />
            <input
              name="phone"
              required
              placeholder="Phone / WhatsApp Number"
              className="px-4 py-3 rounded-xl border"
              autoComplete="tel"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="px-4 py-3 rounded-xl border"
              autoComplete="email"
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
    </main>
  );
}
