import React, { useState } from "react";
import "../ServiceType.css";

const AddressForm: React.FC = () => {
  const [isBillingSame, setIsBillingSame] = useState(false);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [address, setAddress] = useState("");

  console.log(isBillingSame)

  const parkingOptions = ["No Parking", "Driveway", "Street Paid", "Street Unpaid"];

  const handleParkingSelect = (option: string) => {
    setSelectedParking(option);
  };

  const handleAddAddress = () => {
    if (address.trim()) {
      alert(`Address added: ${address}`);
      setAddress("");
    }
  };

  return (
    <div className="address-form mt-5">
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

      {/* Parking Options */}
      <div className="parking-options">
        {parkingOptions.map((option) => (
          <button
            key={option}
            className={`parking-button ${selectedParking === option ? "active" : ""}`}
            onClick={() => handleParkingSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Address Input */}
     {isBillingSame? "" : <div className="address-input">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Please enter an billing address"
        />
        <button onClick={handleAddAddress} className="add-button">
          Add
        </button>
      </div>}


      <button className="bg-primaryColor text-white py-[10px] px-[40px] rounded-md mt-5">Next</button>
    </div>
  );
};

export default AddressForm;
