import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "@/components/ui/badge"



const WorkItem = ({href, category, img, title}) => {
  return (
    <Link 
      href="/"
      className="group"
    >
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge>{category}</Badge>
      </div>
    </Link>
  )
}

export default WorkItem