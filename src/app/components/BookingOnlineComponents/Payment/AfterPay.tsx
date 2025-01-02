// import { useAppSelector } from "@/app/rtk-state/hooks";
// import React from "react";

// export default function AfterPay() {
//   const users = useAppSelector((state) => state?.users);
//   const userInfo = useAppSelector((state) => state?.userInfoAfterSubmit);
//   const bookingInfo = useAppSelector((state) => state?.booking);
//   const SettingsInfo = useAppSelector((state) => state?.settings?.settings);

//   const serviceIdFilter = bookingInfo?.filterServiceList?.find(
//     (service: any) =>
//       typeof service?.name === "string" &&
//       service?.name === bookingInfo?.serviceName?.service_name
//   );

//   class AfterPayHandler {
//     private loader(active: boolean): void {
//       // Your loader logic here
//     }

//     private showToastMessage(
//       message: string | { type: string; message: string }
//     ): void {
//       // Your toast message logic here
//     }

//     private async tryPing(): Promise<any> {
//       // Your ping logic here
//     }

//     private async getConfiguration(): Promise<any> {
//       // Fetch payment configuration logic here
//     }

//     // private calculateSurcharge(amount: number, rate: NumberConstructor): { newTotal: number } {
//     //   // Calculate surcharge logic here
//     //   return { newTotal: amount + amount * rate };
//     // }

//     private async createCheckout(data: any): Promise<any> {
//       // Create checkout request logic here
//     }

//     private async captureImmediateFullPayment(data: any): Promise<any> {
//       // Capture immediate payment logic here
//     }

//     private async paymentFailedRedirectHandler(): Promise<void> {
//       // Handle payment failure redirection logic here
//     }

//     async afterPayServerStatusChecker(): Promise<boolean> {
//       this.loader(true);
//       const response = await this.tryPing();
//       this.loader(false);

//       if (response.status === 200 && response.data === "Success") return true;

//       if (response.message) this.showToastMessage(response.message);

//       if (
//         SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status?.value ===
//         "1"
//       ) {
//         await this.paymentFailedRedirectHandler();
//       }

//       return false;
//     }

//     async afterPayPaymentConfiguration(): Promise<boolean> {
//       this.loader(true);

//       const isAmountValid =
//         this.minimumAmount.amount &&
//         this.maximumAmount.amount &&
//         this.paidInfo.paidAmount / 100 >= this.minimumAmount.amount &&
//         this.paidInfo.paidAmount / 100 <= this.maximumAmount.amount;

//       if (isAmountValid) {
//         this.loader(false);
//         return true;
//       }

//       const response = await this.getConfiguration();
//       this.loader(false);

//       if (response.status === 200) {
//         const isAmountInRange =
//           this.paidInfo.paidAmount / 100 >= this.minimumAmount.amount &&
//           this.paidInfo.paidAmount / 100 <= this.maximumAmount.amount;

//         if (isAmountInRange) return true;

//         this.showToastMessage({
//           type: "error",
//           message: `For Afterpay payment, minimum amount is ${response.data.minimumAmount.amount} and maximum amount is ${response.data.maximumAmount.amount}.`,
//         });
//       } else if (response.message) {
//         this.showToastMessage(response.message);
//       }

//       if (
//         SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status?.value  ===
//         "1"
//       ) {
//         await this.paymentFailedRedirectHandler();
//       }

//       return false;
//     }

//     async afterPayPaymentCheckout(): Promise<boolean> {
//       this.loader(true);

//       const amountWithSurcharge = this.calculateSurcharge(
//         this.paidInfo.paidAmount,
//         this.afterPayCardSurchargeRate
//       ).newTotal;

//       const data: any = this.buildCheckoutData(amountWithSurcharge);
//       this.addDiscounts(data);

//       const response = await this.createCheckout(data);
//       this.loader(false);

//       if (response.status === 201) return true;

//       if (response.message) this.showToastMessage(response.message);

//       if (
//         SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status?.value  ===
//         "1"
//       ) {
//         await this.paymentFailedRedirectHandler();
//       }

//       return false;
//     }

