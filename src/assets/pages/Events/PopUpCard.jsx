import cardUpperDesign from "./eventsImages/cardUpperDesign.png"
import cardLowerDesign from "./eventsImages/cardLowerDesign.png"

export default function PopUpCard({name,desc,prizeMoney1,prizeMoney2,prizeMoney3,contact,pocName}) {
  return (
    <>
      <div className="bg-[#FFCD71] w-[35%] ml-auto mr-auto max-w-[570px]">
        <img src={cardUpperDesign} className="h-[1%] object-contain" />
        <h3 className="font-[Karantina] color:[#1A1919] text-center text-[300%]">{name}</h3>
        <p className="mb-[5%] text-[150%] ml-[2%]">{desc}</p>
        <div className="flex justify-between">
          <div className="flex flex-col ml-[4%]">
            <div className="font-[Karantina] color:[#1A1919] text-[125%] inline">Prize</div>
            <div className="font-[Karantina] color:[#1A1919] text-[115%] inline">{prizeMoney1}</div>
            <div className="font-[Karantina] color:[#1A1919] text-[115%] inline">{prizeMoney2}</div>
            <div className="font-[Karantina] color:[#1A1919] text-[115%] inline">{prizeMoney3}</div>
          </div>
          <div className="flex flex-col mr-[4%]">
            <div className="font-[Karantina] color:[#1A1919] text-[125%] inline">CONTACT INFO</div>
            <div className="font-[Karantina] color:[#1A1919] text-[115%] inline">{pocName}</div>
            <div className="font-[Karantina] color:[#1A1919] text-[115%] inline">{contact}</div>
          </div>
        </div>
        <img src={cardLowerDesign} />
      </div>
    </>
  )
}