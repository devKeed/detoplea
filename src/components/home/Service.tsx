import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import image from "/images/faq.png";
import image5 from "/images/imageZZ.png";
import { MyFillButton } from "../reusables/Button";

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
        className="flex items-center gap-3 my-2 cursor-pointer"
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
            className="overflow-hidden mt-2 pl-6 text-sm "
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
    <div className="w-full bg-white text-black">
      <div className=" mx-auto px-4 py-20">
        <div className="flex items-start justify-between gap-8 mb-20">
          <div className="w-1/2">
            <h2 className="text-4xl text-left font-thin mb-8 uppercase tracking-wide">
              THIS IS HOW WE HELP
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
            <div className="flex text-left mt-4">
              <MyFillButton
                text="Learn More"
                bgColor="#F2F2F2"
                link=""
                color="#000000"
                hoverBgColor="#222222"
              />
            </div>
          </div>

          <div className="w-1/2 relative items-center flex justify-center">
            <img
              src={image}
              alt="Background"
              className=" h-auto object-cover"
            />
          </div>
        </div>
  
      </div>
    </div>
  );
};

export default LandingPage;
