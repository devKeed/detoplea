import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  id?: number; // Optional for linking to specific blog posts
  link?: string; // Optional URL for external links
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, id, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/blog/${id}`);
    } else if (link) {
      window.location.href = link;
    } else {
      navigate('/blog'); // Default to main blog page
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "keyframes", stiffness: 300 }}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white p-4 rounded-md text-left font-semibold">{title}</p>
        <div className="flex justify-end">
          <button className="text-white text-xs border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
