"use client";
import React, { useState } from "react";
import "./ServiceType.css";
import AddressForm from "./Address/Address";

const SwitchSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Onsite");

  console.log(selectedOption);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="service_type_section">
      <div className="container mx-auto justify-items-center mt-10">
        <h1 className="text-3xl font-bold mb-10">Service Type</h1>
        <p>Please choose your preferred service type</p>

        <div className="w-[200px] mt-5">
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
            <ul className="list-disc px-5 text-deepGrayColor">
              <li>
                <b>Street:</b>
              </li>
              <li>
                <b>City:</b>
              </li>
              <li>
                <b>State/Area/Province:</b>
              </li>
              <li>
                <b>Phone Number:</b>
              </li>
            </ul>
            <div>
              <button
                className="bg-primaryColor border border-primaryColor text-white rounded-md py-[7px] px-[10px] flex content-center text-[15px] hover:bg-white hover:text-primaryColor hover:border-primaryColor transition-[.5s]
              "
              >
                Edit Address
              </button>
            </div>
          </div>
        </div>



        <AddressForm/>
      </div>
    </div>
  );
};

export default SwitchSelect;
