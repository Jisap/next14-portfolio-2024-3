import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from "./AnimatedText"



const About = () => {
  return (
    <div className='bg-yellow-200 py-96' id="about">
      <AnimatedText 
        text="This is a title" 
        textStyles="h2"
      />
    </div>
  )
}

export default About