import React, { useEffect, useState } from "react";
import AboutUs from "../components/home/AboutUs";
import Highlights from "../components/home/Service";
import Reviews from "../components/home/Reviews";
import Sponsors from "../components/home/Sponsors";
import HeroSection from "../components/reusables/HeroSection";
import Header from "../components/shared/Header";
import heroSrc from "/images/img-1.jpg";
import NewsletterModal from "../components/reusables/NewsLetterModal";
import { useAnimation, useInView } from "framer-motion";

// Animation wrapper component
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

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

      {/* Hero section doesn't need animation as it's typically above the fold */}
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
