"use client";
import React, { useState } from "react";
import "../ServiceType.css";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AddressEditAddModal from "./AddressEditAddModal";

const AddressForm: React.FC = () => {
  const [isBillingSame, setIsBillingSame] = useState(false);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  // const [address, setAddress] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  const parkingOptions = [
    "No Parking",
    "Driveway",
    "Street Paid",
    "Street Unpaid",
  ];

  const handleParkingSelect = (option: string) => {
    setSelectedParking(option);
  };

  // console.log(selectedParking)

  const handleAddAddress = () => {
    // if (address.trim()) {
    //   alert(`Address added: ${address}`);
    //   setAddress("");
    // }
  };

  return (
    <div className="address-form mt-4">
      {/* Toggle Switch */}
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
      {/* Address Input */}
      {isBillingSame ? (
        ""
      ) : (
        <div className="address-input mb-6">
          {/* <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Please enter an billing address"
          /> */}
          <button onClick={open} className="add-button">
            Add Address
          </button>
        </div>
      )}
      {/* Parking Options */}
      <span>Please choose the parking option available at your location</span>
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

      <div className="flex justify-between mt-5">
        <button className="border border-primaryColor text-primaryColor py-[7px] px-[30px] rounded-md ">
          Prev
        </button>
        <button className="bg-grayColor hover:bg-primaryColor transition-[.5s] text-white py-[7px] px-[30px] rounded-md ">
          Next
        </button>
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
  );
};

export default AddressForm;
