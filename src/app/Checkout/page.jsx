// "use client";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function Checkout() {
//   const [currentLocation, setCurrentLocation] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     loadMapScript();
//   }, []);

//   const loadMapScript = () => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
//     script.defer = true;
//     script.async = true;
//     script.onload = () => {
//       // The map script has loaded
//     };
//     document.head.appendChild(script);
//   };

//   const handleGetCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
//           showMap(latitude, longitude);
//         },
//         (error) => {
//           setError(`Error getting location: ${error.message}`);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by your browser");
//     }
//   };

//   const showMap = (latitude, longitude) => {
//     const mapOptions = {
//       center: { lat: latitude, lng: longitude },
//       zoom: 15,
//     };

//     const map = new window.google.maps.Map(
//       document.getElementById("map"),
//       mapOptions
//     );

//     const marker = new window.google.maps.Marker({
//       position: { lat: latitude, lng: longitude },
//       map: map,
//     });
//   };

//   const searchParams = useSearchParams();

//   // Retrieve the extractedValues parameter from the URL
//   const extractedValuesParam = searchParams.get("extractedValues");

//   // Parse the extractedValues parameter into an array
//   const extractedValues = extractedValuesParam
//     ? JSON.parse(extractedValuesParam)
//     : [];

//   console.log("data from checkout", extractedValues);

//   {

//   return (
//     <div>
//       <div className="flex justify-center bg-orange-400 items-center w-full h-32">
//         <h1 className="text-2xl text-white font-bold">Checkout</h1>
//       </div>
//       <div className="flex p-5 gap-5 w-full">
//         <div className="flex h-96 w-2/4">
//           <div className="flex p-2 flex-col w-full">
//             <h1 className="text-gray-500 my-4 font-bold">Billing Detail</h1>
//             <input
//               placeholder="Your Name"
//               className="w-full p-5 border shadow-sm shadow-gray-200 bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
//             />
//             <input
//               placeholder="Phone number"
//               className="w-full p-5 border shadow-sm shadow-gray-200 bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
//             />
//             <input
//               placeholder="Your Email"
//               className="w-full p-5 border shadow-sm shadow-gray-200 bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
//             />
//             <input
//               placeholder="Your Address"
//               className="w-full p-5 border shadow-sm shadow-gray-200 bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
//             />
//             <div>
//               <input
//                 type="text"
//                 value={currentLocation}
//                 placeholder="Current Location"
//                 readOnly
//               />
//               <button onClick={handleGetCurrentLocation}>
//                 Get Current Location
//               </button>
//               {error && <p style={{ color: "red" }}>{error}</p>}
//               <div id="map" style={{ height: "300px", width: "100%" }}></div>
//             </div>
//           </div>
//         </div>
//         <div className="flex bg-gray-300 h-96 w-2/4 items-center"></div>
//       </div>
//     </div>
//   );
// }

