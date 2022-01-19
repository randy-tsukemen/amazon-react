import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { basketState } from "../atoms/basketAtom";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) => {
  const [basket, setBasket] = useRecoilState(basketState);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    const newBasket = [...basket.items, product];
    setBasket({ items: newBasket });
  };

  const removeItemFromBasket = () => {
    // const newBasket = basket.items.filter((item) => item.id !== id);
    const index = basket.items.findIndex((item) => item.id === id);
    const newBasket = [
      ...basket.items.slice(0, index),
      ...basket.items.slice(index + 1),
    ];
    setBasket({ items: newBasket });
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" alt="" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(price)}
        {hasPrime && (
          <div className="flex items-center space-x-3">
            <img
              className="w-12"
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
