import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useAppDispatch, useAppSelector } from "@/app/rtk-state/hooks";
import { ToastContainer, toast } from "react-toastify";
import {
  afterPaySetMaximumAmount,
  afterPaySetMinimumAmount,
  AppointmentCreationNotify,
  AppointmentDiscountStoreListCreate,
  AppointmentHistoryCreate,
  AppointmentQuestionSubmitCreate,
  CardTokenCreate,
  CouponDiscountCreate,
  CreateAppointmentCreator,
  CreateAppointmentNotes,
  CreateAppointmentPayments,
  CreateAppointments,
  CreateAppointmentsCharge,
  CreateCardPayments,
  CreatePayments,
  createTokenFormData,
  GetAfterPaySurcharge,
  GetCardSurcharge,
  PaymentCreationNotify,
  PaymentsCreateByToken,
} from "@/app/rtk-state/reducers/paymentSlice";
import {
  formatDate,
  formatTime,
  formatTimeInterval,
} from "../ServiceBookingSummery/ServiceBookingSummery";
import {
  bookingSummerySaveAndContinue,
  paymentOptionSelectedAndProceedToPay,
} from "@/app/rtk-state/reducers/bookingSlice";
import { baseUrl } from "@/assets/baseUrl";
import axios from "axios";
import Head from "next/head";

interface CardDetails {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
}

// declare global {
//   interface Window {
//     AfterPay?: {
//       initialize: (config: { countryCode: string }) => void;
//       open: () => void;
//       onComplete?: (event: { data: { status: string } }) => void;
//       transfer: (config: { token: string }) => void;
//     };
//   }
// }

declare global {
  interface Window {
    AfterPay?: any; // Update type as per AfterPay SDK
  }
}

