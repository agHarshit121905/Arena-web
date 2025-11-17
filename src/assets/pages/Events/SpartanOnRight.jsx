import spartanRight from "./eventsImages/spartanRight.png";
import PopUpCard from "./PopUpCard.jsx";
import { useState } from "react";
import close from "./eventsImages/close.png";
import SportsPreview from "./SportsPreview.jsx";
import football from "./eventsImages/football.png";

export default function SpartanOnRight({ renderNum }) {
  const [isClicked, setIsClicked] = useState(false);
  const [num, setNum] = useState(0);
  function popUp(evt) {
    setNum(evt.currentTarget.id);
    setIsClicked(!isClicked);
  }
  const content = [
    {
      ename: "FOOTBALL",
      desc: "A game where every kick dribbles the spirits, football is a test of skill, strategy and adeptness.",
      prizeMoney1: "Rs. 8,000 (BOYS)",
      prizeMoney2: "Rs. 1,500 (GIRLS)",
      prizeMoney3: "",
      name: "SIDDHANT SINGH MAHLA",
      contact: "9650866535",
      image: "https://i.postimg.cc/wM09F4Qk/IMG-6054-1.jpg",
    },
    {
      ename: "BADMINTON",
      desc: "Agility and precision are all it takes to ignite the crowd's rallying spirit in Badminton, the game of shuttles and serves.",
      prizeMoney1: "Rs. 30,000 (BOYS)",
      prizeMoney2: "Rs. 15,000 (GIRLS)",
      prizeMoney3: "Rs. 8,000 (MIXED)",
      name: "SOHINI KAYAL",
      contact: "8618401989",
      image: "https://i.postimg.cc/2jF8kwBT/DSC-8871.jpg",
    },
    {
      ename: "BASKETBALL",
      desc: "After dunks and shoots, a fall in the hoop is all it takes to hear the deafening roar of the crowd cheering up for the Basketball players!",
      prizeMoney1: "Rs. 40,000 (BOYS)",
      prizeMoney2: "Rs. 20,000 (GIRLS)",
      prizeMoney3: "",
      name: "SIMRAT KAUR SEKHON",
      contact: "9676578852",
      image: "https://i.postimg.cc/JnkncHKz/Copy-of-IMG-6044-1.jpg",
    },
    {
      ename: "TENNIS",
      desc: "From singles to Grand Slams, grit and focus never fail to determine the win in Tennis, where rivalries compete to ace the challenges.",
      prizeMoney1: "Rs. 20,000 (BOYS)",
      prizeMoney2: "Rs. 5,000 (GIRLS)",
      prizeMoney3: "",
      name: "SHYAM KOLEGUDU",
      contact: "8310612245",
      image: "https://i.postimg.cc/g0vcxb0x/Copy-of-Z50-8032.jpg",
    },
    {
      ename: "SWIMMING",
      desc: "Dive in and embrace the cool water, each stroke pushing you faster toward the finish. Race against time as the flow of the water syncs with your heartbeat.",
      prizeMoney1: "Rs. 10,000 (BOYS)",
      prizeMoney2: "Rs. 5,000 (GIRLS)",
      prizeMoney3: "",
      name: "NANDINI TOMAR",
      contact: "95583 67404",
      image: "https://i.postimg.cc/6QTcjkWb/DSC-3526.jpg",
    },
    {
      ename: "FRISBEE",
      desc: "Ever tossed a die? How about tossing, or even tomahawking, a disc and watching it coast through the breeze before getting basketed?",
      prizeMoney1: "Rs. 12,000",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "SIDDHI GADODIA",
      contact: "7045808084",
      image: "https://i.postimg.cc/FRhJ7cft/DSC-6813.jpg",
    },
    {
      ename: "ATHLETICS",
      desc: "Sprint, jump, or throw—athletics is the ultimate test of human endurance and speed.",
      prizeMoney1: "Rs. 14000",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "MEERA BARVE",
      contact: "9175939730",
      image: "https://i.postimg.cc/8c8mGzhz/DSC-2159.jpg",
    },
    {
      ename: "CARROM",
      desc: "Points, fouls, and penalties... sounds familiar? Ah! They aren’t anything but part of Carrom, where endurance and reflexes are put to the test",
      prizeMoney1: "Rs. 9,000 (TEAM)",
      prizeMoney2: "Rs. 6,000 (SINGLES)",
      prizeMoney3: "",
      name: "BALGAM TRIVIKRAMA",
      contact: "6302590325",
      image: "https://i.postimg.cc/PfwPv4kc/DSC-1957.jpg",
    },
    {
      ename: "POWER LIFTING",
      desc: "Raise the barbell with raw determination and pure grit in this pursuit of strength. Step up and uncover the power you never knew you had.",
      prizeMoney1: "Rs. 12,000 (BOYS)",
      prizeMoney2: "Rs. 3,000 (GIRLS)",
      prizeMoney3: "",
      name: "SIDDHARTH S PILLAI",
      contact: "9176680014",
      image: "https://i.postimg.cc/cJkrwkCq/DSC01941.jpg",
    },
    {
      ename: "SKATING",
      desc: "A Skating fan? Ah! You must enjoy watching the players effortlessly glide over the rinks, only to bewitch the audience.",
      prizeMoney1: "Rs. 5,000 (BOYS)",
      prizeMoney2: "Rs. 3,000 (GIRLS)",
      prizeMoney3: "",
      name: "NANDAM VIVEKANANDA",
      contact: "7306850865",
      image: "https://i.postimg.cc/jdn1Frpf/DSC-1218.jpg",
    },

    {
      ename: "KABADDI",
      desc: "The rush of strength and the art of evasion weave together to create this beautiful sport. Feel the adrenaline surge as you fight for victory.",
      prizeMoney1: "Rs. 15,000 (BOYS)",
      prizeMoney2: "Rs. 3,000 (GIRLS)",
      prizeMoney3: "",
      name: "BALIJEPALLI PRAVALIKA",
      contact: "73866 84506",
      image: "https://i.postimg.cc/QtYvHQ6V/DSC-7346.jpg",
    },
    {
      ename: "SNOOKER",
      desc: "Glide the cue with ease and roll the balls with purpose, as victory awaits with every move. Step to the table and ignite your focus.",
      prizeMoney1: "Rs. 8,000",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "ARNAV CHOBE",
      contact: "9373537730",
      image: "https://i.postimg.cc/y6Scv2tx/DSC-2027.jpg",
    },
  ];

  return (
    <div>
      {isClicked && (
        <div
          className="modal w-lvw h-lwh top-0 bottom-0 right-0 left-0 fixed bg-black bg-opacity-20 "
          onClick={popUp}
        >
          <div className="overlay w-lvw h-lwh top-0 bottom-0 right-0 left-0 fixed mt-[15%]">
            <PopUpCard
              name={content[parseInt(num) - 1 + 4 * renderNum].ename}
              desc={content[parseInt(num) - 1 + 4 * renderNum].desc}
              prizeMoney1={content[parseInt(num) - 1 + 4 * renderNum].prizeMoney1}
              prizeMoney2={content[parseInt(num) - 1 + 4 * renderNum].prizeMoney2}
              prizeMoney3={content[parseInt(num) - 1 + 4 * renderNum].prizeMoney3}
              contact={content[parseInt(num) - 1 + 4 * renderNum].contact}
              pocName={content[parseInt(num) - 1 + 4 * renderNum].name}
            />
            <img
              src={close}
              onClick={popUp}
              className="cursor-pointer ml-auto mr-auto"
            />
          </div>
        </div>
      )}
      <div className="hidden md:flex justify-between mb-10">
        <div className="mt-32 ml-16 w-1/2 flex flex-wrap justify-evenly">
          <div className="w-4/12 flex flex-col justify-around">
            <div onClick={popUp} className="cursor-pointer" id="1">
              <SportsPreview
                name={content[0 + 4 * renderNum].ename}
                image={content[0 + 4 * renderNum].image}
              />
            </div>
            <div onClick={popUp} className="cursor-pointer" id="3">
              <SportsPreview
                name={content[2 + 4 * renderNum].ename}
                image={content[2 + 4 * renderNum].image}
              />
            </div>
          </div>
          <div className="w-4/12 flex flex-col justify-around">
            <div onClick={popUp} className="cursor-pointer" id="2">
              <SportsPreview
                name={content[1 + 4 * renderNum].ename}
                image={content[1 + 4 * renderNum].image}
              />
            </div>
            <div onClick={popUp} className="cursor-pointer" id="4">
              <SportsPreview
                name={content[3 + 4 * renderNum].ename}
                image={content[3 + 4 * renderNum].image}
              />
            </div>
          </div>
        </div>
        <img
          src={spartanRight}
          className="max-w-xl w-1/3 h-auto object-contain"
        />
      </div>
    </div>
  );
}
