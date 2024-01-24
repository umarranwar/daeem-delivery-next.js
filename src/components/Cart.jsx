// // import React from "react";
// // import Image from "next/image";

// // export default function Cart({ cartItems }) {
// //   return (
// //     <div className="flex items-center flex-col h-96 p-5 shadow-2xl w-5/12">
// //       <h1 className="text-lg text-gray-700 font-bold">Cart</h1>
// //       {cartItems.map((item) => (
// //         <li key={item.id}>
// //           {item.name} - ${item.price}
// //         </li>
// //       ))}
// //       <div className="flex mt-5 w-3/4 items-center justify-between flex-row">
// //         <div className="flex gap-3 justify-center items-center">
// //           <Image src="/images/AlBaikpic2.JPG" width={50} height={50} />
// //           <p>Chicken Nuggets</p>
// //         </div>
// //         <p>SAR 40</p>
// //       </div>
// //       <div className="flex mt-5 w-3/4 items-center justify-between flex-row">
// //         <p>Total</p>
// //         <p>SAR 40</p>
// //       </div>
// //       <div className="flex px-20 text-white py-1 mt-5 rounded-full bg-blue-900">
// //         Payment
// //       </div>
// //     </div>
// //   );
// // }

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
    <div className="flex items-center rounded-xl flex-col pb-10 h-1/2 shadow-[0px_5px_10px_#bab6b5] w-5/12">
      <div className="flex justify-center items-center mt-5 w-2/4">
        <h1 className="text-lg text-blue-900 font-extrabold">Your Orders</h1>
      </div>
      <div className="flex flex-col">
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
                  />
                </div>
                <p>{item.name}</p>
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
            <button className="w-2/4 to-blue-900 text-sm self-center h-8 ease-in-out duration-200 hover:bg-blue-800 active:bg-orange-400 rounded-full text-white bg-blue-900">
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
                Payment
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
