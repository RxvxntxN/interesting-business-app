import React from "react";
import Link from "next/link";

const IntroSection = () => {
  const engineImage = [
    {
      src: "https://images.unsplash.com/photo-1686082307524-c89fb0bfadde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Engine2",
      width: "w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72",
      height: "h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1743367999884-57f80cdce823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Engine1",
      width: "w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80",
      height: "h-auto",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white p-4 sm:p-6">
      <div className="relative w-full h-full bg-stone-100 rounded-md sm:rounded-lg lg:rounded-xl">
        <div className="bg-white ml-4 sm:ml-8 md:ml-12 lg:ml-16 pb-2 flex justify-center max-w-xs sm:max-w-sm text-2xl sm:text-3xl md:text-4xl font-bold rounded-b-lg">
          Introduction
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8 lg:gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We Are Professional
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#"
                className="bg-emerald-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-emerald-700 transition-colors duration-200"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="border-2 border-emerald-600 text-emerald-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-emerald-50 transition-colors duration-200 focus:outline-2 focus:outline-emerald-600"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-700">
                  52K+
                </h1>
                <span className="font-bold text-lg sm:text-xl text-gray-700">
                  Satisfied Customers
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 md:mb-8">
                Join our community of happy clients!
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                With over 15 years of industry experience, our certified master
                technicians use state-of-the-art diagnostic equipment to ensure
                your vehicle performs at its peak. We don't just fix cars; we
                provide peace of mind through transparent pricing, real-time
                digital inspections, and a commitment to precision engineering.
              </p>

              <div className="mt-8 lg:hidden">
                <Link
                  href="#"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-700 transition-colors duration-200 w-full text-center"
                >
                  Get Started Today
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center lg:items-end gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                {engineImage.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${image.width}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`rounded-lg sm:rounded-xl object-cover ${image.height} w-full`}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              <p className="text-center lg:text-right mt-4 text-gray-500 text-sm sm:text-base">
                Our certified technicians in action
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16 lg:mt-20 pb-5 ">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700">
                15+
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Years Experience
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700">
                200+
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Expert Technicians
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700">
                24/7
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Support</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-emerald-700">
                100%
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

// import React from "react";
// import Link from "next/link";

// const IntroSection = () => {
//   const engineImage = [
//     {
//       src: "https://images.unsplash.com/photo-1686082307524-c89fb0bfadde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Engine2",
//       width: "w-64",
//       height: "h-80",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1743367999884-57f80cdce823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Engine1",
//       width: "w-80",
//       height: "h-max",
//     },
//   ];

//   return (
//     <>
//       <div className="relative h-screen bg-white p-4">
//         <div className="relative w-full h-full bg-stone-100 rounded-md">
//           <div className="bg-white ml-16 pb-2 flex justify-center max-w-sm text-4xl font-bold rounded-b-lg">
//             Introduction
//           </div>
//           <div className="max-w-6xl mx-auto px-8">
//             <div className="flex justify-between mb-16 items-center gap-16 mt-24">
//               <h1 className=" text-7xl font-bold">We Are Professional</h1>
//               <div className="flex gap-4">
//                 <Link
//                   href="#"
//                   className="bg-emerald-600 text-white px-4 py-2 rounded-md"
//                 >
//                   Read More
//                 </Link>
//                 <Link
//                   href="#"
//                   className="focus:outline-2 outline-emerald-600 outline-2 text-emerald-600 px-4 py-2 rounded-md"
//                 >
//                   How it works
//                 </Link>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <div>
//                 <h1 className="text-3xl font-bold">52K+</h1>
//                 <span className="font-bold"> Satisfied Customers</span>
//                 <h2 className="mt-12 text-5xl">
//                   Join our community of happy clients!
//                 </h2>
//                 <p className="max-w-md mt-12">
//                   With over 15 years of industry experience, our certified
//                   master technicians use state-of-the-art diagnostic equipment
//                   to ensure your vehicle performs at its peak. We don’t just fix
//                   cars; we provide peace of mind through transparent pricing,
//                   real-time digital inspections, and a commitment to precision
//                   engineering.
//                 </p>
//               </div>
//               <div className="ml-20 flex gap-16 items-end">
//                 {engineImage.map((image, index) => (
//                   <img
//                     key={index}
//                     src={image.src}
//                     alt={image.alt}
//                     className={`rounded-lg object-cover ${image.width} ${image.height}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IntroSection;
