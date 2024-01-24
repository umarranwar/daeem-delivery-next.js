"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { TiShoppingCart } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";

import shoes from "../../public/images/shoes.png";
import shirt from "../../public/images/shirt.png";
import bag from "../../public/images/bag.png";
import burger from "../../public/images/burger.jpg";

import broastPic from "../../public/images/AlBaikpic1.JPG";

import albaik03 from "../../public/images/albaik03.jpg";

import nuggetsPic from "../../public/images/AlBaikpic2.JPG";

// import shawarma from "../../public/images/shawarma.jpg";
// import pizza from "../../public/images/pizza.png";
// import chickenRice from "../../public/images/chickenRice.PNG";
import Albaik from "../../public/images/AlBAaik.png";
import KFC from "../../public/images/KFC_logo.png";
// import McDonald from "../../public/images/McDonald's.png";
import Herfy from "../../public/images/Herfy_logo.png";
import { BiHeart } from "react-icons/bi";

// import Starbucks from "../../public/images/Starbucks.png";
// import AlbaikMenu from "../../public/images/albaik.JPG";
// import MicDonalds from "../../public/images/MicDonalds.jpeg";
// import kfc from "../../public/images/kfc.jpg";
import AlBaikpic3 from "../../public/images/AlBaikpic3.JPG";

import banner1 from "../../public/images/banner1.jpg";
import banner2 from "../../public/images/banner2.jpg";
import banner3 from "../../public/images/banner3.jpg";

