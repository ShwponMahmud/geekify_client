"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import visaIcon from "../../../../assets/icons/Visa.png";
import americanExpressIcon from "../../../../assets/icons/american express.png";
import masterCardIcon from "../../../../assets/icons/master card.png";
import "./EnterPhoneSendCode.css";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { getOTP, submitOTP } from "@/app/rtk-state/reducers/bookingSlice";

const EnterPhoneSendCode: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("email");
  const [numberValue, setNumberValue] = useState<string | undefined>();
  const [emailValue, setEmailValue] = useState<string | undefined>();
  const [otpCode, setOtpCode] = useState<string>("");
  const dispatch = useAppDispatch();
  const bookingInfo = useAppSelector((state) => state?.booking);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleCheckboxChange = (value: string) => {
    setSelectedOption(value);
  };

  const HandleEmailChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
  } 

  const otpReqFormData = {
    username: selectedOption == "email" ? emailValue : numberValue,
    preferred_channel: selectedOption,
  };

  const handleSubmit = () => {
    dispatch(getOTP(otpReqFormData));
  };

  // OTP verify......
  const handleOtp = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setOtpCode(event.target.value);
  };

  const otpVerifyData = {
    username: bookingInfo?.otpReqData[0]?.data?.email,
    code: otpCode,
  };
  // Handle OTP submission
  const handleSubmitOtpVerify = (): void => {
    dispatch(submitOTP(otpVerifyData));
  };


  // otp timer function....................
  useEffect(() => {
    if (bookingInfo.otpReqSuccess === "success") {
      setSeconds(60); 

      const countdown = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 1) {
            return prevSeconds - 1; 
          } else {
            clearInterval(countdown); 
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [bookingInfo.otpReqSuccess]);



  const resendOtpHandler = () => {
    dispatch(getOTP(otpReqFormData));
  };


  return (
    <div className="enter_phone_send_code_section">
      <div className="container mx-auto">
        <div className="justify-items-center mt-10">
          <Image width={288} height={62} src="/logo.png" alt="Geekify logo" />
          <div className="p-5 md:p-10 mt-[40px] md:w-[500px] mx-auto  justify-items-center ">
            {bookingInfo.otpReqSuccess === "" ? (
              <div className="enter_phone_number">
                <div className="flex gap-7 mb-5 items-center">
                  <div className="flex gap-2 items-center">
                    <input
                      className="w-[17px] h-[17px]"
                      type="checkbox"
                      value="email"
                      checked={selectedOption.includes("email")}
                      onChange={() => handleCheckboxChange("email")}
                    />
                    <label className="mt-[5px]" htmlFor="emailCheckbox">
                      Email
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      className="w-[17px] h-[17px]"
                      type="checkbox"
                      value="sms"
                      checked={selectedOption.includes("sms")}
                      onChange={() => handleCheckboxChange("sms")}
                    />
                    <label className="mt-[5px]" htmlFor="smsCheckbox">
                      Sms
                    </label>
                  </div>
                </div>

                {selectedOption == "email" ? (
                  <div>
                    <label htmlFor="" className="text-[18px]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className=" flex items-center border rounded-md mt-3 px-2 py-2 w-[390px] max-w-md text-gray-700 placeholder-gray-400"
                      style={{ outline: "none" }}
                      onChange={HandleEmailChange}
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="" className="text-[18px]">
                      Phone Number
                    </label>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={numberValue}
                      onChange={setNumberValue}
                      className=" flex items-center border-none rounded-md mt-3 px-2 py-2 w-[390px] max-w-md text-gray-700 placeholder-gray-400"
                      style={{ outline: "none" }}
                    />
                  </div>
                )}

                <button
                  className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[20px] hover:bg-white hover:text-primaryColor transition-[.5s]"
                  onClick={handleSubmit}
                >
                  Send Code
                </button>
              </div>
            ) : (
              <div className="enter_code ">
                <div className="">
                  <label htmlFor="" className="text-[14px] font-medium">
                    {" "}
                    Enter the OTP code from the message that we just sent.
                  </label>
                  <input
                    className="w-[100%] border p-[7px] rounded-md outline-none flex items-center"
                    placeholder="Enter Code"
                    type="text"
                    onChange={handleOtp}
                  />
                  <div className="resendTimer mt-3">
                    <div className="countdown-text flex items-center gap-4">
                      {seconds > 0 || minutes > 0 ? (
                        <p>
                          Request OTP Again:{" "}
                          {minutes < 10 ? `0${minutes}` : minutes}:
                          {seconds < 10 ? `0${seconds}` : seconds}
                        </p>
                      ) : (
                        <p>Didn't receive the code?</p>
                      )}

                      {seconds > 0 || minutes > 0 ? null : (
                        <span
                          onClick={resendOtpHandler}
                          className="resendOtpBtn bg-primaryColor cursor-pointer text-white text-[14px] rounded-md py-[3px] px-[5px] text-primaryColor hover:bg-gray-400 transition-[.5s]"
                        >
                          Resend OTP
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[20px] hover:bg-white hover:text-primaryColor transition-[.5s]"
                  onClick={handleSubmitOtpVerify}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <br />
          <small>
            By continuing, you agree to the Terms of use and Privacy Policy.{" "}
          </small>

          <div className="text-center mt-4">
            <h4 className="text-3xl font-semibold mb-5">We Accept :</h4>
            <div className="flex justify-between gap-5">
              <Image
                width={80}
                height={30}
                src={"/logos/visa.png"}
                alt="visa"
              />
              <Image
                width={80}
                height={30}
                src={"/logos/american-express.png"}
                alt="visa"
              />
              <Image
                width={80}
                height={30}
                src={"/logos/master-card.png"}
                alt="visa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPhoneSendCode;
