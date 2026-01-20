"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CarService from "../../../public/carservices.svg";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Solutions", href: "#", active: true },
    { label: "Cases", href: "#", active: false },
    { label: "Services", href: "#", active: false },
    { label: "Resources", href: "#", active: false },
    { label: "Company", href: "#", active: false },
  ];

  return (
    <nav className="rounded-t-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 bg-white rounded-b-xl px-3">
          <Link href="#" className="flex items-center gap-2">
            <Image src={CarService} width={42} height={42} alt="Logo" />
            <p className="font-bold text-gray-600 text-base sm:text-lg">
              Car Services
            </p>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium ${
                  item.active
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-1 bg-stone-700 rounded-md">
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 rounded-l-md"
            >
              Login
            </Link>
            <Link
              href="#"
              className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-2 bg-white rounded-xl shadow-md p-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium ${
                  item.active
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 border-t flex gap-2">
              <Link
                href="#"
                className="flex-1 text-center py-2 text-sm font-medium text-white bg-stone-700 rounded-md"
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 text-center py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import CarService from "../../../public/carservices.svg";

// const NavigationBar = () => {
//   const menuItems = [
//     { label: "Solutions", href: "#", active: true },
//     { label: "Cases", href: "#", active: false },
//     { label: "Services", href: "#", active: false },
//     { label: "Resources", href: "#", active: false },
//     { label: "Company", href: "#", active: false },
//   ];

//   return (
//     <div className="rounded-t-xl">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-3 items-center h-16">
//           <div className=" h-full flex items-center">
//             <Link
//               href="#"
//               className="flex items-center gap-2 bg-white rounded-b-xl p-2"
//             >
//               <Image src={CarService} width={50} height={50} alt="Logo" />
//               <p className="font-bold pl-2 text-gray-600 text-lg">
//                 Car Services
//               </p>
//             </Link>
//           </div>

//           <div className="bg-white rounded-b-xl h-full flex items-center justify-center">
//             <div className="flex items-center space-x-6">
//               {menuItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className={`text-sm font-medium ${
//                     item.active
//                       ? "text-emerald-600"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="h-full flex items-center justify-end">
//             <div className="flex items-center space-x-1 bg-stone-700 rounded-md ">
//               <Link
//                 href="#"
//                 className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 rounded-l-md"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="#"
//                 className="rounded-md bg-[#10b981] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavigationBar;
