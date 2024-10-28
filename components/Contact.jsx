import { useEffect, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import AnimatedText from "./AnimatedText"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"


const Contact = () => {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_API_KEY);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    if(state.succeeded){
      setShowIcon(true)
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });

      const timer = setTimeout(() => {
        setShowIcon(false)
      },3000);

      return () => clearTimeout(timer);
    }
  },[state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDedault();
    handleSubmit(formData)
  }

  return (
    <section className='pt-8 xl:pt-12 pb-32' id="contact">
      <div className="container mx-auto">
        <div>
          <div>
            <AnimatedText 
              text='Let’s Work Together' 
              textStyles={`h2 mb-12 xl:text-left`}
            />
            {/* form */}
            <form>
              {/* first name & lastname fields */}
              <div className="flex gap-8">
                <div className="flex-1">
                  <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-primary">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="input"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-primary">
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="input"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact