import React from "react";
import Image from "next/image";
import Redbull from "../../../public/brandlogos/redbull.svg";
import Shell from "../../../public/brandlogos/shell.svg";
import Volkswagen from "../../../public/brandlogos/volkswagen.svg";
import Toyota from "../../../public/brandlogos/toyota.svg";
import Discord from "../../../public/brandlogos/discord.svg";
import Visa from "../../../public/brandlogos/visa.svg";

const LogoSection = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="py-4 md:py-8">
        <p className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl text-emerald-600 uppercase tracking-wider mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          Our Certified Partners & Trusted Brands
        </p>
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <Image
            src={Redbull}
            alt="RedBull"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />

          <Image
            src={Shell}
            alt="Shell"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />

          <Image
            src={Volkswagen}
            alt="Volkswagen"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />
          <Image
            src={Toyota}
            alt="Toyota"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />
          <Image
            src={Discord}
            alt="Discord"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />
          <Image
            src={Visa}
            alt="Visa"
            width={80}
            height={80}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

// import React from "react";
// import Image from "next/image";
// import Redbull from "../../../public/brandlogos/redbull.svg";
// import Shell from "../../../public/brandlogos/shell.svg";
// import Volkswagen from "../../../public/brandlogos/volkswagen.svg";
// import Toyota from "../../../public/brandlogos/toyota.svg";
// import Discord from "../../../public/brandlogos/discord.svg";
// import Visa from "../../../public/brandlogos/visa.svg";

// const LogoSection = () => {
//   return (
//     <div className="h-auto m-26">
//       <div className="my-12 py-8">
//         <p className="text-center font-bold text-lg mb-24 text-emerald-600 uppercase tracking-wider">
//           Our Certified Partners & Trusted Brands
//         </p>
//         <div className="mt-6 mx-16 flex justify-between items-center gap-12 flex-wrap">
//           <Image
//             src={Redbull}
//             alt="RedBull"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />

//           <Image
//             src={Shell}
//             alt="Shell"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />

//           <Image
//             src={Volkswagen}
//             alt="Volkswagen"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />
//           <Image
//             src={Toyota}
//             alt="Toyota"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />
//           <Image
//             src={Discord}
//             alt="Discord"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />
//           <Image
//             src={Visa}
//             alt="Visa"
//             width={120}
//             height={120}
//             className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoSection;
