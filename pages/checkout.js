import Image from "next/image";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { basketState } from "../atoms/basketAtom";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [basket, setBasket] = useRecoilState(basketState);
  const { data: session, status } = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the Stripe API to create a checkout session for the order
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: basket.items,
      email: session.user.email,
    });
  };

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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {basket.items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({basket.items.length} items):{""}
              </h2>
              <span className="font-bold">
                {new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "JPY",
                }).format(
                  basket.items.reduce((acc, { price }) => acc + price, 0)
                )}
              </span>
              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Login to Checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
