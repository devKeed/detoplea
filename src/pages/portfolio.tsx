import { GoArrowDownRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioItems } from "./data";

const Portfolio = () => {
  // Ref for the portfolio section
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);

  // Check if elements are in view
  const isPortfolioInView = useInView(portfolioRef, {
    once: true,
    amount: 0.1, // Trigger when just 10% of the element is visible
  });

  const isHeaderInView = useInView(headerRef, {
    once: true,
    amount: 0.6,
  });

  // Animation variants
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Update the overlay variants
  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.85,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-16 mb-20">
      <motion.div
        ref={headerRef}
        className="text-center mb-16 mt-16"
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-bold uppercase text-4xl md:text-6xl">
          Our{" "}
          <span className="text-[#F2720D] text-4xl md:text-6xl">Portfolio</span>
        </p>
        <p className="mt-2">
          Because you're after results, and we know how to get them.
        </p>
      </motion.div>

      <motion.div
        ref={portfolioRef}
        className="columns-1 sm:columns-2 md:columns-3 gap-6"
        initial="hidden"
        animate={isPortfolioInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.15 }}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="mb-6 break-inside-avoid"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
          >
            <motion.div
              className="relative rounded-2xl"
              variants={cardVariants}
              initial="initial"
            >
              <p className="text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2 rounded-t-2xl">
                <GoArrowDownRight size={20} />
                {item.company}
              </p>

              <motion.div
                className="relative overflow-hidden rounded-b-3xl"
                whileHover="hover"
                initial="initial"
              >
                <motion.img
                  src={item.image}
                  alt={item.company}
                  className="w-full object-cover rounded-b-3xl"
                  style={{ height: item.height }}
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 rounded-b-3xl"
                  variants={overlayVariants}
                />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-center rounded-b-3xl text-white p-6 opacity-0"
                  variants={contentVariants}
                >
                  <motion.p className="text-sm mb-4 text-gray-200">
                    {item.description}
                  </motion.p>

                  <div className="flex">
                    <motion.div className="flex flex-col gap-3 mt-2">
                      {item.buttons.map((button, index) => (
                        <button
                          key={index}
                          className="border text-white flex items-center justify-between px-4 py-3 rounded-3xl transition"
                        >
                          <span>{button.text}</span>
                          {/* {button.icon} */}
                        </button>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
