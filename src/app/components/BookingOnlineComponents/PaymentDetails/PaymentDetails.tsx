import React from "react";

function PaymentDetails() {
  return (
    <>
      <div className="payment_details_section pt-5">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-semibold">
            Payment Details
          </h2>
          <div className="w-[40%] mx-auto mt-5 border rounded-lg text-deepGrayColor">
            <div className="text-deepGrayColor font-semibold text-[17px] flex justify-between bg-[#f2f2f2] px-5 py-3">
              <span>Details</span> <span>Price</span>
            </div>
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Service</b>
              <span>$200.00</span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Surcharge</b>
              <span>$52.00</span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Sub Total</b>
              <span>$252.00</span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>Discount</b>
              <span>$252.00</span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 text-[13px] text-gray-500">
              <b>GST</b>
              <span>$252.00</span>
            </div>
            <hr />
            <div className="flex justify-between px-5 py-3 bg-[#f2f2f2]">
              <b>Total Payable</b>
              <span>$252.00</span>
            </div>
            <hr />
            <div className="flex justify-between bg-[#b8f7de] px-5 py-3">
              <b>Paid</b>
              <span>$252.00</span>
            </div>
          </div>

          <div className="payment w-[40%] mx-auto mt-5">
            <div className="apply_coupon_container">
              <div className="flex gap-2 text-[20px] font-semibold items-center">
                <input type="checkbox" className="w-5 h-5" />
                <label htmlFor="">Apply Coupon</label>
              </div>
              <form action="" className="flex">
                <input
                  type="text"
                  placeholder="Enter a Coupon Code"
                  className="border p-[10px] w-[100%] mt-4 rounded-md"
                />
                <button className="bg-primaryColor text-white rounded-md py-[10px] px-[20px] mt-4 ml-3">
                  Apply
                </button>
              </form>
            </div>

            <div className="card_after_pay_container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentDetails;
