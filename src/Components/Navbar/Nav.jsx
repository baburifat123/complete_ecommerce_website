import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const [menu, setmenu] = useState("allproduct");
  const [open, setopen] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };
  const cartitem = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex items-center justify-around bg-slate-400 p-4">
        <div className="me lg:hidden md:hidden">
          <button onClick={() => setopen(!open)}>
            {open ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <CiMenuBurger className="text-3xl" />
            )}
          </button>
        </div>
        <div id="nav" className="flex items-center gap-4">
          <h1 className="text-4xl text-black font-semibold md justify-end">
            <Link to={"/"}> Ecommerce</Link>
          </h1>
        </div>
        <div className={` nav2 ${open ? "block" : "hidden"} lg:flex flex-col`}>
          <ul id="n" className="flex gap-5 items-center">
            <li
              onClick={() => {
                setmenu("allproducts");
              }}
            >
              <Link to={"/allproducts"} className="text-2xl">
                {" "}
                All Product{" "}
              </Link>
              {menu === "allproducts" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setmenu("order");
              }}
            >
              <Link to={"/order"} className="text-2xl">
                {" "}
                Order
              </Link>
              {menu === "order" ? <hr /> : <></>}
            </li>

            {users?.email === "jadu@gmail.com" ? (
              <li
                onClick={() => {
                  setmenu("dashboard");
                }}
              >
                <Link to={"/dashboard"} className="text-2xl">
                  {" "}
                  Admin{" "}
                </Link>
                {menu === "dashboard" ? <hr /> : <></>}{" "}
              </li>
            ) : (
              ""
            )}
            {users ? (
              <a
                onClick={logout}
                className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
              >
                <IoIosLogOut className="text-3xl"></IoIosLogOut>
              </a>
            ) : (
              ""
            )}
            <div className="flex items-center gap-1">
              <img
                className="w-[35px] bg-cover"
                src="src\assets\flag.png"
                alt=""
              />
              <h1 className="text-xl">BD</h1>
            </div>
            <button>Profile</button>
            <div>
              <h1 className="absolute ml-6 text-white -mt-1  text-center font-semibold  bg-red-500 w-6 h-6 rounded-full">
                {cartitem.length}
              </h1>
              <Link to={"/cart"}>
                {" "}
                <PiShoppingCartSimple className="text-4xl"></PiShoppingCartSimple>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
