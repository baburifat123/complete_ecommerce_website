import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import "./Nav.css";
const Nav = () => {
  const [menu, setmenu] = useState("allproduct");
  const [open, setopen] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users.email);
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

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
              <Link to={"/allproducts"}> All Product </Link>
              {menu === "allproducts" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setmenu("order");
              }}
            >
              <Link to={"/order"}> Order</Link>
              {menu === "order" ? <hr /> : <></>}
            </li>

            {users?.email === "jadu@gmail.com" ? (
              <li
                onClick={() => {
                  setmenu("dashboard");
                }}
              >
                <Link to={"/dashboard"}> Admin </Link>
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
                <IoIosLogOut></IoIosLogOut>
              </a>
            ) : (
              ""
            )}
            <div className="flex items-center gap-1">
              <img
                className="w-[30px] bg-cover"
                src="src\assets\flag.png"
                alt=""
              />
              <h1>BD</h1>
            </div>
            <button>Profile</button>
            <PiShoppingCartSimple></PiShoppingCartSimple>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
