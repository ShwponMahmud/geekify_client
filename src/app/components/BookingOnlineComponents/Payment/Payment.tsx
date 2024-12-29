import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { ToastContainer, toast } from "react-toastify";
import {
  CardTokenCreate,
  CreateAppointments,
  CreateAppointmentsCharge,
  CreateCardPayments,
  CreatePayments,
  createTokenFormData,
  GetAfterPaySurcharge,
  GetCardSurcharge,
  PaymentsCreateByToken,
} from "@/app/rtk-state/reducers/paymentSlice";
import {
  formatDate,
  formatTime,
  formatTimeInterval,
} from "../ServiceBookingSummery/ServiceBookingSummery";

interface CardDetails {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

export default function Payment() {
  const dispatch = useAppDispatch();
  const paymentInfo = useAppSelector((state) => state?.payment);
  const bookingInfo = useAppSelector((state) => state?.booking);
  const userInfo = useAppSelector((state) => state?.userInfoAfterSubmit);
  const users = useAppSelector((state) => state?.users);
  const customer = useAppSelector((state) => state?.customer.customer);
  const address = useAppSelector((state) => state?.addresses?.address);
  const appointmentResData = useAppSelector(
    (state) => state?.payment?.createAppointmentsResData
  );

  const [isCouponChecked, setIsCouponChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("cardPayment");
  const [cardTokenCreateFormData, setCardTokenCreateFormData] =
    useState<CardDetails>({
      cardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
    });

  const handlePaymentMethodChange = (method: any) => {
    setSelectedPaymentMethod(method);
  };

  const handleApplyCouponCheckboxChange = () => {
    setIsCouponChecked(!isCouponChecked);
  };

  const handleTermsConditionCheckboxChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setCardTokenCreateFormData((prevDetails) => {
      if (id === "expiryDate") {
        return {
          ...prevDetails,
          [id]: formatExpiryDate(value),
        };
      }
      return {
        ...prevDetails,
        [id]: value,
      };
    });
  };

  const formatExpiryDate = (inputValue: string) => {
    // Remove non-numeric characters
    const sanitizedValue = inputValue.replace(/\D/g, "");

    // Format as MM/YY
    if (sanitizedValue.length >= 3) {
      return sanitizedValue.slice(0, 2) + "/" + sanitizedValue.slice(2, 4);
    }
    return sanitizedValue;
  };

  const cardFormData = {
    card_name: cardTokenCreateFormData.cardHolderName,
    card_number: cardTokenCreateFormData.cardNumber,
    card_expire_month: cardTokenCreateFormData.expiryDate.split("/")[0],
    card_expire_year: cardTokenCreateFormData.expiryDate.split("/")[1],
    card_cvc: cardTokenCreateFormData.cvv,
  };

  const PayNowHandler = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(CardTokenCreate(cardFormData));
  };

  const notify = () =>
    toast.error(paymentInfo?.cardToken?.[0]?.message, {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    if (paymentInfo?.status === "success") {
      notify();
    }
  }, [paymentInfo]);

  const surchargeDetail =
    paymentInfo?.cardSurcharge[0]?.payment_card_surcharge?.value?.details.find(
      (i: any) =>
        i.name.toLowerCase() == paymentInfo?.cardToken?.card?.type.toLowerCase()
    );
  const surchargeRate = surchargeDetail ? parseFloat(surchargeDetail.rate) : 0;
  const surchargeAmount =
    surchargeRate > 0 &&
    (bookingInfo?.bookingSummerySubmitResData?.grand_total || 0) /
      surchargeRate;
  const totalAmount =
    surchargeAmount + bookingInfo?.bookingSummerySubmitResData?.grand_total ||
    0;

  //
  const paymentsCreateByTokenData = {
    amount: totalAmount,
    reference: "Online Appointment Form",
    description: `${cardTokenCreateFormData?.cardHolderName} paid ${totalAmount} from online appointment form`,
    currency: "AUD",
    card_token: paymentInfo?.cardToken?.id,
  };

  useEffect(() => {
    if (paymentInfo?.cardToken?.id) {
      dispatch(PaymentsCreateByToken(paymentsCreateByTokenData));
    }
  }, [paymentInfo?.cardToken?.id]);

