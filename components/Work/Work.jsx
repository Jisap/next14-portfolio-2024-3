import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import AnimatedText from "../AnimatedText"
import WorkItem from "./WorkItem"


const data = [
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-1.png",
    title: "Lumine UI Kit",
  },
  {
    href: "",
    category: "design",
    img: "/assets/work/thumb-2.png",
    title: "Nebula Dashboard",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-3.png",
    title: "Velox App",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-4.png",
    title: "Quantum Portfolio",
  },
  {
    href: "",
    category: "frontend",
    img: "/assets/work/thumb-5.png",
    title: "Synergy App UI",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-6.png",
    title: "Apollo Travel Platform",
  },
  {
    href: "",
    category: "fullstack",
    img: "/assets/work/thumb-7.png",
    title: "Horizon SaaS Dashboard",
  },
]

const Work = () => {
  return (
    <section className='bg-blue-200 py-96' id="work">
      Work
    </section>
  )
}

export default Work