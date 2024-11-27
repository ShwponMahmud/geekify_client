import Image from "next/image";
import React from "react";
import supportIcon from "../../../../assets/icons/Group 1773.png";
function ContactUsSupport() {
  return (
    <>
      <div className="contact_us_support_section_container text-deepGrayColor">
        <Image className="p-5" src={supportIcon} alt="" />

        <h2 className="mt-5 text-3xl font-semibold text-primaryColor ">Contact Us for Tech Support</h2>
        <p className="mt-5 text-xl">
          <b>Phone:</b> 1300 000 000
        </p>
        <p className=" text-xl">
          <b>Email:</b> infogeekssydney.com
        </p>
        <p className=" text-xl flex gap-3">
          <b>Hours:</b>{" "}
          <ul>
            <li>Monday – Friday: 8am – 9pm</li>
            <li>Saturday: 8am – 5pm</li>
            <li>Sunday: 9am – 6pm</li>
            <li>Public Holidays: 9am – 6pm</li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default ContactUsSupport;
