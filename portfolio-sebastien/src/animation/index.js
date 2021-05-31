export const animationOne = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },

  out: { 
      opacity: 0,
      y: '-100vh', 
      scale:0.6
    },
};

export const animationThree = {
    in: {
        opacity: 1,
        X: -300,
      },
    
      out: { 
        opacity: 0,
        X: 300
      },

    end: {
        x:0, 
        opacity: 1,
    }
}

export const transition = {
  duration: 0.4,
};
