import React from 'react'
import animationData from '../assests/courses.json'
import Lottie from 'lottie-react'

function Courseanimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}/>
  )
}

export default Courseanimation