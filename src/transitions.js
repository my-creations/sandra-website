export const transition1 = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 16 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
