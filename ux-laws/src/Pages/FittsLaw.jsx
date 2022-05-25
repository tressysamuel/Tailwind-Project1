import React from "react";
import NavBar from "../Components/NavBar";
import AestheticImage from "../Components/AestheticImage";
import AestheticContent from "../Components/AestheticContent";
import AestheticPageEnd from "../Components/AestheticPageEnd";

import { Link } from "react-router-dom";

function FittsLaw() {
  return (
    <div>
      <NavBar className="md:flex hidden" ></NavBar>
         {/* <div className="uppercase md:block hidden ">
          <Link to="/article/1">Prev</Link>
          <span className="inline-block w-10 align-middle h-1 bg-gray-200"></span>
          <Link to="/article/3">Next</Link>
        </div>  */}
     
      <AestheticImage className="py-28  bg-emerald-500" text="Doherty Threshold" number="03/20" fillingColor="rgb(16 185 129)">
        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
            <circle fill-opacity=".15" fill="#000" cx="282.861" cy="282.861" r="207.861"></circle>
            <circle fill-opacity=".15" fill="#000" cx="283.212" cy="283.212" r="134.212"></circle>
            <circle fill="#F4F1D0" cx="283.213" cy="283.213" r="60.213"></circle>
          </g>
        </svg>
      </AestheticImage>
      <AestheticContent />
      <AestheticPageEnd title="Next" subTitle="Fitt's law" color="bg-cyan-500"/>
    </div>
  );
}

export default FittsLaw;
