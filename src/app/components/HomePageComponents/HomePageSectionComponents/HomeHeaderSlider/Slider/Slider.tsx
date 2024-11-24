"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import showcaseImg from "../../../../../../assets/images/Group 34555.png";
import showcaseImg2 from "../../../../../../assets/images/Group 34552.png";

const Slider: React.FC = () => {
  useEffect(() => {
    Swiper.use([Autoplay, Pagination]);

    const swiper = new Swiper(".progress-slide-carousel", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      //   pagination: {
      //     el: ".progress-slide-carousel .swiper-pagination",
      //     type: "progressbar",
      //   },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper progress-slide-carousel swiper-container relative">
        <div className="swiper-wrapper pl-40 ">
          <div className="swiper-slide">
            <div className="h-auto w-auto flex items-center">
              <Image className="showcase_img" src={showcaseImg} alt="" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className=" h-auto w-auto  flex  items-center">
              <Image className="showcase_img" src={showcaseImg2} alt="" />
            </div>
          </div>
         
        </div>
        <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Slider;
