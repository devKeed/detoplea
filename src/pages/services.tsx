import image1 from "../../public/images/unsplash.png";
import image2 from "../../public/images/solutions.png";
import image3 from "../../public/images/sales.png";
import image4 from "../../public/images/christina.png";
import ServicesSection from "../components/reusables/ServiceSection";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export const Services = () => {
  // Consistent sample data for FAQ items
  const faqs = [
    { question: "How much does it cost?" },
    { question: "What's The First Step?" },
    { question: "What Do I Need To Give You To Get Started?" },
    { question: "Is There A Contract Minimum?" },
    { question: "Is My Business A Good Fit?" },
  ];

  return (
    <div className="mt-10">
      <div
        className="relative flex items-center justify-center text-center text-white px-6 mt-14"
        style={{
          backgroundImage: `
            url(${image1}), 
            url(${image2}), 
            url(${image3}), 
            url(${image4})`,
          backgroundSize: "50% 50%",
          backgroundPosition: "top left, top right, bottom left, bottom right",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
        }}
      >
        <div className="relative z-10 p-4">
          <h1 className="w-full uppercase text-9xl font-medium rotate-180">
            Services Our
          </h1>
        </div>
      </div>

      <div className="w-full items-center bg-[#F2F2F2] flex flex-col md:flex-row p-6 md:p-24 gap-5">
        <h1 className="w-full md:w-1/2 font-medium text-6xl text-center">
          WE BUILD BRANDS THAT <span className="text-[#F2720D]">STANDOUT</span>
        </h1>
        <p className="w-full md:w-1/2 text-2xl">
          We’re not your standard agency. We craft unique, tailored campaigns
          for every brand—blending strategic content, community engagement, and
          creative storytelling to drive real results.
        </p>
      </div>

      <div className="w-full h-16 bg-[#64BFB6] text-white flex items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex space-x-4 animate-marquee">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="flex items-center space-x-4 text-rounded-3xl font-semibold"
            >
              <span className="font-thin text-lg pl-5">BRAND DEVELOPMENT</span>
              <span className="font-thin text-lg pl-5">PAID ADS</span>
              <span className="font-thin text-lg pl-5">
                SOCIAL MEDIA MANAGEMENT
              </span>
              <span className="font-thin text-lg pl-5">EMAIL MARKETING</span>
              <span className="font-thin text-lg pl-5">
                WEB DESIGN AND DEVELOPMENT
              </span>
            </span>
          ))}
        </div>
      </div>

      <ServicesSection />

      <div className="bg-[#F2F2F2] flex flex-col py-20">
        <h2 className="uppercase text-center font-semibold text-5xl">
          Interested? Here’s How It{" "}
          <span className="text-[#F2720D]">Works</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-5 mt-10 p-6 md:p-10 md:px-32">
          <div className="border border-black rounded-xl w-full md:w-1/3 h-auto md:h-72 p-5 pt-14 mt-11 bg-[#F2F2F2] flex flex-col gap-5">
            <h4 className="uppercase text-center">1. Explore Our services</h4>
            <p>
              Take a look at what we offer and see how we can help your brand
              grow. Not sure what you need? No problem! Book a Free Discovery
              Call, and we’ll guide you.
            </p>
          </div>
          <div className="border border-black rounded-xl w-full md:w-1/3 h-auto md:h-80 p-5 pt-14 mt-7 bg-[#F2F2F2] flex flex-col gap-5">
            <h4 className="uppercase text-center">2. CONTACT US</h4>
            <p>
              Fill out our "Hire Us" form to get started. We’re passionate about
              helping businesses succeed, but we only take on projects where we
              know we can deliver real results. Once you reach out, our team
              will review your inquiry and get back to you within 24 hours to
              schedule a Discovery Call.
            </p>
          </div>
          <div className="border border-black rounded-xl w-full md:w-1/3 h-auto md:h-96 p-5 pt-14 bg-[#F2F2F2] flex flex-col gap-5">
            <h4 className="uppercase text-center">
              3. DISCOVERY CALL & CUSTOM STRATEGY
            </h4>
            <p>
              During our Discovery Call, we’ll dive into your goals and needs.
              Afterward, we’ll craft a custom proposal with tailored solutions
              for your business. Once the contract is signed and the first
              invoice is paid, we kick off your onboarding process—and get to
              work on growing your brand!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <button className="bg-[#F2720D] flex items-center text-white gap-2 px-10 py-5 rounded-full hover:bg-gray-500 hover:text-white transition">
          Book A Call <FiArrowUpRight size={22} />
        </button>
      </div>

      <div className="mt-10 flex flex-col justify-center w-full mb-10">
        <h1 className="uppercase text-center mb-8">
          Frequently Asked Question
        </h1>
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col px-4 md:px-60 py-7">
            <div className="uppercase justify-between flex text-3xl font-semibold">
              <p>{faq.question}</p>
              <span className="text-[#F2720D]">
                <AiOutlinePlus />
              </span>
            </div>
            <div className="border-t border-black my-4"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-10 mb-40">
        <button className="bg-[#F2720D] flex items-center text-white gap-2 px-10 py-5 rounded-full hover:bg-gray-500 hover:text-white transition">
          Hire Us <FiArrowUpRight size={22} />
        </button>
      </div>
    </div>
  );
};
