import React from "react";

function AestheticImage() {
  return (
    <div className="py-28  bg-slate-500 ">
      <div className="mx-auto px-4  ">
        <div className="flex mx-auto max-w-3xl items-center flex-wrap" style={{ color: "rgb(24,241,208)" }}>
          <div className="flex-1 md:mr-20 pl-20 text-[#F4F1D0]">
            <h4 className="text xl font-body1 font-medium sm:text-2xl mb:3 text-center sm:text-left">01/20</h4>
            <h1 className="text-3xl sm:text-3xl font-bold leading-none text-center sm:text-left ">
              Aesthetic Usability Effect
            </h1>
          </div>
          <div className="flex-1 min-w-275 p-10">
            <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill-opacity=".15" fill="#000" cx="282.882" cy="282.882" r="282.882"></circle>
                <path fill-opacity=".15" fill="#000" d="M82.937 82.897h399.886v399.967H82.937z"></path>
                <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AestheticImage;
