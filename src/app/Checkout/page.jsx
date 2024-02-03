"use client";
import { Context } from "@/components/Context";
import Header from "@/components/Header";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";

import { CiCreditCard2 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

export default function Checkout() {
  const [debitCardChecked, setDebitCardChecked] = useState(false);
  const [cashOnDeliveryChecked, setCashOnDeliveryChecked] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [userAddress, setUserAddress] = useState({
    city: "",
    district: "",
    streetAddress: "",
    homeAddress: "",
    location: "",
  });
const {cartItems} = useContext(Context)
  const handleDebitCardChange = () => {
    setDebitCardChecked(!debitCardChecked);
    setCashOnDeliveryChecked(false); // Unselect cash on delivery when debit card is selected
  };

  const handleCashOnDeliveryChange = () => {
    setCashOnDeliveryChecked(!cashOnDeliveryChecked);
    setDebitCardChecked(false); // Unselect debit card when cash on delivery is selected
  };

  if (typeof window !== "undefined") {
    const userAuth = JSON.parse(localStorage.getItem("userAuth"));
  }

  // Input handle functions for address fields
  const handleCityChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      city: e.target.value,
    }));
  };

  const handleDistrictChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      district: e.target.value,
    }));
  };

  const handleStreetAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      streetAddress: e.target.value,
    }));
  };

  const handleHomeAddressChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      homeAddress: e.target.value,
    }));
  };

  const handleLocationChange = (e) => {
    setUserAddress((prevAddress) => ({
      ...prevAddress,
      location: e.target.value,
    }));
  };

  const handleAddress = () => {
    console.log("Debit Card Checked:", debitCardChecked);
    console.log("Cash on Delivery Checked:", cashOnDeliveryChecked);

    // Check if the user is signed up based on stored data in local storage
    if (typeof window !== "undefined") {
      const userAuth = JSON.parse(localStorage.getItem("userAuth"));
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
    }

    // Save the address information to local storage
    const userWithAddress = {
      ...storedUserData,
      address: userAddress,
    };

    localStorage.setItem("userData", JSON.stringify(userWithAddress));

    // Display user details with address on the console
    console.log("User details with address:", userWithAddress);
  };

  // Retrieve the extractedValues parameter from the URL
  const searchParams = useSearchParams();
  const extractedValuesParam = searchParams.get("extractedValues");

  // Parse the extractedValues parameter into an array
  const extractedValues = extractedValuesParam
    ? JSON.parse(extractedValuesParam)
    : [];
  console.log("extractedValues ", extractedValues);
  // Retrieve extractedValues from local storage when the component mounts
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("orderData");
    const storedValues = storedData ? JSON.parse(storedData) : [];

    // Log the retrieved values to the console
    console.log(
      "Retrieved extractedValues from Cart and local storage:",
      storedValues
    );
  } // This useEffect runs once when the component mounts
  // Total price calculation
  const totalPrice = extractedValues.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  const handleIsLogin = (value) => {
    setShowLogin(false);
    setIsLogin(value);
    console.log("is login : ", isLogin);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <div className="flex absolute left-5 items-center">
            <div className="relative w-16 h-16">
              <Image
                src="/images/AlBAaik.png"
                width={100}
                height={100}
                className="w-full h-full"
                alt="AlBAik Logo"
              />
            </div>
            <p className="font-bold text-blue-900 ml-2">AlBAik</p>
          </div>
          <h1 className="text-2xl text-blue-900 font-extrabold">Checkout</h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex gap-5 pb-10 text-blue-900 px-36">
        {isLogin ? (
          <div className="flex flex-col h-96 w-2/4">
            <div className="flex p-2 flex-col w-full">
              <h1 className="text-xl mt-4 font-bold">Your Address</h1>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="flex gap-4 w-full">
                <div className="w-2/4">
                  <p className="text-sm m-1 font-bold text-blue-900">City</p>
                  <input
                    type="text"
                    name="city"
                    required={true}
                    placeholder="Enter your city"
                    value={userAddress.city}
                    onChange={handleCityChange}
                    className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                  />
                </div>
                <div className="w-2/4">
                  <p className="text-sm m-1 font-bold text-blue-900">
                    District
                  </p>
                  <input
                    type="text"
                    name="district"
                    required={true}
                    placeholder="Enter your district"
                    value={userAddress.district}
                    onChange={handleDistrictChange}
                    className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm m-1 font-bold text-blue-900">
                  Street Address
                </p>
                <input
                  type="text"
                  name="streetAddress"
                  required={true}
                  placeholder="Your street address"
                  value={userAddress.streetAddress}
                  onChange={handleStreetAddressChange}
                  className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                />
              </div>
              <div className="w-full">
                <p className="text-sm m-1 font-bold text-blue-900">
                  Home Address
                </p>
                <input
                  type="text"
                  name="homeAddress"
                  required={true}
                  placeholder="Your home address"
                  value={userAddress.homeAddress}
                  onChange={handleHomeAddressChange}
                  className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                />
              </div>
              <div className="w-full">
                <p className="text-sm m-1 font-bold text-blue-900">
                  Your location
                </p>
                <input
                  type="text"
                  name="location"
                  required={true}
                  placeholder="Past your location"
                  value={userAddress.location}
                  onChange={handleLocationChange}
                  className="w-full px-3 h-9 mb-1 text-sm border bg-white shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-2/4 mt-12 justify-center">
            <button
              onClick={handleShowLogin}
              className="w-3/4 mt-5 h-10 bg-white text-sm text-orange-400 rounded-2xl shadow-[0px_2px_5px_#bab6b5]"
            >
              Please log in to proceed with your order
            </button>
          </div>
        )}

        <div className="flex flex-col w-2/4 h-auto">
          <div className="flex w-full">
            <div className="flex p-2 flex-col w-full">
              <h1 className="text-xl my-4 font-bold">Your Order</h1>
              <div className="flex p-6 flex-col bg-white shadow-[0px_2px_5px_#bab6b5] rounded-lg">
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center w-full h-14">
                      <div className="flex gap-2">
                        <Image
                          alt="item"
                          src={item.img}
                          className="rounded-2xl"
                          width={50}
                          height={50}
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
              </div>
            </div>
          </div>
          {isLogin && (
            <div className="flex w-full">
              <div className="flex p-2 flex-col w-full">
                <h1 className="text-xl my-4 font-bold">Payment Method</h1>
                <div className="flex p-6 flex-col bg-white shadow-[0px_2px_10px_#bab6b5] rounded-lg">
                  <div className="flex items-center"></div>
                  <div className="flex justify-between items-center w-full h-14">
                    <div className="flex justify-center items-center gap-2">
                      <CiCreditCard2 className="size-9 text-blue-900" />
                      <p className="flex font-bold">Debit Card</p>
                    </div>
                    <input
                      type="checkbox"
                      id="debitCardCheckbox"
                      className="h-5 w-5 rounded-full focus:ring-blue-900 border-gray-300"
                      checked={debitCardChecked}
                      onChange={handleDebitCardChange}
                    />
                  </div>
                  <div className="w-full h-0.5 bg-gray-200"></div>
                  <div className="flex justify-between items-center w-full h-14">
                    <div className="flex justify-center items-center gap-2">
                      <CiMoneyBill size={35} className="text-blue-900" />
                      <p className="flex font-bold">Cash on Delivery</p>
                    </div>
                    <input
                      type="checkbox"
                      id="cashOnDeliveryCheckbox"
                      className="h-5 w-5 rounded-full focus:ring-blue-900 border-gray-300"
                      checked={cashOnDeliveryChecked}
                      onChange={handleCashOnDeliveryChange}
                    />
                  </div>
                  <button
                    onClick={handleAddress}
                    className="flex self-center bg-blue-900 ease-in-out duration-200 hover:bg-blue-800 active:bg-orange-400 justify-center rounded-full items-center w-2/4 h-8"
                  >
                    <p className="flex text-sm text-white">
                      <Link
                        href={{
                          pathname: "/OrderDetail",
                          query: {
                            orderDetail: JSON.stringify(
                              extractedValues.map((item) => ({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                desc: item.desc,
                                img: item.img,
                                quantity: item.quantity,
                              }))
                            ),
                            userAddress: JSON.stringify({
                              city: userAddress.city,
                              district: userAddress.district,
                              streetAddress: userAddress.streetAddress,
                              homeAddress: userAddress.homeAddress,
                              location: userAddress.location,
                              paymentOption: debitCardChecked
                                ? "Debit Card"
                                : "Cash On Delivery",
                            }),
                          },
                        }}
                      >
                        Confirm Order
                      </Link>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showLogin && (
        <Login
          showSignUp={handleShowSignUp}
          isLogin={handleIsLogin}
          closeLogin={handleCloseLogin}
        />
      )}
      {showSignUp && <SignUp closeSignUp={handleCloseSignUp} />}
    </div>
  );
}
