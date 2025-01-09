import Image from "next/image";
import React from "react";
import QuickContact from "../../sharedComponents/QuickContact/QuickContact";
import { FaRegCheckCircle } from "react-icons/fa";
import Showcase from "../../Showcase/Showcase";

interface Service {
  name: string;
  slug: string;
  meta_author: string;
  meta_keywords: string;
  meta_description: string;
  description: string | undefined;
  image: any;
}

interface ServiceDetailsProps {
  service: Service | null;
}

function ServiceDetails({ service }: ServiceDetailsProps) {
  console.log(service);
  return (
    <>
      <Showcase
        backgroundImage="/service-details.png"
        title={service?.name}
        highlights=""
        paragraph="One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      "
      />
      <div>
        <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20">
            <div>
              <Image
                src={service?.image}
                width={565}
                height={506}
                alt="details iamge"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="">
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-4 lg:pb-7">
                {service?.name}
              </h3>

              <div
                dangerouslySetInnerHTML={{
                  __html: service?.description ?? ""
                }}
              ></div>
            </div>
          </div>
          
        </div>
        <QuickContact title="Contact Us to Get Your Desired Services" />
      </div>
    </>
  );
}

export default ServiceDetails;
