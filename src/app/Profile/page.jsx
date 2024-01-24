"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const searchParams = useSearchParams();

  const handleImageClick = () => {
    // Trigger the file input by clicking on the image icon
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Define the parameter names
  const paramNames = [
    "username",
    "firstName",
    "lastName",
    "email",
    "birthday",
    "address",
    "password",
    "confirmPassword",
  ];

  // Retrieve values for each parameter
  const values = {};

  paramNames.forEach((paramName) => {
    values[paramName] = searchParams.get(paramName);
  });

  console.log(values);

  return (
    <div>
      <Header />
      <div className="flex bg-gradient-to-r flex-col items-center p-10 justify-center">
        <div className="flex flex-col rounded-3xl bg-gray-200 border p-5 w-2/4">
          <h1 className="text-gray-700 font-bold">Profile</h1>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your Username</h1>
              <p>{values.username}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your First Name</h1>
              <p>{values.firstName}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your Last Name</h1>
              <p>{values.lastName}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your Email</h1>
              <p>{values.email}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your Password</h1>
              <h1>{values.password}</h1>
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full px-4 rounded-xl my-2 p-2 bg-gray-50">
              <h1 className="font-bold mr-5 text-gray-600">Your Address</h1>
              <h1>{values.address}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