//     private buildCheckoutData(amountWithSurcharge: number): any {
//       return {
//         amount: {
//           amount: (amountWithSurcharge / 100).toString(),
//           currency: "AUD",
//         },
//         consumer: {
//           givenNames: userInfo?.userInfo?.firstName
//             ? userInfo?.userInfo?.firstName
//             : users?.user?.[0]?.firstName,
//           surname: userInfo?.userInfo?.lastName
//             ? userInfo?.userInfo?.lastName
//             : users?.user?.[0]?.lastName,
//           email: userInfo?.userInfo?.email
//             ? userInfo?.userInfo?.email
//             : users?.user?.[0]?.email,
//           phoneNumber: userInfo?.userInfo?.phone
//             ? userInfo?.userInfo?.phone
//             : users?.user?.[0]?.phone,
//         },
//         billing: {
//           name: `${
//             userInfo?.userInfo?.firstName
//               ? userInfo?.userInfo?.firstName
//               : users?.user?.[0]?.firstName
//           } ${
//             userInfo?.userInfo?.lastName
//               ? userInfo?.userInfo?.lastName
//               : users?.user?.[0]?.lastName
//           }`,
//           line1: userInfo?.userInfo?.addresses?.[0]?.street
//             ? userInfo?.userInfo?.addresses?.[0]?.street
//             : users?.user?.[0]?.addresses?.[0]?.street,
//           area1: userInfo?.userInfo?.addresses?.[0]?.suburb
//             ? userInfo?.userInfo?.addresses?.[0]?.suburb
//             : users?.user?.[0]?.addresses?.[0]?.suburb,
//           region: userInfo?.userInfo?.addresses?.[0]?.state
//             ? userInfo?.userInfo?.addresses?.[0]?.state
//             : users?.user?.[0]?.addresses?.[0]?.state,
//           postcode: userInfo?.userInfo?.addresses?.[0]?.zipCode
//             ? userInfo?.userInfo?.addresses?.[0]?.zipCode
//             : users?.user?.[0]?.addresses?.[0]?.zipCode,
//           countryCode: "AU",
//         },
//         shipping: {
//           name: `${
//             userInfo?.userInfo?.firstName
//               ? userInfo?.userInfo?.firstName
//               : users?.user?.[0]?.firstName
//           } ${
//             userInfo?.userInfo?.lastName
//               ? userInfo?.userInfo?.lastName
//               : users?.user?.[0]?.lastName
//           }`,
//           line1: userInfo?.userInfo?.addresses?.[0]?.street
//             ? userInfo?.userInfo?.addresses?.[0]?.street
//             : users?.user?.[0]?.addresses?.[0]?.street,
//           area1: userInfo?.userInfo?.addresses?.[0]?.suburb
//             ? userInfo?.userInfo?.addresses?.[0]?.suburb
//             : users?.user?.[0]?.addresses?.[0]?.suburb,
//           region: userInfo?.userInfo?.addresses?.[0]?.state
//             ? userInfo?.userInfo?.addresses?.[0]?.state
//             : users?.user?.[0]?.addresses?.[0]?.state,
//           postcode: userInfo?.userInfo?.addresses?.[0]?.zipCode
//             ? userInfo?.userInfo?.addresses?.[0]?.zipCode
//             : users?.user?.[0]?.addresses?.[0]?.zipCode,
//           countryCode: "AU",
//         },
//         items: [
//           {
//             name: bookingInfo?.serviceName?.service_name,
//             sku: serviceIdFilter?.code,
//             quantity: 1,
//             imageUrl: serviceIdFilter.image,
//             price: {
//               amount: (
//                 bookingInfo?.bookingSummerySubmitResData?.grand_total / 100
//               ).toString(),
//               currency: "AUD",
//             },
//             categories: [[serviceIdFilter?.serviceCategory?.name ?? ""]],
//           },
//         ],
//         merchant: {
//           redirectConfirmUrl: "http://localhost:3000/book-online/success",
//           redirectCancelUrl: "http://localhost:3000/book-online",
//         },
//         merchantReference: "",
//         taxAmount: {
//           amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge.applied_status
//             ? (bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount / 100).toString()
//             : "0.00",
//           currency: "AUD",
//         },
//         shippingAmount: {
//           amount: "0.00",
//           currency: "AUD",
//         },
//       };
//     }

//     private addDiscounts(data: any): void {
//       const discounts = [
//         {
//           condition: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status,
//           displayName: `Coupon (${bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.coupon_code})`,
//           amount: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
//         },
//         {
//           condition:
//           bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status,
//           displayName: "Online Appointment Discount",
//           amount:
//           bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.amount,
//         },
//         {
//           condition:
//           bookingInfo?.bookingSummerySubmitResData?.parking_discount?.applied_status,
//           displayName: "Appointment Parking Discount",
//           amount: bookingInfo?.bookingSummerySubmitResData?.parking_discount?.amount,
//         },
//         {
//           condition:
//           bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status,
//           displayName: "Appointment Loyalty Discount",
//           amount: bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.amount,
//         },
//       ];

