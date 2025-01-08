import React, { useEffect, useState } from "react";
import visaIcon from "@/assets/icons/Visa.png";
import masterCardIcon from "@/assets/icons/master card.png";
import afterPayIcon from "@/assets/icons/afterPay.png";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  formatDate,
  formatTime,
  formatTimeInterval,
} from "../ServiceBookingSummery/ServiceBookingSummery";
import {
  bookingSummerySaveAndContinue,
  contactInformationForBookingNestStep,
  paymentOptionSelected,
  paymentOptionSelectedAndProceedToPay,
  submitBookingSummery,
} from "@/app/rtk-state/reducers/bookingSlice";
import {
  AppointmentDiscountStoreListCreate,
  AppointmentHistoryCreate,
  CreateAppointmentCreator,
  CreateAppointmentNotes,
  CreateAppointments,
  CreateAppointmentsCharge,
  paymentOptionFullAmountAfterDiscount,
  paymentOptionHalfAmountAfterDiscount,
  paymentOptionQuarterAmountAfterDiscount,
  undecidedAppointmentStatus,
  UndecidedEmailNotifyCreate,
} from "@/app/rtk-state/reducers/paymentSlice";
import loaderGif from "@/assets/icons/loading-gif.gif";

const PaymentOptions: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const paymentInfo = useAppSelector((state) => state?.payment);
  const customer = useAppSelector((state) => state?.customer.customer);
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSelectedOptionTrigger, setIsSelectedOptionTrigger] =
    useState<boolean>(false);
  const address = useAppSelector((state) => state?.addresses?.address);
  const users = useAppSelector((state) => state?.users);
  const userInfo = useAppSelector((state) => state?.userInfoAfterSubmit);

  useEffect(() => {
    if (bookingInfo.paymentOptionSelected !== selectedOption) {
      setSelectedOption(bookingInfo.paymentOptionSelected);
    }
  }, [bookingInfo.paymentOptionSelected, selectedOption]);

  const handleSelect = (option: string) => {
    setSelectedOption((prevOption) => {
      if (prevOption !== option) {
        dispatch(paymentOptionSelected(option));
        setIsSelectedOptionTrigger(true);
      }
      return option;
    });
  };

  const onlineDiscount =
    bookingInfo.paymentOptionSelected === "full"
      ? 1
      : bookingInfo.paymentOptionSelected === "half"
      ? 1
      : bookingInfo.paymentOptionSelected === "quarter"
      ? 1
      : 0;
  const onlineDiscountAmount =
    bookingInfo.paymentOptionSelected === "full"
      ? 15.0
      : bookingInfo.paymentOptionSelected === "half"
      ? 10.0
      : bookingInfo.paymentOptionSelected === "quarter"
      ? 5.0
      : null;

  const isSelected = (option: string) => selectedOption === option;

  const serviceIdFilter = bookingInfo?.filterServiceList?.find(
    (service: any) =>
      typeof service?.name === "string" &&
      service?.name === bookingInfo?.serviceName?.service_name
  );

  const bookingSummerySubmitData = {
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
    type: bookingInfo?.serviceLocationType === "Home" ? 0 : 1,
    street: bookingInfo?.serviceAddress?.street,
    suburb: bookingInfo?.serviceAddress?.suburb,
    post_code: bookingInfo?.serviceAddress?.post_code,
    country: "Australia",
    state: bookingInfo?.serviceAddress?.state,
    user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id
      ? bookingInfo?.otpVerifyData?.[0]?.data?.id
      : customer?.id,
    service_id: serviceIdFilter?.id,
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    requested_time_interval: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    client_panel: 0,
    online_discount: onlineDiscount,
    online_discount_amount: onlineDiscountAmount,
  };

  useEffect(() => {
    if (
      bookingInfo?.paymentOptionSelected === selectedOption &&
      isSelectedOptionTrigger === true
    ) {
      dispatch(submitBookingSummery(bookingSummerySubmitData));
      // dispatch(bookingSummerySaveAndContinue("next"));
    }
  }, [bookingInfo.paymentOptionSelected, selectedOption]);

  useEffect(() => {
    if (!bookingInfo.isLoading && selectedOption === "full") {
      dispatch(
        paymentOptionFullAmountAfterDiscount(
          // parseFloat(
            (
              bookingInfo?.bookingSummerySubmitResData?.grand_total / 100
            ).toFixed(2)
          // )
        )
      );
    }
    if (!bookingInfo.isLoading && selectedOption === "half") {
      dispatch(
        paymentOptionHalfAmountAfterDiscount(
          // parseFloat(
            (
              bookingInfo?.bookingSummerySubmitResData?.grand_total /
              100 /
              2
            ).toFixed(2)
          // )
        )
      );
    }
    if (!bookingInfo.isLoading && selectedOption === "quarter") {
      dispatch(
        paymentOptionQuarterAmountAfterDiscount(
          // parseFloat(
            (
              bookingInfo?.bookingSummerySubmitResData?.grand_total /
              100 /
              4
            ).toFixed(2)
          // )
        )
      );
    }
  }, [selectedOption, bookingInfo.isLoading]);

  const preHandler = () => {
    dispatch(contactInformationForBookingNestStep("next"));
    dispatch(bookingSummerySaveAndContinue(""));
  };
  const proceedToPayNextHandler = () => {
    dispatch(paymentOptionSelectedAndProceedToPay("next"));
    dispatch(bookingSummerySaveAndContinue(""));
  };

  // Create Appointments.....................
  const CreateAppointmentsFormData = {
    customer_id: customer?.id,
    service_id: serviceIdFilter?.id,
    address_id: address?.[0]?.id,
    billing_address_id: address?.[0]?.id,
    platform:
      bookingInfo?.operatingSystem?.platform === "Internet"
        ? 0
        : bookingInfo?.operatingSystem?.platform === "MAC"
        ? 1
        : bookingInfo?.operatingSystem?.platform === "Smart Phone"
        ? 2
        : bookingInfo?.operatingSystem?.platform === "Printer"
        ? 3
        : bookingInfo?.operatingSystem?.platform === "Windows"
        ? 4
        : 5,
    type: bookingInfo?.serviceLocationType == "Home" ? 0 : 1,
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    length: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    status: 0,
    parking:
      bookingInfo?.parkingOption === "No Parking"
        ? 0
        : bookingInfo?.parkingOption === "Driveway"
        ? 1
        : bookingInfo?.parkingOption === "Street Paid"
        ? 2
        : 3,
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
  };

  const proceedForUndecidedNextHandler = () => {
    dispatch(undecidedAppointmentStatus("true"));
    dispatch(CreateAppointments(CreateAppointmentsFormData));
    dispatch(paymentOptionFullAmountAfterDiscount(""));
    dispatch(paymentOptionHalfAmountAfterDiscount(""));
    dispatch(paymentOptionQuarterAmountAfterDiscount(""));

    // dispatch(bookingSummerySaveAndContinue(""));
  };

  // Create Appointments Charge.......
  const charges = [];
  if (bookingInfo?.bookingSummerySubmitResData?.gst_charge?.applied_status) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount,
      type: 3,
      name: "GST",
    });
  }

  if (
    bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status
  ) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
      type: 2,
      name: "Coupon Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.applied_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.applied_discount?.amount,
      type: 2,
      name: "Applied Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
          ?.amount,
      type: 2,
      name: "Credited Payment Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.parking_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.parking_discount?.amount,
      type: 2,
      name: "Parking Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.amount,
      type: 2,
      name: "Loyalty Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
          ?.amount,
      type: 2,
      name: "Online Appointment Discount",
    });
  }

  if (
    bookingInfo?.bookingSummerySubmitResData?.distance_surcharge
      ?.applied_status &&
    bookingInfo?.bookingSummerySubmitResData?.distance_surcharge?.amount > 0
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.distance_surcharge?.amount,
      type: 1,
      name: "Distance Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.holiday_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.holiday_surcharge?.amount,
      type: 1,
      name: "Holiday Surcharge",
    });
  }
  if (bookingInfo?.bookingSummerySubmitResData?.fuel_levy?.applied_status) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.fuel_levy?.amount,
      type: 1,
      name: "Fuel Levy Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.city_area_surcharge
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.city_area_surcharge?.amount,
      type: 1,
      name: "City Area Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.same_day_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.same_day_surcharge?.amount,
      type: 1,
      name: "Same Day Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.timebase_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.timebase_surcharge?.amount,
      type: 1,
      name: "Timebase Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.weekend_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.weekend_surcharge?.amount,
      type: 1,
      name: "Weekend Surcharge",
    });
  }

  if (bookingInfo?.bookingSummerySubmitResData?.service_price) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.service_price,
      type: 0,
      name: "Service Charge",
    });
  }

  const CreateAppointmentsChargeFormData = {
    appointment_id: paymentInfo?.createAppointmentsResData?.id,
    charges: charges,
  };

  useEffect(() => {
    if (paymentInfo?.createAppointmentsResData?.status) {
      dispatch(CreateAppointmentsCharge(CreateAppointmentsChargeFormData));
    }
  }, [paymentInfo?.createAppointmentsResData?.status]);

  // Create Appointment Notes..........................
  const createAppointmentNotesFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: paymentInfo?.createAppointmentsResData?.id,
    user_type: 0,
    type: 0,
    description: bookingInfo?.descriptionNote?.note,
  };

  useEffect(() => {
    if (paymentInfo?.appointmentChargeResStatus === "success") {
      dispatch(CreateAppointmentNotes(createAppointmentNotesFormData));
    }
  }, [paymentInfo?.appointmentChargeResStatus]);

  // Create Appointment Creator..........................
  const createAppointmentCreatorFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: paymentInfo?.createAppointmentsResData?.id,
    panel: 0,
  };

  useEffect(() => {
    if (paymentInfo?.createAppointmentNotesResData?.user_type) {
      dispatch(CreateAppointmentCreator(createAppointmentCreatorFormData));
    }
  }, [paymentInfo?.createAppointmentNotesResData?.user_type]);

  // Appointment Discount Store list................
  const discountsArray = [
    {
      amount: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
      type: 3,
      applied:
        bookingInfo?.bookingSummerySubmitResData?.coupon_discount
          ?.applied_status,
    },
    {
      amount:
        bookingInfo?.bookingSummerySubmitResData?.applied_discount?.amount,
      type: 1,
      applied:
        bookingInfo?.bookingSummerySubmitResData?.applied_discount
          ?.applied_status,
    },
    {
      amount:
        bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
          ?.amount,
      type: 0,
      applied:
        bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
          ?.applied_status,
    },
    {
      amount:
        bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.amount,
      type: 7,
      applied:
        bookingInfo?.bookingSummerySubmitResData?.loyalty_discount
          ?.applied_status,
    },
    {
      amount:
        bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
          ?.amount,
      type: 6,
      applied:
        bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
          ?.applied_status,
    },
  ]
    .filter((discount) => discount.applied)
    .map(({ applied, ...validDiscount }) => validDiscount);

  const AppointmentDiscountStoreListFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    reference: paymentInfo?.createAppointmentsResData?.reference,
    discounts: discountsArray,
  };

  useEffect(() => {
    if (bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.length) {
      if (paymentInfo?.CreateAppointmentCreatorResData?.id) {
        dispatch(
          AppointmentDiscountStoreListCreate(
            AppointmentDiscountStoreListFormData
          )
        );
      }
    }
  }, [paymentInfo?.CreateAppointmentCreatorResData?.id]);

  // Appointment History..
  const AppointmentHistoryFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: paymentInfo?.createAppointmentsResData?.id,
    panel: 0,
    status: 0,
  };

  useEffect(() => {
    if (paymentInfo?.CreateAppointmentCreatorResData?.id) {
      dispatch(AppointmentHistoryCreate(AppointmentHistoryFormData));
    }
  }, [paymentInfo?.CreateAppointmentCreatorResData?.id]);

  // Undecided Email notify create...........
  const undecidedEmailNotifyData = {
    appointment: paymentInfo?.createAppointmentsResData?.id,
    params: {
      notify_customer: 1,
      notify_internal_user: 1,
    },
  };

  useEffect(() => {
    if (paymentInfo?.appointmentHistoryCreateResData?.id)
      dispatch(UndecidedEmailNotifyCreate(undecidedEmailNotifyData));
      dispatch(undecidedAppointmentStatus(""));
      redirect("/undecided-appointment-successful")
  }, [paymentInfo?.appointmentHistoryCreateResData?.id]);

  // console.log(typeof (paymentInfo?.paymentOptionFullAmountAfterDiscount).toString());

  return (
    <div className="py-5 flex flex-col items-center justify-center ">
      {/* {bookingInfo?.isLoading &&
          <div className="flex justify-center items-center h-[100%] w-[100%] absolute bg-[#80808046] z-10">
            <div className="flex justify-center align-middle ">
              <Image src={loaderGif} width={100} alt="loader" />
            </div>
          </div>
        } */}
      <div className="bg-white shadow-shadow rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-xl font-semibold text-center mb-6">Make Payment</h1>
        <div className="w-36 mx-auto flex justify-center gap-4 mb-6">
          <Image src={visaIcon} alt="MasterCard" className="h-6" />
          <Image src={masterCardIcon} alt="Visa" className="h-6" />
          <Image src={afterPayIcon} alt="PayPal" className="h-6 rounded-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full payment option */}
          <div
            className={`border rounded-lg p-6 ${
              isSelected("full") ||
              bookingInfo?.paymentOptionSelected === "full"
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('full') ? 'text-orange-500' : 'text-gray-800'}">
              Full Payment
            </h2>
            <p
              className={` text-md font-semibold mb-4 text-center ${
                isSelected("full") ||
                bookingInfo?.paymentOptionSelected === "full"
                  ? "text-orange-500"
                  : "text-gray-600"
              }`}
            >
              Save 15.0%
            </p>
            {paymentInfo?.paymentOptionFullAmountAfterDiscount.length && (
            <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
              ${" "}
              {( paymentInfo?.paymentOptionFullAmountAfterDiscount && paymentInfo?.paymentOptionFullAmountAfterDiscount).toString()}
            </p>
            )}
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li>✔ Priority email support</li>
              <li>✔ Faster appointment dates</li>
              <li>✔ Early access to new features</li>
              <li>✔ Available phone support</li>
            </ul>
            {/* <span onClick={discountPaymentAmountGetHandler}> */}
            <button
              className={`px-4 py-2 rounded-lg w-full ${
                isSelected("full") ||
                bookingInfo?.paymentOptionSelected === "full"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-500 text-white"
              }`}
              onClick={() => handleSelect("full")}
            >
              {isSelected("full") ? "Selected" : "Select"}
            </button>
            {/* </span> */}
          </div>

          {/* Half payment option */}
          <div
            className={`border rounded-lg p-6 relative ${
              isSelected("half") ||
              bookingInfo?.paymentOptionSelected === "half"
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('half') ? 'text-orange-500' : 'text-gray-800'}">
              Half Payment
            </h2>
            <p
              className={`text-center text-md font-semibold mb-4 ${
                isSelected("half") ||
                bookingInfo?.paymentOptionSelected === "half"
                  ? "text-orange-500"
                  : "text-gray-600"
              }`}
            >
              Save 10.0%
            </p>
            {paymentInfo?.paymentOptionHalfAmountAfterDiscount.length  && (
            <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
              ${" "}
              {(paymentInfo?.paymentOptionHalfAmountAfterDiscount && paymentInfo?.paymentOptionHalfAmountAfterDiscount).toString()}
            </p>
            )}
            <p className="text-sm text-gray-700 mb-6">
              ✔ Pay 50% upfront
              <br />
              ✔ Remaining 50% later
              <br />✔ Email support
            </p>
            <div className="absolute bottom-[25px] left-0 right-0 px-6">
              {/* <span onClick={discountPaymentAmountGetHandler}> */}
              <button
                className={`px-4 py-2 rounded-lg w-full ${
                  isSelected("half") ||
                  bookingInfo?.paymentOptionSelected === "half"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => handleSelect("half")}
              >
                {isSelected("half") ? "Selected" : "Select"}
              </button>
              {/* </span> */}
            </div>
          </div>

          <div
            className={`border rounded-lg p-6 relative ${
              isSelected("quarter") ||
              bookingInfo?.paymentOptionSelected === "quarter"
                ? "bg-orange-100 border-orange-500"
                : "bg-white"
            }`}
          >
            <h2 className="text-lg font-bold mb-2 ${isSelected('quarter') ? 'text-orange-500' : 'text-gray-800'}">
              Quarter Payment
            </h2>
            <p
              className={`text-center text-md font-semibold mb-4 ${
                isSelected("quarter") ||
                bookingInfo?.paymentOptionSelected === "quarter"
                  ? "text-orange-500"
                  : "text-gray-600"
              }`}
            >
              Save 5.0%
            </p>
            {paymentInfo?.paymentOptionQuarterAmountAfterDiscount.length  && (
            <p className="text-2xl font-bold mb-4 text-center text-primaryColor ">
              $
              {(paymentInfo?.paymentOptionQuarterAmountAfterDiscount && paymentInfo?.paymentOptionQuarterAmountAfterDiscount ).toString()}
            </p>
            )}
            <p className="text-sm text-gray-700 mb-6">
              ✔ Pay 25% upfront
              <br />✔ Remaining 75% later
            </p>
            <div className="absolute bottom-[25px] left-0 right-0 px-6">
              <button
                className={`px-4 py-2 rounded-lg w-full ${
                  isSelected("quarter") ||
                  bookingInfo?.paymentOptionSelected === "quarter"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-500 text-white"
                }`}
                onClick={() => handleSelect("quarter")}
              >
                {isSelected("quarter") ? "Selected" : "Select"}
              </button>
            </div>
          </div>

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
          <button
            onClick={preHandler}
            className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg"
          >
            Prev
          </button>
          {selectedOption == "full" && (
            <button
              onClick={proceedToPayNextHandler}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Proceed to Pay
            </button>
          )}
          {selectedOption == "half" && (
            <button
              onClick={proceedToPayNextHandler}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Proceed to Pay
            </button>
          )}
          {selectedOption == "quarter" && (
            <button
              onClick={proceedToPayNextHandler}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Proceed to Pay
            </button>
          )}
          {selectedOption == "undecided" && (
            <button
              onClick={proceedForUndecidedNextHandler}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Proceed
            </button>
          )}
          {!selectedOption && (
            <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">
              Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
