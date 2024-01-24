// "use client";

// import React, { useContext, useState } from "react";
// import Header from "../../components/Header";

// import Image from "next/image";
// import Cart from "../../components/Cart";
// import Product from "@/components/Product";
// import { Context } from "@/components/Context";

// import { RiCloseCircleLine } from "react-icons/ri";
// import { IoSearchCircle } from "react-icons/io5";

// const items = [
//   {
//     id: 1,
//     price: 40.0,
//     name: "Chicken Broast",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic1.JPG",
//   },
//   {
//     id: 2,
//     price: 30.0,
//     name: "Chicken nuggets",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic2.JPG",
//   },
//   {
//     id: 3,
//     price: 50.0,
//     name: "Nuggets burger",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic3.JPG",
//   },
//   {
//     id: 4,
//     price: 40.0,
//     name: "Chicken Broast",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic1.JPG",
//   },
//   {
//     id: 5,
//     price: 30.0,
//     name: "Chicken nuggets",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic2.JPG",
//   },
//   {
//     id: 6,
//     price: 50.0,
//     name: "Nuggets burger",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic3.JPG",
//   },
//   {
//     id: 7,
//     price: 40.0,
//     name: "Chicken Broast",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic1.JPG",
//   },
//   {
//     id: 8,
//     price: 30.0,
//     name: "Chicken nuggets",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic2.JPG",
//   },
//   {
//     id: 9,
//     price: 50.0,
//     name: "Nuggets burger",
//     desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
//     img: "/images/AlBaikpic3.JPG",
//   },
// ];

// export default function Restaurants() {
//   const [showModal, setShowModal] = useState(false);
//   const [itemID, setItemID] = useState({});

//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const { handleAddToCart } = useContext(Context);

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   const handleItemClick = (id) => {
//     const selectedItem = items.find((item) => item.id === id);
//     setShowModal(!showModal);
//     setItemID(selectedItem);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="flex flex-col items-center text-white text-3xl bg-gradient-to-t from-orange-400 to-white w-full h-80 justify-center">
//         <div className="relative w-40 h-40">
//           <Image src="/images/AlBAaik.png" fill alt="Picture of the author" />
//         </div>
//         <h2 className="">AlBAik</h2>
//         <div className="relative max-sm:mt-4 h-9 mt-2 lg:w-6/12 md:w-8/12 sm:w-9/12 max-sm:w-11/12 w-5/12 flex items-center text-gray-400">
//           <input
//             className="px-5 h-9 w-full focus:ring-2 focus:ring-offset-5 focus:ring-blue-500 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
//             type="text"
//             name="search"
//             placeholder="Search your favorite food"
//           />
//           <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-600 hover:cursor-pointer fill-gray-500 absolute cursor-default" />
//         </div>
//       </div>
//       <div className="flex flex-row justify-center p-10">
//         <div className="flex flex-row flex-wrap gap-6 w-8/12">
//           {items.map((item) => (
//             <Product
//               id={item.id}
//               name={item.name}
//               price={item.price}
//               desc={item.desc}
//               img={item.img}
//               showModel={() => handleItemClick(item.id)}
//             />
//           ))}
//         </div>
//         <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//       </div>
//       {showModal ? (
//         <div className="fixed inset-20 justify-between items-center right-80 left-80 flex flex-col rounded-xl bg-white">
//           <RiCloseCircleLine
//             onClick={handleItemClick}
//             className="absolute cursor-pointer text-white font-bold size-7 right-1 top-1"
//           />
//           <div className="bg-gradient-to-r from-orange-400 to-orange-200 justify-between items-center p-7 rounded-xl flex flex-row h-2/5 w-full">
//             <div className="text-white text-xl">
//               <h3 className="text-lg font-bold">{itemID.name}</h3>
//               <p className="text-sm">{itemID.desc}</p>
//               <p className="text-lg font-bold">SAR {itemID.price}</p>
//             </div>
//             <Image
//               src={itemID.img}
//               width={180}
//               height={120}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="text-gray-400">
//             This item does not have options or addons
//           </div>
//           <button
//             className="w-2/4 mb-5 bg-gradient-to-r from-blue-900 to-blue-400 transition ease-in-out text-white duration-300 rounded-full p-2"
//             onClick={() => {
//               addToCart(itemID);
//               handleAddToCart(cartItems);
//               setShowModal(false);
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       ) : null}
//     </div>
//   );
// }

