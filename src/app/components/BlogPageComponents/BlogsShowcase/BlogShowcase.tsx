import React from "react";
import './Showcase.css';


function BlogShowcase() {
  return (
    <>
      <div className="common_showcase_section ">
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

// "use client";

// import React, { useEffect } from "react";
// import "./Showcase.css";
// import bannerImg from "../../../../assets/images/blogsBanner.jpg";

// const Showcase: React.FC = () => {
//   useEffect(() => {
//     const dynamicBg = document.querySelector(
//       ".common_showcase_section"
//     ) as HTMLElement | null;

//     if (dynamicBg) {
//       const imageUrl = typeof bannerImg === "string" ? bannerImg : "";

//       if (imageUrl) {
//         dynamicBg.style.setProperty("--dynamic-bg-url", `url('${imageUrl}')`);
//         console.log("Image URL set to:", imageUrl);
//       } else {
//         console.error("Failed to resolve bannerImg");
//       }
//     }
//   }, []);

//   return (
//     <div className="common_showcase_section">
//       <div className="container mx-auto">
//         <div className="common_showcase_section_content">
//           <div className="text-center text-white mt-56">
//             <h1 className="title text-7xl font-bold">
//               Browse our <span className="highlight_title">resources</span>
//             </h1>
//             <p className="mt-8">
//               One-stop solution for your IT needs. Order any service, anytime.
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
//               Veniam quas nihil consequuntur consequatur deleniti quae quos
//               neque ullam natus tempora.
//             </p>
//             <div className="btn_container mt-5">
//               <button className="bookNowBtn">Book Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Showcase;
