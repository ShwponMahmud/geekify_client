"use client";

import { baseUrl } from "@/assets/baseUrl";
import { ServiceAreasData } from "@/assets/data/ServiceAreasData";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import "./Navbar.css";
import { useAppDispatch } from "@/app/rtk-state/hooks";
import { GetSettings } from "@/app/rtk-state/reducers/SettingSlice";

interface Service {
  slug: string;
  name: string;
  services: Array<any>;
  meta_description: string;
  image: string;
  status: string;
}

interface DistrictArea {
  slug: string;
  name: string;
}

interface ServiceArea {
  slug: string;
  name: string;
  description: string;
  districtAreas: DistrictArea[];
}

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false, dropdown: true },
  {
    name: "Service Areas",
    href: "/service-areas",
    current: false,
    dropdown: true,
  },
  { name: "Scam Alert", href: "/scam-alert", current: false },
  { name: "Blogs", href: "/blogs", current: false },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [servicesCategory, setServicesCategory] = useState<Service[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoveredMainArea, setHoveredMainArea] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [settingsGet, setSettingsGet] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      const fetchServices = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `${baseUrl}/service-categories?status=1&with_relation[]=services.media&order_by_website_sort_order=ASC&show_website=1&with_relation[]=media&source=[10]`,
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
          setServicesCategory(responseData.data || []);
        } catch (error) {
          console.error("Error fetching services:", error);
        } finally{
          setLoading(false);
        }
      };

      fetchServices();
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-white h-[100px] py-5 fixed top-0 w-full shadow-lg z-50"
    >
      <div className="px-3 md:container mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md focus:outline-none">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="hidden lg:flex items-center z-[9999]">
            <Link href="/">
              <Image
                src="/logos/main-logo.png"
                alt="Logo"
                width={700}
                height={308}
                className="h-14 w-[250px]"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  setHovered(item.dropdown ? item.name : null)
                }
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primaryColor uppercase px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                  {item.dropdown && (
                    <MdKeyboardArrowDown className="inline-block text-3xl text-primaryColor mt-[-5px]" />
                  )}
                </Link>

                {item?.dropdown && hovered === item?.name && (
                  <div className="fixed inset-x-0 bg-white shadow-md pt-14 pb-10">
                    <div className="container mx-auto">
                      {hovered === "Services" && (
                        <>
                          {loading && (
                            <div className="text-center text-xl text-[#1d5f89] font-semibold">
                              Loading...
                            </div>
                          )}
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {servicesCategory?.map((serviceCategory) => (
                              <div key={serviceCategory?.slug}>
                                <span className="text-[#1d5f89] font-semibold flex items-center gap-1 duration-500">
                                  <BiSolidRightArrow className="text-sm text-[#1d5f89]" />
                                  {serviceCategory?.name}
                                </span>
                                <ul className="ml-4 mt-3 text-[15px] ">
                                  {serviceCategory?.services.map((service) => (
                                    <>
                                      {serviceCategory?.status ===
                                        service?.show_website && (
                                        <Link
                                          href={`/services/${service?.slug}`}
                                        >
                                          <li
                                            key={service?.name}
                                            className="cursor-pointer text-gray-600 hover:text-[#1d5f89] flex items-center py-[6px] hover:tracking-[1px] duration-500"
                                          >
                                            {service?.name}
                                          </li>
                                        </Link>
                                      )}
                                    </>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {hovered === "Service Areas" && (
                        <div className="container px-0">
                          <h3 className="text-xl font-semibold pb-5 text-[#1d5f89] w-full">
                            Our Service Areas
                          </h3>
                          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {ServiceAreasData?.map((area) => (
                              <div key={area?.slug}>
                                <Link
                                  href={`/service-areas/${area?.slug}`}
                                  className="text-gray-600 hover:tracking-[1px] hover:font-semibold hover:text-[#1d5f89] duration-500 flex items-center gap-1"
                                  onMouseOver={(e) => {
                                    area?.slug === "New-South-Wales"
                                      ? setHoveredMainArea("New-South-Wales")
                                      : setHoveredMainArea(null);
                                  }}
                                >
                                  <BiSolidRightArrow className="text-sm text-[#1d5f89]" />{" "}
                                  {area?.mainAreaName}
                                </Link>
                                {hoveredMainArea &&
                                  area?.slug === "New-South-Wales" && (
                                    <ul className="mt-3 grid grid-cols-2 gap-2 text-[14px]">
                                      {area?.districtAreas &&
                                        area?.districtAreas.map((item) => (
                                          <Link
                                            href={`/service-areas/${area?.slug}/${item?.slug}`}
                                            className="cursor-pointer ml-4 hover:tracking-[1px] hover:text-[#1d5f89] duration-500"
                                          >
                                            {item?.name}
                                          </Link>
                                        ))}
                                    </ul>
                                  )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className=" text-[16px]">
            <a href="/booking-online" className="animated-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Book Online
              <br />
              <strong>
                {" "}
                And Get{" "}
                <strong className="animate-pulse text-[16px] font-extrabold text-[#303030]">
                  15%
                </strong>{" "}
                Off
              </strong>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-primaryColor text-white"
                  : "text-gray-900 hover:bg-primaryColor hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
