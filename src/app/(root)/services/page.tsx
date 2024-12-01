import SearchService from "@/app/components/ServiceComponents/SearchService/SearchService";
import Services from "@/app/components/ServiceComponents/Services/Services";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import Showcase from "@/app/components/Showcase/Showcase";
import React from "react";

const title: string = "If you need remote Service?";

function page() {
  return (
    <div>
      <Showcase backgroundImage='/service-image.png' title='Browse Our' highlights='Resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>
      <SearchService />
      <Services />
      <QuickContact title={title} />
    </div>
  );
}

export default page;
