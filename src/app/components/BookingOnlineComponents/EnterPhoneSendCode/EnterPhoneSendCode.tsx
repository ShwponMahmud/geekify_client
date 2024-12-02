"use client";
import Image from "next/image";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import visaIcon from "../../../../assets/icons/Visa.png";
import americanExpressIcon from "../../../../assets/icons/american express.png";
import masterCardIcon from "../../../../assets/icons/master card.png";
import "./EnterPhoneSendCode.css";

const EnterPhoneSendCode: React.FC = () => {
  const [value, setValue] = useState<string | undefined>();

  const handleStartBooking = () => {
    if (value && isPossiblePhoneNumber(value)) {
      // Logic for handling valid phone number submission
      console.log("Phone number submitted:", value);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  return (
    <div className="enter_phone_send_code_section">
      <div className="container mx-auto">
        <div className="justify-items-center">
          <Image width={288} height={62} src="/logo.png" alt="Geekify logo" />
          <div className="p-10 mt-[40px] w-[500px] mx-auto  justify-items-center">
            <div className="enter_phone_number">
              <label htmlFor="">Enter Phone Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className=" flex items-center border rounded-md px-2 py-2 w-[390px] max-w-md text-gray-700 placeholder-gray-400"
                style={{ outline: "none" }}
              />
            </div>

            <div className="enter_code ">
              <div className="">
                <label htmlFor="" className="text-[12px]">
                  {" "}
                  Enter the number code from the text message that we just sent.
                </label>
                <input
                  className="w-[100%] border p-[7px] rounded-md outline-none flex items-center"
                  placeholder="Enter Code"
                  type="text"
                />
                <p>
                  Did not Get the Code? <button>Re-send</button>
                </p>
              </div>
            </div>
            <button
              className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[40px] hover:bg-white hover:text-primaryColor transition-[.5s]"
              onClick={handleStartBooking}
            >
              Send Code
            </button>
            <button
              className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[40px] hover:bg-white hover:text-primaryColor transition-[.5s]"
              onClick={handleStartBooking}
            >
              Submit
            </button>
            <br />
            <small>
              By continuing, you agree to the Terms of use and Privacy Policy.{" "}
            </small>
          </div>

          <div className="text-center">
            <h4 className="text-3xl font-semibold mb-5">We Accept :</h4>
            <div className="flex justify-between gap-5">
              <Image width={80} height={30} src={visaIcon} alt="visa" />
              <Image
                width={80}
                height={30}
                src={americanExpressIcon}
                alt="visa"
              />
              <Image width={80} height={30} src={masterCardIcon} alt="visa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPhoneSendCode;
