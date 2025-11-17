import football from "./eventsImages/football.png";

export default function SportsPreview({ name, image }) {
  return (
    <div className="bg-[#FFCD71] inline-block rounded-[5px] mb-[15%] ">
      <img
        src={image}
        className="px-[4%] py-[4%] border-solid border-b-[1.75px] border-[#3C0501] w- aspect-square object-cover"
      />
      <h3 className="font-[Karantina] text-center lg:text-[25px] md:text-[20px] color-[#1A1919]">
        {name}
      </h3>
    </div>
  );
}
