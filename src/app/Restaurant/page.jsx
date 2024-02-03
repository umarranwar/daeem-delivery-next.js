import Link from "next/link";
import React from "react";

const store = [
  {
    id: 1,
    store: "AlBAik",
    title: "7 Piece Chicken Nuggets Meal",
    desc: "Spicy and crunchy to perfection includes a bun, fries, and 2 nuggets",
    logo: "/images/AlBAaik.png",
    bgImg: "/images/albaik03.jpg",
  },
  {
    id: 2,
    store: "HERFY",
    title: "7 Piece Chicken Nuggets Meal",
    desc: "Spicy and crunchy to perfection includes a bun, fries, and 2 nuggets",
    logo: "/images/Herfy_logo.png",
    bgImg: "/images/AlBaikpic3.JPG",
  },
  {
    id: 3,
    store: "KFC",
    title: "7 Piece Chicken Nuggets Meal",
    desc: "Spicy and crunchy to perfection includes a bun, fries, and 2 nuggets",
    logo: "/images/KFC_logo.png",
    bgImg: "/images/AlBaikpic1.JPG",
  },
];

export default function page() {
  return (
    <div>
      {store.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: `/Restaurant/${item.store}`,
            query: {
              store: item.store,
              logo: item.logo,
            },
          }}
        >
          <h1>Restaurant {item.store}</h1>
        </Link>
      ))}
    </div>
  );
}
