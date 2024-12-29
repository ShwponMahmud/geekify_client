"use client";
import BookingOnlineProgress from "@/app/components/BookingOnlineComponents/BookingOnlineProgress/BookingOnlineProgress";
import BookingOnlineWelcome from "@/app/components/BookingOnlineComponents/BookingOnlineWelcome/BookingOnlineWelcome";
import ChooseDateTime from "@/app/components/BookingOnlineComponents/ChooseDateTime/ChooseDateTime";
import ContactInformation from "@/app/components/BookingOnlineComponents/ContactInformation/ContactInformation";
import EnterPhoneSendCode from "@/app/components/BookingOnlineComponents/EnterPhoneSendCode/EnterPhoneSendCode";
import PaymentDetails from "@/app/components/BookingOnlineComponents/PaymentDetails/PaymentDetails";
import PaymentOptions from "@/app/components/BookingOnlineComponents/PaymentOptions/PaymentOptions";
import ServiceBookingSummery from "@/app/components/BookingOnlineComponents/ServiceBookingSummery/ServiceBookingSummery";
import ServiceType from "@/app/components/BookingOnlineComponents/ServiceType/ServiceType";
import ServiceForm from "@/app/components/BookingOnlineComponents/TellUsAboutYourIssue/TellUsAboutYourIssue";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  GetAfterPaySurcharge,
  GetCardSurcharge,
} from "@/app/rtk-state/reducers/paymentSlice";
import { useEffect } from "react";

function page() {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetCardSurcharge());
    dispatch(GetAfterPaySurcharge());
  }, []);


  return (
    <>
      <div className="booking_online">
        <BookingOnlineProgress />
        {bookingInfo?.bookingStart === "" && <BookingOnlineWelcome />}
        {bookingInfo?.bookingStart === "start" && <EnterPhoneSendCode />}
        {bookingInfo?.otpVerifySuccess === "success" && <ServiceType />}
        {bookingInfo?.serviceAddressParkingSubmitAfterNextStep === "next" && (
          <ServiceForm />
        )}
        {bookingInfo.serviceQuestionInfoNextStep === "next" && (
          <ChooseDateTime />
        )}
        {bookingInfo.choosePreferredDateAndTimeNextStep === "next" && (
          <ContactInformation />
        )}
        {bookingInfo.contactInformationForBookingNestStep === "next" && (
          <ServiceBookingSummery />
        )}
        {bookingInfo?.bookingSummerySaveAndContinue === "next" && (
          <PaymentOptions />
        )}
        {bookingInfo?.paymentOptionSelectedAndProceedToPay === "next" && (
          <PaymentDetails />
        )}
      </div>
    </>
  );
}

export default page;
