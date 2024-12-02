import React from "react";
import "./Showcase.css";

function BlogShowcase() {
  return (
    <>
      <div className="common_showcase_section mt-[100px]">
        <div className="container mx-auto ">
          <div className="common_showcase_section_content ">
            <div className="text-center text-white mt-56 ">
              <h1 className="title text-7xl font-bold ">
                Browse our <span className="highlight_title">resources</span>
              </h1>
              <p className="mt-8 ">
                One-stop solution for your IT needs, Order any service, anytime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Veniam quas nihil consequuntur consequatur deleniti quae quos
                neque ullam natus tempora.
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

export default BlogShowcase;
