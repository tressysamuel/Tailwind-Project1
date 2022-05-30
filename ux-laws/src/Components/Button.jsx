import React from "react";
import { Link } from "react-router-dom";

function Button({ text, className, link = "" }) {
  return (
    <Link
      to={link}
      className={` ${className} ml-20 bg-[#1C1C1C] text-center uppercase p-5 shadow-lg font-medium text-lg font-medium text-lg tracking-widest inline-block transition-opacity focus:outline-none hover:opacity-90 text-[#F4F1D0]`}
    >
      {text}
    </Link>
  );
}

export default Button;
