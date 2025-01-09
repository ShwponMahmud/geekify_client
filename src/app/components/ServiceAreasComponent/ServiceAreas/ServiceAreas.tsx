import Link from "next/link";
import React from "react";
import Showcase from "../../Showcase/Showcase";
import Image from "next/image";
import { ServiceAreasData } from "@/assets/data/ServiceAreasData";
import QuickContact from "../../sharedComponents/QuickContact/QuickContact";
import { DistanceMatrixService } from "@react-google-maps/api";

export default function ServiceAreas() {
  return (
    <>
      <Showcase
        backgroundImage="/about-us-banner.png"
        title="Our Service"
        highlights="Areas"
        paragraph="Geekify proudly serves communities and businesses across Australia. From urban hubs to local neighborhoods, we ensure top-tier IT solutions reach you wherever you are. With a commitment to 
          excellence, we’re here to keep your world connected and running smoothly. Explore our extensive service areas and discover the Geekify difference today"
      />

      <div>
        <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-6 xl:gap-6">
              {ServiceAreasData?.map((area) => (
                <div
                  key={area?.slug}
                  className="rounded-lg border hover:shadow-hoverBoxShadow transition-[.5s] "
                >
                  <Image
                    src="/new-south-wales.png"
                    width={348}
                    height={280}
                    alt="new south wales"
                    className="w-[100%] h-auto"
                  />
                  <div className="py-3 px-4">
                    <h5 className="text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3">
                      {area.mainAreaName}
                    </h5>
                    {area?.districtAreas?.slice(0, 9).map((distArea) => (
                      <>
                        {distArea.slug === "" ? (
                          <p key={distArea?.id}>{distArea.suburb}</p>
                        ) : (
                          <button key={distArea?.id} className="mr-2 px-1 font-semibold text-[14px] text-[#3e94f7]">
                            {distArea?.name}
                          </button>
                        )}
                      </>
                    ))}

                    <>
                      {area?.slug == "new-south-wales" ? (
                        <Link href={`/service-areas/${area?.slug}`}>
                          <button className="mt-5 py-2 px-5 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]">
                            See More
                          </button>
                        </Link>
                      ) : (
                        <Link
                          href={`/service-areas/${area?.slug}/${area?.slug}`}
                        >
                          <button className="mt-5 py-2 px-5 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]">
                            See More
                          </button>
                        </Link>
                      )}
                    </>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuickContact title="If you don’t find your needed services, please contact with us " />
    </>
  );
}
