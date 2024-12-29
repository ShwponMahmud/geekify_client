import { useAppSelector } from "@/app/rtk-state/hooks";
import Payment from "../Payment/Payment";

function PaymentDetails() {
  const bookingSummerySubmitResData = useAppSelector(
    (state) => state?.booking.bookingSummerySubmitResData
  );

  console.log(bookingSummerySubmitResData);

  return (
    <>
      <div className="payment_details_section pt-5">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold">
            Payment Details
          </h2>
          <div className="w-[40%] mx-auto mt-5 border rounded-lg text-deepGrayColor overflow-hidden">
            <div className="text-deepGrayColor font-semibold text-[17px] flex justify-between bg-[#f2f2f2] px-5 py-3">
              <span>Details</span> <span>Price</span>
            </div>
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Service</b>
              <span>
                ${" "}
                {(bookingSummerySubmitResData?.service_price / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Surcharge</b>
              <span>
                $
                {(bookingSummerySubmitResData?.total_surcharge_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Sub Total</b>
              <span>
                $
                {(bookingSummerySubmitResData?.subtotal_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Discount</b>
              <span>
                $
                {(bookingSummerySubmitResData?.total_discount_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>GST</b>
              <span>
                $
                {(bookingSummerySubmitResData?.gst_charge?.amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 bg-[#f2f2f2]">
              <b>Total Payable</b>
              <span>
                $
                {(bookingSummerySubmitResData?.grand_total / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between bg-[#b8f7de] px-5 py-3">
              <b>Paid</b>
              <span>
                $
                {(bookingSummerySubmitResData?.grand_total / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </div>

          <Payment/>
        </div>
      </div>
    </>
  );
}

export default PaymentDetails;
