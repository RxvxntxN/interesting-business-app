// src/app/components/NavigationBar.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import CarService from "../../../public/carservices.svg";

const NavigationBar = () => {
  const menuItems = [
    { label: "Solutions", href: "#", active: true },
    { label: "Cases", href: "#", active: false },
    { label: "Services", href: "#", active: false },
    { label: "Resources", href: "#", active: false },
    { label: "Company", href: "#", active: false },
  ];

  return (
    <div className="rounded-t-xl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid with 3 equal columns */}
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo Section */}
          <div className=" h-full flex items-center">
            <Link
              href="#"
              className="flex items-center gap-2 bg-white rounded-b-xl p-2"
            >
              <Image src={CarService} width={50} height={50} alt="Logo" />
              <p className="font-bold pl-2 text-gray-600 text-lg">
                Car Services
              </p>
            </Link>
          </div>

          {/* Middle Sections */}
          <div className="bg-white rounded-b-xl h-full flex items-center justify-center">
            <div className="flex items-center space-x-6">
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
          </div>

          {/* Login section*/}
          <div className="h-full flex items-center justify-end">
            <div className="flex items-center space-x-1 bg-stone-700 rounded-md ">
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-white hover:text-gray-200 rounded-l-md"
              >
                Login
              </Link>
              <Link
                href="#"
                className="rounded-md bg-[#10b981] px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
