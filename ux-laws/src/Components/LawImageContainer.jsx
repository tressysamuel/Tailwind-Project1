import React from "react";

function LawImageContainer({ paragraph, children, fillingColor }) {
  return (
    <div className="w-3/4">
      
      
      <div className=" ml-55 p-10 z bg-red-600 flex-1  flex flex-col justify-between sm:bg-white">
      <svg className="pb-4"  width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg>
        <p className="p-5 text-3xl">{paragraph}</p>
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
