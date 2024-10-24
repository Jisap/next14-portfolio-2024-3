
import { AnimatePresence, motion } from 'framer-motion'
import Card from './Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaWordpressSimple
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
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "UI/UX Developer",
    duration: "Jan 2017 - Feb 2019",
    description: "Designed web interfaces with cross-browser compatibility and responsiveness. Delivered pixel-perfect designs."
  },
  {
    type: "experience",
    company: "Warpspeed Inc.",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "Full Stack Developer",
    duration: "Aug 2015 - Dec 2016",
    description: "Developer full-stack solutions using React and Node.js. Integrated frontend ans backed technologies."
  },
  //education
  {
    type: "education",
    intitution: "Udemy",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Web Developer Bootcamp",
    duration: "jan 2020 - Apr 2020",
    description: "Learned full-stack development concepts, focusing on React, Node.js, and APIs. Completed hands-on projects to solidify skills."
  },
  {
    type: "education",
    intitution: "CodeAcademy Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack Dev Certification",
    duration: "jan 2020 - May 2020",
    description: "Gained experiencie in frontend and backend technologies, including React, Node.js and databases."
  },
  {
    type: "education",
    intitution: "Desing Institute",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "UI/UX Diploma",
    duration: "Aug 2018 - Dec 2018",
    description: "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing, and usability testing"
  },
  {
    type: "education",
    intitution: "Bussines Scholl",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Project Management Cert",
    duration: "Mar 2021 - Jun 2021",
    description: "Completed certification in project management, focusing on agile methodologies and effective team collaboration."
  },
  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "Learned in 2015",
    description: "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility."
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaJs />,
    duration: "Learned in 2015",
    description: "Styled responsive wen pages using CSS, ensuring an appealing user experience with modern design principles and layouts."
  },
  {
    type: "skill",
    name: "Javscript",
    icon: <FaCss3Alt />,
    duration: "Learned in 2016",
    description: "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features."
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2018",
    description: "Build dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficienciy."
  },
  {
    type: "skill",
    name: "WordPress",
    icon: <FaWordpress />,
    duration: "Learned in 2020",
    description: "Developed dynamic websites WordPress, simplifying content management processes while ensuring scalability and performance."
  },
  {
    type: "skill",
    name: "Figma",
    icon: <FaFigma />,
    duration: "Learned in 2018",
    description: "Designed user interfaces in Figma, facilitating collaboration and rapid prototyping to meet user needs and project goals."
  },
]

const Cards = () => {
  return (
    <>
      <Tabs 
        defaultValue="experience"
        className='w-full flex flex-col items-center'  
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}

export default Cards