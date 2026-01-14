import React from "react";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoLaptopOutline } from "react-icons/io5";
import RoleTabCard from "./RoleTabCard";

const RoleSection = () => {
  return (
    <div className="relative h-screen">
      <div className="flex justify-center flex-col items-center pt-24 px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4">
            Solution that working for everyone!
          </h1>
          <span className="text-2xl">
            Select your role and discover the best solutions & article for you.
          </span>
        </div>
        <div className="flex justify-center mt-16 gap-8">
          <div className="border rounded-lg p-4 min-h-36 w-36">
            <MdOutlineVideoSettings className="mx-auto h-16 w-16 text-6xl  text-gray-600" />
            <p className="text-center mt-4 text-gray-500 font-bold">
              Engine Specialist
            </p>
          </div>
          <div className="border rounded-lg p-4 min-h-36 w-36">
            <IoLaptopOutline className="mx-auto h-16 w-16 text-6xl text-gray-600" />
            <p className="text-center mt-4 text-gray-500 font-bold">
              Engine Manager
            </p>
          </div>
        </div>
      </div>
      <RoleTabCard />
    </div>
  );
};

export default RoleSection;
