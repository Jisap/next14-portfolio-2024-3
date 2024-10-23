
import { AnimatePresence, motion } from 'framer-motion'
import Card from './Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from 'react-icons/fa'

const journey = [
  // experience
  {
    type: "experience",
    company: "Odeao Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Web Developer",
    duration: "Jul 2021 - Present",
    description: "Built websites and web apps using Next.js, Tailwinds CSS, and Javascript. Worked on scalable, user-friendly solutions."
  },
  {
    type: "experience",
    company: "Stack3d Lab",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "Frontend Developer",
    duration: "Mar 2019 - Jun 2021",
    description: "Developed responsive websites with HTML, CSS, and Javascript. Ensured seamless user experiences."
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "UI/UX Developer",
    duration: "Jan 2017 - Feb 2019",
    description: "Designed web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs."
  },
]

const Cards = () => {
  return (
    <div>

    </div>
  )
}

export default Cards