import React from "react";

function AestheticPageEnd({ title, subTitle, className }) {
  return (
    <div className={`${className}`}>
      <div className="mx-auto px-4">
        <div className="py-28 max-w-5xl mx-auto">
          <h4 className="uppercase tracking-widest font-medium text-black-300">{title}</h4>
          <a className="font-bold text-5xl text-white " href="">
            {subTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AestheticPageEnd;
