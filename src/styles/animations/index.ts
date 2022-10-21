import { Variants } from 'framer-motion';

export const containerAnimate: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.75,
    },
  },
};

export const itemAnimate: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

export const variants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.35,
      type: 'spring',
      bounce: 0.35,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 100, opacity: 0 },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
      bounce: 0.35,
    },
  },
};
