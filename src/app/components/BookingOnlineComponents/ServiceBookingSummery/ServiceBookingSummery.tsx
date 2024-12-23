import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  choosePreferredDateAndTimeNextStep,
  contactInformationForBookingNestStep,
  otpVerifySuccessReStore,
  serviceAddressParkingSubmitAfterNextStep,
  serviceQuestionInfoNextStep,
  submitBookingSummery,
} from "@/app/rtk-state/reducers/bookingSlice";
import { useState } from "react";
import { LuPenSquare } from "react-icons/lu";


function ServiceBookingSummery() {
  const bookingInfo = useAppSelector((state) => state?.booking);
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

  const formatDate = (date: string | undefined) => {
    if (!date) return null;
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };


  // Function to convert time to 24-hour format
  const formatTime = (time: string): string => {
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

  const formatTimeInterval = (interval: string): string => {
    const match = interval.match(/(\d+)\s*Hours?\s*(\d+)?\s*Minutes?/i);
    if (match) {
      const hours = match[1] ? parseInt(match[1], 10) : 0;
      const minutes = match[2] ? parseInt(match[2], 10) : 0;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    }
    throw new Error("Invalid time interval format");
  }

  const bookingSummerySubmitData = {
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
    type: 1,
    street: bookingInfo?.serviceAddress?.street,
    suburb: bookingInfo?.serviceAddress?.suburb,
    post_code: bookingInfo?.serviceAddress?.post_code,
    country: bookingInfo?.serviceAddress?.country,
    state: bookingInfo?.serviceAddress?.state,
    service_id: "1",
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    user_id: bookingInfo?.otpVerifyData?.[0]?.data?.id,
    requested_time_interval:
    formatTimeInterval(bookingInfo?.choosePreferredDateAndTime?.booking_duration),
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

  const bookingSummerySaveAndSubmitHandler = () => {
    dispatch(submitBookingSummery(bookingSummerySubmitData));
  };

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
