import AnimatedText from "./AnimatedText"
import Cards from "./Cards/Cards"




const Journey = () => {
  return (
    <div className='' id="journey">
      <div className="container mx-auto">
        <AnimatedText 
          text="My Professional Journey" 
          textStyles="h2 mb-[30px] text-center"

          />
          <Cards />
      </div>
    </div>
  )
}

export default Journey