"use client";

import React, { useState } from "react";
import "./ServiceForm.css";

const ServiceForm: React.FC = () => {
  const [selectedService, setSelectedService] = useState("Data Recover");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const handleContinue = () => {
    alert("Form submitted!");
  };

  return (
    <div className="service-form ">
      <h2 className="text-3xl font-semibold mt-5 text-deepGrayColor">Tell Us About Your Issue</h2>

      {/* Form Inputs */}
      <div className="form-group text-deepGrayColor">
        <label htmlFor="service">What Service do you want?</label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="Data Recover">Data Recover</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Software Update">Software Update</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="platform">Select your service platform</label>
        <select
          id="platform"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="">Select platform</option>
          <option value="Windows">Windows</option>
          <option value="Mac">Mac</option>
          <option value="Linux">Linux</option>
        </select>
      </div>

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
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default ServiceForm;
