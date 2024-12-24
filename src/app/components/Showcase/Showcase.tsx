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
      <div className="flex justify-center items-center w-[100%] h-[65vh] bg-blend-multiply bg-[rgba(0,0,0,.5)]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', width: '100%', backgroundPosition: 'center', 
      backgroundSize: 'cover' }}>
        <div className="container mx-auto px-5">
          <div>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mt-20">
                {title} <span className='text-primaryColor'>{highlights}</span>
              </h1>
              <p className="mt-5 md:mt-8 text-[18px] leading-6 md:text-[24px] md:leading-8 md:max-w-[1200px] mx-auto">
                {paragraph}
              </p>

              {
                btn && (
                  <div className="btn_container mt-5">
                    <button className='bookNowBtn'>Book Now</button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Showcase