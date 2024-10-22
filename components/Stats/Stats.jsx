import StatsItems from "./StatsItems"

const statsData = [
  {
    endCountNum: 10,
    enCountText: "+",
    text: "Yrs of Experience",
  },
  {
    endCountNum: 100,
    enCountText: "+",
    text: "Website Built",
  },
  {
    endCountNum: 95,
    enCountText: "%",
    text: "Clients satisfied",
  },
]


const Stats = () => {
  return (
    <div className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItems 
            key={index}
            endCountNum={item.endCountNum}
            enCountText={item.enCountText}
            text={item.text}
          />
        )
      })}
    </div>
  )
}

export default Stats