import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import dotalogo from "../images/DoTA.svg";
import arenaLogo from "../images/navbarLogo.png";
import spartan from "../images/spartan.png";
import { Link } from "react-router-dom";
import Button from "./Button";
function Footer() {
  return (
    <div className="bg-black">
      <div className="flex py-8 sm:flex-row gradient sm:pl-80 relative desc gap-4 sm:py-4 bg-red-500 w-[100%] z-[100] sm:gap-0 h-60  flex-col justify-between footer px-12 sm:mt-40">
        <img
          src={spartan}
          className="absolute hidden sm:block left-0 bottom-0"
          alt=""
        />
        <div className=" flex flex-col gap-4 md:w-[20rem] desc justify-center items-center">
          <div className="text-white flex flex-row gap-4 sm:flex-col justify-between text-center ">
            <div className="sm:hidden flex flex-col w-[60%]">
              <img src={arenaLogo} alt="" className="w-[70%]" />
              <div className="sm:hidden flex flex-col shrink">
                <h1 className="flex text-left w-full underline justify-start gap-6 items-center text-[125%]">
                  <IoMdMail color="#FFCB70" size={40} />{" "}
                  arena@hyderabad.bits-pilani.ac.in
                </h1>
                <h1 className="flex text-left w-full justify-start gap-8 items-center text-[125%] ">
                  <FaLocationDot color="#FFCB70" size={40} /> BITS Pilani
                  Hyderabad Campus, Secunderabad, Telangana 500078
                </h1>
              </div>
            </div>
            <div className="sm:hidden flex flex-col justify-center items-center shrink w-[40%]">
              <div className="text-[200%] shrink-[2]">DEVELOPED BY</div>
              <img src={dotalogo} alt="" className="w-[50%] shrink" />
              <div className=" flex justify-evenly items-center text-[#FFCB70] mt-[7%] sm:mt-0 w-[100%]">
                <a
                  target="_blank"
                  href="https://www.instagram.com/arena.bitsh/?hl=en"
                  className="shrink"
                >
                  <FaInstagram size={41} color="#FFCB70" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/bits.arena/"
                  className="shrink"
                >
                  <AiOutlineFacebook size={41} color="#FFCB70" />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/arena-bitshyd/?originalSubdomain=in"
                  className="shrink"
                >
                  <CiLinkedin size={41} color="#FFCB70" />
                </a>
              </div>
            </div>
            <img src={arenaLogo} alt="" className="hidden sm:block w-[70%]" />
            <h1 className="hidden sm:block text-2xl">FOLLOW US</h1>
            <div className="hidden sm:flex gap-8 justify-center items-center text-[#FFCB70]">
              <a
                target="_blank"
                href="https://www.instagram.com/arena.bitsh/?hl=en"
              >
                <FaInstagram size={41} color="#FFCB70" />
              </a>
              <a target="_blank" href="https://www.facebook.com/bits.arena/">
                <AiOutlineFacebook size={41} color="#FFCB70" />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/arena-bitshyd/?originalSubdomain=in"
              >
                <CiLinkedin size={41} color="#FFCB70" />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex flex-col hidden justify-evenly items-center">
          <h1 className="text-white text-3xl text-center">Developed by</h1>
          <a target="_blank" href="https://www.instagram.com/dota_bphc/">
            <img className="w-32" src={dotalogo} alt="" />
          </a>
        </div>

        <div className="hidden sm:flex flex-col text-xl text-white gap-4 desc w-80 justify-center items-center">
          <h1 className="text-white text-3xl text-center">CONTACT US</h1>
          <h1 className="flex text-left w-full justify-start gap-6 items-center">
            <FaPhoneSquareAlt color="#FFCB70" size={35} /> +91 7780789592
          </h1>
          <h1 className="flex text-left w-full underline justify-start gap-6 items-center">
            <IoMdMail color="#FFCB70" size={40} />{" "}
            arena@hyderabad.bits-pilani.ac.in
          </h1>
          <h1 className="flex text-left w-full justify-start gap-10 items-center">
            <FaLocationDot color="#FFCB70" size={40} /> BITS Pilani Hyderabad
            Campus, Secunderabad, Telangana 500078
          </h1>
        </div>

        {/* <div className="text-white  sm:hidden text-center">
        <h1 className=" text-2xl">FOLLOW US</h1>
        <div className="flex gap-8 justify-center items-center text-[#FFCB70]">
          <a target="_blank" href="https://www.instagram.com/atmos.bitsh/">
            <FaInstagram size={41} color="#FFCB70" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/search/top?q=atmos%2C%20bits%20pilani%20hyderabad%20campus"
          >
            <AiOutlineFacebook size={41} color="#FFCB70" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A3764030&keywords=bits%20pilani%2C%20hyderabad%20campus&origin=RICH_QUERY_SUGGESTION&position=6&searchId=099ccea4-4199-4ae8-8080-3dc2b657092e&sid=mJy&spellCorrectionEnabled=false"
          >
            <CiLinkedin size={41} color="#FFCB70" />
          </a>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
