import React from "react";
import {
  FaLongArrowAltRight,
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-52">
      <div className="w-full h-1/4 bg-black flex justify-center text-white font-medium">
        <div className="h-full w-4/5 flex justify-between">
          <div className="h-full w-1/5 flex justify-start items-center gap-2 ">
            <span className="bg-warning-100 text-black h-2/5 w-1/5 text-center -rotate-3">
              Black
            </span>
            <span className="text-xl text-center">Friday</span>
          </div>

          <div className="h-full w-1/5 flex justify-center items-center gap-2">
            <span>up to</span>
            <span className="text-warning-100 text-4xl"> 59% </span>
            <span>off</span>
          </div>

          <div className="h-full w-1/5 flex justify-end items-center ">
            <button className="bg-warning-100 text-black border-0 h-3/5 w-4/5 cursor-pointer hover:text-yellow-900 flex justify-center items-center gap-2">
              SHOP NOW <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-1/6 bg-blue-100 flex justify-center  text-white">
        <div className=" h-full w-4/5 flex justify-between">
          <div className="h-full w-2/5 text-white font-sans font-thin text-sm flex items-center">
            Welcome to Clicon online eCommerce store.
          </div>

          <div className="flex border-red-400 w-2/5">
            <div className="h-full w-3/5 flex items-center">
              <span className="flex items-center"> Follow us: </span>
              <span className="flex h-3/4 border-r border-grey-100 pr-5 ml-5  w-2/6 text-xl justify-between items-center">
                <FaTwitter />
                <FaFacebook />
                <FaPinterestP />
                <FaReddit />
                <FaYoutube />
                <FaInstagram />
              </span>
            </div>

            <div className="flex gap-3 item-center border border-green">
              <span className="flex item-center">
                ENG <FaChevronDown />
              </span>
              <span className="flex item-center">
                USD <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2/6 bg-blue-100 border-t border-gre  flex justify-center  text-white">
        <div className="border border-white h-full w-4/5 flex justify-between">
          <div className="border h-full w-1/5">Black Friday</div>
          <div className="border h-full w-3/5">up to 59% off</div>
          <div className="border h-full w-1/5">up to 59% off</div>
        </div>
      </div>
      <div className="w-full h-1/4 border-grey-100 border-b flex justify-center">
        <div className="border border-black h-full w-4/5 flex">
          <div className="border h-full w-4/5">Black Friday</div>
          <div className="border h-full w-1/5">up to 59% off</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
