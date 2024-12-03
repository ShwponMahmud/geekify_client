"use client";
import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const BookingOnlineProgress: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2); 

  return (
    <div className="container mx-auto text-center pt-5">
      <ProgressBar steps={5} currentStep={currentStep} />
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}>
          Previous
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1))}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingOnlineProgress;
