import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

function BookingFooter() {
  return (
    <div className="bg-sectionBackgroundColor">
      <div className="container mx-auto py-14">
        <div className="block md:flex justify-between items-center">
          <div className='mb-8 md:mb-0'>
            <h3 className="text-3xl font-bold pb-3">Download our App</h3>
            <p className="font-medium pb-3">
              App is available for free on the app store
            </p>
            <div className="flex items-center gap-5">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.krazyit.geekify"
                }
              >
                <Image
                  src={"/bottom-footer/google download button.png"}
                  width={120}
                  height={50}
                  className="w-auto h-auto"
                  alt="apple download button"
                />
              </Link>
              <Link
                href={
                  "https://apps.apple.com/us/app/geekify-technologies-by-geeks/id1665418506"
                }
              >
                <Image
                  src={"/bottom-footer/apple download button.png"}
                  width={120}
                  height={50}
                  className="w-auto h-auto"
                  alt="google download button"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <h3 className="text-xl font-bold">Follow Us:</h3>
              <div className="flex items-center gap-4">
                <Link href={"https://www.facebook.com/geekifyau"}>
                  <FaFacebookF className="bg-black w-[25px] h-[25px] px-1 pt-1 rounded-[4px] text-white" />
                </Link>
                <Link href={"https://www.linkedin.com/company/geekscrsau/"}>
                  <FaLinkedinIn className="bg-black w-[25px] h-[25px] p-1 rounded-[4px] text-white" />
                </Link>
                <Link href={"https://www.youtube.com/@geekify"}>
                  <FaYoutube className="bg-black w-[25px] h-[25px] p-1 rounded-[4px] text-white" />
                </Link>
              </div>
            </div>
            <Link href={"https://portal.geekify.au/"}>
              <p className="text-[#1A5D88] font-bold leading-3 mt-7">Login</p>
              <div className="w-[150px] h-[1px] bg-[#1A5D88] mt-2"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFooter