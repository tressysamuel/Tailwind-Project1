import React from "react";

function AestheticImage({ text, number, children, fillingColor, className }) {
  return (
    <div className={`${className} py-28`}>
      <div className="mx-auto px-4  ">
        <div className="flex mx-auto max-w-3xl items-center flex-wrap" style={{ color: "rgb(24,241,208)" }}>
          <div className="flex-1 md:mr-20 pl-20 text-[#F4F1D0]">
            <h4 className=" text xl font-body1 font-medium sm:text-2xl mb:3 text-center sm:text-left">{number}</h4>
            <h1 className="text-3xl sm:text-3xl font-bold leading-none text-center sm:text-left ">{text}</h1>
          </div>
          <div className="flex-1 min-w-275 p-10" style={{ backgroundColor: fillingColor }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AestheticImage;
