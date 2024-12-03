import React from "react";
import "./OurPopularServices.css";
import Image from "next/image";
import icon1 from "../../../../../assets/icons/_x30_23---USB-Restore.png";
import icon2 from "../../../../../assets/icons/Group.png";
import icon3 from "../../../../../assets/icons/Vector.png";
import icon4 from "../../../../../assets/icons/Package.png";
import icon5 from "../../../../../assets/icons/Smartphone.png";
import icon6 from "../../../../../assets/icons/Group 34541.png";

const services = [
  {
    title: "Data Recovery & Consultation Services",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon1,
  },
  {
    title: "PC Configuration Solution",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon2,
  },
  {
    title: "Spyware, Anti-Virus & Networking Solution",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon3,
  },
  {
    title: "Miscellaneous Services",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon4,
  },
  {
    title: "Cloud Application Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon5,
  },
  {
    title: "Website and app Development",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. ",
    icon: icon6,
  },
];

function OurPopularServices() {
  return (
    <>
      <div className="our_popular_service_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h1 className="mb-5 text-4xl font-bold">
              Our Popular <span>Services</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              beatae saepe, veritatis eos eum nam rem adipisci voluptatum
              incidunt impedit ex dolores architecto repellat unde!
            </p>
          </div>

          <div className="our_popular_service_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-20">
            {services.map((service) => (
              <div className="our_service_content_card text-center">
                <div>
                  <div className="icon mb-5 justify-items-center">
                    <Image width={70} src={service.icon} alt="" />
                  </div>
                  <div className="title text-xl font-semibold">
                    <h2>{service.title}</h2>
                  </div>
                  <div className="des mt-4 text-gray-500">
                    <p>{service.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view_all_service_btn_container flex justify-center">
            <button >View All Services</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPopularServices;
