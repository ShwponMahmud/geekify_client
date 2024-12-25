import React, { useState } from "react";
import "./Payment.css";

export default function Payment() {
  const [isCouponChecked, setIsCouponChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isAfterPayChecked, setIsAfterPayChecked] = useState(false);

  const handleApplyCouponCheckboxChange = () => {
    setIsCouponChecked(!isCouponChecked);
  };
  const handleTermsConditionCheckboxChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };
  const handleCardCheckboxChange = () => {
    setIsCardChecked(!isCardChecked);
  };
  const handleAfterPayCheckboxChange = () => {
    setIsAfterPayChecked(!isAfterPayChecked);
    // setIsCardChecked(!isCardChecked);
  };
  return (
    <>
      <div className="payment_section">
        <div className="text-[14px] mx-auto">
          <div className="payment w-[50%] mx-auto mt-5">
            <div className="apply_coupon_container mt-10">
              <div className="flex gap-2 text-[14px] font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 checkbox-orange text-white"
                  onChange={handleApplyCouponCheckboxChange}
                />
                <label htmlFor="">Apply Coupon</label>
              </div>
              {isCouponChecked && (
                <form action="" className="flex">
                  <input
                    type="text"
                    placeholder="Enter a Coupon Code"
                    className="border p-[10px] w-[100%] text-[14px] mt-4 rounded-md"
                  />
                  <button className="bg-primaryColor text-white rounded-md py-[10px] px-[30px] mt-4 ml-2">
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-orange-500"
                onChange={handleTermsConditionCheckboxChange}
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree with{" "}
                <span className="text-orange-500 font-semibold">
                  Terms & Conditions
                </span>
              </label>
            </div>

            {isTermsChecked && (
              <>
                {/* Payment Methods */}
                <div>
                  <div className="flex items-center gap-2 mt-5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="cardPayment"
                      className="w-4 h-4 accent-orange-500"
                      onChange={handleCardCheckboxChange}
                    />
                    <label htmlFor="cardPayment" className="text-gray-700">
                      Card (Visa/Master/Amex)
                    </label>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="afterPay"
                      className="w-4 h-4 accent-orange-500"
                      onChange={handleAfterPayCheckboxChange}
                    />
                    <label htmlFor="afterPay" className="text-gray-700">
                      Afterpay
                    </label>
                  </div>
                </div>

                {/* Card Details Section */}
                {isCardChecked && (
                  <div className="bg-blue-50 p-4 rounded-md space-y-4 mt-5 text-[14px]">
                    <div>
                      <label htmlFor="cardPayment" className="text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your card number"
                        className="w-full p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring focus:ring-orange-500"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="w-[50%]">
                        <label htmlFor="cardPayment" className="text-gray-700">
                          Card holder name
                        </label>
                        <input
                          type="text"
                          placeholder="Full name as displayed on card"
                          className="w-[100%] text-[14px] p-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring focus:ring-orange-500"
                        />
                      </div>
                      <div className="w-[25%]">
                        <label htmlFor="cardPayment" className="text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className=" p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring focus:ring-orange-500"
                        />
                      </div>
                      <div className="w-[25%]">
                        <label htmlFor="cardPayment" className="text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="CVV"
                          className=" p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-5">
              <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-100">
                Prev
              </button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                Pay Now
              </button>
            </div>
          </div>
          <div className="card_after_pay_container"></div>
        </div>
      </div>
    </>
  );
}
