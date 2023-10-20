import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assests/notes.json'

function Notesanimation() {
  return (
    <Lottie
    animationData={animationData}
    loop={true}
    autoplay={true}/>
  )
}

export default Notesanimation