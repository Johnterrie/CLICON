import React from "react";
import {
  Logo,
  Heart,
  ShoppingCart,
  User,
  Phone,
  ArrowRefresh,
  HeadPhones,
  MapPinLine,
  Caution,
} from "../../src/assests/index";
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
    <div className="w-full h-52 mb-8">
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
            <button className="bg-warning-100 rounded text-black border-0 h-3/5 w-4/5 cursor-pointer hover:text-yellow-900 flex justify-center items-center gap-2">
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

          <div className="flex justify-end w-3/5">
            <div className="h-full w-3/5 flex justify-center items-center">
              <span className="flex  items-center w-2/6 justify-center ">
                Follow us:
              </span>
              <span className="flex h-3/4 border-r pr-5 ml-5  w-full text-xl justify-between items-center">
                <FaTwitter />
                <FaFacebook />
                <FaPinterestP />
                <FaReddit />
                <FaYoutube />
                <FaInstagram />
              </span>
            </div>

            <div className="flex w-1/4 font-sans font-thin justify-end">
              <div className="flex text-sm h-full w-2/4 gap-2 justify-center items-center">
                ENG <FaChevronDown />
              </div>
              <span className="flex text-sm gap-2 justify-center items-center">
                USD <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-2/6 bg-blue-100 border-t flex justify-center  text-white">
        <div className="h-full w-4/5 flex justify-between">
          <div className="h-full w-1/5 flex justify-start items-center">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="h-full w-3/5  flex justify-center items-center">
            <input
              type="text"
              className="w-4/5 h-4/6 rounded pl-6"
              placeholder="Search for anything..."
            />
          </div>
          <div className="h-full w-1/6 flex justify-between items-center">
            <img src={ShoppingCart} alt="ShoppingCart" className="h-1/2" />
            <img src={Heart} alt="Heart" className="h-1/2" />
            <img src={User} alt="User" className="h-1/2" />
          </div>
        </div>
      </div>

      <div className="w-full h-2/5 border-grey-100 border-b flex justify-center">
        <div className="h-full w-4/5 flex">
          <div className="h-full w-4/5 flex justify-start items-center font-medium">
            <button className="w-[15vw] h-4/6 bg-orange-main rounded">
              All Categories
            </button>

            <div className="flex ml-4 gap-6">
              <div className="flex gap-2">
                <img src={MapPinLine} alt="mapLine" /> Track Order
              </div>
              <div className="flex gap-2">
                <img src={ArrowRefresh} alt="mapLine" /> Compare
              </div>
              <div className="flex gap-2">
                <img src={HeadPhones} alt="mapLine" />
                Customer Support
              </div>
              <div className="flex gap-2">
                <img src={Caution} alt="mapLine" /> Need Help
              </div>
            </div>
          </div>
          <div className="h-full w-1/5 flex justify-center items-center gap-3">
            <img src={Phone} alt="Phone" />
            <p>+234 71-738-022-56</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
