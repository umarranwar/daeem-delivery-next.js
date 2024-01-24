import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row w-full h-screen justify-center items-center">
        <div className="flex justify-center items-center w-96 h-5/6 flex-col bg-blue-900 hover:opacity-90 opacity-80rounded-l-lg">
          <div className="flex flex-row items-center w-60 bg-white rounded-full h-20">
            <img src="./daeem-logo.png" />
          </div>
          <div className="">
            <h5 className="text-5xl mt-5 font-sans text-white">Contact Us</h5>
            <p className="text-white mt-5">+966 920003103</p>
            <p className="text-white mt-5">daeemdelivery@gmail.com</p>
          </div>
        </div>
        <div className="flex h-5/6 w-3/6 flex-col hover:opacity-90 opacity-80 justify-center rounded-r-lg bg-orange-400 items-center">
          <input
            placeholder="Your Name"
            className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-blue-800 rounded-md mb-5 h-10"
          />
          <input
            placeholder="Your Email"
            className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-blue-800 rounded-md mb-5 h-10"
          />
          <input
            placeholder="Subject"
            className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-blue-800 rounded-md mb-5 h-10"
          />
          <textarea
            placeholder="Your message"
            className="w-3/4 focus:outline-none focus:ring-1 focus:ring-blue-800 p-4 rounded-md h-40"
          />
          <button className="rounded-lg hover:opacity-100 text-white hover:bg-blue-600 bg-blue-900 mt-5 w-3/4 h-10">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
