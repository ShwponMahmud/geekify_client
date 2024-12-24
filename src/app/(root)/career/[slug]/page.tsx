import CareerDetailsComponents from '@/app/components/CareerDetailsComponents/CareerDetailsComponents'
import { baseUrl } from '@/assets/baseUrl';

interface CareerDetail {
  id: string;
  title: string;
  experience: string;
  end_date: string;
  description: string;
  slug: string
}

interface CareerDetailsProps {
  params: { slug: string }; // Dynamic route parameter
}
async function page({ params }: CareerDetailsProps) {
  const { slug } = await params; // Extract the ID from route params
  console.log(slug)
  let careerDetail: CareerDetail | null;

  try {
    const response = await fetch(
      `${baseUrl}/vacancies/slug/${slug}`, // Adjust the API endpoint to fetch a single vacancy
      {
        headers: {
          "content-type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch career detail");
    }

    const responseData = await response.json();
    careerDetail = responseData.data || null; // Assuming the response has a `.data` field
  } catch (error) {
    console.error("Error fetching career detail:", error);
    return <div>Error loading career detail. Please try again later.</div>;
  }
  return (
    <div>
      <CareerDetailsComponents careerDetail={careerDetail}/>
    </div>
  )
}

export default page