import React, { useState } from "react";
import MyContext from "./MyContext.jsx";
import { toast } from "react-toastify";

function MyState(props) {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const addProduct = async () => {
    if (
      products.title === null ||
      products.price === null ||
      products.imageUrl === null ||
      products.category === null ||
      products.description == null
    ) {
      return toast.error("all fields required");
    }
  };
  return (
    <MyContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
