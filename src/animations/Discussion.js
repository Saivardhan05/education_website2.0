import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assests/Discussion.json'

function Discussion() {
  return (
    <Lottie
    animationData={animationData}
    loop={true}
    autoplay={true}/>
  )
}

export default Discussion