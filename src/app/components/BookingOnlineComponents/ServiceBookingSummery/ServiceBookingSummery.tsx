import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { SubmitAddressInfo, SubmitAddressInfoStatus } from "@/app/rtk-state/reducers/addressSlice";
import {
  bookingSummerySaveAndContinue,
  choosePreferredDateAndTimeNextStep,
  contactInformationForBookingNestStep,
  otpVerifySuccessReStore,
  serviceAddressParkingSubmitAfterNextStep,
  serviceQuestionInfoNextStep,
  submitBookingSummery,
} from "@/app/rtk-state/reducers/bookingSlice";
import { createCustomer } from "@/app/rtk-state/reducers/customerSlice";
import { SubmitUserInfo, userInfoStatus } from "@/app/rtk-state/reducers/userInfoSubmitSlice";
import { getUser } from "@/app/rtk-state/reducers/userSlice";
import { useEffect, useState } from "react";
import { LuPenSquare } from "react-icons/lu";

export const formatDate = (date: string | undefined) => {
  if (!date) return null;
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
};

// Function to convert time to 24-hour format
export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(/[: ]/);
  const meridian = time.split(" ")[1];
  let hour24 = parseInt(hours);

  if (meridian === "PM" && hour24 !== 12) {
    hour24 += 12; // Add 12 hours for PM (except 12 PM)
  } else if (meridian === "AM" && hour24 === 12) {
    hour24 = 0; // Set 12 AM to 0 hours
  }

  return `${hour24.toString().padStart(2, "0")}:${minutes}`;
};

export const formatTimeInterval = (interval: string): string => {
  const match = interval.match(/(\d+)\s*Hours?\s*(\d+)?\s*Minutes?/i);
  if (match) {
    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }
  throw new Error("Invalid time interval format");
};




