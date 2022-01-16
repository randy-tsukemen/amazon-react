import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  return (
    <div>
      <p>{category}</p>
      <Image src={image} width={200} height={200} objectFit="contain" alt="" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" key={i} />
          ))}
      </div>

      <p>{description}</p>

      <div>
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(price)}
      </div>
      {hasPrime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="" />
        </div>
      )}
    </div>
  );
};

export default Product;
