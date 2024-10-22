import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedText from "./AnimatedText"


      // <AnimatedText 
      //   text="This is a title" 
      //   textStyles="h2"
      // />

const About = () => {
  return (
    <div className='relative pt-12 pb-24' id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                <Image 
                  src="/assets/about/img.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="aboutImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About