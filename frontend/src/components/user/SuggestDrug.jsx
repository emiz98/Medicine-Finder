import React from "react";
import { Link } from "react-router-dom";

const SuggestDrug = () => {
  return (
    <Link to="/search/drug">
      <div
        className="px-8 py-4 bg-white shadow-md rounded-lg flex hover:bg-gray-100
    items-center gap-x-5 mb-4 cursor-pointer fade border-2
    border-gray-200 hover:border-primary"
      >
        <div className="hidden md:inline-flex w-28 h-28 bg-primary rounded-lg relative">
          <img
            className="absolute -top-3 h-full object-contain"
            src="/assets/med.png"
            alt="drug"
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-x-5">
            <h3 className="font-medium text-xl">Doliprane</h3>
            <span
              className="bg-primary text-xs px-3 py-1 
                text-white rounded-lg font-medium"
            >
              600g
            </span>
          </div>
          <p className="text-sm text-gray-500 w-full line-clamp-2 md:w-2/3 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eveniet nesciunt voluptatibus aliquid natus magni nostrum.
          </p>
          <span className="bg-green-500 rounded-lg text-sm px-2 py-1 text-white mt-2">
            In stock
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestDrug;