"use client";
import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import Cart from "../../components/Cart";
import Product from "@/components/Product";
import { Context } from "@/components/Context";
import { IoClose } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";

const items = [
  {
    id: 1,
    price: 40.0,
    name: "Chicken Broast",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic1.JPG",
  },
  {
    id: 2,
    price: 30.0,
    name: "Chicken nuggets",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic2.JPG",
  },
  {
    id: 3,
    price: 50.0,
    name: "Nuggets burger",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic3.JPG",
  },
  {
    id: 4,
    price: 40.0,
    name: "Chicken Broast",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic1.JPG",
  },
  {
    id: 5,
    price: 30.0,
    name: "Chicken nuggets",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic2.JPG",
  },
  {
    id: 6,
    price: 50.0,
    name: "Nuggets burger",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic3.JPG",
  },
  {
    id: 7,
    price: 40.0,
    name: "Chicken Broast",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic1.JPG",
  },
  {
    id: 8,
    price: 30.0,
    name: "Chicken nuggets",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic2.JPG",
  },
  {
    id: 9,
    price: 50.0,
    name: "Nuggets burger",
    desc: "Crunchy to perfection includes 2 buns, fries and 4 garlic sauces",
    img: "/images/AlBaikpic3.JPG",
  },
];

export default function Restaurants() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If item already exists in the cart, increase quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item does not exist in the cart, add it with quantity 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleItemClick = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setSelectedItem(selectedItem);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      {/* ... (your existing code) */}
      <Header />
      <div className="flex flex-col items-center rounded-b-xl text-3xl w-full h-80 justify-center">
        <div className="relative w-36 h-36">
          <Image src="/images/AlBAaik.png" fill alt="Picture of the author" />
        </div>
        <h2
          // style={{
          //   textShadow: "0px 1px 4px #2a2b2e",
          // }}
          className="text-blue-900 mt-2"
          ora
        >
          AlBAik
        </h2>
        <div className="relative max-sm:mt-4 h-9 mt-4 lg:w-6/12 md:w-8/12 sm:w-9/12 max-sm:w-11/12 w-5/12 flex items-center text-gray-400">
          <input
            className="px-5 h-9 w-full shadow-[0px_0px_10px_3px_#f28d35] focus:ring-1 focus:ring-orange-400 focus:outline-none text-sm py-2 rounded-full fn border-none text-black"
            type="text"
            name="search"
            placeholder="Search your favorite food"
          />
          <IoSearchCircle className="w-9 h-9 right-0 hover:scale-105 duration-500 hover:fill-orange-400 hover:cursor-pointer fill-blue-900 absolute cursor-default" />
        </div>
      </div>
      <div className="flex flex-row justify-center p-10">
        <div className="flex flex-row flex-wrap gap-6 w-8/12">
          {items.map((item) => (
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              desc={item.desc}
              img={item.img}
              showModel={() => handleItemClick(item.id)}
            />
          ))}
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
      {showModal && selectedItem && (
        <div className="fixed inset-20 shadow-[0px_5px_10px_#bab6b5] justify-between items-center right-80 left-80 flex flex-col rounded-xl bg-white">
          <IoClose
            onClick={handleModalClose}
            className="absolute cursor-pointer text-blue-900 font-bold size-7 right-1 top-1"
          />
          <div className="bg-gradient-to-r from-orange-400 to-orange-200 justify-between items-center p-7 rounded-xl flex flex-row h-2/5 w-full">
            <div className="text-white text-xl">
              <h3 className="font-bold">{selectedItem.name}</h3>
              <p className="text-sm">{selectedItem.desc}</p>
              <p className="font-bold">SAR {selectedItem.price}</p>
            </div>
            <Image
              src={selectedItem.img}
              width={180}
              height={120}
              className="rounded-lg shadow-[0px_5px_10px_#bab6b5]"
            />
          </div>
          <div className="text-gray-400">
            This item does not have options or addons
          </div>
          <button
            className="w-5/12 mb-5 bg-blue-900 hover:bg-blue-800 active:bg-orange-400 transition ease-in-out text-white duration-300 rounded-full p-2"
            onClick={() => {
              addToCart(selectedItem);
              setShowModal(false);
            }}
          >
            Add to Cart
          </button>
        </div>
      )}

      {/* Render the rest of your components, such as Cart */}
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}
