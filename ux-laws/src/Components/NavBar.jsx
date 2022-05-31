import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function NavBar({ className, showNav = true, next = "", prev = "" }) {
  const [state, setState] = useState(false);

  return (
    <div>
      <nav
        className={`${className} flex ${
          !showNav && "bg-black"
        } justify-between  p-4 uppercase text-white font-medium items-center tracking-widest fixed top-0 w-full text-base`}
      >
       <Link to="/">{!state && <h2 className="text-white md:block">LAWS OF UX</h2>}</Link> 
        {showNav && !state && (
          <div className="uppercase md:block ">
            <Link to={prev}>Prev</Link>
            <span className="inline-block w-10 align-middle h-1 bg-gray-200"></span>
            <Link to={next}>Next</Link>
          </div>
        )}
         {state && <Menu setState={setState} />}
        <button
          onClick={() => setState(true)}
          type="button"
          className="menuBtn flex border border-white px-3 py-2 uppercase font-medium flex items-center gap-2 "
        >
          <span className="mr-2">MENU</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="23px"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </nav>
     
    </div>
  );
}

export default NavBar;
