import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export const hoverGlow: Variants = {
  rest: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.01, 
    filter: "brightness(1.1)",
    transition: { duration: 0.4 }
  }
};