import { FiArrowUpRight } from "react-icons/fi";
import image from "../../public/images/linkedin.png";
import image2 from "../../public/images/image 4.png";
import image3 from "../../public/images/image 5.png";
import image4 from "../../public/images/image 6.png";
import image5 from "../../public/images/image 7.png";
import image6 from "../../public/images/image 8.png";
import { BsArrowDownLeftCircle } from "react-icons/bs";

export const Starthere = () => {
  return (
    <div className="text-center pt-16 flex flex-col">
      {/*image*/}
      <img src={image} alt="linkedin" className="w-full h-auto" />
      {/*scroll*/}
      <div className="w-full h-16 bg-[#F2720D] text-white flex items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex space-x-4 animate-marquee">
          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="flex items-center space-x-4 text-rounded-3xl font-semibold"
            >
              <span>Build Bold to Scale Smart!</span>
              <span className="text-xl">•</span>
            </span>
          ))}
        </div>
      </div>
      {/*section1*/}
      <div className="w-full bg-[#F2F2F2]">
        <div className="w-full md:w-1/2 mx-auto mt-16 mb-16 flex flex-col space-y-4 px-4">
          <h2 className="uppercase">What Sets Us Apart</h2>
          <p>
            We’re a boutique-style agency that treats your business like our
            own. We take the time to truly understand your brand, your goals,
            and your vision, allowing us to build genuine, results-driven
            partnerships.
          </p>
          <p>
            At Detoplea Marketing Agency, we’re more than just a service
            provider—we’re anextension of your team, fully invested in your
            success. Your wins are our wins, andtogether, we don’t just meet
            goals—we exceed them. This is our promise. This is our passion. This
            is how we do digital marketing differently
          </p>
        </div>
      </div>
      {/*section2*/}
      <div className="w-full h-auto md:h-56 bg-[#64BFB6] flex flex-col items-center justify-center gap-4 md:gap-16 p-4">
        <h2 className="w-full text-white text-4xl md:text-7xl h-auto md:h-10 uppercase mt-7 font-normal">
          Welcome to Detoplea Marketing
        </h2>
        <button className="text-black-500 bg-white pl-7 pr-7 flex items-center gap-2 px-4 py-3 mb-7 rounded-3xl hover:bg-gray-500 hover:text-white transition">
          Learn More <FiArrowUpRight size={22} />
        </button>
      </div>
      {/*section3*/}
      <div className="flex flex-col w-full p-4 md:p-20 gap-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full md:w-1/3 h-full rounded-3xl size-80 bg-[#F2F2F2]">
            <BsArrowDownLeftCircle size={70} className="ml-auto p-3" />
            <h1 className="mt-10 md:mt-72 font-thin uppercase text-6xl p-2">
              Meet The Team
            </h1>
          </div>
          <img
            className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
            src={image2}
            alt="image"
          />
          <img
            className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
            src={image3}
            alt="image"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <img
            className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
            src={image4}
            alt="image"
          />
          <img
            className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
            src={image5}
            alt="image"
          />
          <img
            className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
            src={image6}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};
