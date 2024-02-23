import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
const Nav = () => {
  const [menu, setmenu] = useState("shop");
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="me lg:hidden md:hidden">
          <button onClick={() => setopen(!open)}>
            {open ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <CiMenuBurger className="text-3xl" />
            )}
          </button>
        </div>
        <div id="nav" className="nav1 flex items-center gap-4">
          <h1 className="text-4xl text-black font-semibold">SHOPPER</h1>
        </div>
        <div className={`nav2 ${open ? "block" : "hidden"} lg:flex flex-col`}>
          <ul id="n" className="flex gap-5">
            <li
              onClick={() => {
                setmenu("men");
              }}
            >
              <Link to={"/men"}> Men </Link>
              {menu === "order" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setmenu("women");
              }}
            >
              <Link to={"/women"}> Women </Link>
              {menu === "women" ? <hr /> : <></>}
            </li>

            <li
              onClick={() => {
                setmenu("kids");
              }}
            >
              <Link to={"/kids"}> Kids </Link>
              {menu === "kids" ? <hr /> : <></>}{" "}
            </li>
          </ul>
        </div>

        <div className="nav3 flex items-center gap-4">
          <Link to={"/login"}>
            <button id="button">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
