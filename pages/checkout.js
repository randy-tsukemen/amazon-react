import Image from "next/image";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { basketState } from "../atoms/basketAtom";
import CheckoutProduct from "../components/CheckoutProduct";

const Checkout = () => {
  const [basket, setBasket] = useRecoilState(basketState);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
            alt=""
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4">
              {basket.items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shoppint Basket"}
            </h1>
            {basket.items.map(
              (
                { id, title, price, description, category, image, hasPrime },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  hasPrime={hasPrime}
                />
              )
            )}
          </div>
        </div>
        {/* Right */}
      </main>
    </div>
  );
};

export default Checkout;
