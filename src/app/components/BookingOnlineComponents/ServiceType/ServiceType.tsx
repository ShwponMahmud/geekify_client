"use client";
import React, { useState } from "react";
import "./ServiceType.css";
import AddressForm from "./Address/Address";
import { useAppSelector } from "@/app/rtk-state/hooks";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AddressEditAddModal from "./Address/AddressEditAddModal";

const SwitchSelect: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const [selectedOption, setSelectedOption] = useState<string>("Onsite");

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
  };

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  return (
    <div className="service_type_section">
      <div className="container mx-auto justify-items-center py-10">
        <div className="w-[60%] ">
          <h1 className="text-3xl font-bold mb-5">Service Type</h1>
          <p>Please choose your preferred service type</p>

          <div className="w-[200px] mt-4">
            <div className="switch-wrapper">
              {/* Hidden select for accessibility */}
              <select
                id="work-mode"
                className="hidden-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="Onsite">On-site</option>
                <option value="Remote">Remote</option>
              </select>

              {/* Custom Switch */}
              <div className="custom-switch">
                <div
                  className={`switch-option ${
                    selectedOption === "Onsite" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("Onsite")}
                >
                  On-site
                </div>
                <div
                  className={`switch-option ${
                    selectedOption === "Remote" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("Remote")}
                >
                  Remote
                </div>
                <div
                  className="switch-toggle"
                  style={{ left: selectedOption === "Onsite" ? "5px" : "50%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="enter_full_address_section mt-10">
            <p>Enter your full address (Add unit or building number)</p>
            <div className=" flex justify-between border rounded-lg p-[20px] mt-5">
              <div>
                <ul className="list-disc px-5 text-deepGrayColor">
                  <li>
                    <b>Street:</b>{" "}
                    {
                      bookingInfo?.otpVerifyData[0]?.data?.customer?.address
                        ?.street
                    }
                  </li>
                  <li>
                    <b>City: </b>{" "}
                    {
                      bookingInfo?.otpVerifyData[0]?.data?.customer?.address
                        ?.suburb
                    }
                  </li>
                  <li>
                    <b>State/Area/Province:</b>{" "}
                    {
                      bookingInfo?.otpVerifyData[0]?.data?.customer?.address
                        ?.state
                    }
                  </li>
                  <li>
                    <b>Phone Number:</b>{" "}
                    {bookingInfo?.otpVerifyData[0]?.data?.phone_number}
                  </li>
                  <li>
                    <b>Email:</b> {bookingInfo?.otpVerifyData[0]?.data?.email}
                  </li>
                </ul>
                <p className="mt-4">
                  <b>Note:</b> You already have{" "}
                  {bookingInfo?.otpVerifyData[0]?.data?.addresses?.length}{" "}
                  Addresses.
                </p>
              </div>

              <div>
                <button
                  onClick={open}
                  className="bg-primaryColor border border-primaryColor text-white rounded-md py-[7px] px-[10px] flex content-center text-[15px] hover:bg-white hover:text-primaryColor hover:border-primaryColor transition-[.5s]
              "
                >
                  Edit Address
                </button>
              </div>
            </div>
          </div>

          <AddressForm />
        </div>
        <Dialog
          open={isOpen}
          as="div"
          className=" relative z-10 focus:outline-none "
          onClose={close}
        >
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-2xl rounded-xl bg-white border p-5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-base/7 font-bold ">
                  Edit Address
                </DialogTitle>
                {bookingInfo?.otpVerifyData[0]?.data?.addresses.length && (
                  <div className="mt-5 mb-10">
                    <p className="flex gap-2 items-center py-3">
                      Select Address or <button className="border p-2">add new Address</button>
                    </p>

                    {/* <div className="">
                      {bookingInfo?.otpVerifyData[0]?.data?.addresses?.map(
                        (address: any) => (
                          <div className=" text-[14px] border p-2">
                            <li className="list-none">
                              <b>Street: </b> {address?.street}
                            </li>
                            <li className="list-none">
                              <b>City: </b> {address?.suburb}
                            </li>
                            <li className="list-none">
                              <b>State: </b> {address?.state}
                            </li>
                            <li className="list-none">
                              <b>Post Code: </b> {address?.post_code}
                            </li>
                          </div>
                        )
                      )}
                    </div> */}

                    <select className="text-[14px] border p-2 w-full">
                      {bookingInfo?.otpVerifyData[0]?.data?.addresses?.map(
                        (address: any, index: number) => (
                          <option key={index} value={index}>
                            {`${address?.street}, ${address?.suburb}, ${address?.state}, ${address?.post_code}`}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )}
                <AddressEditAddModal />
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SwitchSelect;
