import React from "react";
function LawImageContainer({ paragraph, children, fillingColor }) {
  return (
    <div className="w-3/4">
      <div className=" ml-55 p-20 z bg-red-600 flex-1  flex flex-col justify-between sm:bg-white">
        <p className=" text-3xl">{paragraph}</p>
      </div>
      <div
        className=" px-14 py-8  flex-1 flex  flex-col justify-center items-center"
        style={{ backgroundColor: fillingColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default LawImageContainer;
