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
            <form 
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
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
              {/* email field*/}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="youremail@example.com"
                  required
                />
                <ValidationError 
                  prefix="Email"
                  field="email"
                  errors={state.errors}  
                />
              </div>
              {/* phone field*/}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary">
                  Phone number<span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                  placeholder="123 456 789"
                />
              </div>
              {/* message field*/}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea"
                  placeholder="Leave me a message..."
                  rows="5"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              {/* Submit button */}
              <button 
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent flex items-center justify-center gap-2"
              >
                {
                  state.submitting 
                  ? (<span>Sending...</span>)
                  : (
                    <>
                      {/* show icon with opacity transition*/}
                      <FaCheckCircle 
                        className={`
                          absolute text-white text-lg transition-opacity duration-500 ease-in-out 
                          ${showIcon ? "opacity-100" : "opacity-0"}`
                        }
                      />
                      <span 
                        className={
                          `transition-opacity duration-500 ease-linear 
                          ${showIcon ? "opacity-0" : "opacity-100"}`
                        }
                      >
                        Send message
                      </span>
                    </>
                  )
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact