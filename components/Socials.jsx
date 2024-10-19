

import Link from "next/link"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "",
  },
  {
    icon: <FaFacebook />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
          >
            <span>
              {item.icon}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials