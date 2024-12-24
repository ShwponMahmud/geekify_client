import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* contact section */}

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-8 py-8 md:py-20">
          {/* Logo and About Section */}
          <div className="space-y-4 col-span-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_white.png"
                alt="Geekify Logo"
                className="h-10 w-auto"
                width={188}
                height={40}
              />
            </div>
            <p className="text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 150.
            </p>
            <div className="flex space-x-[35px] pt-5 md:pt-10">
              {/* Social Media Icons */}
              <a
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-white text-[#20313B] flex justify-center items-center"
              >
                <FaFacebookF className="text-primaryColor"/>
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-white text-[#20313B] flex justify-center items-center"
              >
                <FaLinkedinIn className="text-primaryColor"/>
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-white text-[#20313B] flex justify-center items-center"
              >
                <FaInstagram className="text-primaryColor"/>
              </a>
              <a
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-white text-[#20313B] flex justify-center items-center"
              >
                <FaXTwitter className="text-primaryColor"/>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h5 className="font-semibold text-lg mb-4 border-b-2">Company</h5>
            <ul className="space-y-4">
              <li>
                <Link href={"/about-us"} className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/contact-us"} className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"/become-a-tech"} className="hover:text-gray-300">
                  Become A Tech
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Services</h5>
            <ul className="space-y-4">
              <li>
                <Link href={"/services"} className="hover:text-gray-300">
                  Our Service
                </Link>
              </li>
              <li>
                <Link href="/remote-support" className="hover:text-gray-300">
                  Remote Service
                </Link>
              </li>
              <li>
                <a href={"/contact-us"} className="hover:text-gray-300">
                  Tech Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg mb-4">Discover</h5>
            <ul className="space-y-4">
              <li>
                <a href={"/customer-review"} className="hover:text-gray-300">
                  Customer Review
                </a>
              </li>
              <li>
                <a href={"/why-choose-us"} className="hover:text-gray-300">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ's Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <a href="">02 9158 9800</a>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a href="mailto:cs@geekify.au" className="hover:text-gray-300">
                  cs@geekify.au
                </a>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <a href="">Camden, New <br /> South Wales 2570</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white pb-8">
          Copyright By geekify.com.au @2024. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
