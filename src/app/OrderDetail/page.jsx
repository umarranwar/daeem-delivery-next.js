"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";

import { IoFastFoodOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

export default function Page() {
  // Retrieve the extractedValues parameter from the URL
  const searchParams = useSearchParams();
  const extractedValuesParam = searchParams.get("orderDetail");
  const extractedValuesParam2 = searchParams.get("userAddress");

  // Parse the extractedValues parameters into an array and an object
  const OrderDetail = extractedValuesParam
    ? JSON.parse(extractedValuesParam)
    : [];
  const Address = extractedValuesParam2
    ? JSON.parse(extractedValuesParam2)
    : [];
  const totalPrice = OrderDetail.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  console.log("extractedValues from OrderDetail", OrderDetail);
  console.log("extractedValues from UserAddress", Address);

  return (
    <div className="flex flex-col text-blue-900 justify-center items-center">
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <div className="flex absolute left-5 items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/AlBAaik.png"
                className="w-full h-full"
                width={50}
                height={50}
                alt="AlBAik Logo"
              />
            </div>
            <p className="font-bold ml-2">AlBAik</p>
          </div>
          <h1 className="text-2xl font-extrabold">Order Detail</h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-gray-300"></div>
        <p className="self-center mt-5">
          Your order has been placed and will be delivered shortly.
        </p>
      </div>
      <div className="flex gap-5 w-8/12">
        <div className="flex p-2 flex-col w-2/4">
          <div className="flex justify-center items-center">
            <h1 className="text-xl my-4 self-center font-bold">
              Delivery Address
            </h1>
            <IoLocationOutline className="size-10" />
          </div>
          <div className="flex gap-3 p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
            <div className="flex">
              <p className="font-bold mr-2">Home</p>
              <p className="">{Address.homeAddress}</p>
            </div>
            <div className="flex">
              <p className="font-bold mr-2">Street</p>
              <p className="">{Address.streetAddress}</p>
            </div>
            <div className="flex">
              <p className="font-bold mr-2">District</p>
              <p className="">{Address.district}</p>
            </div>
            <div className="flex">
              <p className="font-bold mr-2">City</p>
              <p className="">{Address.city}</p>
            </div>
          </div>
          <div className="w-full self-center mb-10 h-52 mt-8 relative">
            <Image
              src="/images/map.jpg"
              className="rounded-xl w-full h-full border-2 border-gray-200"
              width={200}
              height={200}
              alt="map-image"
            />
          </div>
        </div>
        <div className="flex p-2 flex-col w-2/4">
          <div className="flex gap-2 justify-center items-center">
            <h1 className="text-xl my-4 self-center font-bold">Your Order</h1>
            <IoFastFoodOutline className="size-9" />
          </div>
          <div className="flex p-6 mb-10 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
            {OrderDetail.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full h-14">
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src={item.img}
                      className="rounded-2xl w-auto h-auto"
                      width={50}
                      height={50}
                      alt="item"
                    />
                    <p>{item.quantity}</p>
                    <p>{item.name}</p>
                  </div>
                  <p>{item.price}</p>
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
              </div>
            ))}
            <div className="flex justify-between items-center w-full h-14">
              <p className="flex font-semibold">Subtotal</p>
              <p className="flex font-semibold">SAR {totalPrice}</p>
            </div>
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className="flex justify-between items-center w-full h-14">
              <p className="flex font-bold">Total</p>
              <p className="flex font-bold">SAR {totalPrice}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="flex font-bold">Payment</p>
              <p className="flex font-bold">{Address.paymentOption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
