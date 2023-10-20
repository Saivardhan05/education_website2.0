import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assests/animation.json'; // Replace with your animation file
function LottieAnimation() {


  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}/>
  );
}

export default LottieAnimation;