import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function LawImageContent({ text, number ,link}) {
  return (
    <div className="flex flex-col pr-20 justify-center ">
      <div className="max-w-xs pl-20 flex-col justify-center hidden md:flex text-[#F4F1D0] ">
        <p className="text-7xl font-body1">{number}</p>
        <hr className="w-1/6 mt-8"></hr>
        <p className="text-base tracking-widest my-4 font-body1 font-medium text-[#F4F1D0]">{text}</p>
      </div>

      <Button text="Learn More" className="hidden md:block" link={link}/>
    </div>
  );
}

export default LawImageContent;
