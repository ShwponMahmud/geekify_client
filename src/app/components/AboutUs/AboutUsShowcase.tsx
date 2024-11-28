import React from 'react'
import './AboutUsShowcase.css'

function AboutUsShowcase() {
  return (
    <>
      <div className="common_showcase_section flex justify-center items-center">
        <div className="container mx-auto px-5">
          <div className="common_showcase_section_content">
            <div className="text-center text-white">
              <h1 className="title text-7xl font-bold ">
                <span className="text-primaryColor">Careers </span>at Geekify
              </h1>
              <p className="mt-8 ">
                Geekify is the fastest growing Micro tech service provider who offers 360 degrees of IT solutions. Learn more about the origins of Australia’s favourite Geeks
              </p>

              <div className="btn_container mt-5">
                <button className='py-2 px-6 border-[1px] border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white rounded-md transition-[.5s] font-semibold'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsShowcase