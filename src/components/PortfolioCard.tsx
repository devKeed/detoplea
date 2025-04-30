import { motion } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { cardAnimations } from "../utils/animations";

interface PortfolioCardProps {
  company: string;
  image: string;
  height: string;
  description: string;
  buttons: Array<{ text: string; icon?: React.ReactNode }>;
}

export const PortfolioCard = ({ company, image, height, description, buttons }: PortfolioCardProps) => {
  return (
    <motion.div
      className="relative rounded-2xl"
      initial="initial"
      whileHover="hover"
    >
      <div className="text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2 rounded-t-2xl">
        <motion.div variants={cardAnimations.arrow}>
          <GoArrowDownRight size={20} />
        </motion.div>
        {company}
      </div>

      <motion.div className="relative overflow-hidden rounded-b-3xl">
        <motion.img
          src={image}
          alt={company}
          className="w-full object-cover rounded-b-3xl"
          style={{ height }}
          variants={cardAnimations.image}
        />
        <motion.div
          className="absolute inset-0 bg-black opacity-0 rounded-b-3xl"
          variants={cardAnimations.overlay}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center rounded-b-3xl text-white p-6 opacity-0"
          variants={cardAnimations.content}
        >
          <motion.p className="text-sm mb-4 text-gray-200">
            {description}
          </motion.p>
          <div className="flex">
            <div className="flex flex-col gap-3 mt-2">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="border text-white text-sm flex items-center justify-between px-4 py-3 rounded-3xl transition"
                >
                  <span className="text-xs">{button.text}</span>
                  {button.icon}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
