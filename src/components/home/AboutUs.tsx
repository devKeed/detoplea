import { FiArrowUpRight } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="bg-[#F2720D] py-6 md:py-10 items-center flex flex-col gap-4 md:gap-10 justify-center text-center ">
      <div className="text-white w-1/2 ">
        <h1 className="font-uber uppercase text-5xl mb-4">Our Services</h1>
        <p className="font-uber">
          Choose any combination of our services, and we’ll craft a customized
          strategy designed to drive real, measurable growth for your business.
        </p>
        <p className="font-uber mt-6">
          In other words: We create powerful tailored strategies that delivers
          real ROI.
        </p>
      </div>
      <button className=" bg-[#00CCB8] text-white flex items-center gap-2 px-4 py-3 font-uber rounded-3xl hover:bg-[#43ddce] transition">
        Get Started <FiArrowUpRight size={22} />
      </button>
    </div>
  );
};

export default AboutUs;
