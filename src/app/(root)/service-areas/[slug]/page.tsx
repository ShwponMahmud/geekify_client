import ServiceArea from "@/app/components/ServiceAreasComponent/ServiceArea/ServiceArea";
import { redirect } from "next/navigation";
import { ServiceAreasData } from "@/assets/data/ServiceAreasData";

interface ServiceAreaParams {
  params: { slug: string };
}

function page({ params }: ServiceAreaParams) {
  const { slug } = params;

  // const area = ServiceAreasData.map((area) => area?.slug);
  // const distArea = ServiceAreasData.map((area) =>
  //   area?.districtAreas?.map((distArea) => distArea.slug)
  // );


  // if (slug !== "New-South-Wales") {
  //   redirect(`/service-areas/${area}/${distArea}`);
  // }

  return (
    <div>
      <ServiceArea slug={slug} />
    </div>
  );
}

export default page;
