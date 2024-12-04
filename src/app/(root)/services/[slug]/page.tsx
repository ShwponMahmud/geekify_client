import ServiceDetails from "@/app/components/ServiceDetails/ServiceDetails";
import { baseUrl } from "@/assets/baseUrl";
import React from "react";

interface ServiceDetailsParams {
  params: { slug: string };
}

interface Service {
  name: string;
  slug: string;
  meta_author: string,
  meta_keywords: string,
  meta_description: string;
  description: string,
  image: any;
}

async function page({ params }: ServiceDetailsParams) {
  const { slug } = params;

  // console.log(slug)

  let service: Service | null = null

  try {
    const response = await fetch(`${baseUrl}/services/slug/${slug}?with_relation[]=media`, {
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch service");
    }

    const responseData = await response.json();

    service = responseData.data || null;

  } catch (error) {
    console.error("Error fetching service:", error);
  }
  return (
    <>
      <ServiceDetails service={service} />
    </>
  );
}

export default page;
