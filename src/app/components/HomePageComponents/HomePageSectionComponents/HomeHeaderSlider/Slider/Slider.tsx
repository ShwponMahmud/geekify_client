// "use client";

// import Image from "next/image";
// import React, { useEffect } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import 'swiper/css/effect-fade';
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import showcaseImg from "../../../../../../assets/images/Group 34555.png";
// import showcaseImg2 from "../../../../../../assets/images/Group 34552.png";

// const Slider: React.FC = () => {
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
//     <div className="w-full relative">
//       <div className="swiper progress-slide-carousel swiper-container relative">
//         <div className="swiper-wrapper ml-[80px] lg:ml-[150px]">
//           <div className="swiper-slide">
//             <div className="h-auto w-auto flex justify-center">
//               <Image className="showcase_img" src={showcaseImg} alt="" />
//             </div>
//           </div>
//           <div className="swiper-slide">
//             <div className="h-auto w-auto flex justify-center">
//               <Image className="showcase_img" src={showcaseImg2} alt="" />
//             </div>
//           </div>
         
//         </div>
//         <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
//       </div>
//     </div>
//   );
// };

// export default Slider;


"use client";
import React, { useRef, useState } from 'react';
import showcaseImg from "../../../../../../assets/images/Group 34555.png";
import showcaseImg2 from "../../../../../../assets/images/Group 34552.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <Swiper
        effect={'fade'}
        fadeEffect={{
          crossFade: true
        }}
        autoplay={
         {
          delay: 5000,
          disableOnInteraction: true
         }
        }
        speed={2500}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='h-full'>
            <Image src={showcaseImg} width={400} height={250} alt='' className='w-auto h-auto object-cover xxl:ml-[120px] mt-10' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full'>
            <Image src={showcaseImg2} width={400} height={250} alt='' className='w-auto h-auto object-cover xxl:ml-[120px] mt-10' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full'>
            <Image src={showcaseImg} width={400} height={250} alt='' className='w-auto h-auto object-cover xxl:ml-[120px] mt-10' />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
export default Slider
