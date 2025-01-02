import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { CgCalendarNext } from "react-icons/cg";
import { PiChair } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import QuickContact from '../sharedComponents/QuickContact/QuickContact';
import Showcase from '../Showcase/Showcase';
import { baseUrl } from '@/assets/baseUrl';


async function CareerDetailsComponents({ careerDetail }: any) {


  return (
    <>
      <Showcase
        backgroundImage="/career-banner.png"
        title="Careers"
        highlights="at Geekify"
        paragraph="Geekify is the fastest growing Micro tech service provider who offers 360 degrees of IT solutions.
              Learn more about the origins of Australia’s favourite Geeks.
      "
      />

      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 py-8 md:py-14 lg:py-20 xl:py-28">
            <div className="col-span-4">
              <h5 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7">
                {careerDetail.title}
              </h5>
              <div className="pb-10">
                <h6 className="text-2xl font-medium pb-4">Our Statement</h6>
                <div
                  dangerouslySetInnerHTML={{
                    __html: careerDetail?.description,
                  }}
                />
              </div>
              <div className="pb-10">
                <h6 className="text-2xl font-medium pb-4">Working Hours</h6>
                <ul className="list-disc pl-5">
                  <li>{careerDetail.working_hour}</li>
                </ul>
              </div>
              <div className="pb-10">
                <h6 className="text-2xl font-medium pb-4">Working Days</h6>
                <ul className="list-disc pl-5">
                  <li>{careerDetail.working_day}</li>
                </ul>
              </div>
            </div>

            <div className="col-span-2">
              <div className="bg-sectionBackgroundColor p-5 lg:p-10">
                <div className="flex justify-center">
                  <button className="py-2 px-6 mx-auto font-medium border-[1px] rounded-md border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5s]">
                    Apply Now
                  </button>
                </div>
                <h4 className="text-xl font-bold pt-16">Job Summary</h4>

                <div className="flex items-center gap-3 pt-10">
                  <HiOutlineLocationMarker className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10">
                  <IoBriefcaseOutline className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Job Type</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.type}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10">
                  <LuCalendarDays className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Date Posted</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.created_at}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10">
                  <SlBookOpen className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Experience</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.experience}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10">
                  <IoMdTime className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Working Hours</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.working_hour}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10">
                  <CgCalendarNext className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Weekly:5days</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.working_day}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-10 pb-10">
                  <PiChair className="w-[40px] h-[50px]" />
                  <div>
                    <p className="text-gray-400">Vacancy</p>
                    <p className="text-[17px] font-normal leading-6 ">
                      {careerDetail.total_vacancy}
                    </p>
                  </div>
                </div>

                <div className="text-center pt-5 lg:pt-12">
                  <a
                    href=""
                    className="text-[27px] font-bold underline text-center"
                  >
                    View All Jobs
                  </a>
                </div>
              </div>

              <div className="pt-10 pb-5">
                <p className="font-semibold">Share This:</p>
              </div>
              <div className="flex gap-5">
                <a href="#">
                  <BsFacebook className="text-[#3C5A99] w-12 h-12" />
                </a>
                <a
                  href="#"
                  className="bg-black rounded-full flex justify-center items-center w-12 h-12"
                >
                  <BsTwitterX className="text-white w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-[#007AB9] rounded-full flex justify-center items-center w-12 h-12"
                >
                  <FaLinkedinIn className="text-white w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="bg-[#BB346C] rounded-full flex justify-center items-center w-12 h-12"
                >
                  <BsInstagram className="text-white w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-8 md:pb-14 lg:pb-20 xl:pb-28 lg:mt-[-60px]">
            <button className="py-2 px-6 mx-auto font-medium border-[1px] rounded-md border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5s]">
              Apply Now
            </button>
          </div>
        </div>
        <QuickContact title="Need Tech Support?" />
      </div>
    </>
  );
}

export default CareerDetailsComponents