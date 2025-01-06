"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";

const BookingOnlineProgress: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const bookingInfo = useAppSelector((state) => state?.booking);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateProgress = () => {
      let step = 1; 
      if (bookingInfo.bookingStart === "start") step = 1;
      if (bookingInfo.otpReqSuccess === "success") step = 1;
      if (bookingInfo.otpVerifySuccess === "success") step = 2;
      if (bookingInfo.serviceAddressParkingSubmitAfterNextStep === "next") step = 3;
      if (bookingInfo.serviceQuestionInfoNextStep === "next") step = 4;
      if (bookingInfo.choosePreferredDateAndTimeNextStep === "next") step = 5;
      if (bookingInfo.contactInformationForBookingNestStep === "next") step = 5;
      if (bookingInfo?.bookingSummerySaveAndContinue === "next") step = 6;
      if (bookingInfo?.paymentOptionSelectedAndProceedToPay === "next") step = 6;
      

      setCurrentStep(step);
    };

    updateProgress();
  }, [bookingInfo]);

  const next = () => {
// dispatch(bookingSummerySaveAndContinue("next"));
  }
  
  return (
    <div className="flex justify-center items-center">
      <ProgressBar steps={6} currentStep={currentStep} />
      {/* <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}>
          Previous
        </button>
        <button
          onClick={next}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default BookingOnlineProgress;
