import React from 'react'
import './ScamAlertShowcase.css'
import Showcase from '../../Showcase/Showcase'

function ScamAlertShowcase() {
  return (
    <div>
      {/* <div className="common_showcase_section mt-[100px]">
        <div className="container mx-auto ">
          <div className="common_showcase_section_content ">
            <div className="text-center text-white mt-56 ">
              <h1 className="title text-7xl font-bold ">
                Scam <span className="highlight_title">Alert</span>
              </h1>
              <p className="mt-8 ">
                One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
              </p>

            </div>
          </div>
        </div>
      </div> */}
      <Showcase backgroundImage={'/scam-alert-banner.jpg'} title='Scam' highlights='Alert' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.' />
    </div>
  )
}

export default ScamAlertShowcase