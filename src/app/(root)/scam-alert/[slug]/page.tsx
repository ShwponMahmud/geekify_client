import ScamAlertDetails from "@/app/components/ScamAlertComponents/ScamAleartDetails/ScamAlertDetails";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import { baseUrl } from "@/assets/baseUrl";

const title: string =
  "If you don’t find your service need please contact with us.";


interface ScamDetailsParams {
  params: { slug: string };
}

interface ScamDetails {
  name: string;
  slug: string;
  body: string,
  description: string,
  image: any;
  title: string;
}

async function page({ params }: ScamDetailsParams) {
  const { slug } = params;

  let scamDetails: ScamDetails | null = null;

  try {
    const response = await fetch(
      `${baseUrl}/posts/slug/${slug}?with_relation[]=postCategory&with_relation[]=tags&with_relation[]=owner&order_by_created_at=DESC&order_by_read_count=DESC&with_relation[]=media`,
      {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch single scam alert");
    }

    const responseData = await response.json();

    scamDetails = responseData.data || [];
  } catch (error) {
    console.error("Error fetching single scam alert:", error);
  }
  
  return (
    <>
      <div className="scam_alert_details_page">
        <ScamAlertDetails scamDetails={scamDetails}/>
        <QuickContact title={title} />
      </div>
    </>
  );
}

export default page;
