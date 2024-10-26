import { useCallback, useEffect, useState } from "react"
import { ImQuotesLeft  } from "react-icons/im"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import AnimatedText from "../AnimatedText"
import Image from "next/image"

const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Emma Hohnson",
    message: "The service was fantastic! Highly recommend it to anyone looking for top noth design."
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinez",
    message: "I couldnt be happier with the results. The website is both beautiful and functional."
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "James Smith",
    message: "Excellent work! The project was handled professionally from start to finish."
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Williams",
    message: "Everything was delivered on time, and the design exceeded my expectations."
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabel Brown",
    message: "Amazing attention to detail. My site looks professional and user-friendly."
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message: "The team truly understood my needs. My website is faster and looks great."
  },
]

const Testimonial = () => {

  const [swiperRef, setSwiperRef] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const handlePrevious = useCallback(() => {
    swiperRef.slidePrev()
  },[swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.slideNext()
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText 
          text="What Clients Say" 
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
      </div>
    </div>
  )
}

export default Testimonial