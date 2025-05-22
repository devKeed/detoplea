import { motion } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { cardAnimations } from "../../utils/animations";
import { useState } from "react";
import PortfolioDetailModal from "./PortfolioDetailModal";

interface PortfolioCardProps {
  company: string;
  image: string;
  description: string;
  imageMod1?: string;
  imageMod2?: string;
  subtitle?: string;
  duration?: string;
  highlights?: string;
  results?: string;
  approach?: string;
  services?: string[];
  year?: string;
}

export const PortfolioCard = ({
  company,
  image,
  description,
  imageMod1,
  imageMod2,
  subtitle,
  duration,
  highlights,
  results,
  approach,
  services,
  year,
}: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="relative rounded-2xl cursor-pointer" // Add cursor-pointer
        initial="initial"
        whileHover="hover"
        onClick={openModal} // Add onClick handler
      >
        <div className="text-xs md:text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2 rounded-t-2xl">
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
          </motion.div>
        </motion.div>
      </motion.div>

      <PortfolioDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={{
          company,
          image,
          description,
          imageMod1,
          imageMod2,
          subtitle,
          duration,
          highlights,
          results,
          approach,
          services,
          year,
        }}
      />
    </>
  );
};
