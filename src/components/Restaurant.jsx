"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Albaik from "../../public/images/AlBAaik.png";
import KFC from "../../public/images/KFC_logo.png";
import Herfy from "../../public/images/Herfy_logo.png";
import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

import broastPic from "../../public/images/AlBaikpic1.JPG";
import AlBaikpic3 from "../../public/images/AlBaikpic3.JPG";
import albaik03 from "../../public/images/albaik03.jpg";

import banner1 from "../../public/images/banner1.jpg";
import banner2 from "../../public/images/banner2.jpg";

const food = [
  {
    id: 1,
    name: "AlbAik Chicken Fries",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik01.jpg",
  },
  {
    id: 2,
    name: "McDonalds Chicken Broast",
    price: "27.95",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik.JPG",
  },
  {
    id: 3,
    name: "/images/chickenRice.png",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik01.jpg",
  },
  {
    id: 4,
    name: "Special Chicken Rice with Dry Fruits",
    price: "33.0",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/chickenRice.png",
  },
  {
    id: 5,
    name: "KFC Chicken Broast",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/kfc.jpg",
  },
  {
    id: 6,
    name: "Vegetable Pizza",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/food3.jpg",
  },
  {
    id: 7,
    name: "AlbAik Chicken Fries",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik01.jpg",
  },
  {
    id: 8,
    name: "AlbAik Chicken Fries",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik01.jpg",
  },
  {
    id: 9,
    name: "AlbAik Chicken Fries",
    price: "17.50",
    desc: "Description AlbAik Chicken Fries",
    img: "/images/albaik01.jpg",
  },
];
export default function Restaurant() {
  const router = useRouter();

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  return (
    <div className="bg-gray-100 pt-5">
      <div className="flex my-10 items-center gap-5 justify-between">
        <div className="w-2/4 px-5 h-96">
          <Image src={banner1} alt="banner" className="w-full h-full" />
        </div>
        <div className=" w-2/4 px-5 h-96">
          <Image src={banner2} alt="banner" className="w-full h-full" />
        </div>
      </div>
      <div className="ml-7 py-1 w-24 flex rounded-full bg-orange-400 items-center justify-center">
        <h1 className="text-white">Foods</h1>
      </div>
      <div className="flex p-7 gap-5 flex-row">
        <div
          onClick={() => router.push("/Restaurants")}
          className="relative rounded-md p-1 bg-white hover:scale-105 ease-in-out duration-300 cursor-pointer shadow-2xl shadow-orange-400 w-2/6 h-[40vh]"
        >
          <Image src={Albaik} alt="banner" className="absolute m-2 w-20 h-20" />
          <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
            <BiHeart className="size-6 text-blue-900" />
          </div>
          <div className="absolute text-white left-3 bottom-3">
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="font-bold"
            >
              7 Piece Chicken Nuggets Meal
            </p>
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-sm text-white text-stroke w-2/4"
            >
              Spicy and crunchy to perfection includes a bun, fries, and 2
              nuggets
            </p>
          </div>
          <div>
            <div className="absolute text-gray-600 right-20 bottom-3 h-7 w-28 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60 bg-white">
              <div className="flex">
                <span className="font-bold">4.30</span>
                <FaStar className="mt-1 ml-1" size={15} color="orange" />
              </div>
              <div>
                <p>(1.1k)</p>
              </div>
            </div>
            <button className="absolute rounded-full px-2 h-7 bg-orange-400 text-white bottom-3 right-3">
              Order
            </button>
          </div>
          <Image
            src={albaik03}
            alt="menu"
            className="w-full -z-50 rounded-md h-full"
          />
        </div>
        <div className="relative rounded-md text-gray-600 p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out bg-white shadow-2xl shadow-orange-400 w-2/6 h-[40vh]">
          <Image src={Herfy} alt="logo" className="absolute m-2 w-20 h-20" />
          <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
            <BiHeart className="size-6 text-blue-900" />
          </div>
          <div className="absolute text-white left-3 bottom-3">
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="font-bold"
            >
              7 Piece Chicken Nuggets Meal
            </p>
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-sm text-white text-stroke w-2/4"
            >
              Spicy and crunchy to perfection includes a bun, fries, and 2
              nuggets
            </p>
          </div>
          <div>
            <div className="absolute right-20 text-gray-600 bottom-3 h-7 w-28 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60 bg-white">
              <div className="flex">
                <span className="font-bold">4.20</span>
                <FaStar className="mt-1 ml-1" size={15} color="orange" />
              </div>
              <div>
                <p>(1.2k)</p>
              </div>
            </div>
            <button className="absolute rounded-full px-2 h-7 bg-orange-400 text-white bottom-3 right-3">
              Order
            </button>
          </div>
          <Image
            src={AlBaikpic3}
            alt="menu"
            className="w-full -z-50 rounded-md h-full"
          />
        </div>
        <div className="relative rounded-md text-gray-600 p-1 bg-white cursor-pointer hover:scale-105 duration-300 ease-in-out shadow-2xl shadow-orange-400 w-2/6 h-[40vh]">
          <Image src={KFC} alt="logo" className="absolute m-2 w-20 h-20" />
          <div className="bg-white opacity-90 absolute right-2 top-2 cursor-pointer rounded-full p-1.5">
            <BiHeart className="size-6 text-blue-900" />
          </div>
          <div className="absolute text-white left-3 bottom-3">
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="font-bold"
            >
              7 Piece Chicken Nuggets Meal
            </p>
            <p
              style={{
                textShadow: "0px 1px 4px #2a2b2e",
              }}
              className="text-sm text-white text-stroke w-2/4"
            >
              Spicy and crunchy to perfection includes a bun, fries, and 2
              nuggets
            </p>
          </div>
          <div>
            <div className="absolute right-20 bottom-3 h-7 w-28 px-2 rounded-full items-center flex justify-between flex-row bg-opacity-60 bg-white">
              <div className="flex">
                <span className="font-bold">4.6</span>
                <FaStar className="mt-1 ml-1" size={15} color="orange" />
              </div>
              <div>
                <p>(1.0k)</p>
              </div>
            </div>
            <button className="absolute rounded-full px-2 h-7 bg-orange-400 text-white bottom-3 right-3">
              Order
            </button>
          </div>
          <Image
            src={broastPic}
            alt="menu"
            className="w-full -z-50 rounded-md h-full"
          />
        </div>
      </div>
      <div className="flex mt-3 relative items-center">
        <button>
          <FaCircleChevronLeft
            onClick={slideLeft}
            className="size-7 text-blue-900 z-50"
          />
        </button>
        <div
          id="slider"
          className="flex overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row"
        >
          <div className="flex my-5 gap-3">
            {food.map((item, index) => (
              <div
                key={index}
                className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52"
              >
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-44">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        style={{ width: "100%", height: "100%" }} // optional
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="h-7 w-28 text-sm text-gray-600 px-2 rounded-full items-center flex justify-between flex-row bg-white">
                      <div className="flex">
                        <span className="font-bold">4.00</span>
                        <FaStar
                          className="mt-0.5 ml-1"
                          size={15}
                          color="orange"
                        />
                      </div>
                      <div>
                        <p>(1.6k)</p>
                      </div>
                    </div>
                    <div className="bg-orange-400 cursor-pointer rounded-full p-1">
                      <p className="text-white text-sm">Order</p>
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">{item.name}</h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button>
          <FaCircleChevronRight
            onClick={slideRight}
            className="size-7 text-blue-900 z-50"
          />
        </button>
      </div>
    </div>
  );
}
