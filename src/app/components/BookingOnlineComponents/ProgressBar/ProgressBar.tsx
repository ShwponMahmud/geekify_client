import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  steps: number; 
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: steps }, (_, index) => {
        const step = index + 1;
        const isActive = step <= currentStep;

        return (
          <div key={step} className="progress-step">
            <div className={`circle ${isActive ? "active" : ""}`}>{step}</div>
            {step < steps && (
              <div className={`line ${isActive ? "active" : ""}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
