import popUp1 from "./eventsImages/Pop-up-desig-1.png";
import popUp2 from "./eventsImages/Pop-up-desig-2.png";
import { useState, useEffect } from "react";

export default function MobileEvents() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const events = [
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

  const openPopup = (eventData) => {
    setPopupContent(eventData);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".popup-content") && !e.target.closest(".trigger")) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="mb-16 md:hidden relative">
      <div className="mt-32 ml-8 mr-8 grid grid-cols-2 gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-center flex-col rounded bg-[#ffcd71] cursor-pointer trigger"
            onClick={() => openPopup(event)}
          >
            <img
              className="pl-4 pr-4 pt-3 pb-3 object-fill h-[174px] w-auto"
              src={event.image}
              alt={event.ename}
            />
            <div className="w-full h-0.5 bg-black"></div>
            <div className="text-center">
              <h3 className="text-2xl " style={{ fontFamily: "Karantina" }}>
                {event.ename}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* Popup*/}
      {isPopupOpen && popupContent && (
        <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[42069]">
          <div
            className="popup-content bg-[#ffcd71] rounded shadow-lg w-1/2 text-center"
            style={{ fontFamily: "Karantina" }}
          >
            <img src={popUp1} />
            <h2 className="text-4xl mt-1">{popupContent.ename}</h2>
            <p className="p-2">{popupContent.desc}</p>
            <div className="mt-7 mb-0 flex flex-row justify-between">
              <div className="ml-[4%] flex flex-col">
                <p className="text-[125%] text-left">PRIZE</p>
                <p className="text-left">{popupContent.prizeMoney1}</p>
                <p className="text-left">{popupContent.prizeMoney2}</p>
                <p className="text-left">{popupContent.prizeMoney3}</p>
              </div>
              <div className="mr-[4%] flex flex-col">
                <p className="text-[125%] text-right"> CONTACT INFO</p>
                <p className="text-right"> {popupContent.name}</p>
                <p className="text-right"> {popupContent.contact}</p>
              </div>
            </div>
            <img src={popUp2} />
          </div>
        </div>
      )}
    </div>
  );
}
