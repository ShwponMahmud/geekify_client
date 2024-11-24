import React from "react";
import { TbHandClick } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
import Image from "next/image";
import nextArrowIcon from "../../../../../assets/icons/Group 1744 (1).png"

function BookOnlineGetOff() {
  return (
    <>
      <div className="book_online_get_off_section py-40">
        <div className="container mx-auto">
          <div className="book_online_get_off_heading text-center">
            <h1 className="text-4xl font-bold mb-6">
              Book online and get 10% off
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptate optio alias quos labore? Illo similique dolorem cum
              excepturi id?
            </p>
          </div>
          <div className="book_online_get_off_content_container flex justify-evenly gap-3 mt-16 ">
            <div>
              <span>
                <TbHandClick />
              </span>
              <h4>Select service</h4>
            </div>
            <Image width={40} src={nextArrowIcon} alt=""/>
            <div>
              <span>
                <TbCalendarTime />
              </span>
              <h4>Pick a date</h4>
            </div>
            <Image width={40}  src={nextArrowIcon} alt=""/>
            <div>
              <span>
                <BiSolidUserDetail />
              </span>
              <h4>Provide details</h4>
            </div>
            <Image  width={40} src={nextArrowIcon} alt=""/>
            <div>
              <span>
                <MdPayment />
              </span>
              <h4>Make payment</h4>
            </div>
            <Image width={40}  src={nextArrowIcon} alt=""/>
            <div>
              <span>
                <GrUserSettings />
              </span>
              <h4>Geeks on your way</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookOnlineGetOff;
