"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import NavigationBar from "./NavigationBar";

const HeroSection = () => {
  const carImages = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca",
    "https://images.unsplash.com/photo-1756244585867-c76af96347a8",
  ];

  return (
    <section className="relative bg-white p-4 sm:px-4">
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <NavigationBar />
        </div>

        <div
          className={`
  absolute inset-0 overflow-hidden
  rounded-lg
  sm:rounded-xl
`}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3500 }}
            loop
            speed={800}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "dash-bullet",
              bulletActiveClass: "dash-bullet-active",
            }}
            className="absolute inset-0 w-full h-full"
          >
            {carImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute z-10 bg-white rounded-t-lg bottom-0 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 px-3 py-2">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import NavigationBar from "./NavigationBar";

// const HeroSection = () => {
//   const carImages = [
//     "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
//     "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca",
//     "https://images.unsplash.com/photo-1756244585867-c76af96347a8",
//   ];

//   return (
//     <>
//       <div className="relative h-screen bg-white p-4">
//         <div className="relative w-full h-full">
//           <div className="absolute top-0 left-0 w-full z-50">
//             <NavigationBar />
//           </div>
//           <div className="absolute inset-0 overflow-hidden rounded-xl">
//             <Swiper
//               modules={[Autoplay, Pagination, EffectFade]}
//               effect="fade"
//               fadeEffect={{ crossFade: true }}
//               autoplay={{ delay: 3500 }}
//               loop
//               speed={800}
//               pagination={{
//                 clickable: true,
//                 el: ".swiper-pagination",
//                 bulletClass: "dash-bullet",
//                 bulletActiveClass: "dash-bullet-active",
//               }}
//               className="absolute inset-0 w-full h-full"
//             >
//               {carImages.map((src, index) => (
//                 <SwiperSlide key={index}>
//                   <div
//                     className="w-full h-full"
//                     style={{
//                       backgroundImage: `url(${src})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           <div className="absolute rounded-t-xl bottom-0 px-2 py-2 bg-white left-8 z-10">
//             <div className="swiper-pagination"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;
