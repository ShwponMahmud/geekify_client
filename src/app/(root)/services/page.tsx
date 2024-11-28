import SearchService from "@/app/components/ServiceComponents/SearchService/SearchService";
import Services from "@/app/components/ServiceComponents/Services/Services";
import ServiceShowcase from "@/app/components/ServiceComponents/ServiceShowcase/ServiceShowcase";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import React from "react";

const title: string = "If you need remote Service?";

function page() {
  return (
    <div>
      <ServiceShowcase/>
      <SearchService />
      <Services />
      <QuickContact title={title} />
    </div>
  );
}

export default page;
