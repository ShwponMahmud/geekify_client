import React from "react";

function BookingTermsAndConditions() {
  return (
    <div className="container mx-auto  py-10">
      <div className="m-5 bg-[#f1f1f1] p-10 rounded-lg">
        <h2 className="text-2xl font-bold text-black text-left">
          Booking Terms And Conditions
        </h2>

        <ul className="text-black font-medium ">
          <li>1. Only Service Charge with GST</li>
          <li>2. Excludes all components & parts (if used)</li>
          <li>3. Excludes any Transportation cost (if used)</li>
          <li>
            4. Fees include the call-out plus the first 1hr service and are
            non-refundable after the tech made the visit.
          </li>
          <li>5. Surcharge applies based on the distance.</li>
          <li>
            6. We are fully mobile and our techs visit you onsite (location
            provided by you during the booking) or provide remote support when
            specially requested as{" "}
            <span className="text-red-700">“remote support”</span>.
          </li>
          <li>7. Same-day booking will be attracting an additional 20%.</li>
          <li>
            8. The promotional 10% discount on weekdays will not apply unless
            there is free/unpaid parking at your address.
          </li>
          <li>
            9. For appointments made within the same day, 100% cancellation fee
            applies.
          </li>
          <li>
            10. For appointments made within 48 hours, 50% cancellation fee
            applies or 100% can be credited for your next booking.
          </li>
          <li>
            11. If we cancel or reschedule an appointment, then we shall notify
            the client 12 hours earlier at the least and if we fail to do so
            then a 20% discount will be given to customers.
          </li>
          <li>
            12. For refunds for cancelled service, appointments or orders -
            while they are issued almost immediately, most refunds arrive within
            10-15 business days. Furthermore, for some payment methods, this
            might take longer. We'll email you once the refund has been
            confirmed from our end.
          </li>
          <li>
            13. Promotional discount codes are only valid once per customer and
            can only be applied to the initial booking fee only.
          </li>
          <li>
            14. We will prioritize your appointment time, but during peak days,
            please note that we may reach out to you to make changes to the
            schedule. One of our back office team members will contact you if
            needed.
          </li>
          <li>
            15. The technician may arrive 1-3 hours after your scheduled
            appointment time. This allows for any unexpected delays or issues
            beyond our control that could make the technician arrive later than
            planned. In some cases, our technicians may arrive earlier than the
            scheduled appointment time. If this occurs, we will notify you in
            advance before the technician's arrival, allowing you to prepare
            accordingly. Please be available during this time to ensure smooth
            delivery.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookingTermsAndConditions;
