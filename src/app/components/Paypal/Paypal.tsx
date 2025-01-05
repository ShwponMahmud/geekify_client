"use client";

import React, { useEffect, useRef, useState } from "react";

function Paypal() {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadPaypalScript = () => {
    if (document.querySelector('script[src*="paypal.com"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AVuueV_bsDOcOcanbNFTVGfyKcTVU7DjZKDsIx2bMUtHj9S1-0-yRxeLE0NtuyPK4Yfdz7K7VVnOYDFo`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadPaypalScript();
  }, []);

  useEffect(() => {
    if (scriptLoaded && paypalRef.current) {
      window.paypal
        .Buttons({
          createOrder: (data:any, actions:any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Replace with dynamic amount if needed
                  },
                },
              ],
            });
          },
          onApprove: (data:any, actions:any) => {
            return actions.order.capture().then((details:any) => {
              console.log(
                "Transaction completed by:",
                details.payer
              );
            });
          },
          onError: (err:string) => {
            console.error("PayPal Button Error:", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [scriptLoaded]);

  return (
    <div className="container mx-auto py-28 flex justify-center items-center">
      <div className="w-[100%]">
        <h1 className=" text-2xl font-bold text-center">Pay Now</h1>
        <div className="w-[100%] text-center pt-10">
          <div className="text-center">
            {scriptLoaded ? (
              <div ref={paypalRef}></div>
            ) : (
              <span>Loading PayPal Buttons...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paypal;
