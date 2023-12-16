const hidden = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const fadeInUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};


const staggerContainer = {
  hidden: {  },
  visible: {
      transition: {
          staggerChildren: .75,
          delayChildren: 0.3,
      },
  },
}

export default { hidden, fadeInUp, staggerContainer};