//       for (const discount of discounts) {
//         if (discount.condition) {
//           data.discounts = [...(data.discounts || [])];
//           data.discounts.push({
//             displayName: discount.displayName,
//             amount: {
//               amount: (discount.amount / 100).toString(),
//               currency: "AUD",
//             },
//           });
//         }
//       }
//     }

//     async captureImmediateFullPaymentOfAfterPay(): Promise<boolean> {
//       const data = { token: this.checkout.token };
//       this.loader(true);
//       const response = await this.captureImmediateFullPayment(data);
//       this.loader(false);

//       if (response.message) this.showToastMessage(response.message);

//       if (this.afterpayPaymentGateway.status !== "APPROVED") {
//         this.showToastMessage({
//           type: "error",
//           message: `${this.afterpayPaymentGateway.status}: Payment is declined by Afterpay.`,
//         });
//       } else {
//         this.showToastMessage({
//           type: "success",
//           message: `${this.afterpayPaymentGateway.status}: Payment is approved by Afterpay.`,
//         });
//       }

//       if (
//         response.status !== 201 &&
//         this.afterpayPaymentGateway.status !== "APPROVED" &&
//         SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status?.value  ===
//           "1"
//       ) {
//         await this.paymentFailedRedirectHandler();
//       }

//       return (
//         response.status === 201 &&
//         this.afterpayPaymentGateway.status === "APPROVED"
//       );
//     }
//   }

//   async createAppointmentAfterAfterPayPayment() {

//     let isAfterPayServerActive = await this.afterPayServerStatusChecker();

//     if (isAfterPayServerActive) {
//       const isPaymentConfigurationSuccessful = await this.afterPayPaymentConfiguration();

//       if (isPaymentConfigurationSuccessful) {

//         const isCheckoutSuccess = await this.afterPayPaymentCheckout();
//         if (isCheckoutSuccess) {
//           window.AfterPay.initialize({
//             countryCode: "AU"
//           });

//           window.AfterPay.open();

//           window.AfterPay.onComplete = async (event) => {
//             if (event.data.status == "SUCCESS") {
//               const isCaptureImmediateFullPaymentOfAfterPaySucceed = await this.captureImmediateFullPaymentOfAfterPay();
//               if (isCaptureImmediateFullPaymentOfAfterPaySucceed) {

//                 this.showToastMessage({
//                   message: 'Payment successful',
//                   type: 'success'
//                 });

//                 const isPaymentCreated = await this.createPayment(`Temporal reference for customer id : ${this.customerInformation.id}`);
//                 if (isPaymentCreated) {
//                   const isAppointmentAfterPayPaymentDone = await this.createAfterPayPayment();
//                   if (isAppointmentAfterPayPaymentDone) {

//                     const isAppointmentCreated = await this.createAppointment();
//                     if (isAppointmentCreated) {
//                       this.putPaymentReference()
//                       const isAppointmentChargeCreated = await this.createAppointmentCharges();
//                       if (isAppointmentChargeCreated) {

//                         const isAppointmentNotesCreated = await this.createAppointmentNotes();
//                         if (isAppointmentNotesCreated) {
//                           this.putUpdatePaymentByOrderId();

//                           const isAppointmentPaymentDone = await this.createAppointmentPayments();
//                           if (isAppointmentPaymentDone) {
//                             localStorage.removeItem('bookingData');
//                             await this.appointmentCreatorsCreate();
//                             this.appointmentPaymentEmailNotify();
//                             this.appointmentEmailNotify();

//                             await this.createAppointmentDiscountStoreList();
//                             await this.appointmentHistory();
//                             if (this.preAppointmentResponse.coupon_discount.validation_status === true) {
//                               await this.createCouponUsage();
//                             }

//                             await this.paymentSucceedRedirectHandler();

//                           }

//                         }

//                       }

//                     }

//                   }

//                 }

//               }

//             } else {
//               console.log(event)
//               // The consumer cancelled the payment or closed the popup window.
//               this.showToastMessage({
//                 type: 'error',
//                 message: event.data.status
//               })
//             }
//           }

//           window.AfterPay.transfer({
//             token: this.checkout.token
//           });

//         }

//       }

//     }

//   }

//   return <div>

//   </div>;
// }





