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

  // Extract unique categories from data
  const uniqueCategories = Array.from(new Set(data.map((item) => item.category)))

  // Create tab data with all category and unique categories from data
  const tabData= [
    {category: "all"},
    ...uniqueCategories.map((category) => ({ category }))
  ];

  
  const [tabValue, setTabValue] = useState("all");            // state to manage the currently selected tab
  
  const [visibleItems, setVisibleItems] = useState(6);        // number of items to show initially
  
  const filteredWork = tabValue === "all"                     // filter items based on the selected tab                                          
      ? data.filter((item) => item.category !== "all") 
      : data.filter((item) => item.category === tabValue)
  
  const loadMoreItems = () => { // Handle loading more items
    setVisibleItems((prev) => prev + 2)
  }

  return (
    <section className='pt-24 min-h-[1000px]' id="work">
      <div className="container mx-auto">
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col"
        >
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText  
              text="My latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* render tab triggers */}
            <TabsList
              className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0"
            >
              {tabData.map((item, index) => {
                return(
                  <TabsTrigger 
                    key={index}
                    value={item.category}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  > 
                    {item.category}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent
            value={tabValue}
            className="w-full"
          >
            <div>
              <AnimatePresence>
                {filteredWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Work