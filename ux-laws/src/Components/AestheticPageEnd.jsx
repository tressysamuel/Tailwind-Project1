import React from "react";
import { Link } from "react-router-dom";

function AestheticPageEnd({ title, subTitle, color }) {
  return (
    <div className={`${color}`}>
      <div className="mx-auto px-4">
        <div className="py-28 max-w-5xl mx-auto">
          <Link to="/article/2">
            <h4 className="uppercase tracking-widest font-medium text-black-300">{title}</h4>
            <a className="font-bold text-5xl text-white " href="">
              {subTitle}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AestheticPageEnd;
