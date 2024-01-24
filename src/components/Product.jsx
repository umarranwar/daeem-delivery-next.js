import React from "react";
import Image from "next/image";
import Albaik from "../../public/images/AlBAaik.png";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import albaik03 from "../../public/images/albaik03.jpg";

export default function Product({
  id,
  name,
  price,
  desc,
  img,
  addToCart,
  showModel,
}) {
  const handleAddToCart = () => {
    // addToCart({ id, name, price, img });
    showModel();
  };

  return (
    // <div
    //   onClick={handleAddToCart}
    //   className="flex flex-col cursor-pointer justify-between shadow-2xl hover:shadow-2xl transform ease-in-out duration-300"
    // >
    //   <div className="flex w-52 h-52">
    //     <Image src={img} width={300} height={300} />
    //   </div>
    //   <div className="flex items-center p-2 justify-between">
    //     <p className="text-gray-700">{name}</p>
    //     <p className="text-gray-700">SAR {price}</p>
    //   </div>
    // </div>
    <div
      onClick={handleAddToCart}
      className="flex rounded-md cursor-pointer shadow-[0px_5px_10px_#f28d35] p-1 bg-white "
    >
      <div className="relative w-48 h-40">
        <Image
          src={img}
          fill
          className="rounded-md hover:scale-105 ease-in-out duration-300"
        />
        <div className="bg-white opacity-80 absolute right-1 top-1 cursor-pointer rounded-full p-1.5">
          <BiHeart className="size-4 text-blue-900" />
        </div>
        <div className="absolute bottom-0 left-1 w-3/4">
          <p
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-white"
          >
            SAR {price}
          </p>
          <p
            style={{
              textShadow: "0px 1px 4px #2a2b2e",
            }}
            className="text-white"
          >
            {name}
          </p>
        </div>
        <div className="absolute bottom-1 px-1 right-2 rounded-full bg-orange-400">
          <p className="text-sm text-white">Order</p>
        </div>
      </div>
    </div>
  );
}
