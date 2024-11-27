import SearchService from "@/app/components/ServiceComponents/SearchService/SearchService";
import Services from "@/app/components/ServiceComponents/Services/Services";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import React from "react";

const title: string = "If you need remote Service?";

function page() {
  return (
    <div>
      <SearchService />
      <Services />
      <QuickContact title={title} />
    </div>
  );
}

export default page;
