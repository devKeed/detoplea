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
