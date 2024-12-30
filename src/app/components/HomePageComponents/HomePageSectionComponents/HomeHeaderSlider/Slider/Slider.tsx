// "use client";
// import React, { useRef, useState } from 'react';
// import showcaseImg from "../../../../../../assets/images/Group 34555.png";
// import showcaseImg2 from "../../../../../../assets/images/Group 34552.png";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';

// // import required modules
// import { Autoplay, Navigation } from 'swiper/modules';
// import Image from 'next/image';

// const Slider = () => {
//   return (
//     <>
//       <Swiper
//         // effect={'fade'}
//         // fadeEffect={{
//         //   crossFade: true
//         // }}
//         autoplay={
//           {
//             delay: 2000,
//             disableOnInteraction: false
//           }
//         }
//         loop={true}
//         // navigation={true}
//         // speed={1000}
//         modules={[ Autoplay, Navigation]}
//         className="mySwiper pb-0 mb-0"
//       >
//         <SwiperSlide style={{
//           backgroundImage:
//             'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://i.ibb.co/bz7mw7r/music-2.jpg")',
//           backgroundSize: 'cover, cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center, center',
//           objectFit: 'cover',
//           height: '75vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//           <div className='w-full container mx-auto'>
//             <div className="text-white">
//               <h1 className="title text-5xl  md:text-8xl !leading-[100px] tracking-wider font-bold mx-auto lg:mx-0">
//                 You <span className="text-primaryColor"> Point</span> It <br />
//                 We <span className="text-primaryColor">Fix</span> It
//               </h1>
//               <p className="mt-8 text-xl">
//                 One-stop solution for your IT needs,
//                 Order any service, anytime.
//               </p>
//               <div className="btn_container">
//                 <button className="bookNowBtn">Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide style={{
//           backgroundImage:
//             'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/slider-1.png")',
//           backgroundSize: 'cover, cover',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center, center',
//           objectFit: 'cover',
//           height: '75vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//           <div className='w-full container mx-auto'>
//             <div className="text-white">
//               <h1 className="title text-5xl  md:text-8xl !leading-[100px] tracking-wider font-bold mx-auto lg:mx-0">
//                 You <span className="text-primaryColor"> Point</span> It <br />
//                 We <span className="text-primaryColor">Fix</span> It
//               </h1>
//               <p className="mt-8 text-xl">
//                 One-stop solution for your IT needs,
//                 Order any service, anytime.
//               </p>
//               <div className="btn_container">
//                 <button className="bookNowBtn">Book Now</button>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//       </Swiper>
//     </>
//   );
// }
// export default Slider

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="">
      <div className="mt-[100px]">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide
            style={{
              backgroundImage: 'url("/banner-1.png")',
              backgroundSize: "cover, cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center, center",
              objectFit: "contain",
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="w-full container mx-auto">
              <div className="text-white">
                <h1 className="title text-5xl md:text-8xl md:leading-[100px] tracking-wider font-extrabold mx-auto lg:mx-0">
                  You <span className="text-primaryColor"> Point</span> It{" "}
                  <br />
                  We <span className="text-primaryColor">Fix</span> It
                </h1>
                <p className="mt-8 text-xl">
                  One-stop solution for your IT needs, Order any service,
                  anytime.
                </p>
                <div className="btn_container">
                  <Link href="/booking-online">
                    <button className="bookNowBtn">Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage: ' url("/banner-2.png")',
              backgroundSize: "cover, cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center, center",
              objectFit: "contain",
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="w-full container mx-auto">
              <div className="text-white">
                <h1 className="title text-5xl  md:text-8xl md:leading-[100px] tracking-wider font-extrabold mx-auto lg:mx-0">
                  You <span className="text-primaryColor"> Point</span> It{" "}
                  <br />
                  We <span className="text-primaryColor">Fix</span> It
                </h1>
                <p className="mt-8 text-xl">
                  One-stop solution for your IT needs, Order any service,
                  anytime.
                </p>
                <div className="btn_container">
                  <Link href="/booking-online">
                    <button className="bookNowBtn">Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
