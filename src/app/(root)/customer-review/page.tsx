import CustomerReview from "@/app/components/CustomerReviewComponents/CustomerReivew/CustomerReview";
import CustomerReviewShowcase from "@/app/components/CustomerReviewComponents/CustomerReviewShowcase/CustomerReviewShowcase";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import React from "react";

const title = "Need Tech Service?";

function page() {
  return (
    <div>
      <CustomerReviewShowcase />
      <CustomerReview />
      <QuickContact
        title={"Need Tech Service"}
        paragraph="Looking for reliable and expert IT support? Geekify is your trusted partner for all things tech. Contact us today to experience superior IT solutions tailored to your needs"
      />
    </div>
  );
}

export default page;
