"use client"
import { useState } from "react";
import { PluseaIcon } from "@/svg/plus";
import { ListofExpense } from "./ListofExpense";
import { EyeIcon } from "@/svg/Eyes";
import { AddCategory } from "./AddCategor";
import { AddRecord } from "./AddRecord";



const categories = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others"
];

export const Record = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const clearFilters = () => {
    setSelectedRecord("All")
    setSelectedType("All");
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div className="bg-gray-100 mt-10 flex justify-center">
      <div className="pt-10 w-[1200px] flex">
        <div className="w-[300px] h-[990px] bg-white rounded-xl">
          <h1 className="text-[24px] font-bold ml-5 text-black pt-5">Records</h1>
          <div className="w-[250px] h-[32px] bg-blue-600 rounded-xl flex justify-center items-center ml-2 mt-5 hover:bg-blue-400">
             <div>
           <button className="text-white" onClick={() => setShowAddRecord(true)}>+ Add</button>
               {showAddRecord && (
             <dialog open className="modal">
                 <div >
                <AddRecord
              onClose={() => setShowAddRecord(false)} />
                  </div>
              </dialog>
                 )}
              </div>
              </div>
          <div className="bg-white ml-3 mt-5">
            <label className="input w-[250px] h-[32px] bg-gray-100 text-black flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="ml-5 mt-5 flex flex-col">
            <h1 className="text-black font-bold">Types</h1>
            <div className="flex flex-col gap-2 justify-start items-start mt-5 ml-3">
              {["All", "Income", "Expense"].map((type) => (
                <div key={type} className="flex gap-3">
                  <input
                    type="radio"
                    name="type"
                    id={`type-${type.toLowerCase()}`}
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  <label htmlFor={`type-${type.toLowerCase()}`} className="text-black">{type}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <h1 className="font-bold text-black ml-5">Category</h1>
              <button className="mr-5 hover:text-gray-200" onClick={clearFilters}>Clear</button>
            </div>
            <div className="mt-7 ml-5 flex flex-col gap-5 z-0">
             
              {categories.map((category, index) => (
                <div key={index} className="flex cursor-pointer text-black">
                  <EyeIcon/> <h1 className="ml-5">{category}</h1>
                </div>
              ))}
            </div>
            <div className="flex ml-5 mt-10 gap-3  rounded-lg">
            <PluseaIcon className="mt-1" />
               <button
                className="text-black "
                onClick={() => setShowAddCategory(true)} >
                Add Category
                 </button>
               {showAddCategory && (
             <dialog open className="modal">
                 <div >
                <AddCategory
              onClose={() => setShowAddCategory(false)} />
                  </div>
              </dialog>
                 )}
              </div>
          </div>
        </div>
        <div className="ml-10 w-full flex items-center z-50">
          <ListofExpense type={selectedType} searchQuery={searchQuery} category={selectedCategory} Record={selectedRecord} />
        </div>
      </div>
    </div>
  );
};
