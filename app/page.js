"use client"

import About from '@/components/About'
import Contact from '@/components/Contact'
import FixedMenu from '@/components/FixedMenu'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Services from '@/components/Services'
import Testimonial from '@/components/Testimonial/Testimonial'
import Work from '@/components/Work/Work'

import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    const loadLocomotiveScroll = async() => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll()
    }
    loadLocomotiveScroll()
  },[])

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About/>
      <Journey />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default Home