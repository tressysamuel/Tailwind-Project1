import React from "react";
import Button from "./Button";
function LawImageContent({ text, number }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-xs pl-20 flex-col justify-center hidden md:flex text-[#F4F1D0] ">
        <p className="text-7xl font-body1">{number}</p>
        <hr className="w-1/6 mt-8"></hr>
        <p className="text-xl tracking-widest my-5 font-body1 font-bold text-[#F4F1D0]">{text}</p>
      </div>
      <Button text="Learn More" className="hidden md:block"/>
    </div>
  );
}

export default LawImageContent;
