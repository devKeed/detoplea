import React, { useEffect, useState } from "react";
import AboutUs from "../components/home/AboutUs";
import Highlights from "../components/home/Service";
import Reviews from "../components/home/Reviews";
import Sponsors from "../components/home/Sponsors";
import HeroSection from "../components/reusables/HeroSection";
import Header from "../components/shared/Header";
import heroSrc from "/images/img-1.jpg";
import NewsletterModal from "../components/reusables/NewsLetterModal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="text-center flex flex-col">
      <Header />
      <HeroSection
        actionText="Read More"
        actionLink="/dambe"
        backgroundImage={heroSrc}
        height="100vh"
        showSocials={true}
        subtitleFontSize="48px"
        section="home"
      />
      <Sponsors />
      <AboutUs />
      <Highlights />
      <Reviews />
      <NewsletterModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;
