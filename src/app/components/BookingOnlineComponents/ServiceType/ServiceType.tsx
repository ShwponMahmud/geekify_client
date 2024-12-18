"use client";
import React, { useState } from "react";
import "./ServiceType.css";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AddressEditAddModal from "./Address/AddressEditAddModal";
import {
  parkingOptionSelect,
  serviceAddressSelect,
  serviceTypeSelect,
} from "@/app/rtk-state/reducers/bookingSlice";

type Address = {
  street: string;
  suburb: string;
  state: string;
  post_code: string;
  subpremise: string | null;
};

const SwitchSelect: React.FC = () => {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const [serviceTypeSelectedOption, setServiceTypeSelectedOption] =
    useState<string>("Onsite");
  const [addNewAddressView, setAddNewAddressView] = useState<boolean>(false);
  const [isBillingSame, setIsBillingSame] = useState(false);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [selectedServiceAddress, setSelectedServiceAddress] = useState<any>({
    street: `${bookingInfo?.otpVerifyData[0]?.data?.customer?.address?.street}`,
    suburb: `${bookingInfo?.otpVerifyData[0]?.data?.customer?.address?.suburb}`,
    state: `${bookingInfo?.otpVerifyData[0]?.data?.customer?.address?.state}`,
    post_code: `${bookingInfo?.otpVerifyData[0]?.data?.customer?.address?.post_code}`,
    subpremise: `${bookingInfo?.otpVerifyData[0]?.data?.customer?.address?.subpremise}`,
  });
  const dispatch = useAppDispatch();

  const parkingOptions = [
    "No Parking",
    "Driveway",
    "Street Paid",
    "Street Unpaid",
  ];

  const handleParkingSelect = (option: string) => {
    setSelectedParking(option);
  };

  let [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: string) => {
    setServiceTypeSelectedOption(value);
  };

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  const addNewAddressViewHandler = () => {
    setAddNewAddressView(true);
  };
  const selectPrevAddressViewHandler = () => {
    setAddNewAddressView(false);
  };

  

  const handleSelectedServiceAddressChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;

    // Parse the selected value back into an Address object
    const [street, suburb, state, post_code, subpremise] = selectedValue.split(",").map((val) => val.trim());

    setSelectedServiceAddress({
      street,
      suburb,
      state,
      post_code,
      subpremise: subpremise || "", // Handle optional subpremise
    });
  };

  const SaveAddress = () => {
    dispatch(serviceAddressSelect(selectedServiceAddress));
  };

  const submitAddressInfoAndNextStepHandler = () => {
    dispatch(serviceTypeSelect(serviceTypeSelectedOption));

    dispatch(parkingOptionSelect(selectedParking));
  };

  return (
    <div className="service_type_section">
      <div className="container mx-auto justify-items-center py-10">
        <div className="w-[60%] ">
          <h1 className="text-3xl font-bold mb-5">Address </h1>
          <p>Please choose how you would like us to deliver this service</p>

          <div className="w-[200px] mt-4">
            <div className="switch-wrapper">
              {/* Hidden select for accessibility */}
              <select
                id="work-mode"
                className="hidden-select"
                value={serviceTypeSelectedOption}
                onChange={(e) => setServiceTypeSelectedOption(e.target.value)}
              >
                <option value="Onsite">On-site</option>
                <option value="Remote">Remote</option>
              </select>

              {/* Custom Switch */}
              <div className="custom-switch">
                <div
                  className={`switch-option ${
                    serviceTypeSelectedOption === "Onsite" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("Onsite")}
                >
                  On-site
                </div>
                <div
                  className={`switch-option ${
                    serviceTypeSelectedOption === "Remote" ? "active" : ""
                  }`}
                  onClick={() => handleOptionClick("Remote")}
                >
                  Remote
                </div>
                <div
                  className="switch-toggle"
                  style={{
                    left:
                      serviceTypeSelectedOption === "Onsite" ? "5px" : "50%",
                  }}
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
          <div className="address-form mt-4">
            <div className="toggle-wrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isBillingSame}
                  onChange={() => setIsBillingSame(!isBillingSame)}
                />
                <span className="slider"></span>
              </label>
              <span>Billing Address is same as my home Address</span>
            </div>
            {isBillingSame ? (
              ""
            ) : (
              <div className="address-input mb-6">
                <button onClick={open} className="add-button">
                  Add Address
                </button>
              </div>
            )}
            <div className="parking_select_section mt-5">
              <span>
                Please choose the parking option available at your location
              </span>
              <div className="parking-options mt-3">
                {parkingOptions.map((option) => (
                  <button
                    key={option}
                    className={`parking-button ${
                      selectedParking === option ? "active" : ""
                    }`}
                    onClick={() => handleParkingSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <button className="border border-primaryColor text-primaryColor py-[7px] px-[30px] rounded-md ">
                Prev
              </button>
              <button
                onClick={submitAddressInfoAndNextStepHandler}
                className="bg-grayColor hover:bg-primaryColor transition-[.5s] text-white py-[7px] px-[30px] rounded-md "
              >
                Next
              </button>
            </div>
          </div>
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
                className="w-full max-w-3xl rounded-xl bg-white border p-5 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <div className="w-full mt-4 flex justify-end">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    close
                  </Button>
                </div>
                {!addNewAddressView == true ? (
                  <DialogTitle as="h3" className="text-base/7 font-bold ">
                    Edit Address
                  </DialogTitle>
                ) : (
                  <DialogTitle as="h3" className="text-base/7 font-bold ">
                    <span>Add New Address Or </span>
                    <button
                      onClick={selectPrevAddressViewHandler}
                      className="text-primaryColor font-semibold"
                    >
                      Select Prev Address
                    </button>
                  </DialogTitle>
                )}
                {!addNewAddressView == true &&
                  bookingInfo?.otpVerifyData[0]?.data?.addresses.length && (
                    <div className="mt-5 mb-10">
                      <div className="flex gap-2 items-center py-3">
                        <span>Select Address or </span>
                        <button
                          onClick={addNewAddressViewHandler}
                          className="text-primaryColor font-semibold"
                        >
                          Add New Address
                        </button>
                      </div>
                      <select
                        onChange={handleSelectedServiceAddressChange}
                        className="text-[14px] border p-2 w-full outline-none rounded-md"
                      >
                        {bookingInfo?.otpVerifyData[0]?.data?.addresses?.map(
                          (address: any, index: number) => (
                            <option
                              key={index}
                              value={`${address?.street}, ${address?.suburb}, ${
                                address?.state
                              }, ${address?.post_code}, ${
                                address?.subpremise == null
                                  ? ""
                                  : address?.subpremise
                              } `}
                            >
                              {`${address?.street}, ${address?.suburb}, ${
                                address?.state
                              }, ${address?.post_code}, ${
                                address?.subpremise == null
                                  ? ""
                                  : address?.subpremise
                              } `}
                            </option>
                          )
                        )}
                      </select>

                      <div className="mt-4">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-primaryColor py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                          onClick={SaveAddress}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  )}
                {addNewAddressView == true && <AddressEditAddModal />}
                
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SwitchSelect;
