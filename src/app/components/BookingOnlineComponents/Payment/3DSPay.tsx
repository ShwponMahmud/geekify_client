
import React, { useState, useRef } from "react";
import axios from "axios";
import { baseUrl } from "@/assets/baseUrl";

const ThreeDSTestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    card_name: "",
    card_number: "",
    card_expire_month: "",
    card_expire_year: "",
    card_cvc: "",
    amount: 50,
    auth_only: 1,
    description: "test",
    emv_status: 1,
  });

  const [showIframe, setShowIframe] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const simplifyDomain = "https://simplify.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createSecure3dEmvForm = (data: any): string => {
    return data["3dsecure"]?.redirectHtml || "";
  };

  const insertHtmlIntoIframe = (
    htmlContent: string,
    iframeId = "secure3d-frame"
  ) => {
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(htmlContent);
        iframeDocument.close();
        setShowIframe(true);
      }
    }
  };

  const addIframeEventListener = () => {
    window.addEventListener("message", handle3dsCallback);
  };

  const handle3dsCallback = async (event: MessageEvent) => {
    if (event.origin !== simplifyDomain) return;

    const data = JSON.parse(event.data);

    if (data?.secure3d?.authenticated) {
      const completePayload = {
        amount: formData.amount,
        currency: "USD", // Adjust according to your logic
        description: "description",
        card_token: data.token,
        reference: "ABC test",
      };

      // Complete Payment
      try {
        const completeResponse = await axios.post(
          `${baseUrl}/payment-gateways/payments/create-by-token`,
          completePayload
        );

        if (completeResponse.data.success) {
          setPaymentSuccess(true);
          setShowIframe(false);
        }
      } catch (error) {
        console.error("Error completing payment:", error);
      }
    }
  };

  const processPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create Card Token
      const createResponse = await axios.post(
        `${baseUrl}/payment-gateways/3d-card-tokens/create`,
        formData,
        { headers: { "Client-Secret": "secret" } }
      );

      const initiate3dsForm = createSecure3dEmvForm(createResponse.data);
      insertHtmlIntoIframe(initiate3dsForm);

      // Update Card Token
      const updatePayload = {
        token_id: createResponse.data.id,
        browser: navigator.userAgent,
        ip_address: createResponse.data.currency,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      const updateResponse = await axios.post(
        `${baseUrl}/payment-gateways/3d-card-tokens/update`,
        updatePayload
      );

      const secure3dForm = createSecure3dEmvForm(updateResponse.data);
      insertHtmlIntoIframe(secure3dForm, "challengeFrame");
      addIframeEventListener();
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="container threeDs_test_page">
      <div>
        <h1>3DS Test</h1>
        <form onSubmit={processPayment} id="simplify-payment-form">
          <div className="input_div">
            <label htmlFor="card_name">Card Name</label>
            <input
              type="text"
              name="card_name"
              id="card_name"
              placeholder="Card Name"
              value={formData.card_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="card_number">Card Number</label>
            <input
              type="text"
              name="card_number"
              id="card_number"
              placeholder="Card Number"
              value={formData.card_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="card_expire_month">Exp Month</label>
            <input
              type="text"
              name="card_expire_month"
              id="card_expire_month"
              placeholder="Exp Month"
              value={formData.card_expire_month}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="card_expire_year">Exp Year</label>
            <input
              type="text"
              name="card_expire_year"
              id="card_expire_year"
              placeholder="Exp Year"
              value={formData.card_expire_year}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="card_cvc">CVC</label>
            <input
              type="text"
              name="card_cvc"
              id="card_cvc"
              placeholder="CVC"
              value={formData.card_cvc}
              onChange={handleInputChange}
            />
          </div>
          <div className="input_div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Pay</button>
        </form>

        {paymentSuccess && (
          <div
            className="alert alert-success"
            role="alert"
            id="simplify-success"
          >
            Payment was processed successfully.
          </div>
        )}

        {showIframe && (
          <iframe
            name="secure3d-frame"
            id="secure3d-frame"
            ref={iframeRef}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ThreeDSTestPage;






// import React, { useState } from "react";

// interface FormData {
//   cc_number: string;
//   cc_exp_month: string;
//   cc_exp_year: string;
//   cc_cvc: string;
//   amount: string;
//   currency: string;
// }

// interface Secure3DData {
//   acsUrl: string;
//   paReq: string;
//   termUrl: string;
//   md?: string;
// }

// const PaymentForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     cc_number: "",
//     cc_exp_month: "01",
//     cc_exp_year: "2025",
//     cc_cvc: "",
//     amount: "100",
//     currency: "USD",
//   });

//   const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const processPayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/payEmvCreate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();

//       if (result.requires3DS) {
//         handle3DSFlow(result);
//       } else {
//         setPaymentSuccess(true); // Payment completed without 3DS
//       }
//     } catch (error) {
//       console.error("Payment failed", error);
//     }
//   };

//   const handle3DSFlow = (response: { requires3DS: boolean; acsUrl: string; paReq: string; termUrl: string }) => {
//     const secure3dData: Secure3DData = {
//       acsUrl: response.acsUrl,
//       paReq: response.paReq,
//       termUrl: response.termUrl,
//     };
//     openPopupAndSubmitForm(secure3dData);
//   };

//   const openPopupAndSubmitForm = (secure3dData: Secure3DData) => {
//     const popup = window.open(
//       "",
//       "3DSecurePopup",
//       "width=500,height=600,scrollbars=no,resizable=no"
//     );

//     if (!popup) {
//       console.error("Popup could not be opened. Please enable popups for this site.");
//       return;
//     }

//     const formHtml = `
//       <html>
//         <body>
//           <form id="3dsForm" method="POST" action="${secure3dData.acsUrl}">
//             <input type="hidden" name="PaReq" value="${secure3dData.paReq}" />
//             <input type="hidden" name="TermUrl" value="${secure3dData.termUrl}" />
//             <button type="submit">Click to Continue</button>
//           </form>
//           <script>
//             document.getElementById('3dsForm').submit();
//           </script>
//         </body>
//       </html>
//     `;

//     popup.document.write(formHtml);

//     const popupInterval = setInterval(() => {
//       if (popup.closed) {
//         clearInterval(popupInterval);
//         check3DSResult(secure3dData.termUrl);
//       }
//     }, 500);
//   };

//   const check3DSResult = async (termUrl: string) => {
//     try {
//       const response = await fetch("/api/verify-3ds-result", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ termUrl }),
//       });
//       const result = await response.json();

//       if (result.success) {
//         setPaymentSuccess(true);
//       } else {
//         console.error("3D Secure authentication failed.");
//       }
//     } catch (error) {
//       console.error("Error verifying 3DS result", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Payment Form</h1>
//       <form onSubmit={processPayment}>
//         <div>
//           <label>Card Number</label>
//           <input
//             type="text"
//             name="cc_number"
//             value={formData.cc_number}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Expiry Month</label>
//           <select
//             name="cc_exp_month"
//             value={formData.cc_exp_month}
//             onChange={handleInputChange}
//           >
//             {Array.from({ length: 12 }, (_, i) => {
//               const value = (i + 1).toString().padStart(2, "0");
//               const text = new Date(0, i).toLocaleString("en-US", { month: "short" });
//               return (
//                 <option key={value} value={value}>
//                   {text}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div>
//           <label>Expiry Year</label>
//           <select
//             name="cc_exp_year"
//             value={formData.cc_exp_year}
//             onChange={handleInputChange}
//           >
//             {["2025", "2026", "2027"].map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label>CVC</label>
//           <input
//             type="text"
//             name="cc_cvc"
//             value={formData.cc_cvc}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Amount</label>
//           <input
//             type="text"
//             name="amount"
//             value={formData.amount}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Currency</label>
//           <select
//             name="currency"
//             value={formData.currency}
//             onChange={handleInputChange}
//           >
//             {["USD", "EUR", "GBP"].map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">
//           Submit Payment
//         </button>
//       </form>

//       {paymentSuccess && <p className="alert alert-success">Payment Successful!</p>}
//     </div>
//   );
// };

// export default PaymentForm;

// import React, { useState } from "react";

// interface FormData {
//   cc_number: string;
//   cc_exp_month: string;
//   cc_exp_year: string;
//   cc_cvc: string;
//   amount: string;
//   currency: string;
//   emv3ds: boolean;
// }

// const PaymentForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     cc_number: "5123450000000008",
//     cc_exp_month: "01",
//     cc_exp_year: "2025",
//     cc_cvc: "123",
//     amount: "1000",
//     currency: "USD",
//     emv3ds: false,
//   });

//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [showSecureFrame, setShowSecureFrame] = useState(false);
//   const [showChallengeFrame, setShowChallengeFrame] = useState(false);
//   const [showMethodFrame, setShowMethodFrame] = useState(false);

//   const months = Array.from({ length: 12 }, (_, i) => ({
//     value: (i + 1).toString().padStart(2, "0"),
//     text: new Date(0, i).toLocaleString("en-US", { month: "short" }),
//   }));

//   const years = ["2025", "2026", "2027"];
//   const currencies = ["AUD", "QAR", "USD", "GBP", "INR"];

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;

//     // Check if the target is a checkbox
//     const isChecked = type === "checkbox" && (e.target as HTMLInputElement).checked;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? isChecked : value,
//     }));
//   };

//   const processPayment = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const payload = { ...formData };

//     try {
//       if (payload.emv3ds) {
//         const createResponse = await postData("/api/payEmvCreate", payload);
//         handleEMV3DSFlow(createResponse);
//       } else {
//         const response = await postData("/api/pay", payload);
//         handle3DSFlow(response);
//       }
//     } catch (error) {
//       console.error("Payment processing failed", error);
//     }
//   };

//   const postData = async (url: string, data: any) => {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   };

//   const handle3DSFlow = (response: any) => {
//     if (response["3dsecure"]?.enrolled) {
//       const secure3dForm = createForm(response["3dsecure"]);
//       document.body.appendChild(secure3dForm);
//       setShowSecureFrame(true);
//       secure3dForm.submit();
//     }
//   };

//   const handleEMV3DSFlow = (response: any) => {
//     // Add logic for EMV 3DS handling
//     setPaymentSuccess(true); // Temporary success simulation
//   };

//   const createForm = (secure3dData: any) => {
//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = secure3dData.acsUrl;
//     form.target = "secure3d-frame";

//     Object.entries({
//       PaReq: secure3dData.paReq,
//       TermUrl: secure3dData.termUrl,
//       MD: secure3dData.md,
//     }).forEach(([key, value]) => {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = key;
//       input.value = value;
//       form.appendChild(input);
//     });

//     return form;
//   };

//   return (
//     <div id="payment-block" className="container">
//       <h1 style={{ textAlign: "center" }}>
//         <b>Payments Form</b>
//       </h1>
//       <br />
//       <form onSubmit={processPayment} className="form-horizontal payment-form">
//         <div className="form-group">
//           <label htmlFor="cc-number" className="col-sm-3 control-label">
//             Credit Card Number
//           </label>
//           <div className="col-sm-3">
//             <input
//               value={formData.cc_number}
//               onChange={handleInputChange}
//               id="cc-number"
//               name="cc_number"
//               className="form-control"
//               type="text"
//               maxLength={16}
//               autoComplete="off"
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="cc-exp-month" className="col-sm-3 control-label">
//             Expiry Date
//           </label>
//           <div className="col-sm-9">
//             <div className="row">
//               <div className="col-xs-2">
//                 <select
//                   value={formData.cc_exp_month}
//                   onChange={handleInputChange}
//                   name="cc_exp_month"
//                   className="form-control"
//                 >
//                   {months.map((month) => (
//                     <option key={month.value} value={month.value}>
//                       {month.text}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-xs-2">
//                 <select
//                   value={formData.cc_exp_year}
//                   onChange={handleInputChange}
//                   name="cc_exp_year"
//                   className="form-control"
//                 >
//                   {years.map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="cc-cvc" className="col-sm-3 control-label">
//             CVC
//           </label>
//           <div className="col-sm-1">
//             <input
//               value={formData.cc_cvc}
//               onChange={handleInputChange}
//               id="cc-cvc"
//               name="cc_cvc"
//               className="form-control"
//               type="text"
//               maxLength={4}
//               autoComplete="off"
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="amount" className="col-sm-3 control-label">
//             Amount
//           </label>
//           <div className="col-sm-2">
//             <input
//               value={formData.amount}
//               onChange={handleInputChange}
//               id="amount"
//               name="amount"
//               className="form-control"
//               type="text"
//               maxLength={8}
//               autoComplete="off"
//             />
//           </div>
//           <label htmlFor="currency" className="col-sm-1 control-label">
//             Currency
//           </label>
//           <div className="col-xs-2">
//             <select
//               value={formData.currency}
//               onChange={handleInputChange}
//               name="currency"
//               className="form-control"
//             >
//               {currencies.map((currency) => (
//                 <option key={currency} value={currency}>
//                   {currency}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <label htmlFor="emv3ds" className="col-sm-1 control-label">
//             Enable EMV 3DS
//           </label>
//           <div className="col-sm-2">
//             <input
//               checked={formData.emv3ds}
//               onChange={handleInputChange}
//               name="emv3ds"
//               type="checkbox"
//               id="emv3ds"
//               className="form-check-input"
//             />
//           </div>
//         </div>

//         <div className="col-sm-offset-3 col-sm-9">
//           <button id="process-payment-btn" type="submit" className="btn btn-success">
//             Process Payment
//           </button>
//         </div>
//       </form>

//       {paymentSuccess && (
//         <div className="alert alert-success" role="alert">
//           Payment was processed successfully.
//         </div>
//       )}

//       {showSecureFrame && <iframe name="secure3d-frame" id="secure3d-frame" />}
//       {showChallengeFrame && <iframe name="challengeFrame" id="challengeFrame" />}
//       {showMethodFrame && <iframe name="methodFrame" id="methodFrame" />}
//     </div>
//   );
// };

// export default PaymentForm;

// import React, { useState } from "react";

// interface PaymentPayload {
//   cc_number: string;
//   cc_exp_month: string;
//   cc_exp_year: string;
//   cc_cvc: string;
//   currency: string;
//   amount: string;
// }

// interface Secure3DResponse {
//   token: string;
//   currency: string;
//   redirectHtml: string;
//   ["3dsecure"]: {
//     authenticated?: boolean;
//   };
// }

// const PaymentForm: React.FC = () => {
//   const [formData, setFormData] = useState<PaymentPayload>({
//     cc_number: "",
//     cc_exp_month: "01",
//     cc_exp_year: "2025",
//     cc_cvc: "",
//     currency: "USD",
//     amount: "100",
//   });

//   const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
//   const [iframeSrc, setIframeSrc] = useState<string>("");

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const createSecure3dEmvForm = (data: Secure3DResponse): string => {
//     return data.redirectHtml;
//   };

//   const processPayment = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Step 1: Send initial payment data to the server
//       const createResponse: Secure3DResponse = await fetch("/payEmvCreate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       }).then((res) => res.json());

//       const initiate3dsFormHtml = createSecure3dEmvForm(createResponse);
//       setIframeSrc(""); // Reset any previous iframe content
//       document.getElementById("methodFrame")?.insertAdjacentHTML("afterend", initiate3dsFormHtml);

//       const token = createResponse.token;
//       const currency = createResponse.currency;
//       const browser = navigator.userAgent;
//       const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//       const updatePayload = {
//         currency,
//         token,
//         browser,
//         timezone,
//       };

//       // Step 2: Update server with additional information
//       const updateResponse: Secure3DResponse = await fetch("/payEmvUpdate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatePayload),
//       }).then((res) => res.json());

//       const secure3dFormHtml = createSecure3dEmvForm(updateResponse);
//       document.getElementById("challengeFrame")?.insertAdjacentHTML("afterend", secure3dFormHtml);

//       const handle3DSecureCallback = async (event: MessageEvent) => {
//         const simplifyDomain = "https://simplify.com";
//         if (event.origin === simplifyDomain) {
//           const threedsResponse = JSON.parse(event.data);
//           if (threedsResponse?.secure3d?.authenticated) {
//             const completePayload = {
//               amount: formData.amount,
//               currency: updateResponse.currency,
//               description: "Payment description",
//               token: updateResponse.token,
//             };

//             // Step 5: Complete the payment
//             const completeResponse = await fetch("/complete", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(completePayload),
//             }).then((res) => res.json());

//             if (completeResponse.success) {
//               setPaymentSuccess(true);
//             }
//           }
//         }
//       };

//       // Step 4: Listen for 3D Secure callback
//       window.addEventListener("message", handle3DSecureCallback);
//     } catch (error) {
//       console.error("Payment processing error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Payment Form</h1>
//       <form id="simplify-payment-form" onSubmit={processPayment}>
//         <div>
//           <label>Card Number</label>
//           <input
//             type="text"
//             name="cc_number"
//             value={formData.cc_number}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Expiry Month</label>
//           <select
//             name="cc_exp_month"
//             value={formData.cc_exp_month}
//             onChange={handleInputChange}
//           >
//             {Array.from({ length: 12 }, (_, i) => {
//               const value = (i + 1).toString().padStart(2, "0");
//               const label = new Date(0, i).toLocaleString("en-US", { month: "short" });
//               return (
//                 <option key={value} value={value}>
//                   {label}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div>
//           <label>Expiry Year</label>
//           <select
//             name="cc_exp_year"
//             value={formData.cc_exp_year}
//             onChange={handleInputChange}
//           >
//             {[2025, 2026, 2027].map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label>CVC</label>
//           <input
//             type="text"
//             name="cc_cvc"
//             value={formData.cc_cvc}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Amount</label>
//           <input
//             type="text"
//             name="amount"
//             value={formData.amount}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Currency</label>
//           <select
//             name="currency"
//             value={formData.currency}
//             onChange={handleInputChange}
//           >
//             {["USD", "EUR", "GBP"].map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Submit Payment</button>
//       </form>

//       {paymentSuccess && (
//         <div className="alert alert-success" role="alert">
//           Payment was processed successfully.
//         </div>
//       )}
//       <iframe name="secure3d-frame" id="secure3d-frame" style={{ display: iframeSrc ? "block" : "none" }} />
//     </div>
//   );
// };

// export default PaymentForm;
