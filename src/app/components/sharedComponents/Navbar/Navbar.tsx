'use client'

import { baseUrl } from "@/assets/baseUrl";
import { ServiceAreasData } from "@/assets/data/ServiceAreasData";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Services", href: "/services", current: false, dropdown: true },
  { name: "Service Areas", href: "/service-areas", current: false, dropdown: true },
  { name: "Scam Alert", href: "/scam-alert", current: false },
  // { name: "Become a Member", href: "/become-a-member", current: false },
  { name: "Blogs", href: "/blogs", current: false },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Service {
  slug: string;
  name: string;
  meta_description: string;
  image: string;
}

interface ServiceArea {
  slug: string;
  name: string;
  description: string;
}

export default function Navbar() {
  const [services, setServices] = useState<Service[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  console.log(services)
  
  useEffect(() => {
    if (hovered === "Services") {
      const fetchServices = async () => {
        try {
          const response = await fetch(`${baseUrl}/services`, {
            headers: {
              "Content-Type": "application/json",
              "Client-Secret": `secret`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch services");
          }

          const responseData = await response.json();
          setServices(responseData.data || []);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };

      fetchServices();
    }
  }, [hovered]);

    
  return (
    <Disclosure
      as="nav"
      className="bg-white py-5 top-0 fixed h-[100px] w-[100%] shadow-lg shadow-gray-200/50 z-zIndex "
    >
      <div className="container mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center cursor-pointer justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-8 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-8 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center mr-32 md:mr-0 md:items-stretch md:justify-between">
            <div className="flex items-center">
              <a href="/">
                <Image
                  alt="Geekify logo"
                  src="/logo.png"
                  className="h-8 w-auto md:h-14 md:w-auto"
                  width={350}
                  height={80}
                /></a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>

                  {/* Mega Dropdown */}
                  {item.dropdown && hovered === item.name && (
                    <div className="fixed inset-x-0 h-auto bg-white flex justify-center transition-all duration-1000 ease-custom-bezier items-center pt-10 pb-10">
                      <div className="h-full px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          

                          {hovered === "Services" &&
                            services.map((service) => (
                              <div key={service.slug}>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="text-gray-600 hover:tracking-[1px] hover:text-[#1d5f89] duration-500 flex items-center gap-1"
                                >
                                  <IoMdArrowDropright className="text-2xl text-[#1d5f89]" /> {service.name}
                                </Link>
                              </div>
                            ))}

                          {hovered === "Service Areas" &&
                            ServiceAreasData.map((area) => (
                              <div key={area.slug}>
                                <Link
                                  href={`/service-areas/${area.slug}`}
                                  className="text-gray-600 hover:tracking-[1px] hover:text-[#1d5f89] duration-500 flex items-center gap-1"
                                >
                                  <IoMdArrowDropright className="text-2xl text-[#1d5f89]" /> {area.mainAreaName}
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <a href="/booking-online" className="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Book Online
                <br />
                And Get <strong className="animate-pulse text-[16px]">15%</strong> Off

              </a>
            </div>
          </div>

          
        </div>
      </div>

      <DisclosurePanel className="md:hidden bg-orange-500">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
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


// 'use client';
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { baseUrl } from "@/assets/baseUrl";
// import { IoMdArrowDropright } from "react-icons/io";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services", dropdown: true },
//   { name: "About", href: "/about", dropdown: true },
//   { name: "Contact", href: "/contact" },
// ];

// interface Service {
//   slug: string;
//   name: string;
//   meta_description: string;
//   image: string;
// }

// export default function Navbar() {
//   const [services, setServices] = useState<Service[]>([]);
//   console.log(services)

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/services?with_relation[]=media`, {
//           headers: {
//             "Content-Type": "application/json",
//             "Client-Secret": `secret`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch services");
//         }

//         const responseData = await response.json();
//         setServices(responseData.data || []);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   const [hovered, setHovered] = useState<string | null>(null);

//   return (
//     <div className="">
//       <div>
//         <div className="">
//           <nav className="shadow-md fixed w-full bg-white z-[9999]">
//             <div className="container mx-auto">
//               <div className="flex justify-between items-center py-8">
//                 {/* Logo */}
//                 <div>
//                   <Link href="/">
//                     <Image
//                       src="/logo.png"
//                       alt="Logo"
//                       width={120}
//                       height={50}
//                       className="cursor-pointer"
//                     />
//                   </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="hidden md:flex items-center space-x-6">
//                   {navigation.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => setHovered(item.name)}
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       <Link
//                         href={item.href}
//                         className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
//                       >
//                         {item.name}
//                       </Link>

//                       {/* Mega Dropdown */}
//                       {item.dropdown && hovered === item.name && (
//                         <div className="fixed inset-x-0 h-screen bg-gray-100 flex justify-center duration-1000 items-center pt-20">
//                           <div className="container mx-auto h-full px-4">
//                             <div className="grid grid-cols-3 gap-4">
                            
//                             {
//                               services.map((service) => (
//                                 <div key={service.slug}>
//                                   <Link
//                                     href={`/services/${service.slug}`}
//                                     className="text-gray-600 hover:tracking-[1px] hover:text-[#1d5f89] duration-500 flex items-center gap-1"
//                                   >
//                                     <IoMdArrowDropright className="text-2xl text-[#1d5f89]"/> {service.name}
//                                   </Link>
//                                 </div>
//                               ))
//                             }
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <div>
//                   <Link
//                     href="/signup"
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }


