import React from "react";

import bliss from "./blissbody.jpg";
import tech from "./img.png";
import quench from "./quench.png";
import soda from "./soda.png";

const sponsors = [
  { img: bliss, title: "MEDIA SPONSOR", link: "https://blissbody.in/" },
  { img: tech, title: "MEDIA SPONSOR", link: "https://tech-gyan.in/" },
  { img: quench, title: "MEDIA SPONSOR", link: "https://quenchery.co.in" },
  { img: soda, title: "MEDIA SPONSOR", link: "https://sodaterian.com/" },
  { img: bliss, title: "MEDIA SPONSOR", link: "https://blissbody.in/" },
  { img: tech, title: "MEDIA SPONSOR", link: "https://tech-gyan.in/" },
  { img: quench, title: "MEDIA SPONSOR", link: "https://quenchery.co.in" },
  { img: soda, title: "MEDIA SPONSOR", link: "https://sodaterian.com/" },
  { img: bliss, title: "MEDIA SPONSOR", link: "https://blissbody.in/" },
  { img: tech, title: "MEDIA SPONSOR", link: "https://tech-gyan.in/" },
  { img: quench, title: "MEDIA SPONSOR", link: "https://quenchery.co.in" },
  { img: soda, title: "MEDIA SPONSOR", link: "https://sodaterian.com/" },
];

const Sponsor = () => {
  return (
    <div className="min-h-screen font-[Karantina] min-w-full bg-[#1A1919] container text-center py-4 pt-20">
      <h1 className="text-7xl sm:text-8xl mt-16 text-white">
        OUR <span className="text-[#FFCD71]">SPONSORS</span>
      </h1>

      <div className="overflow-hidden mt-20 w-full">
        <div
          className="relative flex gap-8 animate-loop-scroll w-full hover:animation-play-state:paused"
          id="animatekr"
        >
          {sponsors.map((sponsor, index) => (
            <div
              className="relative bg-[#FFCD71] flex-shrink-0 w-3/4 sm:w-1/4 rounded-md flex flex-col"
              id="p-card"
            >
              <div
                className="flex-grow flex items-center p-4 justify-center"
                id="img-card"
              >
                <a
                  href={sponsor.link}
                  className="max-h-full cursor-pointer w-auto z=100"
                >
                  <img
                    src={sponsor.img}
                    alt="Media Sponsor"
                    className="max-h-full cursor-pointer w-auto"
                  />
                </a>
              </div>
              <div className=" bottom-0 left-0 w-full bg-white text-black py-2 shadow-md">
                <p className="text-2xl md:text-xl tracking-wider">
                  {sponsor.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
