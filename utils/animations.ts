import { Variants } from "framer-motion";

export const cardAnimations: Record<string, Variants> = {
  arrow: {
    initial: { rotate: 0 },
    hover: { 
      rotate: -45,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  },
  image: {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  },
  overlay: {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.85,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  },
  content: {
    initial: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5
      }
    }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  }
};
