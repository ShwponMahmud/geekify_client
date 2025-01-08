import QuickContact from "../../sharedComponents/QuickContact/QuickContact";
import Image from "next/image";
import Showcase from "../../Showcase/Showcase";
import { ServiceAreasData } from "@/assets/data/ServiceAreasData";
import TruncateText from "../../sharedComponents/TruncateText/TruncateText";
import Link from "next/link";

export default function ServiceArea({ slug }: string | any) {
  return (
    <>
      <Showcase
        backgroundImage="/about-us-banner.png"
        title="Our Service"
        highlights="Areas"
      />
      <div>
        <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
          {ServiceAreasData?.map((area) => (
            <>
              {area?.slug === "New-South-Wales" ? (
                <>
                  <h1 className="text-3xl font-semibold mb-10">
                    {area?.mainAreaName}
                  </h1>
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                    {area.districtAreas.map((distArea) => (
                      <div className="rounded-lg border hover:shadow-hoverBoxShadow transition-[.5s] py-3 px-4">
                        <Image
                          src={'/new-south-wales.png'}
                          width={348}
                          height={280}
                          alt="new south wales"
                          className="w-[100%] h-auto"
                        />
                        <div className="pb-5">
                          <h5 className="text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3">
                            {distArea?.name}
                          </h5>
                          {distArea?.suburbs ? (
                            distArea?.suburbs
                              ?.slice(0, 10)
                              .map((item) => (
                                <button className="mr-2 px-1 font-semibold text-[14px] text-[#3e94f7] hover:text-gray-500">
                                  {item?.name},
                                </button>
                              ))
                          ) : (
                            <p>{TruncateText(distArea?.suburb, 20)}</p>
                          )}
                        </div>
                        <Link
                          href={`/service-areas/${area?.slug}/${distArea?.slug}`}
                        >
                          <button className="mt-5 py-2 px-5 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]">
                            See More
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <QuickContact title="Tell us your need" />
      </div>
    </>
  );
}
