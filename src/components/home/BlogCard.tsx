import React from "react";
import { motion } from "framer-motion";

interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "keyframes", stiffness: 300 }}
      className="relative rounded-md overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <p className="absolute bottom-4 left-4 right-4 bg-opacity-70 text-white p-4 rounded-md text-left font-semibold">
        {title}
      </p>
    </motion.div>
  );
};

export default BlogCard;
