// // AnyComponent.js
// import React from "react";
// import { useCart } from "./Context";

// function AnyComponent() {
//   const { state, addToCart, removeFromCart, updateQuantity } = useCart();

//   const handleRemoveFromCart = (itemId) => {
//     removeFromCart(itemId);
//   };

//   const handleUpdateQuantity = (itemId, newQuantity) => {
//     updateQuantity(itemId, newQuantity);
//   };

//   return (
//     <div>
//       <p>Cart Items: {JSON.stringify(state.cartItems)}</p>
//       <button
//         onClick={() =>
//           addToCart({ id: 2, name: "Product 2", price: 15.99, quantity: 1 })
//         }
//       >
//         Add to Cart
//       </button>
//       <button onClick={() => handleRemoveFromCart(2)}>Remove from Cart</button>
//       <button onClick={() => handleUpdateQuantity(1, 5)}>
//         Update Quantity
//       </button>
//     </div>
//   );
// }

// export default AnyComponent;
