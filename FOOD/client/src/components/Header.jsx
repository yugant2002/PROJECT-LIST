import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      
        <h1 >feane</h1>
      
   <div className="pg-(--color-primary) px-4 py-2 flex justify-content-between">
        <Link to={"/"}
        className="ml-5"
        >HOME</Link>

        <Link to={"/"}
        className="ml-6"
        >MENU</Link>

        <Link to={"/"}>ABOUT</Link>

        <Link to={"/"}>BOOK TABLE</Link>

<span className="ml-2">Icon</span>
<span>Icon</span>
        <button className="btn btn-outline-primary">Oder Online</button>
    </div>
    </>
  );
};

export default Header;