  // Create Payments..............
  const CreatePaymentFormData = {
    reference: paymentInfo?.PaymentsCreateByTokenResData?.id,
    panel: 1,
    type: 1,
  };

  useEffect(() => {
    if (paymentInfo?.PaymentsCreateByTokenResData?.id) {
      dispatch(CreatePayments(CreatePaymentFormData));
    }
  }, [paymentInfo?.PaymentsCreateByTokenResData?.id]);

  // Create Card Payments..............
  const CreateCardPaymentFormData = {
    payment_id: paymentInfo?.createPaymentResData?.id,
    paid_by: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    card_type: paymentInfo?.cardToken?.card?.type,
    amount: bookingInfo?.bookingSummerySubmitResData?.grand_total,
    card_surcharge: surchargeAmount,
    payment_gateway: paymentInfo?.PaymentsCreateByTokenResData?.payment_gateway,
    payment_gateway_id: paymentInfo?.PaymentsCreateByTokenResData?.id,
    status: 1,
  };

  useEffect(() => {
    if (paymentInfo?.createPaymentResData?.id) {
      dispatch(CreateCardPayments(CreateCardPaymentFormData));
    }
  }, [paymentInfo?.createPaymentResData?.id]);

  // Create Appointments.....................
  const CreateAppointmentsFormData = {
    customer_id: customer?.id,
    service_id: 1,
    address_id: address?.[0]?.id,
    billing_address_id: address?.[0]?.id,
    platform: 1,
    type: 0,
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    length: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    status: 0,
    parking: 1,
    preference: 0,
  };

  useEffect(() => {
    if (paymentInfo?.createCardPaymentsResData?.status) {
      dispatch(CreateAppointments(CreateAppointmentsFormData));
    }
  }, [paymentInfo?.createCardPaymentsResData?.status]);



