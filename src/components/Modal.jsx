import React, { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

function Modal() {
  return (
    <div className="fixed inset-20 shadow-[0px_5px_10px_#bab6b5] justify-between items-center right-80 left-80 flex flex-col rounded-xl bg-white">
      <IoClose className="absolute cursor-pointer text-blue-900 font-bold size-7 right-1 top-1" />
      <div className="bg-gradient-to-r from-orange-400 to-orange-200 justify-between items-center p-7 rounded-xl flex flex-row h-2/5 w-full">
        <div className="text-white text-xl">
          <h3 className="font-bold">Name</h3>
          <p className="text-sm">Desc</p>
          <p className="font-bold">SAR Price</p>
        </div>
      </div>
      <div className="text-gray-400">
        This item does not have options or addons
      </div>
      <button
        className="w-5/12 mb-5 bg-blue-900 hover:bg-blue-800 active:bg-orange-400 transition ease-in-out text-white duration-300 rounded-full p-2"
        onClick={() => {
          // addToCart(selectedItem);
          // setShowModal(false);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Modal;
