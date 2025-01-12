import SearchService from "@/app/components/ServiceComponents/SearchService/SearchService";
import Services from "@/app/components/ServiceComponents/Services/Services";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import Showcase from "@/app/components/Showcase/Showcase";
import { baseUrl } from "@/assets/baseUrl";
import React from "react";

interface Service {
  slug: string;
  name: string;
  meta_description: string;
  image: string;
}

const title: string = "If you need remote Service?";

const page = async () => {
  let services: Service[] = [];

  // console.log(services)

  try {
    const response = await fetch(`${baseUrl}/services?with_relation[]=media`, {
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const responseData = await response.json();
    services = responseData.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  return (
    <div>
      <Showcase
        backgroundImage="/service-image.png"
        title="Browse Our"
        highlights="Resources"
        paragraph="Find the type of service you need, clearly defined and ready to start. Work begins as soon as you book and provide requirements."
      />
      <SearchService />
      <Services services={services} />
      <QuickContact title={title} />
    </div>
  );
}

export default page;
