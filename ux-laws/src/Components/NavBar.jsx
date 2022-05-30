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
        {!state && <h2 className="text-white md:block">LAWS OF UX</h2>}
        {showNav && !state && (
          <div className="uppercase md:block ">
            <Link to={prev}>Prev</Link>
            <span className="inline-block w-10 align-middle h-1 bg-gray-200"></span>
            <Link to={next}>Next</Link>
          </div>
        )}
        <button
          onClick={() => setState(true)}
          type="button"
          className="menuBtn flex border border-white px-3 py-2 uppercase font-medium flex items-center gap-2 "
        >
          <span className="mr-2">MENU</span>
        </button>
      </nav>
      {state && <Menu setState={setState} />}
    </div>
  );
}

export default NavBar;