function ServiceBookingSummery() {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const user = useAppSelector((state) => state?.users.user);
  const userInfo = useAppSelector((state) => state?.userInfoAfterSubmit);
  const addressInfo = useAppSelector((state) => state?.addresses);
  const dispatch = useAppDispatch();

  const BookingSummeryEdit = () => {
    dispatch(serviceAddressParkingSubmitAfterNextStep(""));
    dispatch(serviceQuestionInfoNextStep(""));
    dispatch(choosePreferredDateAndTimeNextStep(""));
    dispatch(contactInformationForBookingNestStep(""));
    dispatch(otpVerifySuccessReStore("success"));
  };

  const PrevButtonHandler = () => {
    dispatch(choosePreferredDateAndTimeNextStep("next"));
    dispatch(contactInformationForBookingNestStep(""));
  };

  // export const formatDate = (date: string | undefined) => {
  //   if (!date) return null;
  //   const d = new Date(date);
  //   return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
  //     2,
  //     "0"
  //   )}-${String(d.getDate()).padStart(2, "0")}`;
  // };

  // Function to convert time to 24-hour format
  // const formatTime = (time: string): string => {
  //   const [hours, minutes] = time.split(/[: ]/);
  //   const meridian = time.split(" ")[1];
  //   let hour24 = parseInt(hours);

  //   if (meridian === "PM" && hour24 !== 12) {
  //     hour24 += 12; // Add 12 hours for PM (except 12 PM)
  //   } else if (meridian === "AM" && hour24 === 12) {
  //     hour24 = 0; // Set 12 AM to 0 hours
  //   }

  //   return `${hour24.toString().padStart(2, "0")}:${minutes}`;
  // };

  // const formatTimeInterval = (interval: string): string => {
  //   const match = interval.match(/(\d+)\s*Hours?\s*(\d+)?\s*Minutes?/i);
  //   if (match) {
  //     const hours = match[1] ? parseInt(match[1], 10) : 0;
  //     const minutes = match[2] ? parseInt(match[2], 10) : 0;
  //     return `${hours.toString().padStart(2, "0")}:${minutes
  //       .toString()
  //       .padStart(2, "0")}`;
  //   }
  //   throw new Error("Invalid time interval format");
  // };

  const serviceIdFilter = bookingInfo?.filterServiceList?.find((service: any) => 
    typeof service?.name === 'string' && 
    service?.name === bookingInfo?.serviceName?.service_name
  );
  

  const bookingSummerySubmitData = {
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
    type: bookingInfo?.serviceLocationType === "Home" ? 0 : 1,
    street: bookingInfo?.serviceAddress?.street,
    suburb: bookingInfo?.serviceAddress?.suburb,
    post_code: bookingInfo?.serviceAddress?.post_code,
    country: bookingInfo?.serviceAddress?.country,
    state: bookingInfo?.serviceAddress?.state,
    user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id
      ? bookingInfo?.otpVerifyData?.[0]?.data?.id
      : userInfo?.userInfo?.id,
    service_id: serviceIdFilter?.id,
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    requested_time_interval: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    client_panel: 0,
  };

  const BookingQuestionsAnsData = {
    added_by: "",
    appointment_id: "",
    panel: 0,
    question: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  };

  // const bookingSummerySaveAndSubmitHandler = () => {
  //   if (bookingInfo?.otpVerifyData[0]?.data === null) {
  //     const name = bookingInfo.contactInformationForBooking.fullName.split(" ");

  //     // user create......
  //     const userContactInfo = {
  //       first_name: name[0],
  //       last_name: name[1],
  //       phone_number: bookingInfo.contactInformationForBooking.phoneNumber,
  //       email: bookingInfo.contactInformationForBooking.email,
  //     };

  //     dispatch(SubmitUserInfo(userContactInfo));
  //   } else {
  //     dispatch(submitBookingSummery(bookingSummerySubmitData));
  //   }
  // };

  // // Address info submit........
  // if (userInfo.status === "success") {
  //   useEffect(() => {
  //     const AddressInfoForSubmit = {
  //       ...bookingInfo.serviceAddress,
  //       country: "Australia",
  //       user_id: userInfo?.userInfo?.id,
  //     };
  //     dispatch(SubmitAddressInfo(AddressInfoForSubmit));
  //   }, [userInfo]);
  // }

  // // get user .......
  // if (addressInfo.status === "success") {
  //   useEffect(() => {
  //     const CustomFormData = {
  //       email: bookingInfo?.contactInformationForBooking?.email,
  //     };

  //     dispatch(getUser(CustomFormData));
  //   }, [addressInfo]);
  // }

  // // customer create.....
  // if (addressInfo.status === "success") {
  //   useEffect(() => {
  //     const CustomerFormData = {
  //       address_id: addressInfo?.address?.[0]?.id,
  //       user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id
  //         ? bookingInfo?.otpVerifyData?.[0]?.data?.id
  //         : userInfo?.userInfo?.id,
  //       type: 1,
  //       status: 1,
  //       newsletter_subscription: 1,
  //     };

  //     dispatch(createCustomer(CustomerFormData));
  //     console.log(CustomerFormData);
  //   }, [addressInfo]);
  // }

  // if (addressInfo.status === "success") {
  //   useEffect(() => {
  //     dispatch(submitBookingSummery(bookingSummerySubmitData));
  //     // dispatch(contactInformationForBookingNestStep(""));
  //   }, [addressInfo]);
  // }


  
  // Local state to track status
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [isCustomerCreated, setIsCustomerCreated] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [isUserGet, setIsUserGet] = useState(false);

  const bookingSummerySaveAndSubmitHandler = () => {
    if (bookingInfo?.otpVerifyData?.[0]?.data === null) {
      const name = bookingInfo.contactInformationForBooking.fullName.split(" ");

      // user create......
      const userContactInfo = {
        first_name: name[0],
        last_name: name[1],
        phone_number: bookingInfo.contactInformationForBooking.phoneNumber,
        email: bookingInfo.contactInformationForBooking.email,
      };

      dispatch(SubmitUserInfo(userContactInfo));
      dispatch(userInfoStatus("true"))
      
    } else {
      dispatch(submitBookingSummery(bookingSummerySubmitData));
    }
  };

  // Address info submit........
  useEffect(() => {
    if (userInfo.userInfoStatus === "true" && !isAddressSubmitted) {
      const AddressInfoForSubmit = {
        ...bookingInfo.serviceAddress,
        country: "Australia",
        user_id: userInfo?.userInfo?.id,
      };
      dispatch(SubmitAddressInfo(AddressInfoForSubmit));
      setIsAddressSubmitted(true); 
      dispatch(userInfoStatus(""))
      dispatch(SubmitAddressInfoStatus("true"))
    }
  }, [userInfo, bookingInfo.serviceAddress, isAddressSubmitted, dispatch]);

  // get user .......
  useEffect(() => {
    if (addressInfo.SubmitAddressInfoStatus === "true" && !isUserGet) {
      const CustomFormData = {
        email: bookingInfo?.contactInformationForBooking?.email,
      };

      dispatch(getUser(CustomFormData));
      setIsUserGet(true);
      dispatch(SubmitAddressInfoStatus(""))
      
    }
  }, [addressInfo, bookingInfo?.contactInformationForBooking, isUserGet]);

  // customer create.....
  useEffect(() => {
    if (addressInfo.SubmitAddressInfoStatus === "true" && !isCustomerCreated && !user?.[0]?.customer?.id) {
      const CustomerFormData = {
        address_id: addressInfo?.address?.[0]?.id,
        user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id
          ? bookingInfo?.otpVerifyData?.[0]?.data?.id
          : userInfo?.userInfo?.id,
        type: bookingInfo?.serviceLocationType === "Home" ? 0 : 1,
        status: 1,
        newsletter_subscription: 1,
      };

      dispatch(createCustomer(CustomerFormData));
      setIsCustomerCreated(true);
      dispatch(SubmitAddressInfoStatus(""))
    }
  }, [
    addressInfo,
    addressInfo?.address?.[0]?.id,
    bookingInfo?.otpVerifyData,
    userInfo?.userInfo?.id,
    user,
    isCustomerCreated,
    dispatch,
  ]);

  //  submit booking summery.......
  useEffect(() => {
    if (addressInfo.SubmitAddressInfoStatus === "true" && !isBookingSubmitted) {
      dispatch(submitBookingSummery(bookingSummerySubmitData));
      setIsBookingSubmitted(true);
      dispatch(contactInformationForBookingNestStep(""));
      dispatch(bookingSummerySaveAndContinue("next"));
    }
  }, [addressInfo, bookingSummerySubmitData, isBookingSubmitted, dispatch]);

  
  return (
    <>
      <div className="service_booking_summery_section mt-10 ">
        <div className="container mx-auto text-deepGrayColor">
          <h1 className="text-3xl font-semibold text-center">
            Service Booking Summery{" "}
          </h1>
          <div className="w-[60%] mx-auto border p-10 rounded-lg mt-5">
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Service Name:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.serviceName?.service_name}</span>{" "}
                <button
                  onClick={BookingSummeryEdit}
                  className="justify-items-end"
                >
                  <LuPenSquare />
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Platform:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.operatingSystem?.platform}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Note:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.descriptionNote?.note}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <hr className="mb-4" />
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Requires for:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.serviceLocationType}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Delivery Type:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.serviceType}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Parking Type:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.parkingOption}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>

            <hr className="mb-4" />
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Name:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.contactInformationForBooking?.fullName}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            {bookingInfo?.serviceLocationType === "Business" && <li className="flex list-disc mb-3">
              <b className="w-[40%]">Business Name:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.contactInformationForBooking?.businessName}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>}
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Email:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>{bookingInfo?.contactInformationForBooking?.email}</span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Phone:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.contactInformationForBooking?.phoneNumber}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <hr className="mb-4" />
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Address:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.serviceAddress?.state},{" "}
                  {bookingInfo?.serviceAddress?.suburb},{" "}
                  {bookingInfo?.serviceAddress?.street},{" "}
                  {bookingInfo?.serviceAddress?.post_code},{" "}
                  {!bookingInfo?.serviceAddress?.subpremise == null
                    ? bookingInfo?.serviceAddress?.subpremise
                    : ""}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Booking Schedule:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.choosePreferredDateAndTime?.booking_schedule},{" "}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
            <li className="flex list-disc mb-3">
              <b className="w-[40%]">Booking Duration:</b>
              <div className="w-[100%] flex justify-between gap-2">
                <span>
                  {bookingInfo?.choosePreferredDateAndTime?.booking_duration},{" "}
                </span>{" "}
                <button className="justify-items-end">
                  {/* <LuPenSquare /> */}
                </button>
              </div>
            </li>
          </div>

          <div className="w-[60%] mx-auto">
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={PrevButtonHandler}
                className="border border-primaryColor text-primaryColor py-2 px-6 rounded-md"
              >
                Prev
              </button>
              <button
                type="submit"
                onClick={bookingSummerySaveAndSubmitHandler}
                className="bg-grayColor hover:bg-primaryColor transition duration-500 text-white py-2 px-6 rounded-md"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceBookingSummery;
