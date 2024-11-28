import React from 'react'
import './CareerShowcase.css'

function CareerShowcase() {
  return (
    <>
      <div className="common_showcase_section mt-[100px]">
        <div className="container mx-auto ">
          <div className="common_showcase_section_content ">
            <div className="text-center text-white mt-56 ">
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

export default CareerShowcase