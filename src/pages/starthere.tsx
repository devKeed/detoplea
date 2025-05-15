import { FiArrowUpRight } from "react-icons/fi";
import image from "../../public/images/linkedin.png";
import image2 from "../../public/images/image 4.png";
import image3 from "../../public/images/image 5.png";
import image4 from "../../public/images/image 6.png";
import image5 from "../../public/images/image 7.png";
import image6 from "../../public/images/image 8.png";
import { BsArrowDownLeftCircle } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TeamMemberCard = ({ name, image }: { name: string; image: string }) => {
  const [isMobileHovering, setIsMobileHovering] = useState(false);

  return (
    <motion.div
      className="w-full md:w-1/3 h-[250px] md:h-[500px] rounded-xl md:rounded-3xl relative overflow-hidden group"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      whileHover={{
        scale: 1.05,
        translateX: 5,
        translateY: 5,
        transition: { duration: 0.3 },
      }}
      onTouchStart={() => setIsMobileHovering(true)}
      onTouchEnd={() => setIsMobileHovering(false)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-xl md:rounded-3xl "
      />
      <motion.div
        className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isMobileHovering ? 1 : 0,
          y: isMobileHovering ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white font-medium text-base md:text-lg">{name}</h3>
      </motion.div>
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-center md:hidden">
        <h3 className="text-white font-medium text-lg md:text-2xl">{name}</h3>
      </div>
    </motion.div>
  );
};

export const Starthere = () => {
  const teamMembers = [
    { name: "Mariam", image: image2 },
    { name: "Jane", image: image3 },
    { name: "David", image: image4 },
    { name: "Emily", image: image5 },
    { name: "Michael", image: image6 },
  ];

  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const isFirstRowInView = useInView(firstRowRef, { once: true, amount: 0.3 });
  const isSecondRowInView = useInView(secondRowRef, {
    once: true,
    amount: 0.3,
  });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="text-center pt-8 md:pt-12 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-[80vh] md:h-[90vh]">
        <img
          src={image}
          alt="linkedin"
          className="w-full h-[80vh] md:h-[90vh] object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: -200, y: -200, rotate: -90 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-white font-bold text-4xl sm:text-6xl md:text-[8rem]">
            ABOUT US
          </p>
        </motion.div>
      </div>

      {/* Scroll */}
      <div className="w-full h-12 md:h-16 bg-[#F2720D] text-white flex py-4 md:py-8 items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex space-x-2 md:space-x-4 animate-marquee">
          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="flex items-center space-x-2 md:space-x-4 text-xl md:text-2xl font-semibold"
            >
              <span>Build Bold to Scale Smart!</span>
              <span className="text-2xl md:text-3xl">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Section 1 */}
      <div className="w-full bg-[#F2F2F2]">
        <motion.div
          className="w-full md:w-2/3 mx-auto mt-8 md:mt-16 mb-8 md:mb-16 flex flex-col space-y-4 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="uppercase text-xl sm:text-3xl md:text-4xl font-semibold">
            What Sets Us Apart?
          </h2>
          <p className=" font-normal">
            We're a boutique-style agency that treats your business like our
            own. We take the time to truly understand your brand, your goals,
            and your vision, allowing us to build genuine, results-driven
            partnerships.
          </p>
          <p className=" font-normal">
            At Detoplea Marketing Agency, we're more than just a service
            provider—we're an extension of your team, fully invested in your
            success. Your wins are our wins, and together, we don't just meet
            goals—we exceed them. This is our promise. This is our passion. This
            is how we do digital marketing differently
          </p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <motion.div
        className="w-full h-auto bg-[#64BFB6] flex flex-col items-center justify-center gap-4 md:gap-16 py-6 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex whitespace-nowrap animate-marquee2">
          <h2 className="text-white text-2xl sm:text-4xl md:text-7xl uppercase font-normal mr-8">
            Welcome to Detoplea Marketing Agency // Welcome to Detoplea
            Marketing Agency // Welcome to Detoplea Marketing Agency // Welcome
            to Detoplea Marketing Agency // Welcome to Detoplea Marketing Agency
            // Welcome to Detoplea Marketing Agency //
          </h2>
        </div>
        <a href="/services">
          {" "}
          <motion.button
            className="text-black-500 bg-white pl-5 pr-5 md:pl-7 md:pr-7 flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 mb-4 md:mb-7 rounded-xl md:rounded-2xl hover:bg-gray-500 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More <FiArrowUpRight size={22} />
          </motion.button>
        </a>
      </motion.div>

      {/* Section 3 */}
      <div className="flex flex-col w-full p-4 md:p-20 gap-4">
        {/* First row of cards */}
        <motion.div
          ref={firstRowRef}
          className="flex flex-col md:flex-row w-full gap-4 md:gap-8 mt-2 md:mt-4"
          initial="hidden"
          animate={isFirstRowInView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full md:w-1/3 h-[200px] md:h-[500px] rounded-xl md:rounded-3xl relative overflow-hidden bg-[#F2F2F2] p-6 flex flex-col"
            whileHover={{
              scale: 1.03,
              translateX: 5,
              translateY: 5,
              transition: { duration: 0.3 },
            }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: isHovering ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <BsArrowDownLeftCircle size={28} className="md:w-12 md:h-12" />
              </motion.div>
            </div>
            <div className="flex-grow"></div>
            <div className="pb-4">
              <h3 className="font-bold uppercase text-base md:text-xl">
                Meet The Team
              </h3>
            </div>
          </motion.div>
          {teamMembers.slice(0, 2).map((m, i) => (
            <TeamMemberCard key={i} name={m.name} image={m.image} />
          ))}
        </motion.div>

        {/* Second row of cards */}
        <motion.div
          ref={secondRowRef}
          className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2 md:mt-4 w-full"
          initial="hidden"
          animate={isSecondRowInView ? "visible" : "hidden"}
        >
          {teamMembers.slice(2).map((m, i) => (
            <TeamMemberCard key={i} name={m.name} image={m.image} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
