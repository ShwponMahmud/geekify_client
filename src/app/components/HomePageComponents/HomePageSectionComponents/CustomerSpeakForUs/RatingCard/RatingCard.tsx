import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // e.g., 4.5
  totalStars?: number; // Default to 5 stars
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

const RatingCard: React.FC = () => (
  <div className="justify-items-center py-4">
    <CardFooter rating={4.5} />
  </div>
);

export default RatingCard;
