import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { CgMediaQuery } from "react-icons/cg"
import { useMediaQuery } from "react-responsive"
import  { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi"
import Nav from "./Nav"
import Socials from "./Socials"

const FixedMenu = () => {

  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  count [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({ 
    query: "(max-width: 640px)" 
  });

  // chek is the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);                         // Show the button when the user scrolls down 150px
      }

      if(!isMobile){
        window.addEventListener("scroll", handleScroll);                 // Add the scroll event listener
        return () => window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener when the component is unmounted
      }else{
        setShowMenuButton(true);                                         // Show the button on mobile devices

      }
    }
  },[isMobile, isMounted]);

  return (
    <div>
      FixedMenu
    </div>
  )
}

export default FixedMenu