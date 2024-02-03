const food = [
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

export const getSingleFood = (id) => {
  const singleFood = food.find((item) => item.id === id);
  return singleFood;
};