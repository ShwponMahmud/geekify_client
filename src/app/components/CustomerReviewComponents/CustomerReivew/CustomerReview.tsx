import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { baseUrl } from "@/assets/baseUrl";
import TruncateText from "../../sharedComponents/TruncateText/TruncateText";

interface customerReview {
  id: number;
  rating: number;
  comment: string;
  status: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    phone_number: string;
    avatar: string;
    thumbnail: string;
  };
  created_at: string;
}

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      stars.push(<FaRegStar key={i} color="gold" />);
    }
  }

  return <div style={{ display: "flex", gap: "4px" }}>{stars}</div>;
};

const CardFooter: React.FC<{ rating: number }> = ({ rating }) => (
  <div>
    <StarRating rating={rating} />
  </div>
);

async function CustomerReview() {
  let customerReviews: customerReview[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/customer-opinions?with_relation[]=user.media`,
      {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch customer review");
    }

    const responseData = await response.json();
    customerReviews = responseData.data || [];
  } catch (error) {
    console.error("Error fetching customer review:", error);
  }

  return (
    <>
      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="lg:w-[60%] text-center mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-deepGrayColor text-center mb-5">
            Our Customers Review
          </h1>
        </div>
        <div className="customer_speak_for_us_content_container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {customerReviews?.map((customerReview) => (
            <div
              key={customerReview?.id}
              className="customer_speak_content_card py-5 px-4 mt-12 border rounded-[10px] text-center text-deepGrayColor transition-[.5s] hover:shadow-hoverBoxShadow"
            >
              <div className="customer_avatar w-[100%] mt-[-60px] flex justify-center">
                <Image
                  src={customerReview?.user?.avatar}
                  alt="customer"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="customer_name_title my-5">
                <h4 className="text-xl font-semibold">
                  {customerReview?.user?.full_name}
                </h4>
                <p className="text-[14px] text-grayColor">
                  {customerReview?.created_at}
                </p>
              </div>
              <div className="customer_message h-32 text-gray-500 text-[15px]">
                {TruncateText(customerReview?.comment, 20)}
              </div>
              <hr />
              <div className="justify-items-center pt-6 pb-3">
                <CardFooter rating={customerReview.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
