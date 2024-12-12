"use client"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { SubmitUserInfo } from "@/app/rtk-state/reducers/userInfoSubmitSlice";

export default function UserInfoSubmit() {
  const dispatch = useAppDispatch();

  const [userInfoFormData, setUserInfoFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });



  // user info form data handler...
  const handleUserInfoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserInfoFormData({ ...userInfoFormData, [name]: value });
  };

  // user info submit handler.....
  const userInfoSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(SubmitUserInfo(userInfoFormData)).unwrap();
  }

  
  return (
    <>
      <form className="">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              onChange={handleUserInfoChange}
              name="first_name"
              type="text"
              id="firstName"
              placeholder="Your first name"
              className="mt-1 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              onChange={handleUserInfoChange}
              name="last_name"
              type="text"
              id="lastName"
              placeholder="Your last name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              onChange={handleUserInfoChange}
              name="phone_number"
              type="text"
              id="phoneNumber"
              placeholder="Your phone number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              onChange={handleUserInfoChange}
              name="email"
              type="email"
              id="email"
              placeholder="Your email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </form>
    </>
  );
}
