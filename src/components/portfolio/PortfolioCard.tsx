import { motion } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { cardAnimations } from "../../utils/animations";
import { useState } from "react";
import PortfolioDetailModal from "./PortfolioDetailModal";

interface PortfolioCardProps {
  company: string;
  about: string;
  height?: string;
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
  buttons: any[];
}

export const PortfolioCard = ({
  company,
  about,
  image,
  height,
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
  buttons,
}: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="relative rounded-2xl cursor-pointer"
        initial="initial"
        whileHover="hover"
        onClick={openModal}
      >
        <div className="text-xs md:text-sm font-semibold text-gray-700 bg-[#F2F2F2] p-3 flex gap-2 rounded-t-2xl">
          <motion.div variants={cardAnimations.arrow}>
            <GoArrowDownRight size={20} />
          </motion.div>
          {company}
        </div>

        <motion.div
          className="relative overflow-hidden rounded-b-3xl"
          style={{ height: height || "450px" }}
        >
          <motion.img
            src={image}
            alt={company}
            className="w-full h-full object-cover rounded-b-3xl"
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
              {highlights}
            </motion.p>
            <div className="flex">
              <div className="flex flex-col gap-3 mt-2">
                {buttons.map((button: any, index: any) => (
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

      <PortfolioDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={{
          company,
          about,
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
