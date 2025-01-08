"use client"
import { useAppDispatch } from "@/app/rtk-state/hooks";
import { resetAddressState } from "@/app/rtk-state/reducers/addressSlice";
import { resetBookingState } from "@/app/rtk-state/reducers/bookingSlice";
import { resetCustomerState } from "@/app/rtk-state/reducers/customerSlice";
import { resetPaymentState } from "@/app/rtk-state/reducers/paymentSlice";
import { resetUserInfoState } from "@/app/rtk-state/reducers/userInfoSubmitSlice";
import { resetUserState } from "@/app/rtk-state/reducers/userSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function page() {
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(resetBookingState());
      dispatch(resetPaymentState());
      dispatch(resetAddressState());
      dispatch(resetCustomerState());
      dispatch(resetUserInfoState());
      dispatch(resetUserState());
    }, [resetBookingState, resetPaymentState, resetAddressState, resetCustomerState, resetUserInfoState, resetUserState]);



  return (
    <div className="py-40">
      <div className="flex justify-center items-center text-center py-10">
        <div className="md:w-[550px] md:h-[510px] border border-primaryColor rounded-2xl">
          <div className="md:w-[550px] md:h-[510px] bg-[rgba(255,255,255,0.1)] p-4 md:p-12 rounded-2xl ">
            <div className="flex justify-center items-center mb-8">
              <Image
                src={"/check.png"}
                width={300}
                height={300}
                alt=""
                className="w-[120px] h-[120px] "
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Thank You for <br /> Your Order!{" "}
            </h2>
            <p className="md:text-xl font-semibold py-4">
              Your Appointment is successful, You will get a confirmation mail soon.
            </p>
            <div>
              <Link
                href={"/"}
                className="py-3 px-6 md:text-xl bg-sectionBackgroundColor text-primaryColor rounded-lg mt-4 inline-block hover:bg-primaryColor hover:text-white transition-[.5s]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
