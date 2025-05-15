import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen md:h-[92vh] text-center text-white px-3 sm:px-6 mt-4 md:mt-10 sm:mt-14"
      style={{
        minHeight: "500px",
        maxHeight: "1200px",
      }}
    >
      {/* Desktop Images (2x2 grid) */}
      <div className="absolute inset-0 hidden md:grid grid-cols-2 grid-rows-2 w-full h-full">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image233.png)` }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image22.png)` }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image23.png)` }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image.png)` }}
        ></div>
      </div>

      {/* Mobile Images (stacked vertically) */}
      <div className="absolute inset-0 flex flex-col md:hidden w-full h-full">
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image233.png)` }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image22.png)` }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image23.png)` }}
        ></div>
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/image.png)` }}
        ></div>
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      <div className="px-2 md:px-6 max-w-full relative z-20 flex flex-col items-center justify-center">
        <motion.div
          className="md:mb-4 mb-2 flex items-center"
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          viewport={{ once: true }}
        >
          <SmallText text="Custom" />
          <BigText text="Strategies" />
        </motion.div>

        <motion.div
          className="md:mb-4 mb-2 flex items-center"
          initial={{ x: -600, opacity: 0 }}
          animate={{  x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <BigText text="Cutting-Edge" />
          <SmallText text="Content" />
        </motion.div>

        <motion.div
          className="md:mb-4 mb-2 flex items-center"
          initial={{ x: 600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
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
    <span className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-black md:font-semibold mr-1 sm:mr-2 block sm:inline leading-tight">
      {props.text}
    </span>
  );
};

export const SmallText = (props: { text: string }) => {
  return (
    <span className="text-sm sm:text-2xl md:text-2xl lg:text-3xl text-white font-thin md:font-semibold mr-1 sm:mr-2 block sm:inline leading-tight">
      {props.text}
    </span>
  );
};