function Ecommerce() {
  const router = useRouter();

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight02 = () => {
    var slider = document.getElementById("slider02");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };
  const slideLeft02 = () => {
    var slider = document.getElementById("slider02");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const handleDivClick = () => {
    router.push("/Restaurants"); // Navigate to the specified route
  };
  return (
    <div className="bg-gray-100 pt-5">
      <div className="flex my-10 items-center gap-5 justify-between">
        <div className="w-2/4 px-5 h-96">
          <Image src={banner1} className="w-full h-full" />
        </div>
        <div className=" w-2/4 px-5 h-96">
          <Image src={banner2} className="w-full h-full" />
        </div>
      </div>
      <div className="ml-7 py-1 w-24 flex rounded-full bg-orange-400 items-center justify-center">
        <h1 className="text-white">Foods</h1>
      </div>
      <div className="flex p-7 gap-5 flex-row">
        <div onClick={() => router.push('/Restaurants')} className="relative rounded-md p-1 bg-white hover:scale-105 ease-in-out duration-300 cursor-pointer shadow-2xl shadow-orange-400 w-2/6 h-[40vh]">
          <Image src={Albaik} className="absolute m-2 w-20 h-20" />
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
          <Image src={albaik03} className="w-full -z-50 rounded-md h-full" />
        </div>
        <div className="relative rounded-md text-gray-600 p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out bg-white shadow-2xl shadow-orange-400 w-2/6 h-[40vh]">
          <Image src={Herfy} className="absolute m-2 w-20 h-20" />
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
          <Image src={AlBaikpic3} className="w-full -z-50 rounded-md h-full" />
        </div>
        <div className="relative rounded-md text-gray-600 p-1 bg-white cursor-pointer hover:scale-105 duration-300 ease-in-out shadow-2xl shadow-orange-400 w-2/6 h-[40vh]">
          <Image src={KFC} className="absolute m-2 w-20 h-20" />
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
          <Image src={broastPic} className="w-full -z-50 rounded-md h-full" />
        </div>
      </div>
      <div className="bg-gray-200 pt-5">
        <div className="ml-7 py-1 w-32 flex rounded-full bg-orange-400 items-center justify-center">
          <h1 className="text-white">Groceries</h1>
        </div>
        <div className="flex mt-3 relative items-center">
          <FaCircleChevronLeft
            onClick={slideLeft}
            className="size-10 cursor-pointer text-blue-900 z-50"
          />
          <div
            id="slider"
            className="flex overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row"
          >
            <div className="flex my-5 gap-3">
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/groceries01.png"
                        fill={true}
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Dabur Herbolene Aloe Petroleum Jelly Clear 425ml+115ml
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">17.50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/groceries07.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Noor Pure Sunflower Oil Cooking Oil 1.5L X 2{" "}
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">27.95</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-14 h-40">
                      <Image
                        src="/images/groceries08.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Afia Extra Virgin Olive Oil 500ml{" "}
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">33</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/groceries02.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">Almarai Pure Butter Ghee 800 g </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-40">
                      <Image
                        src="/images/groceries04.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Puck White Cream Cheese (Analogue) 900g × 2{" "}
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/groceries02.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">Almarai Pure Butter Ghee 800 g </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-40">
                      <Image
                        src="/images/groceries04.png"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className="text-sm">
                    Puck White Cream Cheese (Analogue) 900g × 2{" "}
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between items-center p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white opacity-90 z-10 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/groceries01.jpeg"
                        fill
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
                    <div className="bg-white cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Dabur Herbolene Aloe Petroleum Jelly Clear 425ml+115ml
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">17.50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FaCircleChevronRight
            onClick={slideRight}
            className="size-10 cursor-pointer text-blue-900 z-50"
          />
        </div>
      </div>
      <div className="bg-gray-200 pt-5">
        <div className="ml-7 py-1 w-36 flex rounded-full bg-orange-400 items-center justify-center">
          <h1 className="text-white">Electronics</h1>
        </div>
        <div className="flex mt-3 relative items-center">
          <FaCircleChevronLeft
            onClick={slideLeft02}
            className="size-9 cursor-pointer text-blue-900 z-50"
          />
          <div
            id="slider02"
            className="flex overflow-x-scroll scroll scroll-smooth scrollbar-hide flex-row"
          >
            <div className="flex my-5 gap-3">
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-44">
                      <Image
                        src="/images/electronics01.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Apple iPhone 15 Pro (256 GB) - Natural Titanium..
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        4,999
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-28">
                      <Image
                        src="/images/electronics02.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    HUAWEI MateBook D 14 Laptop,11th Generation, Intel Core
                    i5-1135G7 processor, 14" FHD, 8GB RAM, 512GB SSD
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        4,999
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-36 h-40">
                      <Image
                        src="/images/electronics05.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Galaxy S23 Ultra 5G Dual SIM Green 12GB RAM 256GB - Middle
                    East Version
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        4,999
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/electronics03.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Apple AirPods (3rd generation) with Lightning Charging Case,
                    Wireless
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        500
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/electronics04.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    JBL Tune 520 OVER-EAR BT Headphone Black
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        300
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/electronics03.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    Apple AirPods (3rd generation) with Lightning Charging Case,
                    Wireless
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        500
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
              <div className="flex relative p-3 z-0 flex-col hover:shadow-orange-400 bg-white rounded-xl border border-gray-300 w-52">
                <div className="flex flex-col z-10 justify-between p-2 bg-slate-100 rounded-lg h-60 w-full">
                  <div className="bg-white z-10 opacity-90 absolute right-4 top-4 cursor-pointer rounded-full p-1.5">
                    <BiHeart className="size-6 text-blue-900" />
                  </div>
                  <div className="flex w-full items-center justify-center h-full">
                    <div className="relative w-32 h-40">
                      <Image
                        src="/images/electronics04.png"
                        fill
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
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
                    <div className="bg-white absolute right-4 cursor-pointer rounded-full p-1">
                      <TiShoppingCart color="orange" size={30} />
                    </div>
                  </div>
                </div>
                <div className="flex text-blue-900 text-sm mt-5 flex-col">
                  <h5 className=" text-sm">
                    JBL Tune 520 OVER-EAR BT Headphone Black
                  </h5>
                  <div className="flex flex-row">
                    <div className="flex items-center gap-1">
                      <p className="text-xs">SAR</p>
                      <p className="font-bold">5799</p>
                      <p className="line-through font-light text-gray-400">
                        300
                      </p>
                      <p className="text-green-600 text-xs font-bold">13%</p>
                    </div>
                  </div>
                  <div className="flex gap-1 justify-start items-center">
                    <HiOutlineShoppingBag className="size-5 text-gray-500" />
                    <p className="text-xs">Only 6 left in stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FaCircleChevronRight
            onClick={slideRight02}
            className="size-9 cursor-pointer text-blue-900 z-50"
          />
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
