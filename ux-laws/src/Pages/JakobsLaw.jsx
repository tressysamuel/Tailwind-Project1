import React from "react";
import AestheticImage from "../Components/AestheticImage";
import AestheticContent from "../Components/AestheticContent";
import AestheticPageEnd from "../Components/AestheticPageEnd";
import NavBar from "../Components/NavBar";


function JakobsLaw() {
  return (
    <div>
      <NavBar className="md:flex hidden" prev="/article/4" next="/article/5">
        {" "}
      </NavBar>
      <AestheticImage className="py-28  bg-yellow-400" text="Jakob's Law" number="05/20" fillingColor="rgb(250 204 21)">
        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
            <circle fill-opacity=".15" fill="#000" cx="282.861" cy="282.861" r="207.861"></circle>
            <circle fill-opacity=".15" fill="#000" cx="283.212" cy="283.212" r="134.212"></circle>
            <circle fill="#F4F1D0" cx="283.213" cy="283.213" r="60.213"></circle>
          </g>
        </svg>
      </AestheticImage>
      <AestheticContent buttonBg="bg-yellow-400" heading="Productivity soars when a computer and its users interact" />
      <AestheticPageEnd title="Next" subTitle="Law of Common Region" color="bg-emerald-500" />
    </div>
  );
}

export default JakobsLaw;
