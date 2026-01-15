import React from "react";
import Link from "next/link";

const IntroSection = () => {
  const engineImage = [
    {
      src: "https://images.unsplash.com/photo-1686082307524-c89fb0bfadde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Engine2",
      width: "w-64",
      height: "h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1743367999884-57f80cdce823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Engine1",
      width: "w-80",
      height: "h-max",
    },
  ];

  return (
    <>
      <div className="relative h-screen bg-white p-4">
        <div className="relative w-full h-full bg-stone-100 rounded-md">
          <div className="bg-white ml-16 pb-2 flex justify-center max-w-sm text-4xl font-bold rounded-b-lg">
            Introduction
          </div>
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex justify-between mb-16 items-center gap-16 mt-24">
              <h1 className=" text-7xl font-bold">We Are Professional</h1>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-md"
                >
                  Read More
                </Link>
                <Link
                  href="#"
                  className="focus:outline-2 outline-emerald-600 outline-2 text-emerald-600 px-4 py-2 rounded-md"
                >
                  How it works
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-3xl font-bold">52K+</h1>
                <span className="font-bold"> Satisfied Customers</span>
                <h2 className="mt-12 text-5xl">
                  Join our community of happy clients!
                </h2>
                <p className="max-w-md mt-12">
                  With over 15 years of industry experience, our certified
                  master technicians use state-of-the-art diagnostic equipment
                  to ensure your vehicle performs at its peak. We don’t just fix
                  cars; we provide peace of mind through transparent pricing,
                  real-time digital inspections, and a commitment to precision
                  engineering.
                </p>
              </div>
              <div className="ml-20 flex gap-16 items-end">
                {engineImage.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`rounded-lg object-cover ${image.width} ${image.height}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
