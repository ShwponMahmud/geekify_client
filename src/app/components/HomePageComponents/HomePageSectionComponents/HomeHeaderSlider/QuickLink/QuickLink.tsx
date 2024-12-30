import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";

function QuickLink() {
  
  return (
    <>
      <div className="quick_link_section">
        <div className="container mx-auto">
          <div className="quick_link grid grid-cols-1 md:grid-cols-3 gap-8  transition-[.3s]">
            <a href="tel:1300894946" className="phone hover:text-white transition-[.5s]">
              <span><FiPhoneCall /></span>
              1300 894 946
            </a>
            <a href="/contact-us" className="request_call_back hover:text-white transition-[.3s]">
              <span><FiPhoneIncoming /></span>
              Request call back
            </a>
            <a href="/booking-online" className="book_online hover:text-white transition-[.3s]">
              <span><FaRegCalendarCheck /></span> Book Online
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickLink;
