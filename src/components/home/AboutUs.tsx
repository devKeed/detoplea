import image1 from "/images/Frame 22el.png";
import { MyFillButton } from "../reusables/Button";

const AboutUs = () => {
  return (
    <div className="bg-[#F2720D] py-6 md:py-16 items-center flex flex-col gap-4 md:gap-6 justify-center text-center px-4">
      <div className="flex flex-row justify-between w-full sm:w-5/6">
        <img src={image1} alt="img 1" className="w-10 h-8 sm:w-14 sm:h-12" />
        <img src={image1} alt="img 1" className="w-10 h-8 sm:w-14 sm:h-12" />
      </div>
      <div className="text-white w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
        <h2 className="uppercase text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4">
          Our Services
        </h2>
        <p className="text-white text-sm sm:text-base">
          Choose any combination of our services, and we'll craft a customized
          strategy designed to drive real, measurable growth for your business.
        </p>
        <p className="mt-4 sm:mt-6 md:mt-10 text-white text-sm sm:text-base">
          In other words: We create powerful tailored strategies that delivers
          real ROI.
        </p>
      </div>
      <div className="mt-2 sm:mt-4">
        <MyFillButton
          bgColor="#00CCB8"
          hoverBgColor="#02574F"
          text="Get Started"
          link=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
