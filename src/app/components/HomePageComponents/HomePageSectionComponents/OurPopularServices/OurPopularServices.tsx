import React from "react";
import "./OurPopularServices.css";
import Image from "next/image";
import icon1 from "../../../../../assets/icons/Smartphone.png";
import icon2 from "../../../../../assets/icons/Group.png";
import icon3 from "../../../../../assets/icons/Package.png";
import icon4 from "../../../../../assets/icons/Group 34541.png";
import icon5 from "../../../../../assets/icons/_x30_23---USB-Restore.png";
import icon6 from "../../../../../assets/icons/Vector.png";
import { baseUrl } from "@/assets/baseUrl";
import Link from "next/link";

interface service {
  id: number;
  name: string;
  meta_description: string;
  icon: string;
}

const OurPopularServices = async () => {
  let services: service[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/api/v1/services?paginate=1&pagination=6`,
      {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const responseData = await response.json();
    services = responseData.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  return (
    <>
      <div className="our_popular_service_section py-28">
        <div className="container mx-auto">
          <div className="our_popular_service_heading text-center">
            <h1 className="mb-5 text-4xl font-bold">
              Our Popular <span>Services</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              beatae saepe, veritatis eos eum nam rem adipisci voluptatum
              incidunt impedit ex dolores architecto repellat unde!
            </p>
          </div>

          <div className="our_popular_service_content_container grid grid-cols-3 gap-5 mt-20">
            {services?.map((service) => (
              <div className="our_service_content_card text-center">
                <div>
                  <div className="icon mb-5 justify-items-center">
                    <Image
                      width={70}
                      src={
                        service?.name ==
                        "Computer - Installation, Configuration, Fixing"
                          ? icon1
                          : service?.name == "Computer Troubleshooting"
                          ? icon2
                          : service?.name == "New Computer Setup"
                          ? icon3
                          : service?.name == "Data Backup, Restore"
                          ? icon4
                          : service?.name == "Data Recovery"
                          ? icon5
                          : service?.name == "Virus and Spyware Removal"
                          ? icon6
                          : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="title text-xl font-semibold">
                    <h2>{service?.name}</h2>
                  </div>
                  <div className="des mt-4 text-gray-500">
                    <p>{service.meta_description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view_all_service_btn_container flex justify-center">
            <Link href={`/services`}>
              <button>View All Services</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPopularServices;
