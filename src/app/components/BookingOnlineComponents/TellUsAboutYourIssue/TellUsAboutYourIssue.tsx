"use client";

import React, { useState } from "react";
import "./ServiceForm.css";
import { serviceSelectAndQuestions } from "@/app/rtk-state/reducers/bookingSlice";
import { useAppDispatch } from "@/app/rtk-state/hooks";

const ServiceForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const dispatch = useAppDispatch()

  // const questionsHandler = () => {
  if (selectedService == "Computer- installation configuring and fixing") {
  }
  // }

  const submitServiceInfoAndNextStepHandler = () => {
    dispatch(serviceSelectAndQuestions("next"))
  };

  return (
    <div className="service-form ">
      <h2 className="text-3xl font-semibold mt-10 text-deepGrayColor">
        Tell Us About Your Issue
      </h2>

      {/* Form Inputs */}
      <div className="form-group text-deepGrayColor">
        <label htmlFor="service">What Service do you want?</label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="" disabled>
            Select Service
          </option>
          <option
            className="block px-4 py-2 hover:bg-primaryColor hover:text-white transition-all duration-300 group"
            value="Computer- installation configuring and fixing"
          >
            Computer- installation configuring and fixing
          </option>
          <option value="Computer troubleshooting">
            Computer troubleshooting
          </option>
          <option value="New computer setup">New computer setup</option>
          <option value="Data Backup or transfer">
            Data Backup or transfer
          </option>
          <option value="Data recovery">Data recovery</option>
          <option value="Virus and spy removal">Virus and spy removal</option>
          <option value="Antivirus installation">Antivirus installation</option>
          <option value="Smartphone device setup">
            Smartphone device setup
          </option>
          <option value="Home network Wi-Fi Setup">
            Home network Wi-Fi Setup
          </option>
          <option value="Email Account setup">Email Account setup</option>
        </select>
      </div>

      {selectedService == "Computer- installation configuring and fixing" ||
      selectedService == "Computer troubleshooting" ||
      selectedService == "New computer setup" ||
      selectedService == "Virus and spy removal" ||
      selectedService == "Antivirus installation" ? (
        <div className="form-group">
          <label htmlFor="platform">What is the OS?</label>
          <select
            id="platform"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled>
              Select Operating System
            </option>
            <option value="Windows">Windows</option>
            <option value="Mac">Mac</option>
            <option value="Linux">Linux</option>
          </select>
        </div>
      ) : (
        ""
      )}

      {selectedService == "New computer setup" && (
        <div className="form-group">
          <label htmlFor="necessary cables">
            Do you have all the necessary cables?
          </label>
          <select
            id="necessaryCables"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">Yes</option>
            <option value="Windows">No</option>
          </select>
        </div>
      )}

      {selectedService == "Data Backup or transfer" && (
        <div className="form-group">
          <label htmlFor="data backedup">
            Where is the data backedup on? (External HD, Another computer,
            Cloud)
          </label>
          <select
            id="dataBackedUp"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="">External HD</option>
            <option value="Windows">Another computer</option>
            <option value="Windows">Cloud</option>
          </select>
        </div>
      )}

      {selectedService == "Data recovery" && (
        <div className="form-group">
          <label htmlFor="Data recovery">
            Where is the data? (External HD, Computer, Phone)
          </label>
          <select
            id="DataRecovery"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="">External HD</option>
            <option value="Windows">Computer</option>
            <option value="Windows">Phone</option>
          </select>
        </div>
      )}
      {selectedService === "Virus and spy removal" ||
      selectedService === "Antivirus installation" ? (
        <div className="form-group">
          <label htmlFor="necessary cables">
            Do you have an existing antivirus? If Yes what is it?
          </label>
          <select
            id="necessaryCables"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="">Yes</option>
            <option value="Windows">No</option>
          </select>
          <input
            type="text"
            placeholder="Existing antivirus name"
            className="mt-5"
          />
        </div>
      ) : (
        ""
      )}
      {selectedService === "Smartphone device setup" && (
        <div className="form-group">
          <label htmlFor="necessary cables">
            What type of phone is it? (Android, IOS, Windows)
          </label>
          <select
            id="necessaryCables"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="">Android</option>
            <option value="Windows">IOS</option>
            <option value="Windows">Windows</option>
          </select>
        </div>
      )}
      {selectedService === "Home network Wi-Fi Setup" && (
        <>
          <div className="form-group">
            <label htmlFor="necessary cables">
              Do you have existing network?
            </label>
            <select
              id="necessaryCables"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="necessary cables">
              Who is your current internet service provider?
            </label>
            <select
              id="necessaryCables"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">OPTUS</option>
              <option value="No">TELSTRA</option>
              <option value="No">TPG</option>
              <option value="No">VODAPHONE</option>
              <option value="No">IINET</option>
              <option value="No">OTHER</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="necessary cables">Do you need routers?</label>
            <select
              id="necessaryCables"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </>
      )}
      {selectedService === "Email Account setup" && (
        <>
          <div className="form-group">
            <label htmlFor="necessary cables">
              What is your email address?
            </label>
            <input
              type="text"
              placeholder="Existing antivirus name"
              className=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="necessary cables">
              Do you know the password for it?
            </label>
            <select
              id="necessaryCables"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </>
      )}

      <div className="form-group">
        <label htmlFor="issue">Describe the Issue</label>
        <textarea
          id="issue"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          placeholder="Describe your issue here"
        ></textarea>
      </div>

      {/* Continue Button */}
      <div className="flex justify-between mt-5">
              <button className="border border-primaryColor text-primaryColor py-[7px] px-[30px] rounded-md ">
                Prev
              </button>
              <button
                onClick={submitServiceInfoAndNextStepHandler}
                className="bg-grayColor hover:bg-primaryColor transition-[.5s] text-white py-[7px] px-[30px] rounded-md "
              >
                Next
              </button>
            </div>
    </div>
  );
};

export default ServiceForm;
