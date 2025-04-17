import { FiArrowUpRight } from "react-icons/fi";
import image1 from "/images/Frame 22el.png";

const AboutUs = () => {
  return (
    <div className="bg-[#F2720D] py-6 md:py-16 items-center flex flex-col gap-4 md:gap-6 justify-center text-center ">
      <div className="flex flex-row justify-between w-5/6">
        <img src={image1} alt="img 1" className="w-14 h-12" />
        <img src={image1} alt="img 1" className="w-14 h-12" />
      </div>
      <div className="text-white w-1/2 ">
        <h1 className=" uppercase text-5xl mb-4">Our Services</h1>
        <p>
          Choose any combination of our services, and we’ll craft a customized
          strategy designed to drive real, measurable growth for your business.
        </p>
        <p className=" mt-10">
          In other words: We create powerful tailored strategies that delivers
          real ROI.
        </p>
      </div>
      <button className=" bg-[#00CCB8] text-white flex items-center gap-2 px-4 py-3  rounded-3xl hover:bg-[#43ddce] transition">
        Get Started <FiArrowUpRight size={22} />
      </button>
    </div>
  );
};

export default AboutUs;
