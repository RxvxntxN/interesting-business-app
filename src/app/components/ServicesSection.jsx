import React from "react";
import { MdEngineering } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const ServicesSection = () => {
  return (
    <div className="h-min-screen flex justify-center items-center gap-16 p-16">
      <div className="flex items-center flex-col">
        <MdEngineering className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
        <span className="mt-8">Tailor-made advice for your situation</span>
      </div>
      <div className="flex items-center flex-col">
        <BsFillPersonCheckFill className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
        <span className="mt-8">Guidance in new working methods</span>
      </div>
      <div className="flex items-center flex-col">
        <GiBrain className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
        <span className="mt-8">Smart software & systems</span>
      </div>
      <div className="flex items-center flex-col">
        <PiCurrencyDollarSimpleBold className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
        <span className="mt-8">Cost savings with top service</span>
      </div>
    </div>
  );
};

export default ServicesSection;
