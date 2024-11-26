import React from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { LuCalendarCheck2 } from "react-icons/lu";


function QuickContact() {
  return (
    <>
    <section>
        <div className="bg-sectionBackgroundColor py-28">
          <div className="container mx-auto">
            <div>
              <p className="text-4xl font-bold leading-[50px] text-center text-primaryColor pb-12 max-w-[700px] mx-auto">
              If you don’t find your needed service please contact with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-14">
              <div className="py-[20px] border-[3px] text-primaryColor border-primaryColor transition-[.5s] hover:bg-primaryColor hover:text-white rounded-[50px] flex justify-center gap-2 items-center">
                <PiPhoneCallBold className="w-[31px] h-[28px]" />
                <a
                  href="tele: 0291589800"
                  className="text-[21px] font-semibold leading-[11px]"
                >
                  {" "}
                  02 9158 9800
                </a>
              </div>
              <div className="py-[20px] border-[3px] hover:bg-primaryColor transition-[.5s] hover:text-white border-primaryColor text-primaryColor rounded-[50px] flex justify-center gap-2 items-center">
                <GiBackwardTime className="w-[31px] h-[28px]" />
                <a
                  href="tele:"
                  className="text-[21px] font-semibold leading-[21px]"
                >
                  {" "}
                  Request call back
                </a>
              </div>
              <div
                className="py-[20px] border-[3px] hover:bg-primaryColor transition-[.5s] hover:text-white border-primaryColor text-primaryColor rounded-[50px] flex justify-center gap-2 items-center"
              >
                <LuCalendarCheck2 className="w-[31px] h-[28px]" />
                <a
                  href="tele:"
                  className="text-[21px] font-semibold leading-[11px]"
                >
                  {" "}
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuickContact