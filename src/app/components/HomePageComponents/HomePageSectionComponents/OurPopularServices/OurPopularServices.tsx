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
      `${baseUrl}/services?paginate=1&pagination=6&with_relation[]=media`,
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
      <div className="our_popular_service_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h1 className="mb-5 text-5xl font-bold">
              Our Popular <span className="text-primaryColor">Services</span>
            </h1>
            <p>
              We provide tailored solutions to meet your tech needs, ensuring
              efficiency and reliability. From data recovery to app development,
              our services are designed to help you stay ahead in a fast-paced
              digital world.
            </p>
          </div>

          <div className="our_popular_service_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 lg:mt-20">
            {services?.map((service) => (
              <div key={service?.id} className="our_service_content_card text-center">
                <Link
                  href={
                    service?.name ===
                    "Computer - Installation, Configuration, Fixing"
                      ? "/services/computer-installation-configuration-fixing"
                      : service?.name === "Computer Troubleshooting"
                      ? "/services/computer-troubleshooting"
                      : service?.name === "New Computer Setup"
                      ? "/services/new-computer-setup"
                      : service?.name === "Data Backup, Restore"
                      ? "/services/data-backup-restore"
                      : service?.name === "Data Recovery"
                      ? "/services/data-recovery"
                      : service?.name === "Virus and Spyware Removal"
                      ? "/services/virus-and-spyware-removal"
                      : "#"
                  }
                >
                  <div>
                    <div className="icon mb-5 justify-items-center">
                      <Image
                        width={70}
                        src={
                          service?.name ===
                          "Computer - Installation, Configuration, Fixing"
                            ? icon1
                            : service?.name === "Computer Troubleshooting"
                            ? icon2
                            : service?.name === "New Computer Setup"
                            ? icon3
                            : service?.name === "Data Backup, Restore"
                            ? icon4
                            : service?.name === "Data Recovery"
                            ? icon5
                            : service?.name === "Virus and Spyware Removal"
                            ? icon6
                            : ""
                        }
                        alt=""
                      />
                    </div>
                    <div className="title text-2xl font-semibold">
                      <h2>{service?.name}</h2>
                    </div>
                    <div className="des mt-4">
                      <p className="text-xl">{service.meta_description}</p>
                    </div>
                  </div>
                </Link>
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
