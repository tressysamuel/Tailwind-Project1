import React from "react";
import NavBar from "../Components/NavBar";

import AestheticImage from "../Components/AestheticImage";
import AestheticContent from "../Components/AestheticContent";
import AestheticPageEnd from "../Components/AestheticPageEnd";

import { Link } from "react-router-dom";

function AestheticPage() {
  return (
    <div>
      <NavBar className="bg-red/600">
        <div className="uppercase md:block hidden ">
          <Link to="/article/1">Prev</Link>
          <span className="inline-block w-10 align-middle h-1 bg-gray-200"></span>
          <Link to="/article/2">Next</Link>
        </div>
      </NavBar>
      <AestheticImage text="Aesthetic Usability Effect" number="01/20" fillingColor="rgb(80,100,133)">
        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
            <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path>
            <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path>
          </g>
        </svg>
      </AestheticImage>

      <AestheticContent />
      <AestheticPageEnd title="Next" subTitle="Doherty Threshold" className="bg-pink-500" />
    </div>
  );
}

export default AestheticPage;