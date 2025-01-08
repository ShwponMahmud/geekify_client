"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="">
      <div className="mt-[88px]">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),  url("/banner-1.png")',
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
                <h1 className="title text-5xl  md:text-8xl md:leading-[100px] tracking-wider font-bold mx-auto lg:mx-0">
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
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/banner-2.png")',
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
                <h1 className="title text-5xl  md:text-8xl md:leading-[100px] tracking-wider font-bold mx-auto lg:mx-0">
                  Stay
                  <span className="text-primaryColor"> Alert</span>, <br />
                  Stay <span className="text-primaryColor">Safe</span>
                </h1>
                <p className="mt-8 text-xl max-w-[800px]">
                  Get informed about the latest scams and learn effective
                  prevention strategies, Explore expert tips and resources to
                  keep your personal and professional information secure.
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
