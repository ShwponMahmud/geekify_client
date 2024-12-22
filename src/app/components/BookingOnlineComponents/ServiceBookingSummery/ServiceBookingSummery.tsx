import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  choosePreferredDateAndTimeNextStep,
  contactInformationForBookingNestStep,
  otpVerifySuccessReStore,
  serviceAddressParkingSubmitAfterNextStep,
  serviceQuestionInfoNextStep,
} from "@/app/rtk-state/reducers/bookingSlice";
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
  }

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
