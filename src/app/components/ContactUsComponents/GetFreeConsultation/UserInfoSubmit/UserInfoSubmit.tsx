import React from "react";

export default function UserInfoSubmit() {
  return (
    <>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
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
              type="text"
              id="lastName"
              placeholder="Your last name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
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
