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
    //   // onClick={handleAddToCart}
    //   className="flex rounded-md cursor-pointer shadow-[0px_5px_10px_#f28d35] p-1 bg-white "
    // >
    //   <div className="relative w-60 h-40">
    //     <Image
    //       priority={false}
    //       src={img}
    //       width={200}
    //       height={200}
    //       alt="cartImage"
    //       className="rounded-md w-full h-full hover:scale-105 ease-in-out duration-300"
    //     />
    //     <div className="bg-white opacity-80 absolute right-1 top-1 cursor-pointer rounded-full p-1.5">
    //       <BiHeart className="size-4 text-blue-900" />
    //     </div>
    //     <div className="absolute bottom-0 left-1 w-3/4">
    //       <p
    //         style={{
    //           textShadow: "0px 1px 4px #2a2b2e",
    //         }}
    //         className="text-white"
    //       >
    //         SAR {price}
    //       </p>
    //       <p
    //         style={{
    //           textShadow: "0px 1px 4px #2a2b2e",
    //         }}
    //         className="text-white"
    //       >
    //         {name}
    //       </p>
    //     </div>
    //     <div className="absolute bottom-1 px-1 right-2 rounded-full bg-orange-400">
    //       <p className="text-sm text-white">Order</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="flex w-1/3 h-full justify-center items-center">
        <Image
          src={img}
          width={200}
          height={200}
          className="w-full rounded-lg h-full"
        />
      </div>
      <div className="flex flex-col justify-between w-2/3 pl-2 h-full">
        <div>
          <div className="flex text-sm text-gray-700 font-semibold justify-between">
            <div className="w-32">
              <h1>{name}</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="text-sm">SR {price}.0</h1>
              <BiHeart className="cursor-pointer size-5 text-blue-900" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm">{desc}</p>
          </div>
        </div>
        <div className="flex justify-between my-1 items-center">
          <div className="flex ml-5 items-center">
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <FaStar size={15} color="orange" />
            <p className="text-sm ml-2">89</p>
          </div>
          <button className="text-xs ease-in-out duration-300 hover:bg-blue-900 active:bg-orange-400 text-white rounded-2xl py-0.5 bg-orange-400 px-3">
            Order Now
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-between w-5 h-full">
        <BiHeart className="cursor-pointer size-5 text-blue-900" />
        <div className="flex bg-gray-400 rounded-full p-1 flex-col justify-center items-center">
          <h1 className="text-sm">SAR</h1>
          <h1 className="text-sm">{price}.0</h1>
        </div>
      </div> */}
    </>
  );
}
