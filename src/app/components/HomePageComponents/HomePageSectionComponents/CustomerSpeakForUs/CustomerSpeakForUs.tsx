import Image from "next/image";
import "./CustomerSpeakForUs.css";
// import RatingCard from "./RatingCard/RatingCard";
import { baseUrl } from "@/assets/baseUrl";
import TruncateText from "@/app/components/sharedComponents/TruncateText/TruncateText";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";


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


async function CustomerSpeakForUs() {
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
            {customerReviews?.map((customerReview) => (
              <div className="customer_speak_content_card mb-10">
                <div className="customer_avatar">
                  <Image
                    src={customerReview?.user?.avatar}
                    alt="customer"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>

                <div className="customer_name_title">
                  <h4 className="text-xl font-semibold">{customerReview?.user?.full_name}</h4>
                  <p className="text-[14px] text-grayColor">{customerReview?.created_at}</p>
                </div>
                <div className="customer_message">
                  {TruncateText(customerReview?.comment, 20)}
                </div>

                {/* <RatingCard rating={review.rating}  /> */}

                <div className="justify-items-center py-4">
                  <CardFooter rating={customerReview.rating} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-28">
            <Link href={"/customer-review"}>
              {" "}
              <button className="bg-primaryColor text-white rounded-md py-[10px] px-[20px]">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSpeakForUs;
