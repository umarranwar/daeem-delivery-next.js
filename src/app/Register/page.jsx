"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import FormInput from "@/components/FormInput";
import "../../styles/app.css";
import Link from "next/link";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [values, setValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
      errorMessage: "First Name is Required",
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "First Name",
      required: true,
      errorMessage: "Last Name is Required",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 6,
      name: "birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: 7,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      label: "Your Address",
      required: true,
    },
    {
      id: 8,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 9,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  const handleImageClick = () => {
    // Trigger the file input by clicking on the image icon
    document.getElementById('fileInput').click();
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

  return (
    <div>
      <Header />
      <div className="flex bg-gradient-to-b from-orange-400 to-blue-900 p-10 justify-center items-center">
        <div className="flex flex-col rounded-lg justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-80">
            <div className="flex justify-center items-center">
              <h1 className="text-lg mt-5">Register</h1>
            </div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="flex justify-center items-center">
              <button className="w-3/5 h-10 my-6 hover:border-white hover:text-white hover:bg-orange-400 text-black border-2 border-blue-900 rounded-full">
                <Link
                  href={{
                    pathname: "/Profile",
                    query: {
                      username: values.username,
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      birthday: values.birthday,
                      address: values.address,
                      profilePic: selectedImage,
                      password: values.password,
                      confirmPassword: values.confirmPassword,
                    },
                  }}
                >
                  Submit
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

