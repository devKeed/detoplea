import React from "react";
import { motion } from "framer-motion";
import image1 from "/images/image 1a.png";
import image2 from "/images/image 2.png";
import image3 from "/images/image 3.png";

const Blog: React.FC = () => {

  return (
    <div className="w-full bg-white text-black">
        <div className="bg-[#F5F5F5] rounded-md p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl font-normal uppercase tracking-wide mb-2 mt-5">
              CHECKOUT THE BLOG
            </h2>
            <p className=" mb-8 w-1/2 text-center text-lg">
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
  );
};

export default Blog;
