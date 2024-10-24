"use client"

import About from '@/components/About'
import Contact from '@/components/Contact'
import FixedMenu from '@/components/FixedMenu'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Services from '@/components/Services'
import Work from '@/components/Work'

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
      <Contact />
      <div className='h-[3000px]'></div>
    </>
  )
}

export default Home