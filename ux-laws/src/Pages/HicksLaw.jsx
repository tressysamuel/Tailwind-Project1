import React from "react";
import NavBar from "../Components/NavBar";
import AestheticImage from "../Components/AestheticImage";
import AestheticContent from "../Components/AestheticContent";
import AestheticPageEnd from "../Components/AestheticPageEnd";
import { Link } from "react-router-dom";

function HicksLaw() {
  return (
    <div>
      <NavBar className="md:flex hidden" prev="/article/3" next="/article/5"></NavBar>
      <AestheticImage className="py-28  bg-cyan-500" text="HIck's Law" number="04/20" fillingColor="rgb(6 182 212)">
        <svg viewBox="0 0 565 564" xmlns="http://www.w3.org/2000/svg">
          <circle cx="34" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="199" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="283" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="365" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="34" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="199" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="283" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="365" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="117" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="199" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="282" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="365" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="199" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="283" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="365" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="448" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="34" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="118" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="199" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="283" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="365" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="449" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <circle cx="531" cy="530" r="34" fill="#000" fill-opacity=".2"></circle>
          <path
            fill="#F4F1D0"
            fill-rule="nonzero"
            d="M317 248h-68v68h68v-68zm-22 46h-25v-25h25v25zm91-22.88889v-22.77778h-22.77778v-22.77777c0-12.52778-10.25-22.77778-22.77778-22.77778h-22.77777V180h-22.77778v22.77778H272.1111V180h-22.77778v22.77778h-22.77777c-12.52778 0-22.77778 10.25-22.77778 22.77778v22.77777H181v22.77778h22.77778v22.77778H181v22.77778h22.77778v22.77777c0 12.52778 10.25 22.77778 22.77778 22.77778h22.77777V385h22.77778v-22.77778h22.77778V385h22.77778v-22.77778h22.77777c12.52778 0 22.77778-10.25 22.77778-22.77778v-22.77777H386v-22.77778h-22.77778V271.1111H386zM341 340H225V224h116v116z"
          ></path>
        </svg>
      </AestheticImage>
      <AestheticContent buttonBg="bg-cyan-500" heading="Productivity soars when a computer and its users interact" />
      <AestheticPageEnd title="Next" subTitle="Jakob's Law" redirect="/article/5" color="bg-yellow-400" />
    </div>
  );
}

export default HicksLaw;