"use client";
import Header from "@/components/Header";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { CiCreditCard2 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

export default function Checkout() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    loadMapScript();
  }, []);

  const loadMapScript = () => {
    const script = document.createElement("script");
    // Replace YOUR_GOOGLE_MAPS_API_KEY with your actual API key
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      // The map script has loaded
    };
    document.head.appendChild(script);
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          showMap(latitude, longitude);
        },
        (error) => {
          setError(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  const showMap = (latitude, longitude) => {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
    };

    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    const marker = new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
    });
  };

  const searchParams = useSearchParams();

  // Retrieve the extractedValues parameter from the URL
  const extractedValuesParam = searchParams.get("extractedValues");

  // Parse the extractedValues parameter into an array
  const extractedValues = extractedValuesParam
    ? JSON.parse(extractedValuesParam)
    : [];

  const totalPrice = extractedValues.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  console.log("data from checkout", extractedValues);

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
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center my-5 w-full">
        <div className="flex relative justify-center items-center p-4 w-8/12">
          <div className="flex absolute left-5 items-center">
            <div className="relative w-16 h-16">
              <Image src="/images/AlBAaik.png" fill alt="AlBAik Logo" />
            </div>
            <p className="font-bold text-blue-900 ml-2">AlBAik</p>
          </div>
          <h1 className="text-2xl text-blue-900 font-extrabold">Checkout</h1>
        </div>
        <div className="w-8/12 mt-5 h-0.5 rounded-full bg-gray-300"></div>
        {/* <div className="flex justify-between mt-5 gap-4 items-center w-8/12"> */}
        <button
          onClick={handleShowLogin}
          className="w-1/4 mt-5 h-10 font-bold text-blue-900 rounded-2xl shadow-[0px_2px_10px_#bab6b5]"
        >
          login
        </button>
        {/* </div> */}
      </div>
      <div className="flex gap-5 pb-10 text-blue-900 px-36">
        <div className="flex h-96 w-2/4">
          <div className="flex p-2 flex-col w-full">
            <h1 className="text-xl my-4 font-bold">Billing Detail</h1>
            <input
              placeholder="Your Name"
              className="w-full px-3 py-5 border shadow-[0px_2px_10px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
            />
            <input
              placeholder="Phone number"
              className="w-full px-3 py-5 border shadow-[0px_2px_10px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
            />
            <input
              placeholder="Your Email"
              className="w-full px-3 py-5 border shadow-[0px_2px_10px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
            />
            <input
              placeholder="Your Address"
              className="w-full px-3 py-5 border shadow-[0px_2px_10px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
            />
            <input
              placeholder="Your Address"
              className="w-full px-3 py-5 border shadow-[0px_2px_10px_#bab6b5] bg-transparent focus:outline-none focus:ring-blue-900 focus:ring-1 rounded-md mb-5 h-9"
            />
            <div>
              {/* <input
                type="text"
                value={currentLocation}
                placeholder="Current Location"
                readOnly
              /> */}
              <p>Current Location</p>
              <button onClick={handleGetCurrentLocation}>
                Get Current Location
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div id="map" style={{ height: "300px", width: "100%" }}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/4 h-auto">
          <div className="flex w-full">
            <div className="flex p-2 flex-col w-full">
              <h1 className="text-xl my-4 font-bold">Your Order</h1>
              <div className="flex p-6 flex-col shadow-[0px_2px_10px_#bab6b5] rounded-lg">
                {extractedValues.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="flex justify-between items-center w-full h-14"
                    >
                      <div className="flex gap-2">
                        <p>{item.quantity}</p>
                        <p>{item.name}</p>
                      </div>
                      <p>{item.price}</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-200"></div>
                  </>
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
          <div className="flex w-full">
            <div className="flex p-2 flex-col w-full">
              <h1 className="text-xl my-4 font-bold">Payment Method</h1>
              <div className="flex p-6 flex-col shadow-[0px_2px_10px_#bab6b5] rounded-lg">
                <div className="flex items-center"></div>
                <div className="flex justify-between items-center w-full h-14">
                  <div className="flex justify-center items-center gap-2">
                    <CiCreditCard2 className="size-9 text-blue-900" />
                    <p className="flex font-bold">Debit Card</p>
                  </div>
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="h-5 w-5 rounded-full focus:ring-blue-900 border-gray-300"
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
                    id="myCheckbox"
                    className="h-5 w-5 rounded-full focus:ring-blue-900 border-gray-300"
                  />
                </div>
                <button className="flex self-center bg-blue-900 ease-in-out duration-200 hover:bg-blue-800 active:bg-orange-400 justify-center rounded-full items-center w-2/4 h-8">
                  <p className="flex text-sm text-white">Confirm Order</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <Login showSignUp={handleShowSignUp} closeLogin={handleCloseLogin} />
      )}
      {showSignUp && <SignUp closeSignUp={handleCloseSignUp} />}
    </div>
  );
}
