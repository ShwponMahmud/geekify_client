import Image from "next/image";
import "./CustomerSpeakForUs.css";
// import RatingCard from "./RatingCard/RatingCard";
import { baseUrl } from "@/assets/baseUrl";
import TruncateText from "@/app/components/sharedComponents/TruncateText/TruncateText";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface customerReview {
  id: number;
  name: string;
  rating: number;
  comment: string;
  status: string;
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

async function CustomerSpeakForUs() {
  let customerReviews: customerReview[] = [];
  const itemsPerPage = 6;

  try {
    const response = await fetch(`${baseUrl}/customer-opinions`, {
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch customer review");
    }

    const responseData = await response.json();
    customerReviews = (responseData.data || []).slice(0, 6);
  } catch (error) {
    console.error("Error fetching customer review:", error);
  }

  return (
    <>
      <div className="customer_speak_for_us_section">
        <div className="container mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h1 className="text-4xl font-bold mb-5">
              Our customer speaks for us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aut rerum tempore temporibus aspernatur nihil ad,
              delectus enim, error quos consequuntur rem officia assumenda
              repellat!
            </p>
          </div>
          <div className="customer_speak_for_us_content_container my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-16 md:mt-20 lg:mt-28">
            {customerReviews?.map((review) => (
              <div className="customer_speak_content_card mb-10">
                <div className="customer_avatar">
                  <Image
                    src="/customerImg.png"
                    alt="customer"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>

                <div className="customer_name_title">
                  <h4 className="text-xl font-semibold">Customer Name</h4>
                  <p>Customer Title</p>
                </div>
                <div className="customer_message">
                  {TruncateText(review?.comment, 20)}
                </div>

                {/* <RatingCard rating={review.rating}  /> */}

                <div className="justify-items-center py-4">
                  <CardFooter rating={review.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSpeakForUs;
