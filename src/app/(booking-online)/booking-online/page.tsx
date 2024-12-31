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
import BookingTermsAndConditions from "@/app/components/BookingTermsConditions/BookingTermsAndConditions";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  GetAfterPaySurcharge,
  GetCardSurcharge,
} from "@/app/rtk-state/reducers/paymentSlice";
import { baseUrl } from "@/assets/baseUrl";
import { useEffect, useState } from "react";



function page() {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const dispatch = useAppDispatch();
  const [services, setServices] = useState<any>([]);

  useEffect(() => {
    dispatch(GetCardSurcharge());
    dispatch(GetAfterPaySurcharge());
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/services?status=1&with_relation[]=serviceCategory&show_online_appointment=1&source[]=10`,
          {
            headers: {
              "Content-Type": "application/json",
              "Client-Secret": `secret`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const responseData = await response.json();
        setServices(responseData.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);


  // console.log(services)

  return (
    <>
      <div className="booking_online">
        <BookingOnlineProgress />
        {bookingInfo?.bookingStart === "" && <BookingOnlineWelcome />}
        {bookingInfo?.bookingStart === "start" && <EnterPhoneSendCode />}
        {bookingInfo?.otpVerifySuccess === "success" && <ServiceType />}
        {bookingInfo?.serviceAddressParkingSubmitAfterNextStep === "next" && (
          <ServiceForm services={services}/>
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
      <BookingTermsAndConditions />
    </>
  );
}

export default page;