  // Create Appointments Charge.......
  const charges = [];
  if (bookingInfo?.bookingSummerySubmitResData?.gst_charge?.applied_status) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount,
      type: 3,
      name: "GST",
    });
  }

  if (
    bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status
  ) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
      type: 2,
      name: "Coupon Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.applied_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.applied_discount?.amount,
      type: 2,
      name: "Applied Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
          ?.amount,
      type: 2,
      name: "Credited Payment Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.parking_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.parking_discount?.amount,
      type: 2,
      name: "Parking Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.amount,
      type: 2,
      name: "Loyalty Discount",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
          ?.amount,
      type: 2,
      name: "Online Appointment Discount",
    });
  }

  if (
    bookingInfo?.bookingSummerySubmitResData?.distance_surcharge
      ?.applied_status &&
    bookingInfo?.bookingSummerySubmitResData?.distance_surcharge?.amount > 0
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.distance_surcharge?.amount,
      type: 1,
      name: "Distance Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.holiday_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.holiday_surcharge?.amount,
      type: 1,
      name: "Holiday Surcharge",
    });
  }
  if (bookingInfo?.bookingSummerySubmitResData?.fuel_levy?.applied_status) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.fuel_levy?.amount,
      type: 1,
      name: "Fuel Levy Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.city_area_surcharge
      ?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.city_area_surcharge?.amount,
      type: 1,
      name: "City Area Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.same_day_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.same_day_surcharge?.amount,
      type: 1,
      name: "Same Day Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.timebase_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.timebase_surcharge?.amount,
      type: 1,
      name: "Timebase Surcharge",
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.weekend_surcharge?.applied_status
  ) {
    charges.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.weekend_surcharge?.amount,
      type: 1,
      name: "Weekend Surcharge",
    });
  }

  if (bookingInfo?.bookingSummerySubmitResData?.service_price) {
    charges.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.service_price,
      type: 0,
      name: "Service Charge",
    });
  }

  const CreateAppointmentsChargeFormData = {
    appointment_id: appointmentResData?.id,
    charges: charges,
  };


  useEffect(() => {
    if (appointmentResData?.status) {
      dispatch(CreateAppointmentsCharge(CreateAppointmentsChargeFormData));
    }
  }, [appointmentResData?.status]);


  useEffect(() => {CreateAppointmentNotes}, [])



  return (
    <>
      <div className="payment_section">
        <div className="text-[14px] mx-auto">
          <div className="payment w-[50%] mx-auto mt-5">
            {/* Apply Coupon */}
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
                      checked={selectedPaymentMethod === "cardPayment"}
                      onChange={() => handlePaymentMethodChange("cardPayment")}
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
                      checked={selectedPaymentMethod === "afterPay"}
                      onChange={() => handlePaymentMethodChange("afterPay")}
                    />
                    <label htmlFor="afterPay" className="text-gray-700">
                      Afterpay
                    </label>
                  </div>
                </div>

                {/* Card Details Section */}
                {selectedPaymentMethod === "cardPayment" && (
                  <div className="bg-blue-50 p-4 rounded-md space-y-4 mt-5 text-[14px]">
                    <div>
                      <label htmlFor="cardNumber" className="text-gray-700">
                        Card number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="Enter your card number"
                        className="w-full p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
                        value={cardTokenCreateFormData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[50%]">
                        <label
                          htmlFor="cardHolderName"
                          className="text-gray-700"
                        >
                          Card holder name
                        </label>
                        <input
                          type="text"
                          id="cardHolderName"
                          placeholder="Full name as displayed on card"
                          className="w-[100%] text-[14px] p-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
                          value={cardTokenCreateFormData.cardHolderName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="w-[25%]">
                        <label htmlFor="expiryDate" className="text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          placeholder="MM/YY"
                          className="p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500 "
                          value={cardTokenCreateFormData.expiryDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="w-[25%]">
                        <label htmlFor="cvv" className="text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="CVV"
                          className="p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
                          value={cardTokenCreateFormData.cvv}
                          onChange={handleInputChange}
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
              {isTermsChecked ? (
                <button
                  onClick={PayNowHandler}
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                >
                  Pay Now
                </button>
              ) : (
                <button
                  className="bg-slate-500 text-white px-6 py-2 rounded-md hover:bg-slate-600"
                  disabled
                >
                  Pay Now
                </button>
              )}
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import "./Payment.css";
// import { useAppDispatch } from "@/app/rtk-state/hooks";
// import {
//   CardTokenCreate,
//   createTokenFormData,
// } from "@/app/rtk-state/reducers/paymentSlice";

// interface CardDetails {
//   cardNumber: string;
//   cardHolderName: string;
//   expiryDate: string;
//   cvv: string;
// }

// export default function Payment() {
//   const dispatch = useAppDispatch();
//   const [isCouponChecked, setIsCouponChecked] = useState(false);
//   const [isTermsChecked, setIsTermsChecked] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cardPayment");
//   const [cardTokenCreateFormData, setCardTokenCreateFormData] =
//     useState<CardDetails>({
//       cardNumber: "",
//       cardHolderName: "",
//       expiryDate: "",
//       cvv: "",
//     });

//   const handlePaymentMethodChange = (method: any) => {
//     setSelectedPaymentMethod(method);
//   };

//   const handleApplyCouponCheckboxChange = () => {
//     setIsCouponChecked(!isCouponChecked);
//   };

//   const handleTermsConditionCheckboxChange = () => {
//     setIsTermsChecked(!isTermsChecked);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { id, value } = e.target;
//     setCardTokenCreateFormData((prevDetails) => ({
//       ...prevDetails,
//       [id]: value,
//     }));
//   };

//   const formatExpiryDate = (inputValue: string) => {
//     // Remove non-numeric characters
//     const sanitizedValue = inputValue.replace(/\D/g, "");

//     // Format as MM/YY
//     if (sanitizedValue.length >= 3) {
//       return sanitizedValue.slice(0, 2) + "/" + sanitizedValue.slice(2, 4);
//     }
//     return sanitizedValue;
//   };

//   const cardFormData ={
//     card_name: "",
//       card_number: "",
//       card_expire_month: "",
//       card_expire_year: "",
//       card_cvv: "",
//   };

//   const PayNowHandler = (e: React.FormEvent): void => {
//     e.preventDefault();
//     dispatch(CardTokenCreate(cardFormData));

//     console.log(cardTokenCreateFormData)
//   };

//   return (
//     <>
//       <div className="payment_section">
//         <div className="text-[14px] mx-auto">
//           <div className="payment w-[50%] mx-auto mt-5">
//             {/* Apply Coupon */}
//             <div className="apply_coupon_container mt-10">
//               <div className="flex gap-2 text-[14px] font-semibold">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4 mt-1 checkbox-orange text-white"
//                   onChange={handleApplyCouponCheckboxChange}
//                 />
//                 <label htmlFor="">Apply Coupon</label>
//               </div>
//               {isCouponChecked && (
//                 <form action="" className="flex">
//                   <input
//                     type="text"
//                     placeholder="Enter a Coupon Code"
//                     className="border p-[10px] w-[100%] text-[14px] mt-4 rounded-md"
//                   />
//                   <button className="bg-primaryColor text-white rounded-md py-[10px] px-[30px] mt-4 ml-2">
//                     Apply
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Terms and Conditions */}
//             <div className="flex items-center gap-2 mt-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="w-4 h-4 accent-orange-500"
//                 onChange={handleTermsConditionCheckboxChange}
//               />
//               <label htmlFor="terms" className="text-gray-700">
//                 I agree with{" "}
//                 <span className="text-orange-500 font-semibold">
//                   Terms & Conditions
//                 </span>
//               </label>
//             </div>

//             {isTermsChecked && (
//               <>
//                 {/* Payment Methods */}
//                 <div>
//                   <div className="flex items-center gap-2 mt-5">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       id="cardPayment"
//                       className="w-4 h-4 accent-orange-500"
//                       checked={selectedPaymentMethod === "cardPayment"}
//                       onChange={() => handlePaymentMethodChange("cardPayment")}
//                     />
//                     <label htmlFor="cardPayment" className="text-gray-700">
//                       Card (Visa/Master/Amex)
//                     </label>
//                   </div>
//                   <div className="flex items-center gap-2 mt-2">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       id="afterPay"
//                       className="w-4 h-4 accent-orange-500"
//                       checked={selectedPaymentMethod === "afterPay"}
//                       onChange={() => handlePaymentMethodChange("afterPay")}
//                     />
//                     <label htmlFor="afterPay" className="text-gray-700">
//                       Afterpay
//                     </label>
//                   </div>
//                 </div>

//                 {/* Card Details Section */}
//                 {selectedPaymentMethod === "cardPayment" && (
//                   <div className="bg-blue-50 p-4 rounded-md space-y-4 mt-5 text-[14px]">
//                     <div>
//                       <label htmlFor="cardNumber" className="text-gray-700">
//                         Card number
//                       </label>
//                       <input
//                         type="text"
//                         id="cardNumber"
//                         placeholder="Enter your card number"
//                         className="w-full p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
//                         value={cardTokenCreateFormData.cardNumber}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     <div className="flex gap-3">
//                       <div className="w-[50%]">
//                         <label
//                           htmlFor="cardHolderName"
//                           className="text-gray-700"
//                         >
//                           Card holder name
//                         </label>
//                         <input
//                           type="text"
//                           id="cardHolderName"
//                           placeholder="Full name as displayed on card"
//                           className="w-[100%] text-[14px] p-2 border border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
//                           value={cardTokenCreateFormData.cardHolderName}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div className="w-[25%]">
//                         <label htmlFor="expiryDate" className="text-gray-700">
//                           Expiry Date
//                         </label>
//                         <input
//                           type=""
//                           id="expiryDate"
//                           placeholder="MM/YY"
//                           className="p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500 "
//                           value={cardTokenCreateFormData.expiryDate}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div className="w-[25%]">
//                         <label htmlFor="cvv" className="text-gray-700">
//                           CVV
//                         </label>
//                         <input
//                           type="text"
//                           id="cvv"
//                           placeholder="CVV"
//                           className="p-2 border text-[14px] border-gray-300 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-orange-500"
//                           value={cardTokenCreateFormData.cvv}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Buttons */}
//             <div className="flex justify-between mt-5">
//               <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-100">
//                 Prev
//               </button>
//               <button onClick={PayNowHandler} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
//                 Pay Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
