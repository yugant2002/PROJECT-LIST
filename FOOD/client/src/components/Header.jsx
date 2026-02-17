import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center py-3  fixed top-0 left-0 w-full text-white 
        z-99 px-30 ">
        <h1 className=" text-2xl">Feane</h1>

        <div className="flex justify-center items-center gap-9 font-semibold">
          <Link to={"/"} className="hover:text-orange-300">
          HOME
        </Link>

        <Link to={"/"} className="hover:text-orange-300">
          MENU
        </Link>

        <Link to={"/"} className="hover:text-orange-300" >ABOUT</Link>

        <Link to={"/"} className="hover:text-orange-300">BOOK TABLE</Link>

        <span className="hover:text-orange-300 text-2xl "> <IoMdContact /> </span>
        <span className="hover:text-orange-300 text-2xl"><FaShoppingCart /></span>
        <span className="hover:text-orange-300 text-2xl"> <FaSearch />  </span>
        </div>
       
        <button className="button hover:bg-orange-300 bg-orange-600 rounded-full px-3 py-2 text-white">Oder Now</button>
      </div>
    </>
  );
};
export default Header;
