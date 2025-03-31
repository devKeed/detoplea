import FightersList from "../components/FightersList";
import HeroSection from "../components/reusables/HeroSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import hero3 from "/images/hero3.png";

export const Warriors = () => {
  return (
    <div>
      <div className="text-center pt-16">
        <Header />
        <HeroSection
          // title="WHERE THE ACTION NEVER DIES"
          section="warriors"
          backgroundImage={hero3}
          height="80vh"
          // colorOverlay="#BF0517"
        />
        <FightersList />
        <Footer />
      </div>
    </div>
  );
};
