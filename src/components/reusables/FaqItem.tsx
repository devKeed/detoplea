import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  const springConfig = {
    type: "spring",
    stiffness: 600,
    damping: 30
  };

  return (
    <div className="flex flex-col py-5">
      <div
        className="uppercase justify-between flex text-3xl font-semibold cursor-pointer"
        onClick={onToggle}
      >
        <p className="text-2xl font-normal">{question}</p>
        <span className="text-[#F2720D]">
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={springConfig}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-2 text-lg text-gray-700">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="border-t border-black my-4"></div>
    </div>
  );
};
