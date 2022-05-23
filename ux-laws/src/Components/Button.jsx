import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Button({ text, className }) {
  return (
    <Link
      to="/article/1"
      className={` ${className} ml-20 bg-[#1C1C1C] text-center uppercase w-44 p-5 shadow-lg font-medium text-lg font-medium text-lg tracking-widest inline-block transition-opacity focus:outline-none hover:opacity-90 text-[#F4F1D0]`}
    >
      {text}
    </Link>
  );
}

export default Button;