// import React, { useState } from "react";
// import { useAppSelector } from "@/app/rtk-state/hooks";

// type ConsumerInfo = {
//   givenNames: string;
//   surname: string;
//   email: string;
//   phoneNumber: string;
// };

// type BillingInfo = {
//   name: string;
//   line1: string;
//   area1: string;
//   region: string;
//   postcode: string;
//   countryCode: string;
// };

// type ItemInfo = {
//   name: string;
//   sku?: string;
//   quantity: number;
//   imageUrl?: string;
//   price: {
//     amount: string;
//     currency: string;
//   };
//   categories: string[][];
// };

// type CheckoutData = {
//   amount: {
//     amount: string;
//     currency: string;
//   };
//   consumer: ConsumerInfo;
//   billing: BillingInfo;
//   shipping: BillingInfo;
//   items: ItemInfo[];
//   merchant: {
//     redirectConfirmUrl: string;
//     redirectCancelUrl: string;
//   };
//   merchantReference: string;
//   taxAmount: {
//     amount: string;
//     currency: string;
//   };
//   shippingAmount: {
//     amount: string;
//     currency: string;
//   };
// };

// type ConfigurationResponse = {
//   minimumAmount: number;
//   maximumAmount: number;
// };

// type CheckoutResponse = {
//   success: boolean;
//   token: string;
// };

// type PaymentResponse = {
//   success: boolean;
// };

// const AfterPay: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [toastMessage, setToastMessage] = useState<string | null>(null);
//   const [isIframeOpen, setIsIframeOpen] = useState(false);
//   const [iframeSrc, setIframeSrc] = useState<string | null>(null);

//   const users = useAppSelector((state) => state?.users);
//   const userInfo = useAppSelector((state) => state?.userInfoAfterSubmit);
//   const bookingInfo = useAppSelector((state) => state?.booking);
//   const settingsInfo = useAppSelector((state) => state?.settings?.settings);

//   const handleToastMessage = (message: string) => {
//     setToastMessage(message);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const handleLoader = (active: boolean) => {
//     setIsLoading(active);
//   };

//   const tryPing = async (): Promise<{ status: number; data: string }> => {
//     return new Promise((resolve) =>
//       setTimeout(() => resolve({ status: 200, data: "Success" }), 1000)
//     );
//   };

//   const getConfiguration = async (): Promise<ConfigurationResponse> => {
//     return new Promise((resolve) =>
//       setTimeout(
//         () => resolve({ minimumAmount: 50, maximumAmount: 1000 }),
//         1000
//       )
//     );
//   };

//   const createCheckout = async (
//     data: CheckoutData
//   ): Promise<CheckoutResponse> => {
//     return new Promise((resolve) =>
//       setTimeout(
//         () => resolve({ success: true, token: "checkout_token" }),
//         1000
//       )
//     );
//   };

//   const capturePayment = async (token: string): Promise<PaymentResponse> => {
//     return new Promise((resolve) =>
//       setTimeout(() => resolve({ success: true }), 1000)
//     );
//   };

//   const calculateSurcharge = (
//     amount: number,
//     rate: number
//   ): { newTotal: number; surcharge: number } => {
//     const surcharge = amount * rate;
//     return { newTotal: amount + surcharge, surcharge };
//   };

//   const buildCheckoutData = (amountWithSurcharge: number): CheckoutData => {
//     const serviceIdFilter = bookingInfo?.filterServiceList?.find(
//       (service: any) =>
//         typeof service?.name === "string" &&
//         service?.name === bookingInfo?.serviceName?.service_name
//     );

//     const firstName =
//       userInfo?.userInfo?.firstName ?? users?.user?.[0]?.firstName;
//     const lastName = userInfo?.userInfo?.lastName ?? users?.user?.[0]?.lastName;
//     const email = userInfo?.userInfo?.email ?? users?.user?.[0]?.email;
//     const phone = userInfo?.userInfo?.phone ?? users?.user?.[0]?.phone;
//     const address =
//       userInfo?.userInfo?.addresses?.[0] ?? users?.user?.[0]?.addresses?.[0];

