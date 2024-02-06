"use client";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "@/components/Context";

export default function page() {
  const { cartItems } = useContext(Context);

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <h1 className="text-2xl text-blue-900 font-extrabold">Checkout</h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex gap-5 pb-10 text-blue-900 px-36">
        <div className="flex flex-col h-96 w-2/4">
          <div className="flex p-2 flex-col w-full">
            <h1 className="text-xl mt-4 font-bold">Your Address</h1>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex gap-4 w-full">
              <div className="w-2/4">
                <p className="text-sm m-1 font-bold text-blue-900">City</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-7/12 h-auto">
          <div className="flex w-full">
            <div className="flex p-2 flex-col w-full">
              <div className="flex justify-center items-center  gap-1">
                <h1 className="text-xl my-4 font-bold">Your </h1>
                <h1 className="text-xl my-4 text-orange-400 font-bold">
                  Order
                </h1>
              </div>
              <div className="flex p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-16 p-1 rounded-full h-16 ">
                          <Image
                            alt="item-image"
                            src={item.img}
                            className="rounded-full w-full h-full"
                            width={50}
                            height={50}
                          />
                        </div>
                        <p>{item.quantity}</p>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                      </div>
                      <p className="font-bold">{item.price}.0</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-200"></div>
                  </div>
                ))}
                <div className="flex justify-between items-center w-full h-14">
                  <p className="flex">Subtotal Inc Vat</p>
                  <p className="flex">SAR Total</p>
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="flex justify-between items-center w-full h-14">
                  <p className="flex">Delivery</p>
                  <p className="flex">SAR 10.0</p>
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="flex font-bold justify-between items-center w-full h-14">
                  <p className="flex">Total</p>
                  <p className="flex">SAR Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}