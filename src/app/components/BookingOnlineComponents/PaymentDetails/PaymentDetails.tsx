import { useAppSelector } from "@/app/rtk-state/hooks";
import Payment from "../Payment/Payment";
import CustomCheckbox from "./CheckBox";

function PaymentDetails() {
  const bookingInfo = useAppSelector((state) => state?.booking);
  const bookingSummerySubmitResData = useAppSelector(
    (state) => state?.booking.bookingSummerySubmitResData
  );
  const paymentInfo = useAppSelector((state) => state?.payment);

  const grandTotal = parseFloat((bookingSummerySubmitResData?.grand_total / 100).toFixed(2))



  return (
    <>
      <div className="payment_details_section pt-5">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold">
            Payment Details
          </h2>
          <div className="w-[50%] mx-auto mt-5 border rounded-lg text-deepGrayColor overflow-hidden">
            <div className="text-deepGrayColor font-semibold text-[17px] flex justify-between bg-[#f2f2f2] px-8 py-3">
              <span>Details</span> <span>Price</span>
            </div>
            <div className="flex justify-between px-8 py-3 font-semibold text-[14px] text-gray-500">
              <b>Service</b>
              <span>
                ${" "}
                {(bookingSummerySubmitResData?.service_price / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-8 py-3 font-semibold text-[14px] text-gray-500">
              <b>Surcharge</b>
              <span>
                $
                {(bookingSummerySubmitResData?.total_surcharge_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-8 py-3 font-semibold text-[14px] text-gray-500">
              <b>Sub Total</b>
              <span>
                $
                {(bookingSummerySubmitResData?.subtotal_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-8 py-3 font-semibold text-[14px] text-gray-500">
              <b>Discount</b>
              <span>
                $
                {(bookingSummerySubmitResData?.total_discount_amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-8 py-3 font-semibold text-[14px] text-gray-500">
              <b>GST</b>
              <span>
                $
                {(bookingSummerySubmitResData?.gst_charge?.amount / 100)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            <div className="flex justify-between px-8 py-3 font-semibold bg-[#fcdddde0] text-gray-600">
              <b>Total Payable</b>
              <span>
                $
                {grandTotal.toString()}
              </span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold bg-[#b8f7de80] px-8 py-3 text-gray-600">
              <b>Paid</b>
              <span>
                $
                {(bookingInfo?.paymentOptionSelected == "half"
                  ? paymentInfo?.paymentOptionHalfAmountAfterDiscount
                  : bookingInfo?.paymentOptionSelected == "quarter"
                  ? paymentInfo?.paymentOptionQuarterAmountAfterDiscount
                  : grandTotal
                )
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <hr />
            {bookingInfo?.paymentOptionSelected == "half" ? (
              <div className="flex justify-between font-semibold bg-[#8fb6ff5b] px-8 py-3 text-gray-600">
                <b>Remaining</b>
                <span>
                  $
                  {(
                    bookingInfo?.paymentOptionSelected == "half" &&
                     (grandTotal - parseFloat(paymentInfo?.paymentOptionHalfAmountAfterDiscount)).toFixed(2)
                  )
                    }
                </span>
              </div>
            ) : (
              bookingInfo?.paymentOptionSelected == "quarter" && (
                <div className="flex justify-between font-semibold bg-[#8fb6ff5b] px-8 py-3 text-gray-600">
                  <b>Remaining</b>
                  <span>
                    $
                    {(bookingInfo?.paymentOptionSelected == "quarter" && (grandTotal - parseFloat(paymentInfo?.paymentOptionQuarterAmountAfterDiscount)).toFixed(2))}
                  </span>
                </div>
              )
            )}
          </div>

          <Payment />
        </div>
      </div>
    </>
  );
}

export default PaymentDetails;
