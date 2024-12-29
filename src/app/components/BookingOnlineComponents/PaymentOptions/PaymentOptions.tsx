import React, { useState } from "react";
import visaIcon from "@/assets/icons/Visa.png";
import masterCardIcon from "@/assets/icons/master card.png";
import afterPayIcon from "@/assets/icons/afterPay.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { formatDate, formatTime, formatTimeInterval } from "../ServiceBookingSummery/ServiceBookingSummery";
import { contactInformationForBookingNestStep, submitBookingSummery } from "@/app/rtk-state/reducers/bookingSlice";

const PaymentOptions: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const user = useAppSelector((state) => state?.users.user);
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const isSelected = (option: string) => selectedOption === option;

  const bookingSummerySubmitData = {
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
    type: 1,
    street: bookingInfo?.serviceAddress?.street,
    suburb: bookingInfo?.serviceAddress?.suburb,
    post_code: bookingInfo?.serviceAddress?.post_code,
    country: "Australia",
    state: bookingInfo?.serviceAddress?.state,
    user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id
      ? bookingInfo?.otpVerifyData?.[0]?.data?.id
      : user?.[0]?.id,
    service_id: "1",
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    requested_time_interval: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    client_panel: 0,
    online_discount: selectedOption === "full" ? 1 : selectedOption === "half" ? 1 : selectedOption === "quarter" ? 1 : 0,
    online_discount_amount: selectedOption === "full" ? 15.0 : selectedOption === "half" ? 10.0 : selectedOption === "quarter" ? 5.0 : null
  };


  const discountPaymentAmountGetHandler = () => {
    dispatch(submitBookingSummery(bookingSummerySubmitData));
    console.log(bookingSummerySubmitData)
    console.log(selectedOption)
  }

  const preHandler = () => {
    dispatch(contactInformationForBookingNestStep("next"));
  }

  return (
    <div className="py-5 flex flex-col items-center justify-center ">
      <div className="bg-white shadow-shadow rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-xl font-semibold text-center mb-6">Make Payment</h1>
        <div className="w-36 mx-auto flex justify-center gap-4 mb-6">
          <Image src={visaIcon} alt="MasterCard" className="h-6" />
          <Image src={masterCardIcon} alt="Visa" className="h-6" />
          <Image src={afterPayIcon} alt="PayPal" className="h-6 rounded-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full Payment Card */}
          <div
            className={`border rounded-lg p-6 ${
              isSelected("full")
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('full') ? 'text-orange-500' : 'text-gray-800'}">
              Full Payment
            </h2>
            <p
              className={` text-md font-semibold mb-4 text-center ${
                isSelected("full") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              Save 15.0%
            </p>
            {isSelected("full") && (
              <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
                $209.81
              </p>
            )}
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔ Priority email support</li>
              <li>✔ Faster appointment dates</li>
              <li>✔ Early access to new features</li>
              <li>✔ Available phone support</li>
            </ul>
            <button
              className={`px-4 py-2 rounded-lg w-full ${
                isSelected("full")
                  ? "bg-orange-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
              onClick={() => handleSelect("full")}
            >
              {isSelected("full") ? "Selected" : "Select"}
            </button>
          </div>

          {/* Half Payment Card */}
          <div
            className={`border rounded-lg p-6 relative ${
              isSelected("half")
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('half') ? 'text-orange-500' : 'text-gray-800'}">
              Half Payment
            </h2>
            <p
              className={`text-center text-md font-semibold mb-4 ${
                isSelected("half") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              Save 10.0%
            </p>
            {isSelected("half") && (
              <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
                $209.81
              </p>
            )}
            <p className="text-sm text-gray-700 mb-6">
              ✔ Pay 50% upfront
              <br />
              ✔ Remaining 50% later
              <br />✔ Email support
            </p>
            <div className="absolute bottom-[25px] left-0 right-0 px-6">
              <button
                className={`px-4 py-2 rounded-lg w-full ${
                  isSelected("half")
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => handleSelect("half")}
              >
                {isSelected("half") ? "Selected" : "Select"}
              </button>
            </div>
          </div>

          {/* Quarter Payment Card */}
          <div
            className={`border rounded-lg p-6 relative ${
              isSelected("quarter")
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('quarter') ? 'text-orange-500' : 'text-gray-800'}">
              Quarter Payment
            </h2>
            <p
              className={`text-center text-md font-semibold mb-4 ${
                isSelected("quarter") ? "text-orange-500" : "text-gray-600"
              }`}
            >
              Save 5.0%
            </p>
            {isSelected("quarter") && (
              <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
                $209.81
              </p>
            )}
            <p className="text-sm text-gray-700 mb-6">
              ✔ Pay 25% upfront
              <br />✔ Remaining 75% later
            </p>
            <div className="absolute bottom-[25px] left-0 right-0 px-6">
              <button
                className={`px-4 py-2 rounded-lg w-full ${
                  isSelected("quarter")
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => handleSelect("quarter")}
              >
                {isSelected("quarter") ? "Selected" : "Select"}
              </button>
            </div>
          </div>

          {/* Undecided Card */}
          <div
            className={`border rounded-lg p-6 relative text-center ${
              isSelected("undecided")
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold text-gray-800 mb-4">Undecided</h2>
            <p className="text-md text-gray-700 mb-2 ">Let Us Call You</p>
            <p className="text-2xl font-bold text-gray-800 mb-20">
              02 9158 9800
            </p>
            <div className="absolute bottom-[25px] left-0 right-0 px-6">
              <button
                className={`px-4 py-2 rounded-lg w-full ${
                  isSelected("undecided")
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => handleSelect("undecided")}
              >
                {isSelected("undecided") ? "Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button onClick={preHandler} className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg">
            Prev
          </button>
          <button onClick={discountPaymentAmountGetHandler} className="bg-orange-500 text-white px-6 py-2 rounded-lg">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
