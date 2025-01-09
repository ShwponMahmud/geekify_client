import React from 'react'
import './Showcase2.css'
import { StaticImageData } from 'next/image';

interface ShowcaseProps {
  backgroundImage: string | StaticImageData
  title?: string;
  highlights?: string,
  paragraph?: string;
  btn?: boolean
}

const Showcase: React.FC<ShowcaseProps> = ({ backgroundImage, title, highlights, paragraph, btn }) => {
  return (
    <>
      <div
        className="flex justify-center items-center w-[100%] h-[90vh] mt-[100px] bg-blend-multiply bg-[rgba(0,0,0,.4)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-5">
          <div className="">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                {title}{" "}
                <span className="text-primaryColor text-4xl md:text-5xl lg:text-7xl font-bold">
                  {highlights}
                </span>
              </h1>
              <p className="mt-5 md:mt-8 text-[18px] leading-6 md:text-2xl md:max-w-[1200px] mx-auto">
                {paragraph}
              </p>

              {btn && (
                <div className="btn_container mt-5">
                  <button className="bookNowBtn">Book Now</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase