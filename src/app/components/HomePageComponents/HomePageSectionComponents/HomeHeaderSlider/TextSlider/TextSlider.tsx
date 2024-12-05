// 'use client'

// import React, { useEffect } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import 'swiper/css/effect-fade';
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// function TextSlider() {
//   useEffect(() => {
//     // Swiper.use([Autoplay, Pagination, EffectFade]);

//     const swiper = new Swiper(".progress-slide-carousel", {
//       modules: [Autoplay, Pagination, EffectFade],
//       loop: true,
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//       },
//       effect: 'fade',
//       fadeEffect: {
//         crossFade: true,
//       },
//       speed: 2500
//     });

//     return () => swiper.destroy(true, true);
//   }, []);

//   return (
//     <div className="w-full">
//       <div className="swiper progress-slide-carousel swiper-container relative">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide">
//             <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
//               You <span className="text-primaryColor"> point</span> it
//               We <span className="text-primaryColor">fix</span> it
//             </h1>
//             <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
//               One-stop solution for your IT needs,
//               Order any service, anytime.
//             </p>

//             <div className="btn_container flex justify-center lg:justify-start">
//               <button className="bookNowBtn">Book Now</button>
//             </div>
//           </div>        
//           <div className="swiper-slide">
//             <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
//               Youu <span className="text-primaryColor"> point</span> it
//               We <span className="text-primaryColor">fix</span> it
//             </h1>
//             <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
//               One-stop solution for your IT needs,
//               Order any service, anytime.
//             </p>

//             <div className="btn_container flex justify-center lg:justify-start">
//               <button className="bookNowBtn">Book Now</button>
//             </div>
//           </div>        
//           <div className="swiper-slide">
//             <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
//               You <span className="text-primaryColor"> point</span> it
//               We <span className="text-primaryColor">fixxx</span> it
//             </h1>
//             <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
//               One-stop solution for your IT needs,
//               Order any service, anytime.
//             </p>

//             <div className="btn_container flex justify-center lg:justify-start">
//               <button className="bookNowBtn">Book Now</button>
//             </div>
//           </div>        
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default TextSlider



"use client";
import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

const TextSlider = () => {
  return (
    <>
      <Swiper
        effect='fade'
        fadeEffect={{
          crossFade: true
        }}
        autoplay={
          {
            delay: 5000,
            disableOnInteraction: false
          }
        }
        speed={2500}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-full">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              You <span className="text-primaryColor"> point</span> it
              We <span className="text-primaryColor">fix</span> it
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              One-stop solution for your IT needs,
              Order any service, anytime.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional Slides */}
        <SwiperSlide>
          <div className="h-full">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              Your <span className="text-primaryColor"> Service</span> Solution
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              Reliable IT solutions, tailored to your needs.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn">Contact Us</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              You <span className="text-primaryColor"> point</span> it
              We <span className="text-primaryColor">fix</span> it
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              One-stop solution for your IT needs,
              Order any service, anytime.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn">Book Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default TextSlider