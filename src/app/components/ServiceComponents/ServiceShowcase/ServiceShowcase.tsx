import React from 'react'
import './ServiceShowcase.css'

function ServiceShowcase() {
  return (
    <>
      <div className="common_showcase_section mt-[100px]">
        <div className="container mx-auto">
          <div className="common_showcase_section_content">
            <div className="text-center text-white mt-56 ">
              <h1 className="title text-7xl font-bold ">
                 <span className="highlight_title">Services</span> We Are Offering
              </h1>
              <p className="mt-8">
                Find the type of service you need, clearly defined and ready to start. Work begins as soon as you book and provide requirements.
              </p>

              <div className="btn_container mt-5">
                <button className="bookNowBtn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceShowcase