"use client";
import React, { useState } from "react";

function ContactInformation() {
  const [selectedWay, setSelectedWay] = useState<string>("");
  const contactWay = ["SMS", "Call", "Email"];
  return (
    <>
      <div className="contact_information_section">
        <div className="container mx-auto pt-5">
          <h1 className="text-3xl font-semibold text-center">
            Contact Information
          </h1>

          <form action="" className="w-[700px] mx-auto mt-5">
            <div className="grid grid-cols-2 gap-5 ">
              <div>
                <label htmlFor="">Full Name</label>
                <br />
                <input
                  className="border w-[100%] p-[10px] rounded-md"
                  type="text"
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input
                  className="border w-[100%] p-[10px] rounded-md"
                  type="text"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <br />
                <input
                  className="border w-[100%] p-[10px] rounded-md"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <label htmlFor="">How do we contact you</label>
                <div className="grid grid-cols-4 gap-3">
                  {contactWay.map((way, idx) => (
                    <button
                      key={idx}
                      className={`p-[10px] border rounded ${
                        selectedWay === way
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() =>
                        typeof way === "string"
                          ? setSelectedWay(way)
                          : setSelectedWay("")
                      }
                    >
                      {typeof way === "string" ? way : ``}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="bg-primaryColor text-white rounded-md py-[10px] px-[40px] mt-10">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;
