"use client";
import { useAppSelector } from "@/app/rtk-state/hooks";
import Image from "next/image";
import Link from "next/link";

interface Service {
  slug: string;
  name: string;
  meta_description: string;
  image: string;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const serviceName = useAppSelector((state) => state.services.value);
  const filteredServices = serviceName
    ? services.filter((service) =>
        service?.name?.toLocaleLowerCase().includes(serviceName)
      )
    : services;


    // console.log(services)

  return (
    <>
      <div className="container mx-auto pt-5 xl:pt-10 pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
          {filteredServices?.length > 0 &&
            filteredServices?.map((service) => (
              <div className="border rounded-[10px] hover:shadow-hoverBoxShadow transition-[.5s] overflow-hidden">
                <Image
                  src={service.image}
                  width={373}
                  height={299}
                  alt="service card image"
                  className="w-[100%] h-auto"
                />
                <h5 className="text-[15px] leading-[20px] tracking-[.3px] font-bold text-[#231F20] p-[20px]">
                  {service?.name}
                </h5>
                <Link href={`/services/${service?.slug}`}>
                  <button className="text-[16px] font-semibold text-primaryColor border border-primaryColor hover:text-white hover:bg-primaryColor rounded-[10px] py-[10px] px-5 ml-[20px] mb-[20px] transition-[.5s]">
                    Explore More
                  </button>{" "}
                </Link>
              </div>
            ))}
        </div>
        {!filteredServices?.length && (
          <div className=" justify-items-center py-20">
            <p className="  text-primaryColor font-semibold">
              No Service Found!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
