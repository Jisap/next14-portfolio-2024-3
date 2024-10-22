import CountUp from "react-countup"




const StatsItems = ({ endCountNum, enCountText, text }) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <div className="font-primary text-primary text-4xl xl:text-5xl leading-none">
        <CountUp 
          end={endCountNum}
          delay={1}
          duration={4}
        />
        <span>{enCountText}</span>
      </div>
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default StatsItems