type Discount = {
  displayName: string;
  amount: {
    amount: string;
    currency: string;
  };
};

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
  const SettingsInfo = useAppSelector((state) => state?.settings?.settings);
  const [isCouponChecked, setIsCouponChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
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

  // After pay...................
  const loader = (active: boolean): void => {
    // Your loader logic here
  };

  const showToastMessage = (
    message: string | { type: string; message: string }
  ): void => {
    if (typeof message === "string") {
      console.log(message);
    } else {
      console.log(`${message.type}: ${message.message}`);
    }
  };

  const tryPing = async (): Promise<any> => {
    const path = `${baseUrl}/afterpay-payment-gateways/ping`;
    return axios
      .get(path, {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
      })
      .then((response) => {
        return {
          message: "",
          type: "success",
          status: response.status,
          data: response.data.data,
        };
      })
      .catch((error) => {
        // return responseErrorHandler(error);
        console.log(error);
      });
  };

  // Function to fetch payment configuration
  const getConfiguration = async (): Promise<any> => {
    const path = `${baseUrl}/afterpay-payment-gateways/configuration`;

    return axios
      .get(path, {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": "secret",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(afterPaySetMinimumAmount(response?.data?.data?.minimumAmount));
        dispatch(afterPaySetMaximumAmount(response?.data?.data?.maximumAmount));

        return {
          message: "",
          type: "success",
          status: response.status,
          data: response.data.data,
        };
      })
      .catch((error) => {
        // return responseErrorHandler(error);
        console.log(error);
      });
  };

  // Function to calculate surcharge
  const calculateSurcharge = (
    amount: number,
    rate: number
  ): { newTotal: number } => {
    const newTotal = amount + amount * rate;
    return { newTotal };
  };

  // Function to create a checkout request
  const createCheckout = async (data: any): Promise<any> => {
    const path = `${baseUrl}/afterpay-payment-gateways/checkouts`;

    return axios
      .post(
        path,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Client-Secret": "secret",
          },
        }
        
      )
      .then((response) => {
        // dispatch('commitSetCheckout', response.data);

        console.log(response.data);

        return {
          message: "",
          type: "success",
          status: response.status,
          data: response.data.data,
        };
      })
      .catch((error) => {
        // return responseErrorHandler(error);
        console.log(error);
      });
  };

  // Function to capture immediate full payment
  const captureImmediateFullPayment = async (data: any): Promise<any> => {
    // Replace with logic to capture immediate full payment
  };

  // Function to handle payment failure redirection
  const paymentFailedRedirectHandler = async (): Promise<void> => {
    // Replace with logic for payment failure redirection
  };

  // Function to check AfterPay server status
  const afterPayServerStatusChecker = async (): Promise<boolean> => {
    loader(true);

    try {
      const response = await tryPing();
      loader(false);

      if (response.status === 200 && response.data === "Success") {
        return true;
      }

      if (response.message) {
        showToastMessage(response.message);
      }

      // Example condition for handling specific settings
      if (
        SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status
          ?.value === "1"
      ) {
        await paymentFailedRedirectHandler();
      }
    } catch (error) {
      loader(false);
      showToastMessage("An error occurred while checking the server status.");
    }

    return false;
  };

  const paidAmount =
    bookingInfo?.bookingSummerySubmitResData?.grand_total / 100;

  const afterPayPaymentConfiguration = async (): Promise<boolean> => {
    loader(true);

    // const isAmountValid =
    //   paymentInfo?.afterPaySetMinimumAmount?.amount &&
    //   paymentInfo?.afterPaySetMaximumAmount?.amount &&
    //   paidAmount / 100 >= paymentInfo?.afterPaySetMinimumAmount?.amount &&
    //   paidAmount / 100 <= paymentInfo?.afterPaySetMaximumAmount?.amount;

    // if (isAmountValid) {
    //   loader(false);
    //   return true;
    // }

    const response = await getConfiguration();
    console.log(response);

    loader(false);

    if (response.status === 200) {
      const isAmountInRange =
        paidAmount / 100 >= paymentInfo?.afterPaySetMinimumAmount?.amount &&
        paidAmount / 100 <= paymentInfo?.afterPaySetMaximumAmount?.amount;

      if (isAmountInRange) return true;

      showToastMessage({
        type: "error",
        message: `For Afterpay payment, minimum amount is ${paymentInfo?.afterPaySetMinimumAmount?.amount} and maximum amount is ${paymentInfo?.afterPaySetMaximumAmount?.amount}.`,
      });
    } else if (response.message) {
      showToastMessage(response.message);
    }

    if (
      SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status
        ?.value === "1"
    ) {
      await paymentFailedRedirectHandler();
    }

    return false;
  };

  const serviceIdFilter = bookingInfo?.filterServiceList?.find(
    (service: any) =>
      typeof service?.name === "string" &&
      service?.name === bookingInfo?.serviceName?.service_name
  );

  const amountWithSurcharge = calculateSurcharge(
    paidAmount,
    paymentInfo?.afterPaySurcharge?.[0]?.payment_afterpay_surcharge?.value
  ).newTotal;

  const data = {
    amount: {
      amount: (amountWithSurcharge / 100).toFixed(2).toString(),
      currency: "AUD",
    },
    consumer: {
      givenNames: userInfo?.userInfo?.first_name
        ? userInfo?.userInfo?.first_name
        : users?.user?.[0]?.first_name,
      surname: userInfo?.userInfo?.last_name
        ? userInfo?.userInfo?.last_name
        : users?.user?.[0]?.last_name,
      email: userInfo?.userInfo?.email
        ? userInfo?.userInfo?.email
        : users?.user?.[0]?.email,
      phoneNumber: userInfo?.userInfo?.phone_number
        ? userInfo?.userInfo?.phone_number
        : users?.user?.[0]?.phone_number,
    },
    billing: {
      name: `${
        userInfo?.userInfo?.first_name
        ? userInfo?.userInfo?.first_name
        : users?.user?.[0]?.first_name
      } ${
        userInfo?.userInfo?.last_name
          ? userInfo?.userInfo?.last_name
          : users?.user?.[0]?.last_name
      }`,
      line1: userInfo?.userInfo?.addresses?.[0]?.street
        ? userInfo?.userInfo?.addresses?.[0]?.street
        : users?.user?.[0]?.addresses?.[0]?.street,
      area1: userInfo?.userInfo?.addresses?.[0]?.suburb
        ? userInfo?.userInfo?.addresses?.[0]?.suburb
        : users?.user?.[0]?.addresses?.[0]?.suburb,
      region: userInfo?.userInfo?.addresses?.[0]?.state
        ? userInfo?.userInfo?.addresses?.[0]?.state
        : users?.user?.[0]?.addresses?.[0]?.state,
      postcode: userInfo?.userInfo?.addresses?.[0]?.post_code
        ? userInfo?.userInfo?.addresses?.[0]?.post_code
        : users?.user?.[0]?.addresses?.[0]?.post_code,
      countryCode: "AU",
    },
    shipping: {
      name: `${
        userInfo?.userInfo?.first_name
          ? userInfo?.userInfo?.first_name
          : users?.user?.[0]?.first_name
      } ${
        userInfo?.userInfo?.last_name
          ? userInfo?.userInfo?.last_name
          : users?.user?.[0]?.last_name
      }`,
      line1: userInfo?.userInfo?.addresses?.[0]?.street
        ? userInfo?.userInfo?.addresses?.[0]?.street
        : users?.user?.[0]?.addresses?.[0]?.street,
      area1: userInfo?.userInfo?.addresses?.[0]?.suburb
        ? userInfo?.userInfo?.addresses?.[0]?.suburb
        : users?.user?.[0]?.addresses?.[0]?.suburb,
      region: userInfo?.userInfo?.addresses?.[0]?.state
        ? userInfo?.userInfo?.addresses?.[0]?.state
        : users?.user?.[0]?.addresses?.[0]?.state,
      postcode: userInfo?.userInfo?.addresses?.[0]?.post_code
        ? userInfo?.userInfo?.addresses?.[0]?.post_code
        : users?.user?.[0]?.addresses?.[0]?.post_code,
      countryCode: "AU",
    },
    items: [
      {
        name: bookingInfo?.serviceName?.service_name,
        sku: serviceIdFilter?.code,
        quantity: "1",
        imageUrl: serviceIdFilter.image,
        price: {
          amount: (
            bookingInfo?.bookingSummerySubmitResData?.grand_total / 100
          ).toString(),
          currency: "AUD",
        },
        categories: [[serviceIdFilter?.serviceCategory?.name ?? ""]],
      },
    ],
    merchant: {
      redirectConfirmUrl: "http://localhost:3000/book-online/success",
      redirectCancelUrl: "http://localhost:3000/book-online",
    },
    merchantReference: "",
    taxAmount: {
      amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge
        .applied_status
        ? (
            bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount / 100
          ).toString()
        : "0.00",
      currency: "AUD",
    },
    shippingAmount: {
      amount: "0.00",
      currency: "AUD",
    },

    discounts: [] as Discount[]

  };


  if (bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status || bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status || bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status) {
    data.discounts = [];
  }

  if (
    bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status ||
    bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status ||
    bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status
  ) {
    data.discounts = [] ;
  }

  if (bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status) {
    data.discounts.push({
      displayName: `Coupon (${bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.coupon_code})`,
      amount: {
        amount: (bookingInfo?.bookingSummerySubmitResData?.coupon_discount.amount / 100).toString(),
        currency: "AUD",
      },
    });
  }

  if (bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status) {
    data.discounts.push({
      displayName: `Online Appointment Discount`,
      amount: {
        amount: (bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.amount / 100).toString(),
        currency: "AUD",
      },
    });
  }

  if (bookingInfo?.bookingSummerySubmitResData?.parking_discount?.applied_status) {
    data.discounts.push({
      displayName: `Appointment Parking Discount`,
      amount: {
        amount: (bookingInfo?.bookingSummerySubmitResData?.parking_discount.amount / 100).toString(),
        currency: "AUD",
      },
    });
  }

  if (bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status) {
    data.discounts.push({
      displayName: `Appointment Loyalty Discount`,
      amount: {
        amount: (bookingInfo?.bookingSummerySubmitResData?.loyalty_discount.amount / 100).toString(),
        currency: "AUD",
      },
    });
  }

  const afterPayPaymentCheckout = async (): Promise<boolean> => {
    loader(true);

    const response = await createCheckout(data);
    loader(false);

    if (response.status === 201 || response.status === 200) return true;

    if (response.message) showToastMessage(response.message);

    if (
      SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status
        ?.value === "1"
    ) {
      await paymentFailedRedirectHandler();
    }

    return false;
  };

  // const amountWithSurcharge = calculateSurcharge(
  //   paidAmount,
  //   paymentInfo?.afterPaySurcharge?.[0]?.payment_afterpay_surcharge?.value
  // ).newTotal;

  

  // const afterPayPaymentCheckout = async (): Promise<boolean> => {
  //   loader(true);
  //   console.log("checkout",data);

  // const data = {
  //   amount: {
  //     amount: (amountWithSurcharge / 100).toString(),
  //     currency: "AUD",
  //   },
  //   consumer: {
  //     givenNames: userInfo?.userInfo?.firstName || users?.user?.[0]?.firstName,
  //     surname: userInfo?.userInfo?.lastName || users?.user?.[0]?.lastName,
  //     email: userInfo?.userInfo?.email || users?.user?.[0]?.email,
  //     phoneNumber: userInfo?.userInfo?.phone || users?.user?.[0]?.phone,
  //   },
  //   billing: {
  //     name: `${userInfo?.userInfo?.firstName || users?.user?.[0]?.firstName} ${
  //       userInfo?.userInfo?.lastName || users?.user?.[0]?.lastName
  //     }`,
  //     line1: userInfo?.userInfo?.addresses?.[0]?.street || users?.user?.[0]?.addresses?.[0]?.street,
  //     area1: userInfo?.userInfo?.addresses?.[0]?.suburb || users?.user?.[0]?.addresses?.[0]?.suburb,
  //     region: userInfo?.userInfo?.addresses?.[0]?.state || users?.user?.[0]?.addresses?.[0]?.state,
  //     postcode: userInfo?.userInfo?.addresses?.[0]?.zipCode || users?.user?.[0]?.addresses?.[0]?.zipCode,
  //     countryCode: "AU",
  //   },
  //   shipping: {
  //     name: `${userInfo?.userInfo?.firstName || users?.user?.[0]?.firstName} ${
  //       userInfo?.userInfo?.lastName || users?.user?.[0]?.lastName
  //     }`,
  //     line1: userInfo?.userInfo?.addresses?.[0]?.street || users?.user?.[0]?.addresses?.[0]?.street,
  //     area1: userInfo?.userInfo?.addresses?.[0]?.suburb || users?.user?.[0]?.addresses?.[0]?.suburb,
  //     region: userInfo?.userInfo?.addresses?.[0]?.state || users?.user?.[0]?.addresses?.[0]?.state,
  //     postcode: userInfo?.userInfo?.addresses?.[0]?.zipCode || users?.user?.[0]?.addresses?.[0]?.zipCode,
  //     countryCode: "AU",
  //   },
  //   items: [
  //     {
  //       name: bookingInfo?.serviceName?.service_name,
  //       sku: serviceIdFilter?.code,
  //       quantity: 1,
  //       imageUrl: serviceIdFilter.image,
  //       price: {
  //         amount: (bookingInfo?.bookingSummerySubmitResData?.grand_total / 100).toString(),
  //         currency: "AUD",
  //       },
  //       categories: [[serviceIdFilter?.serviceCategory?.name ?? ""]],
  //     },
  //   ],
  //   merchant: {
  //     redirectConfirmUrl: "http://localhost:3000/book-online/success",
  //     redirectCancelUrl: "http://localhost:3000/book-online",
  //   },
  //   merchantReference: "",
  //   taxAmount: {
  //     amount: bookingInfo?.bookingSummerySubmitResData?.gst_charge?.applied_status
  //       ? (bookingInfo?.bookingSummerySubmitResData?.gst_charge?.amount / 100).toString()
  //       : "0.00",
  //     currency: "AUD",
  //   },
  //   shippingAmount: {
  //     amount: "0.00",
  //     currency: "AUD",
  //   },
  //   discounts: [] as Discount[],
  // };

  // if (
  //   bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status ||
  //   bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status ||
  //   bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status
  // ) {
  //   data.discounts = [] ;
  // }

  // if (bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status) {
  //   data.discounts.push({
  //     displayName: `Coupon (${bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.coupon_code})`,
  //     amount: {
  //       amount: (bookingInfo?.bookingSummerySubmitResData?.coupon_discount.amount / 100).toString(),
  //       currency: "AUD",
  //     },
  //   });
  // }

  // if (bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.applied_status) {
  //   data.discounts.push({
  //     displayName: `Online Appointment Discount`,
  //     amount: {
  //       amount: (bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount?.amount / 100).toString(),
  //       currency: "AUD",
  //     },
  //   });
  // }

  // if (bookingInfo?.bookingSummerySubmitResData?.parking_discount?.applied_status) {
  //   data.discounts.push({
  //     displayName: `Appointment Parking Discount`,
  //     amount: {
  //       amount: (bookingInfo?.bookingSummerySubmitResData?.parking_discount.amount / 100).toString(),
  //       currency: "AUD",
  //     },
  //   });
  // }

  // if (bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status) {
  //   data.discounts.push({
  //     displayName: `Appointment Loyalty Discount`,
  //     amount: {
  //       amount: (bookingInfo?.bookingSummerySubmitResData?.loyalty_discount.amount / 100).toString(),
  //       currency: "AUD",
  //     },
  //   });
  // }


  //   const response = await createCheckout(data);
  //   loader(false);
    
  //   if (response.status === 201) return true;

  //   if (response.message) showToastMessage(response.message);

  //   if (
  //     SettingsInfo?.[8]?.appointment_online_appointment_without_payment_status?.value  ===
  //     "1"
  //   ) {
  //     await paymentFailedRedirectHandler();
  //   }
  
  //   return false;
  // };


  const [isAfterPayLoaded, setIsAfterPayLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && typeof window.AfterPay !== 'undefined') {
  //     window.AfterPay.initialize({
  //       publicKey: 'https://portal.sandbox.afterpay.com/afterpay.js',
  //       returnUrl: '/checkout/success',
  //       locale: 'AU',
  //     });
  //     setIsAfterPayLoaded(true);
  //   }
  // }, []);

  const createAppointmentAfterAfterPayPayment = async () => {
    let isAfterPayServerActive = await afterPayServerStatusChecker();

    if (isAfterPayServerActive) {
      const isPaymentConfigurationSuccessful =
        await afterPayPaymentConfiguration();

      if (isPaymentConfigurationSuccessful) {
        const isCheckoutSuccess = await afterPayPaymentCheckout();

        if (isCheckoutSuccess) {
          // if (isAfterPayLoaded) {
          //   window.AfterPay.open();
          // } else {
          //   console.warn('AfterPay SDK is not loaded yet.');
          // }

          // window?.AfterPay?.initialize({
          //   countryCode: "AU",
          // });

          // window?.AfterPay?.open();

          // window.AfterPay.onComplete = async (event) => {
          //   if (event.data.status == "SUCCESS") {
          //     const isCaptureImmediateFullPaymentOfAfterPaySucceed =
          //       await captureImmediateFullPaymentOfAfterPay();
          //     if (isCaptureImmediateFullPaymentOfAfterPaySucceed) {
          //       showToastMessage({
          //         message: "Payment successful",
          //         type: "success",
          //       });

          //       const isPaymentCreated = await createPayment(
          //         `Temporal reference for customer id : ${customerInformation.id}`
          //       );
          //       if (isPaymentCreated) {
          //         const isAppointmentAfterPayPaymentDone =
          //           await createAfterPayPayment();
          //         if (isAppointmentAfterPayPaymentDone) {
          //           const isAppointmentCreated = await createAppointment();
          //           if (isAppointmentCreated) {
          //             putPaymentReference();
          //             const isAppointmentChargeCreated =
          //               await createAppointmentCharges();
          //             if (isAppointmentChargeCreated) {
          //               const isAppointmentNotesCreated =
          //                 await createAppointmentNotes();
          //               if (isAppointmentNotesCreated) {
          //                 putUpdatePaymentByOrderId();

          //                 const isAppointmentPaymentDone =
          //                   await createAppointmentPayments();
          //                 if (isAppointmentPaymentDone) {
          //                   localStorage.removeItem("bookingData");
          //                   await appointmentCreatorsCreate();
          //                   appointmentPaymentEmailNotify();
          //                   appointmentEmailNotify();

          //                   await createAppointmentDiscountStoreList();
          //                   await appointmentHistory();
          //                   if (
          //                     preAppointmentResponse.coupon_discount
          //                       .validation_status === true
          //                   ) {
          //                     await createCouponUsage();
          //                   }

          //                   await paymentSucceedRedirectHandler();
          //                 }
          //               }
          //             }
          //           }
          //         }
          //       }
          //     }
          //   } else {
          //     console.log(event);
          //     // The consumer cancelled the payment or closed the popup window.
          //     showToastMessage({
          //       type: "error",
          //       message: event.data.status,
          //     });
          //   }
          // };

          // window.AfterPay.transfer({
          //   token: checkout.token,
          // });
        }
      }
    }
  };

  // Card Info................
  const cardFormData = {
    card_name: cardTokenCreateFormData.cardHolderName,
    card_number: cardTokenCreateFormData.cardNumber,
    card_expire_month: cardTokenCreateFormData.expiryDate.split("/")[0],
    card_expire_year: cardTokenCreateFormData.expiryDate.split("/")[1],
    card_cvc: cardTokenCreateFormData.cvv,
  };

  // Pay Now Handler....................................
  const PayNowHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPaymentMethod === "cardPayment") {
      dispatch(CardTokenCreate(cardFormData));
    }
    if (selectedPaymentMethod === "afterPay") {
      if (
        !(userInfo?.userInfo?.email
          ? userInfo?.userInfo?.email
          : users?.user?.[0]?.email && userInfo?.userInfo?.phone
          ? userInfo?.userInfo?.phone
          : users?.user?.[0]?.phone)
      ) {
        showToastMessage({
          type: "error",
          message:
            "For afterpay payment you must provide your email & phone number !",
        });
        return false;
      }

      createAppointmentAfterAfterPayPayment();
    }
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
    if (paymentInfo?.cardToken?.[0]?.message) {
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
    Math.round(
      ((bookingInfo?.bookingSummerySubmitResData?.grand_total || 0) *
        surchargeRate) /
        100
    );
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
    panel: 0,
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
    service_id: serviceIdFilter?.id,
    address_id: address?.[0]?.id,
    billing_address_id: address?.[0]?.id,
    platform:
      bookingInfo?.operatingSystem?.platform === "Internet"
        ? 0
        : bookingInfo?.operatingSystem?.platform === "MAC"
        ? 1
        : bookingInfo?.operatingSystem?.platform === "Smart Phone"
        ? 2
        : bookingInfo?.operatingSystem?.platform === "Printer"
        ? 3
        : bookingInfo?.operatingSystem?.platform === "Windows"
        ? 4
        : 5,
    type: bookingInfo?.serviceLocationType == "Home" ? 0 : 1,
    date: formatDate(bookingInfo?.choosePreferredDateAndTime?.booking_schedule),
    time: formatTime(bookingInfo?.choosePreferredDateAndTime?.selectedTime),
    length: formatTimeInterval(
      bookingInfo?.choosePreferredDateAndTime?.booking_duration
    ),
    status: 0,
    parking:
      bookingInfo?.parkingOption === "No Parking"
        ? 0
        : bookingInfo?.parkingOption === "Driveway"
        ? 1
        : bookingInfo?.parkingOption === "Street Paid"
        ? 2
        : 3,
    preference: bookingInfo?.serviceType === "Onsite" ? 0 : 1,
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

  // Create Appointment Notes..........................
  const createAppointmentNotesFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: appointmentResData?.id,
    user_type: 0,
    type: 0,
    description: bookingInfo?.descriptionNote?.note,
  };

  useEffect(() => {
    if (paymentInfo?.appointmentChargeResStatus === "success") {
      dispatch(CreateAppointmentNotes(createAppointmentNotesFormData));
    }
  }, [paymentInfo?.appointmentChargeResStatus]);

  // Create Appointment Payments.........................
  const appointmentPaymentsFormData = {
    payment_id: paymentInfo?.createPaymentResData?.id,
    appointment_id: appointmentResData?.id,
    transaction_date_time: paymentInfo?.createPaymentResData?.created_at,
  };

  useEffect(() => {
    if (paymentInfo?.createAppointmentNotesResData?.user_type)
      dispatch(CreateAppointmentPayments(appointmentPaymentsFormData));
  }, [paymentInfo?.createAppointmentNotesResData?.user_type]);

  // Create Appointment Creator..........................
  const createAppointmentCreatorFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: appointmentResData?.id,
    panel: 0,
  };

  useEffect(() => {
    if (paymentInfo?.CreateAppointmentPaymentsResData?.id) {
      dispatch(CreateAppointmentCreator(createAppointmentCreatorFormData));
    }
  }, [paymentInfo?.CreateAppointmentPaymentsResData?.id]);

  // Payment Send Creation Notify..................
  const PaymentCreationNotifyFormData = {
    id: paymentInfo?.createPaymentResData?.id,
    notify_customer: 1,
    notify_internal_user: 1,
  };

  // Appointment Creation Notify................
  const AppointmentCreationNotifyFormData = {
    appointment: appointmentResData?.id,
    notify_customer: 1,
    notify_internal_user: 1,
  };

  // useEffect(() => {
  //   if (paymentInfo?.createPaymentResData?.id && appointmentResData?.id) {
  //     dispatch(PaymentCreationNotify(PaymentCreationNotifyFormData));
  //     dispatch(AppointmentCreationNotify(AppointmentCreationNotifyFormData));
  //   }
  // }, [paymentInfo?.createPaymentResData?.id && appointmentResData?.id]);

  // Appointment Discount Store list................
  let discountsArray = [];

  if (
    bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.applied_status
  ) {
    discountsArray.push({
      amount: bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
      type: 3,
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.applied_discount?.applied_status
  ) {
    discountsArray.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.applied_discount?.amount,
      type: 1,
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
      ?.applied_status
  ) {
    discountsArray.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.credited_payment_discount
          ?.amount,
      type: 0,
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.applied_status
  ) {
    discountsArray.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.loyalty_discount?.amount,
      type: 7,
    });
  }
  if (
    bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
      ?.applied_status
  ) {
    discountsArray.push({
      amount:
        bookingInfo?.bookingSummerySubmitResData?.online_appointment_discount
          ?.amount,
      type: 6,
    });
  }

  const AppointmentDiscountStoreListFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    reference: paymentInfo?.createAppointmentsResData?.reference,
    discounts: discountsArray,
  };

  useEffect(() => {
    if (paymentInfo?.CreateAppointmentCreatorResData?.id) {
      dispatch(
        AppointmentDiscountStoreListCreate(AppointmentDiscountStoreListFormData)
      );
    }
  }, [paymentInfo?.CreateAppointmentCreatorResData?.id]);

  // Appointment History..
  const AppointmentHistoryFormData = {
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: appointmentResData?.id,
    panel: 0,
    status: 0,
  };

  useEffect(() => {
    if (
      paymentInfo?.AppointmentDiscountStoreListCreateResStatus === "success"
    ) {
      dispatch(AppointmentHistoryCreate(AppointmentHistoryFormData));
    }
  }, [paymentInfo?.AppointmentDiscountStoreListCreateResStatus]);

  // Appointment Question Submit Create...........
  let questions = [];

  if (bookingInfo?.necessaryCables?.have_necessary_cables) {
    questions.push({
      id: "question_1",
      question: "Do you have all the necessary cables?",
      answer: bookingInfo?.necessaryCables?.have_necessary_cables,
    });
  }
  if (bookingInfo?.whereIsDataBackedUpOn?.where_is_data_backed_up_on) {
    questions.push({
      id: "question_2",
      question:
        "Where is the data backedup on? (External HD, Another computer, Cloud)?",
      answer: bookingInfo?.whereIsDataBackedUpOn?.where_is_data_backed_up_on,
    });
  }
  if (bookingInfo?.whereIsData?.where_is_the_data) {
    questions.push({
      id: "question_3",
      question: "Where is the data? (External HD, Computer, Phone)?",
      answer: bookingInfo?.whereIsData?.where_is_the_data,
    });
  }
  if (bookingInfo?.haveExistingAntivirus?.have_existing_antivirus) {
    questions.push({
      id: "question_4",
      question: "Do you have an existing antivirus? If Yes what is it?",
      answer: bookingInfo?.haveExistingAntivirus?.have_existing_antivirus,
    });
  }
  if (bookingInfo?.existingAntivirusName?.antivirus_Name) {
    questions.push({
      id: "question_5",
      question: "Existing antivirus name?",
      answer: bookingInfo?.existingAntivirusName?.antivirus_Name,
    });
  }
  if (bookingInfo?.whatTypeOfPhoneIsIt?.what_type_of_phone_is_it) {
    questions.push({
      id: "question_6",
      question: " What type of phone is it? (Android, IOS, Windows)?",
      answer: bookingInfo?.whatTypeOfPhoneIsIt?.what_type_of_phone_is_it,
    });
  }
  if (bookingInfo?.haveExistingNetwork?.have_existing_network) {
    questions.push({
      id: "question_7",
      question: " Do you have existing network?",
      answer: bookingInfo?.haveExistingNetwork?.have_existing_network,
    });
  }
  if (bookingInfo?.currentInternetProvider?.current_internet_provider) {
    questions.push({
      id: "question_8",
      question: "Who is your current internet service provider?",
      answer: bookingInfo?.currentInternetProvider?.current_internet_provider,
    });
  }
  if (bookingInfo?.otherInternetProvider?.other_internet_provider) {
    questions.push({
      id: "question_9",
      question: "Other Provider Name?",
      answer: bookingInfo?.otherInternetProvider?.other_internet_provider,
    });
  }
  if (bookingInfo?.needRouters?.need_routers) {
    questions.push({
      id: "question_10",
      question: "Do you need routers?",
      answer: bookingInfo?.needRouters?.need_routers,
    });
  }
  if (bookingInfo?.whatIsYourEmailAddress?.what_is_your_email_address) {
    questions.push({
      id: "question_11",
      question: "What is your email address?",
      answer: bookingInfo?.whatIsYourEmailAddress?.what_is_your_email_address,
    });
  }
  if (bookingInfo?.doYouKnowPasswordForIt?.do_you_know_password_for_it) {
    questions.push({
      id: "question_12",
      question: " Do you know the password for it?",
      answer: bookingInfo?.doYouKnowPasswordForIt?.do_you_know_password_for_it,
    });
  }

  const AppointmentQuestionSubmitCreateFormData = {
    added_by: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    appointment_id: appointmentResData?.id,
    panel: 0,
    question: JSON.stringify(questions),
  };

  useEffect(() => {
    if (paymentInfo?.appointmentHistoryCreateResData?.id)
      dispatch(
        AppointmentQuestionSubmitCreate(AppointmentQuestionSubmitCreateFormData)
      );
  }, [paymentInfo?.appointmentHistoryCreateResData?.id]);

  // Coupon Usage...................................
  const CouponFormData = {
    coupon_id:
      bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.coupon_id,
    user_id: userInfo?.userInfo?.id
      ? userInfo?.userInfo?.id
      : users?.user?.[0]?.id,
    reference: paymentInfo?.createAppointmentsResData?.reference,
    discount_amount:
      bookingInfo?.bookingSummerySubmitResData?.coupon_discount?.amount,
  };

  const CouponDiscountCreateHandler = () => {
    dispatch(CouponDiscountCreate(CouponFormData));
  };

  const prevHandler = () => {
    dispatch(bookingSummerySaveAndContinue("next"));
    dispatch(paymentOptionSelectedAndProceedToPay(""));
  };

  useEffect(() => {
    if (typeof window.AfterPay === 'undefined') return;

    window.AfterPay.init({
      publicKey: 'YOUR_AFTERPAY_PUBLIC_KEY',
      returnUrl: '/checkout/success',
      // locale: 'en-US',
      countryCode: "AU"
    });

    setIsAfterPayLoaded(true);
  }, []);

  const handleAfterPayClick = () => {
    if (isAfterPayLoaded ) {
      window.AfterPay.open();
       window.AfterPay.onComplete = async (event:any) => {

        console.log("hello")
            // if (event.data.status == "SUCCESS") {
            //   const isCaptureImmediateFullPaymentOfAfterPaySucceed =
            //     await captureImmediateFullPaymentOfAfterPay();
            //   if (isCaptureImmediateFullPaymentOfAfterPaySucceed) {
            //     showToastMessage({
            //       message: "Payment successful",
            //       type: "success",
            //     });

            //     const isPaymentCreated = await createPayment(
            //       `Temporal reference for customer id : ${customerInformation.id}`
            //     );
            //     if (isPaymentCreated) {
            //       const isAppointmentAfterPayPaymentDone =
            //         await createAfterPayPayment();
            //       if (isAppointmentAfterPayPaymentDone) {
            //         const isAppointmentCreated = await createAppointment();
            //         if (isAppointmentCreated) {
            //           putPaymentReference();
            //           const isAppointmentChargeCreated =
            //             await createAppointmentCharges();
            //           if (isAppointmentChargeCreated) {
            //             const isAppointmentNotesCreated =
            //               await createAppointmentNotes();
            //             if (isAppointmentNotesCreated) {
            //               putUpdatePaymentByOrderId();

            //               const isAppointmentPaymentDone =
            //                 await createAppointmentPayments();
            //               if (isAppointmentPaymentDone) {
            //                 localStorage.removeItem("bookingData");
            //                 await appointmentCreatorsCreate();
            //                 appointmentPaymentEmailNotify();
            //                 appointmentEmailNotify();

            //                 await createAppointmentDiscountStoreList();
            //                 await appointmentHistory();
            //                 if (
            //                   preAppointmentResponse.coupon_discount
            //                     .validation_status === true
            //                 ) {
            //                   await createCouponUsage();
            //                 }

            //                 await paymentSucceedRedirectHandler();
            //               }
            //             }
            //           }
            //         }
            //       }
            //     }
            //   }
            // } else {
            //   console.log(event);
            //   // The consumer cancelled the payment or closed the popup window.
            //   showToastMessage({
            //     type: "error",
            //     message: event.data.status,
            //   });
            // }
          };

          // window.AfterPay.transfer({
          //   token: checkout.token,
          // });
    } else {
      console.warn('AfterPay SDK is not ready.');
    }
  };

  return (
    <>
      
      <div className="payment_section">
        <div className="text-[14px] mx-auto">
          <div className="payment w-[50%] mx-auto mt-5">
            {/* Apply Coupon */}
            <div className="apply_coupon_container mt-10">
              <label className="flex gap-2 text-[14px] font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 hidden"
                  onChange={handleApplyCouponCheckboxChange}
                />
                {/* Custom Checkbox */}
                <div
                  className={`w-4 h-4 border-2 mt-[2px] ${
                    isCouponChecked
                      ? "bg-orange-500 border-orange-500"
                      : "bg-white border-gray-300"
                  } flex items-center justify-center transition-colors`}
                >
                  {isCouponChecked && (
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
                <label htmlFor="">Apply Coupon</label>
              </label>
              {isCouponChecked && (
                <form action="" className="flex">
                  <input
                    type="text"
                    placeholder="Enter a Coupon Code"
                    className="border p-[10px] w-[100%] text-[14px] mt-4 rounded-md"
                    required
                  />
                  <button
                    type="submit"
                    onClick={CouponDiscountCreateHandler}
                    className="bg-primaryColor text-white rounded-md py-[10px] px-[30px] mt-4 ml-2"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Terms and Conditions */}
            <label className="flex items-center gap-2 mt-2 cursor-pointer">
              {/* <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-orange-500"
                onChange={handleTermsConditionCheckboxChange}
              /> */}
              <input
                type="checkbox"
                checked={isTermsChecked}
                onChange={handleTermsConditionCheckboxChange}
                className="hidden w-4 h-4"
              />
              {/* Custom Checkbox */}
              <div
                className={`w-4 h-4 border-2 mt-[-3px] ${
                  isTermsChecked
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                } flex items-center justify-center transition-colors`}
              >
                {isTermsChecked && (
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
              <label htmlFor="terms" className="text-gray-700">
                I agree with{" "}
                <span className="text-orange-500 font-semibold">
                  Terms & Conditions
                </span>
              </label>
            </label>

            {isTermsChecked && (
              <>
                {/* Payment Methods */}
                <div>
                  <label className="flex items-center gap-2 mt-5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="cardPayment"
                      className="w-4 h-4 hidden"
                      checked={selectedPaymentMethod === "cardPayment"}
                      onChange={() => handlePaymentMethodChange("cardPayment")}
                    />
                    <div
                      className={`w-4 h-4 border-2 mt-[-3px] ${
                        selectedPaymentMethod === "cardPayment"
                          ? "bg-orange-500 border-orange-500"
                          : "bg-white border-gray-300"
                      } flex items-center justify-center transition-colors rounded-full`}
                    >
                      {selectedPaymentMethod === "cardPayment" && (
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
                    <label htmlFor="cardPayment" className="text-gray-700">
                      Card (Visa/Master/Amex)
                    </label>
                  </label>
                  <label className="flex items-center gap-2 mt-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="afterPay"
                      className="w-4 h-4 hidden"
                      checked={selectedPaymentMethod === "afterPay"}
                      onChange={() => handlePaymentMethodChange("afterPay")}
                    />
                    <div
                      className={`w-4 h-4 border-2 mt-[-3px] ${
                        selectedPaymentMethod === "afterPay"
                          ? "bg-orange-500 border-orange-500"
                          : "bg-white border-gray-300"
                      } flex items-center justify-center transition-colors rounded-full`}
                    >
                      {selectedPaymentMethod === "afterPay" && (
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
                    <label htmlFor="afterPay" className="text-gray-700">
                      Afterpay
                    </label>
                  </label>
                </div>

                {/* Card Details Section */}
                {selectedPaymentMethod === "cardPayment" && (
                  <div className="bg-[#f1f1f1] p-4 rounded-md space-y-4 mt-5 text-[14px]">
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
              <button
                onClick={prevHandler}
                className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-100"
              >
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
<div id="afterpay-button">
      {isAfterPayLoaded ? (
        <button onClick={handleAfterPayClick}>Buy with AfterPay</button>
      ) : (
        <p>Loading AfterPay...</p>
      )}
    </div>
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
