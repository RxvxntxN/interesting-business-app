import React from "react";
import { MdEngineering } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const ServicesSection = () => {
  const services = [
    {
      icon: <MdEngineering className="w-full h-full" />,
      text: "Tailor-made advice for your situation",
    },
    {
      icon: <BsFillPersonCheckFill className="w-full h-full" />,
      text: "Guidance in new working methods",
    },
    {
      icon: <GiBrain className="w-full h-full" />,
      text: "Smart software & systems",
    },
    {
      icon: <PiCurrencyDollarSimpleBold className="w-full h-full" />,
      text: "Cost savings with top service",
    },
  ];

  return (
    <div className="min-h-min flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 p-4 sm:p-8 md:p-12 lg:p-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-center flex-col w-full sm:w-auto"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-3 sm:p-4 rounded-full shadow-lg shadow-emerald-600 bg-white">
            {service.icon}
          </div>
          <span className="mt-4 sm:mt-6 md:mt-8 text-center text-sm sm:text-base md:text-lg px-2">
            {service.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;

// import React from "react";
// import { MdEngineering } from "react-icons/md";
// import { BsFillPersonCheckFill } from "react-icons/bs";
// import { GiBrain } from "react-icons/gi";
// import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

// const ServicesSection = () => {
//   return (
//     <div className="h-min-screen flex justify-center items-center gap-16 p-16">
//       <div className="flex items-center flex-col">
//         <MdEngineering className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
//         <span className="mt-8">Tailor-made advice for your situation</span>
//       </div>
//       <div className="flex items-center flex-col">
//         <BsFillPersonCheckFill className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
//         <span className="mt-8">Guidance in new working methods</span>
//       </div>
//       <div className="flex items-center flex-col">
//         <GiBrain className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
//         <span className="mt-8">Smart software & systems</span>
//       </div>
//       <div className="flex items-center flex-col">
//         <PiCurrencyDollarSimpleBold className="w-24 h-24  p-4 rounded-full shadow-lg shadow-emerald-600" />
//         <span className="mt-8">Cost savings with top service</span>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;
