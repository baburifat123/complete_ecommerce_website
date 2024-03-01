import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FireDB } from "../../Firebase/FirebaseConfig.jsx";
import MyContext from "./MyContext.jsx";
function MyState(props) {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState({});
  // add product with firebase
  const addProduct = async () => {
    if (
      !products.title ||
      !products.price ||
      !products.imageUrl ||
      !products.category ||
      !products.description
    ) {
      return toast.error("All fields are required");
    }

    try {
      const productRef = collection(FireDB, "products");
      await addDoc(productRef, {
        ...products,
        time: new Date(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      toast.success("Product added successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  // query data with firebase
  const [product, setProductList] = useState([]);
  const getProducts = () => {
    try {
      const q = query(collection(FireDB, "products"), orderBy("time"));
      onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProductList(productArray);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const edithandle = (item) => {
    setproducts(item);
  };
  // update product
  const updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(FireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProducts();
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setproducts("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(FireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProducts();
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false);
    }
  };
  // oderifo
  const [order, setoder] = useState([]);
  const getoderdata = async () => {
    try {
      const resuelt = getDocs(collection(FireDB, "orders"));
      const amtyarry = [];
      (await resuelt).forEach((doc) => {
        amtyarry.push(doc.data());
      });
      setoder(amtyarry);
    } catch (error) {
      console.log(error);
    }
  };
  // userifo
  const [users, setusers] = useState([]);
  const getuser = async () => {
    try {
      const resuelt = getDocs(collection(FireDB, "users"));
      const usertyarry = [];
      (await resuelt).forEach((doc) => {
        usertyarry.push(doc.data());
      });
      setusers(usertyarry);
    } catch (error) {
      console.log(error);
    }
  };
  // product filter

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  // auto feach
  useEffect(() => {
    getProducts();
    getoderdata();
    getuser();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        addProduct,
        product,
        setproducts,
        products,
        edithandle,
        updateProduct,
        deleteProduct,
        order,
        users,
        searchkey,
        setSearchkey,
        filterPrice,
        setFilterPrice,
        filterType,
        setFilterType,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
