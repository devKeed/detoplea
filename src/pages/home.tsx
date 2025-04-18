import AboutUs from "../components/home/AboutUs";
import Highlights from "../components/home/Service";
import Reviews from "../components/home/Reviews";
import Sponsors from "../components/home/Sponsors";
import HeroSection from "../components/reusables/HeroSection";
import Header from "../components/shared/Header";
import heroSrc from "/images/img-1.jpg";

const Home: React.FC = () => {
  return (
    <div className="text-center flex flex-col  ">
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
    </div>
  );
};

export default Home;
