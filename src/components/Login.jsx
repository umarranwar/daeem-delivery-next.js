"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Login({ closeLogin, isLogin, showSignUp }) {
  // State to store user input
  const [userData, setUserData] = useState({
    password: "",
    phoneOrEmail: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle login button click
  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      if (
        userData.password === storedUserData.password &&
        userData.phoneOrEmail === storedUserData.phoneOrEmail
      ) {
        // User is signed up, perform the login action
        console.log("User is signed up!");

        // Save the user data and login status in local storage
        localStorage.setItem(
          "userAuth",
          JSON.stringify({
            isLoggedIn: true,
            currentUser: storedUserData,
          })
        );

        // Perform your login logic here
        isLogin(true);
      } else {
        // User is not signed up
        console.log("User is not signed up!");
      }
    } else {
      // User is not signed up
      console.log("User is not signed up!");
    }
  };

  return (
    <div className="fixed inset-20 justify-between items-center right-80 left-80 flex flex-col shadow-[0px_2px_5px_#bab6b5] rounded-xl bg-gradient-to-br bg-white">
      <IoClose
        onClick={closeLogin}
        className="size-7 cursor-pointer text-blue-900 absolute right-2 top-2 z-50"
      />
      <div className="w-8/12 flex flex-col items-center">
        <h1 className="mt-8 mb-3 font-bold text-xl text-blue-900">Login</h1>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Phone or Email</p>
          <input
            type="text"
            name="phoneOrEmail"
            value={userData.phoneOrEmail}
            onChange={handleInputChange}
            placeholder="Enter your phone or email"
            className="w-full px-3 text-sm mb-2 border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md h-9"
          />
        </div>
        <div className="w-full">
          <p className="text-sm m-1 font-bold text-blue-900">Password</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full px-3 text-sm h-9 mb-2 border shadow-[0px_1px_3px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md"
          />
        </div>
        <button
          onClick={handleLogin}
          className="flex self-center mt-5 bg-blue-900 ease-in-out duration-300 hover:bg-orange-400 active:bg-blue-800 justify-center rounded-full items-center hover:w-3/4 w-8/12 h-9"
        >
          <p className="flex text-sm text-white">Login</p>
        </button>
        <p className="text-blue-900 text-sm my-3">
          Are you already registered?
        </p>
        <button className="flex self-center shadow-[0px_1px_3px_#bab6b5] ease-in-out duration-300 border-2 hover:border-orange-400 active:border-blue-800 border-blue-900 justify-center rounded-full items-center hover:w-3/4 w-8/12 h-9">
          <p onClick={showSignUp} className="flex text-sm text-blue-900">
            Sign up
          </p>
        </button>
      </div>
    </div>
  );
}
