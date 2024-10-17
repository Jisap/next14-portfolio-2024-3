"use client"

import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { TypeAnimation } from "react-type-animation"
import RotatingShape from "./RotatingShape"



const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      {/* header */}
      <div>
        header
      </div>
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation 
              preRenderFirstString={true}
              sequence={[
                 "Websites", 2000,
                 "Apps", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetics with performance.
          </p>
          <ScrollLink
            to="contact"
            smooth
          >
            <button
              className="btn btn-accent mb-8"
            >
              Contact me
            </button>
          </ScrollLink>

          {/* stats */}
          <div>
            stats
          </div>
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[880px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[6.5vw]">
            <Image 
              src="/assets/hero/dev.png"
              fill
              quality="100"
              priority
              className="object-contain"
              alt="dev"
            />
          </div>
          {/* arrow shape */}
          <div className="hidden xl:flex absolute top-48 left-[4vw]">
            <Image 
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt=""
            />
          </div>
          {/* shape 1 */}
          <div>
            {/* shape 1 */}
            <div>
              <RotatingShape />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero