import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar({className,children}) {
  const [state, setState] = useState(false);

  return (
    <div>
      <nav className={` ${className}bg-black flex justify-between p-4 uppercase text-white font-medium items-center tracking-widest fixed top-0 w-full text-base`}>
        <div>
          <h2 className="text-white ">LAWS OF UX</h2>
        </div>
        {children}
       
        {state ? <Menu setState={setState} /> : null}
        <button
          onClick={() => setState(true)}
          type="button"
          className="menuBtn flex border border-white px-3 py-2 uppercase font-medium flex items-center gap-2 "
        >
          <span className="mr-2">MENU</span>

          <FaBars className="text-white" />
          {/* <FaTimes className="text-white"/> */}
        </button>
      </nav>
     
    </div>
    
  );
}

export default NavBar;
