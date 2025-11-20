import React, { useEffect, useState } from "react";
import AboutUs from "../components/home/AboutUs";
import Highlights from "../components/home/Service";
import Reviews from "../components/home/Reviews";
import HeroSection from "../components/home/HeroSection";
import Header from "../components/shared/Header";
import NewsletterModal from "../components/home/NewsLetterModal";
import Info from "../components/home/Info";
import RevealOnScroll from "../components/animations/Reveal";
import Blog from "../components/home/Blog";
import SEO from "../components/SEO";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Detoplea Marketing - Digital Marketing Solutions for Modern Businesses"
        description="Transform your business with Detoplea Marketing's expert digital marketing services. We specialize in SEO, social media marketing, web design, content creation, and brand strategy to help your business grow online and reach new customers."
        keywords="digital marketing agency, SEO services, social media marketing, web design, brand strategy, content marketing, online marketing, business growth, marketing solutions, digital transformation"
        url="https://detoplea.com"
        type="website"
      />
      <div
        style={{ overflow: "hidden" }}
        className="text-center flex flex-col mb-10"
      >
        <Header />
        <HeroSection />

        <Info />

        <AboutUs />

        <RevealOnScroll>
          <Highlights />
        </RevealOnScroll>

        <RevealOnScroll>
          <Blog />
        </RevealOnScroll>

        <RevealOnScroll>
          <Reviews />
        </RevealOnScroll>

        <NewsletterModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </>
  );
};

export default Home;
