import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen md:h-[92vh] text-center text-white px-3 sm:px-6 mt-10 md:mt-16 sm:mt-14"
      style={{
        backgroundImage: `url(/images/hero1.png)`,
        backgroundSize: "cover",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
        maxHeight: "1200px",
      }}
    >
      <div className="p-4 md:p-20">
        <motion.div
          className="md:mb-4"
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          <SmallText text="Custom" />
          <BigText text="Strategies" />
        </motion.div>

        <motion.div
          className="md:mb-4"
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <BigText text="Cutting-Edge" />
          <SmallText text="Content" />
        </motion.div>

        <motion.div
          className="md:mb-4"
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <BigText text="Measurable" />
          <SmallText text="Results" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

export const BigText = (props: { text: string }) => {
  return (
    <span className="text-3xl sm:text-5xl md:text-7xl text-white font-semibold mr-2">
      {props.text}
    </span>
  );
};

export const SmallText = (props: { text: string }) => {
  return (
    <span className="text-xl sm:text-3xl md:text-4xl text-white font-semibold mr-2">
      {props.text}
    </span>
  );
};
