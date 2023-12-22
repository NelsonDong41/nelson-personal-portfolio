const hidden = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  hiddenNotUp: {
    opacity: 0,
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
    marginTop: 60,
    opacity: 0,
  },
  hiddenNotUp: {
    opacity: 0,
  },
  visible: {
    marginTop: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const bounceTransition = {
  marginBottom: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
}


export default { hidden, fadeInUp, bounceTransition};
