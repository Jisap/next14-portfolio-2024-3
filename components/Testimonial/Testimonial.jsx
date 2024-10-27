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
        <div>
          {/* slider */}
          <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },

            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide 
                  key={index}
                  className="h-full select-none"
                >
                  <div className="w-full h-full flex items-end">
                    <div className={`${
                      activeSlide === index ? "h-full" : "h-[240px]"
                      } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`
                      }
                    >
                      <Image 
                        src={slide.img}
                        quality={100}
                        fill
                        alt=""
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial