import AboutUs from "../components/home/AboutUs";
import Highlights from "../components/home/Highlights";
import Reviews from "../components/home/Reviews";
import Sponsors from "../components/home/Sponsors";
import GallerySection from "../components/reusables/GallerySection";
import HeroSection from "../components/reusables/HeroSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import { pastEvents } from "./watch";
import heroSrc from "/images/img-1.jpg";

const Home: React.FC = () => {
  return (
    <div className="text-center flex flex-col  ">
      <Header />
      <HeroSection
        // title="DAMBE"
        // subtitle="THE HOME OF"
        actionText="Read More"
        actionLink="/dambe"
        backgroundImage={heroSrc}
        height="100vh"
        showSocials={true}
        // titleFontSize="14rem"
        subtitleFontSize="48px"
        section="home"
      />
      <Sponsors />

      <AboutUs />
      <Highlights />
     <Reviews/>
      <Footer />
    </div>
  );
};

export default Home;
