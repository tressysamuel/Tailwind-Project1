import React, { useState } from "react";
import Menu from "./Menu";

function NavBar() {
  
  return (
    <div>
      <nav className="bg-black flex justify-between p-4 uppercase text-white font-medium items-center tracking-widest fixed top-0 w-full text-base">
        <div>
          <h2 className="text-white ">LAWS OF UX</h2>
        </div>


        <button
          
          type="button"
          class="menuBtn flex border border-white px-3 py-2 uppercase font-medium"
        >
          <span className="mr-2">MENU</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="23px">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>

        </button>
       
      </nav>
    </div>
  );
}

export default NavBar;
