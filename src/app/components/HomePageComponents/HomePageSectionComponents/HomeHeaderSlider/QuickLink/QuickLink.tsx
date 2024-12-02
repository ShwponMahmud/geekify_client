import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiPhoneIncoming } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa6";

function QuickLink() {
  
  return (
    <>
      <div className="quick_link_section">
        <div className="container mx-auto">
          <div className="quick_link grid grid-cols-1 md:grid-cols-3 gap-8 text-white transition-[.5s]">
            <div className="phone ">
              <span><FiPhoneCall /></span>
              1300 894 946
            </div>
            <div className="request_call_back">
              <span><FiPhoneIncoming /></span>
              Request call back
            </div>
            <div className="book_online">
              <span><FaRegCalendarCheck /></span> Book Online
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickLink;
