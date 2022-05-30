import React from "react";
import NavBar from "../Components/NavBar";

import AestheticImage from "../Components/AestheticImage";
import AestheticContent from "../Components/AestheticContent";
import AestheticPageEnd from "../Components/AestheticPageEnd";

import { Link } from "react-router-dom";

function AestheticPage() {
  return (
    <div>
      <NavBar className="md:flex hidden" prev="/" next="/article/2"></NavBar>
      <AestheticImage text="Aesthetic Usability Effect" number="01/20" className="bg-gray-700" fillingColor="rgb(55 65 81)">
        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
            <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path>
            <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path>
          </g>
        </svg>
      </AestheticImage>

      <AestheticContent heading=" Users Often perceive aesthetically pleasing design as design that's more usable." />
      <AestheticPageEnd title="Next" subTitle="Doherty Threshold" color="bg-pink-500" />
    </div>
  );
}

export default AestheticPage;
