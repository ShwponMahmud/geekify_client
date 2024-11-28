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
      <div className="book_online_get_off_section py-28">
        <div className="container mx-auto">
          <div className="book_online_get_off_heading text-center">
            <h1 className="text-4xl font-bold mb-6">
              Book online and get 10% off
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              ratione animi nulla quidem molestias odio, accusantium vero
              voluptatem nisi, hic ipsum corrupti exercitationem labore laborum?
            </p>
          </div>
          <div className="book_online_get_off_content_container flex items-center justify-evenly gap-3 mt-16 ">
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <TbHandClick className="text-4xl" />
              </div>
              <h4 className="mt-5 font-semibold">Select service</h4>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <TbCalendarTime className="text-4xl" />
              </div>
              <h4 className="mt-5 font-semibold">Pick a date</h4>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <BiSolidUserDetail className="text-4xl" />
              </div>
              <h4 className="mt-5 font-semibold">Provide details</h4>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16 p-3 border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center hover:bg-primaryColor hover:text-white">
                <MdPayment className="text-4xl" />
              </div>
              <h4 className="mt-5 font-semibold">Make payment</h4>
            </div>
            <BsArrowRight className="text-3xl text-grayColor" />
            <div className="justify-items-center text-grayColor hover:text-primaryColor">
              <div className="w-16 h-16  border-solid border-2 border-borderColor rounded-full text-primaryColor flex justify-center items-center   hover:bg-primaryColor hover:text-white">
                <GrUserSettings className=" text-4xl" />
              </div>
              <h4 className="mt-5 font-semibold">Geeks on your way</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookOnlineGetOff;
