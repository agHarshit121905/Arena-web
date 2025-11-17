import spartanLeft from "./eventsImages/spartanLeft.png";
import { useState } from "react";
import PopUpCard from "./PopUpCard.jsx";
import close from "./eventsImages/close.png";
import SportsPreview from "./SportsPreview.jsx";
import football from "./eventsImages/football.png";

export default function SpartanOnLeft({ renderNum }) {
  const [isClicked, setIsClicked] = useState(false);
  const [num, setNum] = useState(0);
  function popUp(evt) {
    setNum(evt.currentTarget.id);
    setIsClicked(!isClicked);
  }
  const content = [
    {
      ename: "TABLE TENNIS",
      desc: "Call it Ping-Pong or Table Tennis, be it Xu Xin or Ma Long, the spin and bounce of the balls spare none!",
      prizeMoney1: "Rs. 10,000 (BOYS)",
      prizeMoney2: "Rs. 2,500 (GIRLS SINGLES)",
      prizeMoney3: "Rs. 5,000 (GIRLS)",
      name: "MAAHII JAIN",
      contact: "7021249054",
      image: "https://i.postimg.cc/WzrCpT83/Copy-of-Z50-8291.jpg",
    },
    {
      ename: "HOCKEY",
      desc: "The clash of sticks, players racing past, and every goal setting the crowd alight. Wield your hockey gear, step on court, and showcase your skill.",
      prizeMoney1: "Rs. 12,500 (BOYS)",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "SHUBHANKAR SINGH",
      contact: "8263943807",
      image: "https://i.postimg.cc/TPsTp2Vq/Copy-of-IMG-6042-2.jpg",
    },
    {
      ename: "CRICKET",
      desc: "Where an ODI is no less than a One-Day Insomnia and an IPL an Insane Party League, the infamous game of cricket never ceases to enthrall its viewers.",
      prizeMoney1: "Rs. 50,000 (BOYS)",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "VILOHIT KALAVALAPALLI",
      contact: "6309582504",
      image: "https://i.postimg.cc/HLZHNwBt/D725261-2-2.jpg",
    },
    {
      ename: "CHESS",
      desc: "Zugzwang, or defend until you blitz your opponent with a checkmate, pawn by pawn",
      prizeMoney1: "Rs. 6,000 (BLITZ)",
      prizeMoney2: "Rs. 19,000 (CLASSIC)",
      prizeMoney3: "",
      name: "KARANDEEP SINGH SODHI",
      contact: "9511410088",
      image: "https://i.postimg.cc/bvXBh299/DSC-3237.jpg",
    },
    {
      ename: "THROWBALL",
      desc: "Teams unite, and the court pulses with energy in this lively game. Use your power and harness your adrenaline with every throw, playing for victory.",
      prizeMoney1: "Rs. 7,000 (BOYS)",
      prizeMoney2: "Rs. 4,000 (GIRLS)",
      prizeMoney3: "",
      name: "SHAURYA VEMALI",
      contact: "9676743454",
      image: "https://i.postimg.cc/vTVdhdYQ/DSC-8669.jpg",
    },
    {
      ename: "VOLLEYBALL",
      desc: "Volleying the ball on the court, whether by passing it overhead or serving it underhand, sets the stage for a win... as simple as it sounds!",
      prizeMoney1: "Rs. 25,000 (BOYS)",
      prizeMoney2: "Rs. 16,000 (GIRLS)",
      prizeMoney3: "",
      name: "ARYAN POLA",
      contact: "7659890196",
      image: "https://i.postimg.cc/Kvmxcrct/DSC07011.jpg",
    },
    {
      ename: "SQUASH",
      desc: "A racket sport within four walls? Well, it's Squash, a game demanding precision, celerity and gameplan, all at breathtaking speed!",
      prizeMoney1: "Rs. 4,500 (BOYS)",
      prizeMoney2: "Rs. 3,000 (GIRLS)",
      prizeMoney3: "",
      name: "VIDHI JAIN",
      contact: "8929173150",
      image: "https://i.postimg.cc/SNFgFDrf/DSC03668.jpg",
    },
    {
      ename: "POOL",
      desc: "Line up your shots in this calculated dance of angles and skill. Feel the soft clink of the balls pull you deeper into the game’s rhythm.",
      prizeMoney1: "Rs. 2,000",
      prizeMoney2: "",
      prizeMoney3: "",
      name: "RUSHI PATEL",
      contact: "9327272801",
      image: "https://i.postimg.cc/RZcrXn0b/D728307.jpg",
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
        <img src={spartanLeft} className="max-w-xl ml-0 w-1/3 object-contain" />
        <div className="mt-32 mr-16 w-1/2 flex flex-row justify-evenly">
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
      </div>
    </div>
  );
}
