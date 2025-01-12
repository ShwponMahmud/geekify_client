"use client";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import {
  choosePreferredDateAndTimeNextStep,
  contactInformationForBooking,
  contactInformationForBookingNestStep,
  serviceQuestionInfoNextStep,
} from "@/app/rtk-state/reducers/bookingSlice";
import React, { useState, FormEvent } from "react";

const ContactInformation: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    fullName: bookingInfo?.otpVerifyData?.[0]?.data?.full_name
      ? bookingInfo?.otpVerifyData?.[0]?.data?.full_name
      : bookingInfo?.contactInformationForBooking.fullName
      ? bookingInfo?.contactInformationForBooking.fullName
      : "",
    businessName: bookingInfo?.otpVerifyData?.[0]?.data?.businessName
      ? bookingInfo?.otpVerifyData?.[0]?.data?.businessName
      : bookingInfo?.contactInformationForBooking.businessName
      ? bookingInfo?.contactInformationForBooking.businessName
      : "",
    email: bookingInfo?.otpVerifyData?.[0]?.data?.email
      ? bookingInfo?.otpVerifyData?.[0]?.data?.email
      : bookingInfo?.contactInformationForBooking.email
      ? bookingInfo?.contactInformationForBooking.email
      : "",
    phoneNumber: bookingInfo?.otpVerifyData?.[0]?.data?.phone_number
      ? bookingInfo?.otpVerifyData?.[0]?.data?.phone_number
      : bookingInfo?.contactInformationForBooking.phoneNumber
      ? bookingInfo?.contactInformationForBooking.phoneNumber
      : "",
    contactWay: bookingInfo?.otpReqData?.[0]?.data?.email
      ? "Email"
      : bookingInfo?.otpReqData?.[0]?.data?.phone_number
      ? "SMS"
      : bookingInfo?.contactInformationForBooking.contactWay
      ? bookingInfo?.contactInformationForBooking.contactWay
      : "",
  });

  const contactWays: string[] = ["SMS", "Call", "Email"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleContactWaySelection = (way: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      contactWay: way,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(contactInformationForBooking(formValues));
    dispatch(contactInformationForBookingNestStep("next"));
    dispatch(choosePreferredDateAndTimeNextStep(""));
  };

  const PrevButtonHandler = () => {
    dispatch(choosePreferredDateAndTimeNextStep(""));
    dispatch(serviceQuestionInfoNextStep("next"));
  };

  return (
    <div className="contact_information_section">
      <div className="container mx-auto pt-5 mt-5">
        <h1 className="text-3xl font-semibold text-center">
          Contact Information
        </h1>

        <form onSubmit={handleSubmit} className="md:w-[700px] mx-auto mt-10">
          <div>
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {/* Full Name Input */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  className="border w-full p-2 rounded-md"
                  type="text"
                  placeholder="Enter Full Name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {bookingInfo?.serviceLocationType !== "Home" && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium"
                  >
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    className="border w-full p-2 rounded-md"
                    type="text"
                    placeholder="Enter Business Name"
                    value={formValues.businessName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="border w-full p-2 rounded-md"
                  type="email"
                  placeholder="Enter Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="border w-full p-2 rounded-md"
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Contact Method Selection */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                How do we contact you
              </label>
              <div className="grid grid-cols-3 gap-3">
                {contactWays.map((way) => (
                  <button
                    key={way}
                    type="button"
                    className={`p-2 border rounded-md ${
                      formValues.contactWay === way
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleContactWaySelection(way)}
                  >
                    {way}
                  </button>
                ))}
              </div>
            </div>
          </div>

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
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactInformation;
