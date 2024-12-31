import React, { useState } from "react";

const CustomCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      {/* Hidden Native Checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="hidden"
      />
      {/* Custom Checkbox */}
      <div
        className={`w-6 h-6 rounded border-2 ${
          isChecked ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
        } flex items-center justify-center transition-colors`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {/* Label Text (Optional) */}
      <span className="ml-2 text-gray-700">Agree to terms</span>
    </label>
  );
};

export default CustomCheckbox;
