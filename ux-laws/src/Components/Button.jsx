import React from "react";
function Button({ text }) {
  return (
    <div>
      <button>
        <a className=" ml-20 bg-[#1C1C1C] text-center uppercase w-44 p-5 shadow-lg font-medium text-lg font-medium text-lg tracking-widest inline-block transition-opacity focus:outline-none hover:opacity-90 text-[#F4F1D0]">
          {text}
        </a>
      </button>
    </div>
  );
}

export default Button;
