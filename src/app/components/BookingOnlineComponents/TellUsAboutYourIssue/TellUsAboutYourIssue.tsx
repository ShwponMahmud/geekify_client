"use client";

import React, { useState } from "react";
import "./ServiceForm.css";
import {
  currentInternetProvider,
  descriptionNote,
  doYouKnowPasswordForIt,
  existingAntivirusName,
  haveExistingAntivirus,
  haveExistingNetwork,
  necessaryCables,
  needRouters,
  operatingSystem,
  otherInternetProvider,
  otpVerifySuccessReStore,
  serviceAddressParkingSubmitAfterNextStep,
  serviceName,
  serviceQuestionInfoNextStep,
  whatIsYourEmailAddress,
  whatTypeOfPhoneIsIt,
  whereIsData,
  whereIsDataBackedUpOn,
} from "@/app/rtk-state/reducers/bookingSlice";
import { useAppDispatch } from "@/app/rtk-state/hooks";

const ServiceForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [necessaryCablesSelect, setNecessaryCables] = useState("");
  const [whereDataBackedUp, setWhereDataBackedUpOn] = useState("");
  const [whereIsTheData, setWhereIsTheData] = useState("");
  const [haveExistingAntivirusSelect, setHaveExistingAntivirus] = useState("");
  const [antivirusName, setAntivirusName] = useState("");
  const [whatTypeOfPhoneIsItSelect, setWhatTypeOfPhoneIsItSelect] = useState("");
  const [haveExistingNetworkSelect, setHaveExistingNetworkSelect] = useState("");
  const [currentInternetProviderSelect, setCurrentInternetProviderSelect] = useState("");
  const [otherInternetProviderSelect, setOtherInternetProviderSelect] = useState("");
  const [needRoutersSelect, setNeedRoutersSelect] = useState("");
  const [whatsYourEmailAddress, setWhatIsYourEmailAddress] = useState("");
  const [doYouKnowPasswordForItSelect, setDoYouKnowPasswordForItSelect] = useState("");

  const dispatch = useAppDispatch();

 

  const ServiceName: any = {
    service_name: selectedService,
  };
  const platform: any = {
    platform: selectedPlatform,
  };
  const note: any = {
    note: issueDescription,
  };
  const NecessaryCables: any = {
    have_necessary_cables: necessaryCablesSelect,
  };
  const WhereIsDataBackedUpOn: any = {
    where_is_data_backed_up_on: whereDataBackedUp,
  };
  const WhereIsData: any = {
    where_is_the_data: whereIsTheData,
  };
  const HaveExistingAntivirus: any = {
    have_existing_antivirus: haveExistingAntivirusSelect,
  };
  const AntivirusName: any = {
    antivirus_Name: antivirusName,
  };
  const WhatTypeOfPhoneIsIt: any = {
    what_type_of_phone_is_it: whatTypeOfPhoneIsItSelect,
  };
  const HaveExistingNetworkSelect: any = {
    have_existing_network: haveExistingNetworkSelect,
  };
  const CurrentInternetProviderSelect: any = {
    current_internet_provider: currentInternetProviderSelect,
  };
  const OtherInternetProviderSelect: any = {
    other_internet_provider: otherInternetProviderSelect,
  };
  const NeedRoutersSelect: any = {
    need_routers: needRoutersSelect,
  };
  const WhatIsYourEmailAddress: any = {
    what_is_your_email_address: whatsYourEmailAddress,
  };
  const DoYouKnowPasswordForItSelect: any = {
    do_you_know_password_for_it: doYouKnowPasswordForItSelect,
  };

  const submitServiceInfoAndNextStepHandler = () => {
    dispatch(serviceName(ServiceName));
    dispatch(operatingSystem(platform));
    dispatch(descriptionNote(note));
    dispatch(necessaryCables(NecessaryCables));
    dispatch(whereIsDataBackedUpOn(WhereIsDataBackedUpOn));
    dispatch(whereIsData(WhereIsData));
    dispatch(haveExistingAntivirus(HaveExistingAntivirus));
    dispatch(existingAntivirusName(AntivirusName));
    dispatch(whatTypeOfPhoneIsIt(WhatTypeOfPhoneIsIt));
    dispatch(haveExistingNetwork(HaveExistingNetworkSelect));
    dispatch(currentInternetProvider(CurrentInternetProviderSelect));
    dispatch(otherInternetProvider(OtherInternetProviderSelect));
    dispatch(needRouters(NeedRoutersSelect));
    dispatch(whatIsYourEmailAddress(WhatIsYourEmailAddress));
    dispatch(doYouKnowPasswordForIt(DoYouKnowPasswordForItSelect));
    dispatch(serviceQuestionInfoNextStep("next"));
    dispatch(serviceAddressParkingSubmitAfterNextStep(""));
  };

  const PrevButtonHandler = () => {
    dispatch(serviceAddressParkingSubmitAfterNextStep(""));
    dispatch(otpVerifySuccessReStore("success"));
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
          onChange={(e) => {
            setSelectedService(e.target.value)
            setSelectedPlatform("")
            setIssueDescription("")
            setNecessaryCables("")
            setWhereDataBackedUpOn("")
            setWhereIsTheData("")
            setHaveExistingAntivirus("")
            setAntivirusName("")
            setWhatTypeOfPhoneIsItSelect("")
            setHaveExistingNetworkSelect("")
            setCurrentInternetProviderSelect("")
            setOtherInternetProviderSelect("")
            setNeedRoutersSelect("")
            setWhatIsYourEmailAddress("")
            setDoYouKnowPasswordForItSelect("")
          }}
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
            value={necessaryCablesSelect}
            onChange={(e) => setNecessaryCables(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
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
            value={whereDataBackedUp}
            onChange={(e) => setWhereDataBackedUpOn(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="External HD">External HD</option>
            <option value="Another computer">Another computer</option>
            <option value="Cloud">Cloud</option>
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
            value={whereIsTheData}
            onChange={(e) => setWhereIsTheData(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="External HD">External HD</option>
            <option value="Computer">Computer</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
      )}
      {selectedService === "Virus and spy removal" ||
      selectedService === "Antivirus installation" ? (
        <div className="form-group">
          <label htmlFor="Antivirus">
            Do you have an existing antivirus? If Yes what is it?
          </label>
          <select
            id="antivirus"
            value={haveExistingAntivirusSelect}
            onChange={(e) => setHaveExistingAntivirus(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {haveExistingAntivirusSelect === "Yes" && (
            <>
              <label htmlFor="Antivirus" className="mt-5">
                Existing antivirus name?
              </label>
              <input
                onChange={(e) => setAntivirusName(e.target.value)}
                type="text"
                placeholder="Existing antivirus name"
              />
            </>
          )}
        </div>
      ) : (
        ""
      )}
      {selectedService === "Smartphone device setup" && (
        <div className="form-group">
          <label htmlFor="smartphone device setup">
            What type of phone is it? (Android, IOS, Windows)
          </label>
          <select
            id="smartPhoneDeviceSetup"
            value={whatTypeOfPhoneIsItSelect}
            onChange={(e) => setWhatTypeOfPhoneIsItSelect(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Android">Android</option>
            <option value="IOS">IOS</option>
            <option value="Windows">Windows</option>
          </select>
        </div>
      )}
      {selectedService === "Home network Wi-Fi Setup" && (
        <>
          <div className="form-group">
            <label htmlFor="network">Do you have existing network?</label>
            <select
              id="networkSetup"
              value={haveExistingNetworkSelect}
              onChange={(e) => setHaveExistingNetworkSelect(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {haveExistingNetworkSelect === "Yes" && (
            <div className="form-group">
              <div>
                <label htmlFor="internet provider">
                  Who is your current internet service provider?
                </label>
                <select
                  id="internetProvider"
                  value={currentInternetProviderSelect}
                  onChange={(e) =>
                    setCurrentInternetProviderSelect(e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="OPTUS">OPTUS</option>
                  <option value="TELSTRA">TELSTRA</option>
                  <option value="TPG">TPG</option>
                  <option value="VODAPHONE">VODAPHONE</option>
                  <option value="IINET">IINET</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>

              {currentInternetProviderSelect === "OTHER" && (
                <div>
                  <label htmlFor="need routers" className="mt-5">
                    Other Provider Name?
                  </label>
                  <input
                    onChange={(e) =>
                      setOtherInternetProviderSelect(e.target.value)
                    }
                    type="text"
                    placeholder="Enter Other Provider"
                  />
                </div>
              )}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="need routers">Do you need routers?</label>
            <select
              id="needRouters"
              value={needRoutersSelect}
              onChange={(e) => setNeedRoutersSelect(e.target.value)}
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
            <label htmlFor="email setup">
              What is your email address?
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className=""
              onChange={(e) => setWhatIsYourEmailAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Do you know the password for it?
            </label>
            <select
              id="password"
              value={doYouKnowPasswordForItSelect}
              onChange={(e) => setDoYouKnowPasswordForItSelect(e.target.value)}
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
        <button onClick={PrevButtonHandler} className="border border-primaryColor text-primaryColor py-[7px] px-[30px] rounded-md ">
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
