import React from "react";
import { Menu } from "~/data/data";
import {
  FaHome,
  FaDollarSign,
  FaWallet,
  FaChartLine,
  FaQuestion,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const iconMapping = {
  home: <FaHome />,
  prices: <FaDollarSign />,
  wallet: <FaWallet />,
  market: <FaChartLine />,
  values: <FaChartLine />,
  help: <FaQuestion />,
};

export default function Navbar() {
  return (
    <div className="w-[330px] bg-[#e7e7e7] py-[20px] px-[15px] rounded-r-[20px]">
      <h1 className="font-bakbak font-semibold text-[40px] bg-gradient-to-tl from-[#93ff51] to-[#000] text-transparent bg-clip-text inline-flex relative">
        BBorsa
        <span className="absolute -right-2 bottom-2 font-bakbak font-bold text-[15px] text-[#000]/50">
          v1.0
        </span>
      </h1>
      <hr className="w-full h-1 my-3 bg-[#141414]/30" />
      {Menu.map((menu) => (
        <div className="w-full flex flex-col gap-y-[20px] mb-5">
          <h2 className="font-bakbak text-gray-600 mt-5">{menu.title}</h2>
          {menu.options.map((option) => (
            <Link
              to={option.to}
              className="w-full bg-white cursor-pointer hover:ring-[2px] hover:ring-offset-4 ring-[#141414]/25 hover:shadow-sm transition-all duration-500 h-12 rounded-lg flex gap-x-3 px-[17px] items-center justify-start"
            >
              <div className="text-xl">{iconMapping[option.icon]}</div>
              <span className="font-medium font-bakbak">{option.title}</span>
            </Link>
          ))}
        </div>
      ))}
      <Link
        to="/ticket"
        className="w-full cursor-pointer bg-white mt-12 h-24 rounded-lg  hover:ring-[2px] hover:ring-offset-4 ring-[#141414]/25 hover:shadow-sm  transition-all duration-500 flex gap-x-3 px-[17px] items-center justify-center"
      >
        <span className="font-bakbak text-[20px]">Help & Ticket</span>
      </Link>
    </div>
  );
}
