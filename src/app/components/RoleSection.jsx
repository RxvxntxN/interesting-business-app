import React from "react";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoLaptopOutline } from "react-icons/io5";
import RoleTabCard from "./RoleTabCard";

const RoleSection = () => {
  return (
    <div className="relative min-h-screen py-8 md:py-0">
      <div className="flex justify-center flex-col items-center pt-8 md:pt-16 lg:pt-24 px-4">
        <div className="text-center w-full max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
            Solution that working for everyone!
          </h1>

          <span className="text-lg sm:text-xl md:text-2xl text-gray-600">
            Select your role and discover the best solutions & article for you.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 md:mt-12 lg:mt-16 gap-4 md:gap-6 lg:gap-8 w-full max-w-2xl">
          <div className="border rounded-lg p-4 sm:p-6 w-full sm:w-auto min-w-[200px] max-w-[300px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <MdOutlineVideoSettings className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-600" />
              <p className="text-center mt-3 sm:mt-4 text-gray-600 font-bold text-base sm:text-lg">
                Engine Specialist
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-4 sm:p-6 w-full sm:w-auto min-w-[200px] max-w-[300px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <IoLaptopOutline className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-600" />
              <p className="text-center mt-3 sm:mt-4 text-gray-600 font-bold text-base sm:text-lg">
                Engine Manager
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 mt-8 md:mt-12">
        <RoleTabCard />
      </div>
    </div>
  );
};

export default RoleSection;

// import React from "react";
// import { MdOutlineVideoSettings } from "react-icons/md";
// import { IoLaptopOutline } from "react-icons/io5";
// import RoleTabCard from "./RoleTabCard";

// const RoleSection = () => {
//   return (
//     <div className="relative h-screen">
//       <div className="flex justify-center flex-col items-center pt-24 px-4">
//         <div className="text-center">
//           <h1 className="text-7xl font-bold mb-4">
//             Solution that working for everyone!
//           </h1>
//           <span className="text-2xl">
//             Select your role and discover the best solutions & article for you.
//           </span>
//         </div>
//         <div className="flex justify-center mt-16 gap-8">
//           <div className="border rounded-lg p-4 min-h-36 w-36">
//             <MdOutlineVideoSettings className="mx-auto h-16 w-16 text-6xl  text-gray-600" />
//             <p className="text-center mt-4 text-gray-500 font-bold">
//               Engine Specialist
//             </p>
//           </div>
//           <div className="border rounded-lg p-4 min-h-36 w-36">
//             <IoLaptopOutline className="mx-auto h-16 w-16 text-6xl text-gray-600" />
//             <p className="text-center mt-4 text-gray-500 font-bold">
//               Engine Manager
//             </p>
//           </div>
//         </div>
//       </div>
//       <RoleTabCard />
//     </div>
//   );
// };

// export default RoleSection;