//     return {
//       amount: {
//         amount: (amountWithSurcharge / 100).toString(),
//         currency: "AUD",
//       },
//       consumer: {
//         givenNames: firstName,
//         surname: lastName,
//         email,
//         phoneNumber: phone,
//       },
//       billing: {
//         name: `${firstName} ${lastName}`,
//         line1: address?.street,
//         area1: address?.suburb,
//         region: address?.state,
//         postcode: address?.zipCode,
//         countryCode: "AU",
//       },
//       shipping: {
//         name: `${firstName} ${lastName}`,
//         line1: address?.street,
//         area1: address?.suburb,
//         region: address?.state,
//         postcode: address?.zipCode,
//         countryCode: "AU",
//       },
//       items: [
//         {
//           name: bookingInfo?.serviceName?.service_name,
//           sku: serviceIdFilter?.code,
//           quantity: 1,
//           imageUrl: serviceIdFilter?.image,
//           price: {
//             amount: (
//               bookingInfo?.bookingSummerySubmitResData?.grand_total / 100
//             ).toString(),
//             currency: "AUD",
//           },
//           categories: [[serviceIdFilter?.serviceCategory?.name ?? ""]],
//         },
//       ],
//       merchant: {
//         redirectConfirmUrl: "http://localhost:3000/book-online/success",
//         redirectCancelUrl: "http://localhost:3000/book-online",
//       },
//       merchantReference: "",
//       taxAmount: {
//         amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge
//           ?.applied_status
//           ? (
//               bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount / 100
//             ).toString()
//           : "0.00",
//         currency: "AUD",
//       },
//       shippingAmount: {
//         amount: "0.00",
//         currency: "AUD",
//       },
//     };
//   };

//   const startAfterPayCycle = async () => {
//     handleLoader(true);

//     try {
//       const pingResponse = await tryPing();
//       if (pingResponse.status !== 200 || pingResponse.data !== "Success") {
//         handleToastMessage("Failed to connect to AfterPay.");
//         handleLoader(false);
//         return;
//       }

//       const configResponse = await getConfiguration();
//       const grandTotal =
//         bookingInfo?.bookingSummerySubmitResData?.grand_total ?? 0;

//       if (
//         grandTotal < configResponse.minimumAmount ||
//         grandTotal > configResponse.maximumAmount
//       ) {
//         handleToastMessage(
//           `Amount should be between ${configResponse.minimumAmount} and ${configResponse.maximumAmount}.`
//         );
//         handleLoader(false);
//         return;
//       }

//       const surchargeRate = 0.05;
//       const { newTotal } = calculateSurcharge(grandTotal, surchargeRate);
//       const checkoutData = buildCheckoutData(newTotal);
//       const checkoutResponse = await createCheckout(checkoutData);

//       if (!checkoutResponse.success) {
//         handleToastMessage("Failed to initiate payment.");
//         handleLoader(false);
//         return;
//       }

//       setIframeSrc(
//         `https://portal.afterpay.com/afterpay.js=${checkoutResponse.token}`
//       );
//       setIsIframeOpen(true);
//     } catch (error) {
//       handleToastMessage("An error occurred during payment processing.");
//     }

//     handleLoader(false);
//   };

//   return (
//     <div>
//       <h1>AfterPay Checkout</h1>
//       <button onClick={startAfterPayCycle} disabled={isLoading}>
//         {isLoading ? "Processing..." : "Pay with AfterPay"}
//       </button>
//       {toastMessage && <div className="toast">{toastMessage}</div>}
//       {isIframeOpen && iframeSrc && (
//         <div className="iframe-wrapper">
//           <iframe
//             src={iframeSrc}
//             title="AfterPay Checkout"
//             className="iframe"
//           />
//           <button onClick={() => setIsIframeOpen(false)} className="close-btn">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AfterPay;





import { useEffect, useState } from 'react';
declare global {
  interface Window {
    AfterPay?: any; // Update type as per AfterPay SDK
  }
}
const AfterPayButton: React.FC = () => {
  const [isAfterPayLoaded, setIsAfterPayLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.AfterPay !== 'undefined') {
      window.AfterPay.initialize({
        publicKey: 'YOUR_AFTERPAY_PUBLIC_KEY',
        returnUrl: '/checkout/success',
        locale: 'AU',
      });
      setIsAfterPayLoaded(true);
    }
  }, []);

  const handleAfterPayClick = () => {
    if (isAfterPayLoaded) {
      window.AfterPay.open();
    } else {
      console.warn('AfterPay SDK is not loaded yet.');
    }
  };

  return (
    <div id="afterpay-button">
      {isAfterPayLoaded ? (
        <button onClick={handleAfterPayClick}>Buy with AfterPay</button>
      ) : (
        <p>Loading AfterPay...</p>
      )}
    </div>
  );
};

export default AfterPayButton;
