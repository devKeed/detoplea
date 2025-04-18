import { FiArrowUpRight } from "react-icons/fi";
import image from "../../public/images/linkedin.png";
import image2 from "../../public/images/image 4.png";
import image3 from "../../public/images/image 5.png";
import image4 from "../../public/images/image 6.png";
import image5 from "../../public/images/image 7.png";
import image6 from "../../public/images/image 8.png";
import { BsArrowDownLeftCircle } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Starthere = () => {
  const teamMembers = [
    { name: "John Doe", image: image2 },
    { name: "Jane Smith", image: image3 },
    { name: "David Lee", image: image4 },
    { name: "Emily Brown", image: image5 },
    { name: "Michael White", image: image6 },
  ];

  // Refs for viewport detection
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.3 });
  const isSecondRowInView = useInView(secondRowRef, {
    once: true,
    amount: 0.3,
  });

  // Card animations
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  // Viewport animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 180 },
  };

  const nameVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <div className="text-center pt-16 flex flex-col">
      {/*image*/}
      <img src={image} alt="linkedin" className="w-full h-auto" />

      {/*scroll*/}
      <div className="w-full h-16 bg-[#F2720D] text-white flex py-16 items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex space-x-4 animate-marquee">
          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="flex items-center space-x-4 text-2xl font-semibold"
            >
              <span>Build Bold to Scale Smart!</span>
              <span className="text-3xl">•</span>
            </span>
          ))}
        </div>
      </div>

      {/*section1*/}
      <div className="w-full bg-[#F2F2F2]">
        <motion.div
          className="w-full md:w-2/3 mx-auto mt-16 mb-16 flex flex-col space-y-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="uppercase font-semibold">What Sets Us Apart?</h1>
          <p className="text-xl font-normal">
            We're a boutique-style agency that treats your business like our
            own. We take the time to truly understand your brand, your goals,
            and your vision, allowing us to build genuine, results-driven
            partnerships.
          </p>
          <p className="text-xl font-normal">
            At Detoplea Marketing Agency, we're more than just a service
            provider—we're an extension of your team, fully invested in your
            success. Your wins are our wins, and together, we don't just meet
            goals—we exceed them. This is our promise. This is our passion. This
            is how we do digital marketing differently
          </p>
        </motion.div>
      </div>

      {/*section2*/}
      <motion.div
        className="w-full h-auto md:h-56 bg-[#64BFB6] flex flex-col items-center justify-center gap-4 md:gap-16 p-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex whitespace-nowrap animate-marquee2">
          <h2 className="text-white text-4xl md:text-7xl uppercase font-normal mr-8">
            Welcome to Detoplea Marketing Agency //
          </h2>
          <h2 className="text-white text-4xl md:text-7xl uppercase font-normal mr-8">
            Welcome to Detoplea Marketing Agency //
          </h2>
        </div>
        <motion.button
          className="text-black-500 bg-white pl-7 pr-7 flex items-center gap-2 px-4 py-3 mb-7 rounded-3xl hover:bg-gray-500 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <FiArrowUpRight size={22} />
        </motion.button>
      </motion.div>

      {/*section3*/}
      <div className="flex flex-col w-full p-4 md:p-20 gap-4">
        {/* First row of cards */}
        <motion.div
          ref={firstRowRef}
          className="flex flex-col md:flex-row w-full gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isFirstRowInView ? "visible" : "hidden"}
        >
          {/* Meet The Team */}
          <motion.div
            className="w-full md:w-1/3 h-full rounded-3xl size-80 bg-[#F2F2F2] relative"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="absolute top-3 right-3">
              <motion.div
                variants={iconVariants}
                transition={{ duration: 0.3 }}
              >
                <BsArrowDownLeftCircle size={82} />
              </motion.div>
            </div>
            <h1 className="mt-10 md:mt-80 font-thin uppercase mb-5 text-6xl p-2">
              Meet The Team
            </h1>
          </motion.div>

          {/* First two team members */}
          {teamMembers.slice(0, 2).map((m, i) => (
            <motion.div
              key={i}
              className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <motion.h2
                className="absolute bottom-0 w-full text-center py-2 bg-black bg-opacity-50 text-white"
                variants={nameVariants}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {m.name}
              </motion.h2>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row of cards */}
        <motion.div
          ref={secondRowRef}
          className="flex flex-col md:flex-row gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isSecondRowInView ? "visible" : "hidden"}
        >
          {/* Last three team members */}
          {teamMembers.slice(2).map((m, i) => (
            <motion.div
              key={i}
              className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <motion.h2
                className="absolute bottom-0 w-full text-center py-2 bg-black bg-opacity-50 text-white"
                variants={nameVariants}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {m.name}
              </motion.h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
