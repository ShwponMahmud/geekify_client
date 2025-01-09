"use client";
import BookingOnlineProgress from "@/app/components/BookingOnlineComponents/BookingOnlineProgress/BookingOnlineProgress";
import BookingOnlineWelcome from "@/app/components/BookingOnlineComponents/BookingOnlineWelcome/BookingOnlineWelcome";
import ChooseDateTime from "@/app/components/BookingOnlineComponents/ChooseDateTime/ChooseDateTime";
import ContactInformation from "@/app/components/BookingOnlineComponents/ContactInformation/ContactInformation";
import EnterPhoneSendCode from "@/app/components/BookingOnlineComponents/EnterPhoneSendCode/EnterPhoneSendCode";
// import ThreeDSTestPage from "@/app/components/BookingOnlineComponents/Payment/3DSPay";
// import PaymentForm from "@/app/components/BookingOnlineComponents/Payment/3DSPay";
// import AfterPay from "@/app/components/BookingOnlineComponents/Payment/AfterPay";
import PaymentDetails from "@/app/components/BookingOnlineComponents/PaymentDetails/PaymentDetails";
import PaymentOptions from "@/app/components/BookingOnlineComponents/PaymentOptions/PaymentOptions";
import ServiceBookingSummery from "@/app/components/BookingOnlineComponents/ServiceBookingSummery/ServiceBookingSummery";
import ServiceType from "@/app/components/BookingOnlineComponents/ServiceType/ServiceType";
import ServiceForm from "@/app/components/BookingOnlineComponents/TellUsAboutYourIssue/TellUsAboutYourIssue";
import BookingTermsAndConditions from "@/app/components/BookingTermsConditions/BookingTermsAndConditions";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { resetBookingState } from "@/app/rtk-state/reducers/bookingSlice";
import {
  GetAfterPaySurcharge,
  GetCardSurcharge,
  resetPaymentState,
} from "@/app/rtk-state/reducers/paymentSlice";
import { serviceLists } from "@/app/rtk-state/reducers/serviceSlice";
// import { GetSettings} from "@/app/rtk-state/reducers/SettingSlice";
import { baseUrl } from "@/assets/baseUrl";
import { useEffect, useState } from "react";
import loaderGif from "@/assets/icons/loading-gif.gif";
import Image from "next/image";
import Script from "next/script";
// import { resetAddressState } from "@/app/rtk-state/reducers/addressSlice";
// import { resetUserInfoState } from "@/app/rtk-state/reducers/userInfoSubmitSlice";
// import { resetCustomerState } from "@/app/rtk-state/reducers/customerSlice";
// import { resetUserState } from "@/app/rtk-state/reducers/userSlice";

function page() {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const paymentInfo = useAppSelector((state) => state?.payment);
  const dispatch = useAppDispatch();
  const [services, setServices] = useState<any>([]);
  const [servicesLoad, setServicesLoad] = useState<boolean>(false);
  // const [settingsGet, setSettingsGet] = useState<boolean>(true);

  useEffect(() => {
    dispatch(GetCardSurcharge());
    dispatch(GetAfterPaySurcharge());
  }, []);

  // useEffect(() => {
  //   if (settingsGet === true) {
  //     dispatch(GetSettings());
  //     setSettingsGet(false);
  //   }
  // }, [settingsGet]);

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
        dispatch(serviceLists(responseData.data || []));
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    if (servicesLoad === false) {
      fetchServices();
      setServicesLoad(true);
    }
  }, []);

  window.addEventListener("beforeunload", () => {
    dispatch(resetBookingState());
    dispatch(resetPaymentState());
  });

  return (
    <>
      {bookingInfo?.isLoading && (
        <div className="flex justify-center items-center h-[100%] w-[100%] fixed bg-[#242424ea] z-10 top-0">
          <div className="flex justify-center align-middle ">
            <Image src={loaderGif} width={100} alt="loader" />
          </div>
        </div>
      )}
      {paymentInfo?.undecidedAppointmentStatus == "true" && (
        <div className="flex justify-center items-center h-[100%] w-[100%] fixed bg-[#242424ea] z-10 top-0">
          <div className="flex justify-center align-middle ">
            <Image src={loaderGif} width={100} alt="loader" />
          </div>
        </div>
      )}
      {paymentInfo?.cardTokenProcess === "start" && (
        <div className="flex justify-center items-center h-[100%] w-[100%] fixed bg-[#242424ea] z-10 top-0">
          <div className="flex justify-center align-middle ">
            <Image src={loaderGif} width={100} alt="loader" />
          </div>
        </div>
      )}
      {paymentInfo?.afterPayDoneStatus == "true" && (
        <div className="flex justify-center items-center h-[100%] w-[100%] fixed bg-[#242424ea] z-10 top-0">
          <div className="flex justify-center align-middle ">
            <Image src={loaderGif} width={100} alt="loader" />
          </div>
        </div>
      )}
      {/* Load Afterpay Script */}
      <Script
        id="afterPayGeneralLibrary"
        src="https://js.afterpay.com/afterpay-1.x.js"
        defer
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Afterpay script loaded");
        }}
      />
      <Script
        id="afterPayProductionLibrary"
        src="https://portal.sandbox.afterpay.com/afterpay.js"
        defer
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Afterpay script loaded");
        }}
      />
      {/* Payment Controls */}

      <div className="booking_online">
        <BookingOnlineProgress />
        {bookingInfo?.bookingStart === "" && <BookingOnlineWelcome />}
        {bookingInfo?.bookingStart === "start" && <EnterPhoneSendCode />}
        {bookingInfo?.otpVerifySuccess === "success" && <ServiceType />}
        {bookingInfo?.serviceAddressParkingSubmitAfterNextStep === "next" && (
          <ServiceForm services={services} />
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

        {/* <ThreeDSTestPage/> */}
      </div>

      <BookingTermsAndConditions />
    </>
  );
}

export default page;
