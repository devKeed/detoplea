import { FiArrowUpRight } from "react-icons/fi";
import image from "../../public/images/linkedin.png";
import image2 from "../../public/images/image 4.png";
import image3 from "../../public/images/image 5.png";
import image4 from "../../public/images/image 6.png";
import image5 from "../../public/images/image 7.png";
import image6 from "../../public/images/image 8.png";
import { BsArrowDownLeftCircle } from "react-icons/bs";
import { motion } from "framer-motion";

export const Starthere = () => {
  const teamMembers = [
    { name: "John Doe", image: image2 },
    { name: "Jane Smith", image: image3 },
    { name: "David Lee", image: image4 },
    { name: "Emily Brown", image: image5 },
    { name: "Michael White", image: image6 },
  ];

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
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
        <div className="w-full md:w-2/3 mx-auto mt-16 mb-16 flex flex-col space-y-4 px-4">
          <h1 className="uppercase  font-semibold">What Sets Us Apart?</h1>
          <p className="text-xl font-normal">
            We're a boutique-style agency that treats your business like our
            own. We take the time to truly understand your brand, your goals,
            and your vision, allowing us to build genuine, results-driven
            partnerships.
          </p>
          <p className="text-xl font-normal">
            At Detoplea Marketing Agency, we're more than just a service
            provider—we're anextension of your team, fully invested in your
            success. Your wins are our wins, andtogether, we don't just meet
            goals—we exceed them. This is our promise. This is our passion. This
            is how we do digital marketing differently
          </p>
        </div>
      </div>
      {/*section2*/}
      <div className="w-full h-auto md:h-56 bg-[#64BFB6] flex flex-col items-center justify-center gap-4 md:gap-16 p-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee2">
          <h2 className="text-white text-4xl md:text-7xl uppercase font-normal mr-8">
            Welcome to Detoplea Marketing Agency //
          </h2>
          <h2 className="text-white text-4xl md:text-7xl uppercase font-normal mr-8">
            Welcome to Detoplea Marketing Agency //
          </h2>
        </div>
        <button className="text-black-500 bg-white pl-7 pr-7 flex items-center gap-2 px-4 py-3 mb-7 rounded-3xl hover:bg-gray-500 hover:text-white transition">
          Learn More <FiArrowUpRight size={22} />
        </button>
      </div>
      {/*section3*/}
      <div className="flex flex-col w-full p-4 md:p-20 gap-4">
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* Meet The Team */}
          <motion.div
            className="w-full md:w-1/3 h-full rounded-3xl size-80 bg-[#F2F2F2] relative"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
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

          {/* First two other cards */}
          {teamMembers.slice(0, 2).map((m, i) => (
            <motion.div
              key={i}
              className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <motion.h2
                className="absolute bottom-0 w-full text-center py-2 uppercase"
                variants={nameVariants}
                transition={{ duration: 0.3 }}
              >
                {m.name}
              </motion.h2>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Last three other cards */}
          {teamMembers.slice(2).map((m, i) => (
            <motion.div
              key={i}
              className="w-full md:w-1/3 h-auto md:h-1/4 rounded-3xl size-80"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <motion.h2
                className="absolute bottom-0 w-full text-center py-2 uppercase"
                variants={nameVariants}
                transition={{ duration: 0.3 }}
              >
                {m.name}
              </motion.h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
