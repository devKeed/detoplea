import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const RevealOnScroll: React.FC<Props> = ({ children, className }) => (
  <motion.div
    className={className}
    initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default RevealOnScroll;
