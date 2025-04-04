import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import image from "/images/image 22a.png";
import image1 from "/images/image 1a.png";
import image2 from "/images/image 2.png";
import image3 from "/images/image 3.png";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Container for entire content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex items-start justify-between gap-8 mb-20">
          {/* Left Column */}
          <div className="w-1/2">
            <h2 className="text-4xl text-left font-thin mb-8 uppercase tracking-wide">
              THIS HOW WE HELP
            </h2>
            <ul className="space-y-4 text-lg">
              {/* Service Row */}
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>BRAND DEVELOPMENT</span>
              </li>
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>PAID ADS</span>
              </li>
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>SOCIAL MEDIA MANAGEMENT</span>
              </li>
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>EMAIL MARKETING</span>
              </li>
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>WEB DESIGN AND DEVELOPMENT</span>
              </li>
              <li className="flex items-center  border-b border-gray-300 gap-3 pb-3">
                <IoIosArrowDown className="text-gray-400" />
                <span>CONSULTATION</span>
              </li>
            </ul>
            <div className="text-left">
              <button className="mt-8 inline-block text-sm px-6 py-3 bg-[#F2F2F2] text-black rounded-full hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Placeholder Image */}
          <div className="w-1/2">
            <img
              src={image}
              alt="How We Help"
              className="w-full h-auto rounded-md shadow-md object-cover"
            />
          </div>
        </div>

        {/* Blog Section */}
        <div className=" bg-[#F5F5F5] rounded-md p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-normal uppercase tracking-wide mb-2 mt-5">
              CHECKOUT THE BLOG
            </h2>
            <p className="text-gray-600 mb-8 w-1/2 text-center text-lg">
              From the latest marketing news, to platform updates, to small
              business advice, our experts have compiled it all for you.
            </p>
          </div>

          {/* 3-Column Grid for Blog Cards */}
          <div className="grid grid-cols-3 gap-8 pl-8 pr-8">
            {/* Blog Card #1 */}
            <div className="relative shadow-md rounded-md overflow-hidden">
              <img
                src={image1}
                alt="Blog 1"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-lg font-medium">
                5 ways to increase your ROI in 2025
              </p>
            </div>
            {/* Blog Card #2 */}
            <div className="relative shadow-md rounded-md overflow-hidden">
              <img
                src={image2}
                alt="Blog 1"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-lg font-medium">
                10 ways to increase your Social media revenue in 2025
              </p>
            </div>
            {/* Blog Card #3 */}
            <div className="relative shadow-md rounded-md overflow-hidden">
              <img
                src={image3}
                alt="Blog 1"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-lg font-medium">
                10 ways to connect with clients via Social media in 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
