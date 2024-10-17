"use client"

import { motion } from "framer-motion"




const RotatingShape = ({content, direction, duration}) => {
  
  const rotationAnimation = { // Define the rotation animation
    animate: {
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0, // rotate 360 degrees based on the direction
      transition: {
        duration: duration, // duration of the one full rotation
        ease: "linear",     // smooth rotation
        repeat: Infinity,   // repeat infinitely
      }
    }
  }
  
  return (
    <motion.div
      variants={rotationAnimation}
      animate="animate"
    >
      {content}
    </motion.div>
  )
}

export default RotatingShape