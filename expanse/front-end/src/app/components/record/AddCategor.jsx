"use client";

import { useState } from "react";

import { CloseIcon, DIcon, HouseeIcon,  } from "@/svg/Close";
import { AIcon, BallIcon, BaseeballIcon, ExelIcon, FiveIcon, HalfIcon, HokIcon, HomeIcon,
   IDIcon, IdIcon, ImageIcon, JinIcon, LatherIcon, LineIcon, MickIcon, NavchIcon, 
   OrengIcon, PanIcon, PeaceIcon, PhotoIcon, PlIcon, QustenIcon, RoadIcon, SevenIcon, TimeIcon, 
   ToleitIcon, TreaIcon, TreIcon, TwoIcon, WatchIcon } from "@/svg/Close";


export const AddCategory = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategory, setShowCategory] = useState(false);

    const clearFilters = () => {
    setSelectedType("All");
    setSearchQuery("");
    setSelectedCategory(null);
  };
  
  return (
    <div className="mt-10 flex flex-col justify-center text-black">
      <div className="pt-10 flex flex-col">
        <div className="w-[494px] h-[68px] rounded-t-xl bg-white border border-gray-200 flex items-center justify-between">
          <h1 className="font-bold text-[20px] ml-10">Add Category</h1>
          <button className="mr-10" onClick={onClose}>
            <CloseIcon/>
          </button>
        </div>
        <div className="w-[494px] h-[168px] rounded-b-xl bg-white border border-gray-200 flex flex-col gap-5">
          <div className="ml-3 w-full flex gap-5 mt-5 z-50 ">
            <details className="dropdown bg-white">
         <summary className="btn m-1 bg-white hover:bg-slate-100 w-[84px] h-[48px]">
        <button className="ml-10   rounded-lg flex justify-center items-center"
              onClick={() => setShowCategory(true)}>
              <HouseeIcon/>
              <DIcon />
            </button>
    </summary>
       
       </details>
           
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 w-[350px] h-[48px] mr-10 rounded-lg pl-5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <button className="w-[446px] h-[46px] bg-[#16A34A] hover:bg-green-400 rounded-[20px] ml-5 text-white">
              Add
            </button>
         
          <div className=" flex h-[350px] justify-center bg-white border border-gray-200 rounded-b-lg" >
      <div className="flex flex-col">
          <div className="flex gap-10 ml-5 mt-4"> 
                <button><HouseeIcon/></button>
                <button><HomeIcon/></button>
                <button><IdIcon/></button>
                <button><IDIcon/></button>
                <button><LatherIcon/></button>
                <button><TwoIcon/></button>
            </div>
              <div className="flex gap-10 ml-5 mt-6">
                   <button><ImageIcon/></button>
                   <button><PlIcon/></button>
                   <button><MickIcon/></button>
                   <button><ExelIcon/></button>
                   <button><TreIcon/></button>
                   <button><TreaIcon/></button>
             </div>
              <div className="flex gap-10 ml-5 mt-6">
                   <button><NavchIcon/></button>
                   <button><FiveIcon/></button>
                   <button><SevenIcon/></button>
                   <button><RoadIcon/></button>
                   <button><TimeIcon/></button>
                   <button><HokIcon/></button>
               </div> 
               <div className="flex gap-10 ml-5 mt-6">
                   <button><JinIcon/></button>
                   <button><BallIcon/></button>
                   <button><PhotoIcon/></button>
                   <button><BaseeballIcon/></button>
                   <button><QustenIcon/></button>
                   <button><AIcon/></button>
                </div>
               <div className="flex gap-10 ml-3 mt-6">
                   <button><WatchIcon/></button>
                   <button><HalfIcon/></button>
                   <button><OrengIcon/></button>
                   <button><PeaceIcon/></button>
                   <button><ToleitIcon/></button>
                   <button><PanIcon/></button>
              </div>
              <h1 className="ml-5 mt-5"><LineIcon/></h1>
              <div className="ml-5 mt-6 flex gap-6">
                <button className="w-[24px] h-[24px] bg-[#0166FF] hover:bg-blue-500 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#01B3FF] hover:bg-cyan-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#41CC00] hover:bg-green-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#F9D100] hover:bg-yellow-300 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#FF7B01] hover:bg-orange-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#AE01FF] hover:bg-fuchsia-500 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#FF0101] hover:bg-red- rounded-3xl"></button>
              </div>
        </div>
      </div>
    </div> 
    </div>
        </div>

      </div>
  );
};
