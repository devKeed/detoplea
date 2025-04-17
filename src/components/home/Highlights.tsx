import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import image from "/images/image 22a.png";
import image1 from "/images/image 1a.png";
import image2 from "/images/image 2.png";
import image3 from "/images/image 3.png";
import image5 from "/images/imageZZ.png";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "BRAND DEVELOPMENT",
    description:
      "We help you build a strong and consistent brand identity that resonates with your target audience.",
  },
  {
    title: "PAID ADS",
    description:
      "Our team creates and manages effective paid advertising campaigns to maximize your ROI.",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "We handle your social media presence, engaging with your audience and growing your online community.",
  },
  {
    title: "EMAIL MARKETING",
    description:
      "Crafting personalized email campaigns that drive engagement and conversions.",
  },
  {
    title: "WEB DESIGN AND DEVELOPMENT",
    description:
      "Designing and developing responsive, user-friendly websites that align with your brand.",
  },
  {
    title: "CONSULTATION",
    description:
      "Providing expert advice to help you navigate your business challenges and opportunities.",
  },
];

interface ServiceItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  isOpen,
  onToggle,
}) => {
  return (
    <li className="border-b border-gray-300 pb-3">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={onToggle}
      >
        {isOpen ? (
          <IoIosArrowUp className="text-gray-400" />
        ) : (
          <IoIosArrowDown className="text-gray-400" />
        )}
        <span>{title}</span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 pl-6 text-sm text-gray-600"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const LandingPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Container for entire content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="flex items-start justify-between gap-8 mb-20">
          {/* Left Column */}
          <div className="w-1/2">
            <h2 className="text-4xl text-left font-thin mb-8 uppercase tracking-wide">
              THIS HOW WE HELP
            </h2>
            <ul className="space-y-4 text-lg text-left">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </ul>
            <div className="text-left">
              <button className="mt-8 inline-block text-sm px-6 py-3 bg-[#F2F2F2] text-black rounded-full hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Overlayed Images */}
          <div className="w-1/2 relative items-center flex justify-center">
            {/* Base Image */}
            <img
              src={image}
              alt="Background"
              className="w-3/4 h-auto rounded-lg shadow-md object-cover"
            />

            {/* Overlay Image */}
            <img
              src={image5}
              alt="Overlay"
              className="absolute top-[66.66%] left-3/4 rounded-lg transform -translate-x-1/2 w-[45%] h-auto z-10"
            />
          </div>
        </div>
        {/* Blog Section */}
        <div className="bg-[#F5F5F5] rounded-md p-8">
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "keyframes", stiffness: 300 }}
              className="relative shadow-md rounded-md overflow-hidden"
            >
              <img
                src={image1}
                alt="Blog 1"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-2xl text-left font-semibold">
                5 ways to increase your ROI in 2025
              </p>
            </motion.div>

            {/* Blog Card #2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "keyframes", stiffness: 300 }}
              className="relative shadow-md rounded-md overflow-hidden"
            >
              <img
                src={image2}
                alt="Blog 2"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-2xl text-left font-semibold">
                10 ways to increase your Social media revenue in 2025
              </p>
            </motion.div>

            {/* Blog Card #3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "keyframes", stiffness: 300 }}
              className="relative shadow-md rounded-md overflow-hidden"
            >
              <img
                src={image3}
                alt="Blog 3"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-2xl text-left font-semibold">
                10 ways to connect with clients via Social media in 2025
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
