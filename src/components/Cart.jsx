import Image from "next/image";
import Link from "next/link";
import { IoTrashOutline } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "@/components/Context";

export default function Cart({ cartItems, removeFromCart }) {
  const { handleAddToCart } = useContext(Context);

  // Calculate total price
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const storeData = () => {
    // Save extractedValues to local storage when it changes
    localStorage.setItem("orderData", JSON.stringify(cartItems));
  };

  const checkCart = () => {
    console.log("cart data ", cartItems);

    const extractedValues = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      desc: item.desc,
      img: item.img,
      quantity: item.quantity,
    }));

    handleAddToCart(extractedValues); // Pass extractedValues instead of cartItems
  };

  return (
    <div className="flex items-center rounded-xl flex-col pb-10 h-1/2 bg-white shadow-[0px_5px_10px_#bab6b5] w-4/12">
      <div className="flex justify-center items-center mt-5 w-2/4">
        <h1 className="text-lg text-blue-900 font-extrabold">Your Orders</h1>
      </div>
      <div className="flex flex-col px-3">
        {cartItems.length === 0 ? (
          <div className="flex text-blue-900 justify-center items-center h-28">
            Your Cart is empty. Add your favorite foods.
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex h-full w-full text-blue-900 gap-4 mt-5 items-center justify-between flex-row"
              >
                <div className="flex gap-3 justify-center items-center">
                  <Image
                    src={item.img}
                    className="rounded-full"
                    width={60}
                    height={60}
                    alt="items"
                  />
                </div>
                <div className="w-20">
                  <p>{item.name}</p>
                </div>
                <p>SAR {item.price}</p>
                <p>Quantity {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  <IoTrashOutline className="text-blue-900 size-4" />
                </button>
              </div>
            ))}
            <div className="flex gap-3 my-2 flex-row-reverse">
              <p className="font-bold text-blue-900">{total}</p>
              <p className="font-bold text-blue-900">Total</p>
            </div>
            <button
              onClick={storeData}
              className="w-2/4 to-blue-900 text-sm self-center h-8 ease-in-out duration-200 hover:bg-blue-800 active:bg-orange-400 rounded-full text-white bg-blue-900"
            >
              <Link
                href={{
                  pathname: "/Checkout",
                  query: {
                    extractedValues: JSON.stringify(
                      cartItems.map((item) => ({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        desc: item.desc,
                        img: item.img,
                        quantity: item.quantity,
                      }))
                    ),
                  },
                }}
              >
                Checkout
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
