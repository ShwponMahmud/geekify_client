import React from "react";
import banner from "../../../../../assets/images/why-choose-us-banner.jpg";
import Image from "next/image";
import "./WhyChooseUs.css";
import { FaRegSquareCheck } from "react-icons/fa6";
import Link from "next/link";

function WhyChooseUs() {
  return (
    <>
      <div className="why_choose_us_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="why_choose_us_content_container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="why_choose_us_banner  ">
              <Image className="rounded-lg" src={banner} alt="" />
            </div>
            <div className="why_choose_us_content">
              <div className="why_choose_us_heading text-4xl font-bold">
                <h1>Why Choose Us</h1>
              </div>
              <div className="why_choose_us_description mt-6">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam illo minus vel necessitatibus tenetur, doloremque ex
                  culpa ut atque mollitia unde illum nobis quae laudantium,
                  dolorum, numquam eaque molestiae vitae voluptatibus eum?
                  Sapiente, totam exercitationem? Illum dolorem molestias
                  nesciunt neque.
                </p>

                <ul className="my-8">
                  <li>
                    <span>
                      <FaRegSquareCheck />
                    </span>{" "}
                    Rework Assurance
                  </li>
                  <li>
                    <span>
                      <FaRegSquareCheck />
                    </span>{" "}
                    Background Check
                  </li>
                  <li>
                    <span>
                      <FaRegSquareCheck />
                    </span>{" "}
                    24/7 Support
                  </li>
                  <li>
                    <span>
                      <FaRegSquareCheck />
                    </span>{" "}
                    Expert Professional
                  </li>
                </ul>

                <div className="read_more_btn_container">
                  <Link href={`/why-choose-us`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
