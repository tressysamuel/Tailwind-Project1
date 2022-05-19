import React from "react";
import Text from "./Text";
import SideBar from "./SideBar";

import Button from "./Button";
function HomePage() {
  return (
    //menu//
    <div>
      <div className="mx-auto px-4 w-2/4">
        <div className="flex justify-between items-center">
          <div className="w-2/4">
             <Text /> 
            <div
              className=" px-14 py-8  flex-1 flex  flex-col justify-center items-center"
              style={{ backgroundColor: "rgb(80,100,133)" }}
            >
              <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
                  <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path>
                  <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path>
                </g>
              </svg>
            </div>
            <div>
            <SideBar text="Users moreperceive aesthetically pleasing design as design that's more usable" number="01" />
            </div>
          </div>
        </div>
      </div>

     
     
    </div>
  );
}

export default HomePage;
