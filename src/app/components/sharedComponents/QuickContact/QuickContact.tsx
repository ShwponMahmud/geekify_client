import React from "react";
import { PiPhoneCallBold } from "react-icons/pi";
import { GiBackwardTime } from "react-icons/gi";
import { LuCalendarCheck2 } from "react-icons/lu";

interface QuickContactProps {
  title: string;
  paragraph?: string
}

const QuickContact: React.FC<QuickContactProps> = ({ title, paragraph }) => {
  return (
    <>
      <section>
        <div className="bg-sectionBackgroundColor py-8 md:py-14 lg:py-20 xl:py-28">
          <div className="container mx-auto">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-center text-primaryColor max-w-[900px] mx-auto">
                {title}
              </h3>
              <p className="py-7 font-medium text-center text-xl">{paragraph}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-14">
              <div className="py-[20px] border-[3px] text-primaryColor border-primaryColor transition-[.5s] hover:bg-primaryColor hover:text-white rounded-[50px] flex justify-center gap-2 items-center">
                <PiPhoneCallBold className="w-[31px] h-[28px]" />
                <a
                  href="tele: 0291589800"
                  className="text-[21px] md:text-[18px] lg:text-[21px] leading-5 font-semibold"
                >
                  {" "}
                  02 9158 9800
                </a>
              </div>
              <div className="py-[20px] border-[3px] hover:bg-primaryColor transition-[.5s] hover:text-white border-primaryColor text-primaryColor rounded-[50px] flex justify-center gap-2 items-center">
                <GiBackwardTime className="w-[31px] h-[28px]" />
                <a
                  href="tele:"
                  className="text-[21px] md:text-[18px] lg:text-[21px] leading-5 font-semibold"
                >
                  {" "}
                  Request call back
                </a>
              </div>
              <div className="py-[20px] border-[3px] hover:bg-primaryColor transition-[.5s] hover:text-white border-primaryColor text-primaryColor rounded-[50px] flex justify-center gap-2 items-center">
                <LuCalendarCheck2 className="w-[31px] h-[28px]" />
                <a
                  href="tele:"
                  className="text-[21px] md:text-[18px] lg:text-[21px] leading-5 font-semibold"
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
  );
};

export default QuickContact;
