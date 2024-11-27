import Image from "next/image";
import React from "react";
import expectedIcon1 from "../../../../assets/icons/expected-icon (1).png";
import expectedIcon2 from "../../../../assets/icons/expected-icon (2).png";
import expectedIcon3 from "../../../../assets/icons/expected-icon (3).png";
import expectedIcon4 from "../../../../assets/icons/expected-icon (4).png";

function WhatExpectedFromYou() {
  return (
    <>
      <div className="what_expected_from_you_section py-28 bg-sectionBackgroundColor">
        <div className="container mx-auto text-center text-deepGrayColor">
          <h2 className="text-3xl font-bold ">What is expected from you?</h2>
          <p className="w-[60%] mx-auto pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat ipsa eaque ratione at quo quasi nesciunt, vero aspernatur possimus similique sint consectetur. Enim asperiores, architecto ea doloribus quibusdam quod.</p>

          <div className="grid grid-cols-4 gap-10 pt-20">
            <div className="justify-items-center">
              <Image width={140} src={expectedIcon1} alt="" />
              <p className="mt-7">
                A background in providing relevant tech support for business and
                homes
              </p>
            </div>
            <div className="justify-items-center">
              <Image width={140} src={expectedIcon2} alt="" />
              <p className="mt-7">
              A good attitude, eagerness to learn and adapt
              </p>
            </div>
            <div className="justify-items-center">
              <Image width={140} src={expectedIcon3} alt="" />
              <p className="mt-7">
              Great communication skills
              </p>
            </div>
            <div className="justify-items-center">
              <Image width={140} src={expectedIcon4} alt="" />
              <p className="mt-7">
              A team-oriented mindset
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatExpectedFromYou;