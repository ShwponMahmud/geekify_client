import React from "react";
import { TbHandClick } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import "./BookingOnlineGetOff.css";

function BookOnlineGetOff() {
  return (
    <>
      <div className="book_online_get_off_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 capitalize">
              Book online and get <span className="text-primaryColor">15%</span> off
            </h1>
            <p className="text-primaryColor">Easiest way to get a service</p>
          </div>
          <div className="book_online_get_off_content_container flex flex-wrap items-center justify-evenly gap-3 mt-16 ">
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <TbHandClick className="text-4xl" />
              </div>
              <p className="mt-5 font-semibold">Select service</p>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <TbCalendarTime className="text-4xl" />
              </div>
              <p className="mt-5 font-semibold">Pick a date</p>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <BiSolidUserDetail className="text-4xl" />
              </div>
              <p className="mt-5 font-semibold">Provide details</p>
            </div>
            
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16  border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center   hover:bg-primaryColor hover:text-white">
                <GrUserSettings className=" text-4xl" />
              </div>
              <p className="mt-5 font-semibold">Geeks on their way</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookOnlineGetOff;
