import BookingOnlineProgress from "@/app/components/BookingOnlineComponents/BookingOnlineProgress/BookingOnlineProgress";
import BookingOnlineWelcome from "@/app/components/BookingOnlineComponents/BookingOnlineWelcome/BookingOnlineWelcome";
import ChooseDateTime from "@/app/components/BookingOnlineComponents/ChooseDateTime/ChooseDateTime";
import ContactInformation from "@/app/components/BookingOnlineComponents/ContactInformation/ContactInformation";
import EnterPhoneSendCode from "@/app/components/BookingOnlineComponents/EnterPhoneSendCode/EnterPhoneSendCode";
import PaymentDetails from "@/app/components/BookingOnlineComponents/PaymentDetails/PaymentDetails";
import ServiceBookingSummery from "@/app/components/BookingOnlineComponents/ServiceBookingSummery/ServiceBookingSummery";
import ServiceType from "@/app/components/BookingOnlineComponents/ServiceType/ServiceType";
import ServiceForm from "@/app/components/BookingOnlineComponents/TellUsAboutYourIssue/TellUsAboutYourIssue";
import React from "react";

function page() {
  return (
    <>
      <div className="booking_online">
        <BookingOnlineProgress/>
        {/* <BookingOnlineWelcome/> */}
        {/* <EnterPhoneSendCode/> */}
        {/* <ServiceType/> */}
        {/* <ServiceForm/> */}
        {/* <ChooseDateTime/> */}
        {/* <ContactInformation/> */}
        {/* <ServiceBookingSummery/> */}
        <PaymentDetails/>
      </div>
    </>
  );
}

export default page;
