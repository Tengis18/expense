"use client";

import { CloseIcon, DIcon, HouseeIcon } from "@/svg/Close";
import { Categor } from "./Category";
import { useState } from "react";

export const AddCategor = ({ onClose }) => {
  const [, setSelectedType] = useState("All"); 
  const [searchquery, setSearchQuery] = useState("");
  const [, setSelectedCategory] = useState(null); 
  const [showCategory, setShowCategory] = useState(false);

  const clearFilters = () => {
    setSelectedType("All");
    setSelectedCategory(null);
  };

  return (
    <div className="mt-10 flex flex-col justify-center text-black">
      <div className="pt-10 flex flex-col">
      
        <div className="w-[494px] h-[68px] rounded-t-xl bg-white border border-gray-200 flex items-center justify-between">
          <h1 className="font-bold text-[20px] ml-10">Add Category</h1>
          <button className="mr-10" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="w-[494px] h-[168px] rounded-b-xl bg-white border border-gray-200 flex flex-col gap-5">
          <div className="ml-3 w-full flex gap-5 mt-5 z-50">
            <button
              className="ml-10 bg-gray-100 w-[84px] h-[48px] rounded-lg flex justify-center items-center"
              onClick={() => setShowCategory(true)}
            >
              <HouseeIcon />
              <DIcon />
            </button>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 w-[350px] h-[48px] mr-10 rounded-lg pl-5"
              value={searchquery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <button className="w-[446px] h-[46px] bg-[#16A34A] rounded-[20px] ml-5 text-white">
              Add
            </button>
          </div>
        </div>
      </div>
      {showCategory && (
        <dialog open className="modal">
          <div >
            <button className="absolute " onClick={() => setShowCategory(false)}>
    
            </button>
            <Categor onClose={() => setShowCategory(false)} />
          </div>
        </dialog>
      )}
    </div>
  );
};
