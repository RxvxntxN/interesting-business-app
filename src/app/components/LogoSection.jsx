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
    <div className="h-auto m-26">
      <div className="my-12 py-8">
        <p className="text-center text-lg mb-24 font-semibold text-emerald-600 uppercase tracking-wider">
          Our Certified Partners & Trusted Brands
        </p>
        <div className="mt-6 mx-16 flex justify-between items-center gap-12 flex-wrap">
          <Image
            src={Redbull}
            alt="RedBull"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />

          <Image
            src={Shell}
            alt="Shell"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />

          <Image
            src={Volkswagen}
            alt="Volkswagen"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />
          <Image
            src={Toyota}
            alt="Toyota"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />
          <Image
            src={Discord}
            alt="Discord"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />
          <Image
            src={Visa}
            alt="Visa"
            width={120}
            height={120}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-90 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
