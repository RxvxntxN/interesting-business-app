import React from "react";
import Link from "next/link";
import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1750863490971-65bd86f8ed97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery2",
      width: "w-40 sm:w-48 md:w-56 lg:w-60",
      height: "h-56 sm:h-64 md:h-72 lg:h-80 xl:h-90",
    },
    {
      src: "https://images.unsplash.com/photo-1645830741933-19f5f6591423?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery1",
      width: "w-40 sm:w-48 md:w-56 lg:w-60",
      height: "h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1758393544230-1d3672e27d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery5",
      width: "w-40 sm:w-48 md:w-56 lg:w-60",
      height: "h-40 sm:h-48 md:h-56 lg:h-60",
    },
    {
      src: "https://images.unsplash.com/photo-1765754980940-31b555925cab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery3",
      width: "w-40 sm:w-48 md:w-56 lg:w-60",
      height: "h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80",
    },
    {
      src: "https://images.unsplash.com/photo-1610055888021-d5d9525db811?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Gallery4",
      width: "w-40 sm:w-48 md:w-56 lg:w-60",
      height: "h-56 sm:h-64 md:h-72 lg:h-80 xl:h-90",
    },
  ];

  return (
    <div className="w-full flex flex-col sm:py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg mx-4 sm:mx-8 md:mx-12 lg:mx-16 max-w-3xl md:max-w-4xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 md:mt-10">
          <Link
            href="#"
            className="bg-emerald-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-emerald-700 transition-colors duration-200"
          >
            Working At Garage
          </Link>
          <Link
            href="#"
            className="border-2 border-emerald-600 text-emerald-600 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium hover:bg-emerald-50 transition-colors duration-200"
          >
            Support & Services
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-2 sm:px-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.width} ${image.height} overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

// import React from "react";
// import Link from "next/link";

// const GallerySection = () => {
//   const galleryImages = [
//     {
//       src: "https://images.unsplash.com/photo-1750863490971-65bd86f8ed97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Gallery2",
//       width: "w-60",
//       height: "h-90",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1645830741933-19f5f6591423?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Gallery1",
//       width: "w-60",
//       height: "h-80",
//     },

//     {
//       src: "https://images.unsplash.com/photo-1758393544230-1d3672e27d13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Gallery5",
//       width: "w-60",
//       height: "h-60",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1765754980940-31b555925cab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Gallery3",
//       width: "w-60",
//       height: "h-80",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1610055888021-d5d9525db811?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Gallery4",
//       width: "w-60",
//       height: "h-90",
//     },
//   ];

//   return (
//     <div className="h-min-screen w-full flex flex-col py-16">
//       <div className="flex flex-col items-center h-full px-8">
//         <h2 className="text-3xl font-bold text-center my-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </h2>
//         <p className="text-center mx-16 text-sm max-w-4xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//         <div className="flex gap-4 justify-center mt-8">
//           <Link
//             href="#"
//             className="bg-emerald-600 text-white px-4 py-2 rounded-md"
//           >
//             Working At Garage
//           </Link>
//           <Link
//             href="#"
//             className="focus:outline-2 outline-emerald-600 outline-2 text-emerald-600 px-4 py-2 rounded-md"
//           >
//             Support & Services
//           </Link>
//         </div>
//         <div className="flex justify-center items-end gap-16 flex-wrap px-8 mt-24">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className={`${image.width} ${image.height} overflow-hidden rounded-lg`}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GallerySection;
