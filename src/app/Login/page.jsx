// // import React from "react";
// // import Header from "@/components/Header";

// // const Login = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <div className="flex flex-col w-full h-screen justify-center items-center">
// //         <div className="flex h-5/6 w-3/6 flex-col justify-center rounded-xl bg-gradient-to-r from-blue-900 to-orange-400 items-center">
// //           <h1 className="text-2xl mb-6 text-white">Login</h1>
// //           <input
// //             placeholder="Your Name"
// //             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
// //           />
// //           <input
// //             placeholder="Your Name"
// //             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
// //           />
// //           <input
// //             placeholder="Your Email"
// //             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
// //           />
// //           <input
// //             placeholder="Password"
// //             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
// //           />
// //           <input
// //             placeholder="New Password"
// //             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
// //           />
// //           <button className="rounded-lg hover:scale-95 border-2 slate-100 text-white mt-5 w-3/4 h-10">
// //             Login
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React from "react";
// import Header from "@/components/Header";
// import Link from "next/link";
"use client";
import PhoneOTP from "@/components/PhoneOTP";
import React from "react";

export default function page() {
  return (
    <div>
      <PhoneOTP />
    </div>
  );
}
