// import React from "react";
// import Header from "@/components/Header";

// const Login = () => {
//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col w-full h-screen justify-center items-center">
//         <div className="flex h-5/6 w-3/6 flex-col justify-center rounded-xl bg-gradient-to-r from-blue-900 to-orange-400 items-center">
//           <h1 className="text-2xl mb-6 text-white">Login</h1>
//           <input
//             placeholder="Your Name"
//             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
//           />
//           <input
//             placeholder="Your Name"
//             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
//           />
//           <input
//             placeholder="Your Email"
//             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
//           />
//           <input
//             placeholder="Password"
//             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
//           />
//           <input
//             placeholder="New Password"
//             className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
//           />
//           <button className="rounded-lg hover:scale-95 border-2 slate-100 text-white mt-5 w-3/4 h-10">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="flex h-fit pt-10 justify-center items-center">
        <div className="flex w-2/5 flex-col justify-between p-10 rounded-xl bg-gradient-to-r from-blue-900 to-orange-300 items-center">
          <div>
            <h1 className="text-2xl mb-6 text-white">Login</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <input
              placeholder="Your Email"
              className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
            />
            <input
              placeholder="Password"
              className="w-3/4 p-4 focus:outline-none focus:ring-1 focus:ring-white border-gray-100 rounded-md mb-5 h-9"
            />
          </div>
          <button className="rounded-lg hover:border-2 border slate-100 text-white mt-5 w-3/4 h-9">
            Login
          </button>
          <p className="text-white mt-3">Are you already registered?</p>
          <button className="rounded-lg hover:border-2 border slate-100 text-white mt-5 w-3/4 h-9">
            <Link href="/Register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
