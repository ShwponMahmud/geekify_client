import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TextSlider: React.FC = () => {
  return (
    <div className="w-full">
      <div className="swiper progress-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              You <span className="text-primaryColor"> point</span> it
              We <span className="text-primaryColor">fix</span> it
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              One-stop solution for your IT needs, Order any service, anytime.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn1">Book Now</button>
            </div>
          </div>
          <div className="swiper-slide">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              You <span className="text-primaryColor"> point</span> it
              We <span className="text-primaryColor">fix</span> it
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              One-stop solution for your IT needs, Order any service, anytime.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn1">Book Now</button>
            </div>
          </div>
          <div className="swiper-slide">
            <h1 className="title text-5xl md:text-7xl text-center lg:text-left font-bold max-w-[596px] mx-auto lg:mx-0">
              You <span className="text-primaryColor"> point</span> it
              We <span className="text-primaryColor">fixxx</span> it
            </h1>
            <p className="mt-8 text-xl text-center lg:text-left max-w-[452px] mx-auto lg:mx-0">
              One-stop solution for your IT needs, Order any service, anytime.
            </p>
            <div className="btn_container flex justify-center lg:justify-start">
              <button className="bookNowBtn1">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
