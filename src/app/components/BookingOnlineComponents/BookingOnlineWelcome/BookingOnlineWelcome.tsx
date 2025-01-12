"use client"
import { useAppDispatch } from "@/app/rtk-state/hooks";
import { startBooking } from "@/app/rtk-state/reducers/bookingSlice";
import Image from "next/image";

function BookingOnlineWelcome() {
  const dispatch = useAppDispatch();

  const bookingStartHandler = () => {
    dispatch(startBooking("start"))
  }
  return (
    <>
      <div className="booking_online_welcome">
        <div className="container mx-auto justify-items-center">
          <div className="h-[50vh] grid content-center text-center">
            <div className="justify-items-center">
              <Image
                width={588}
                height={362}
                src="/logos/main-logo.png"
                alt="Geekify logo"
                className="w-[350px] h-[75px] "
              />

              <h1 className="mt-[50px] text-4xl font-semibold text-deepGrayColor">
                Welcome to Geekify!
              </h1>
              <button
                onClick={bookingStartHandler}
                className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[40px] hover:bg-white hover:text-primaryColor transition-[.5s]"
              >
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingOnlineWelcome;
