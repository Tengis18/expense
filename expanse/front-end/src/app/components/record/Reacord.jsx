"use client";

import { PluseaIcon } from "@/svg/plus";
import { ListofExpense } from "./ListofExpense";
import { EyeIcon } from "@/svg/Eyes";

export const Reacord = () => {
  return (
    <div className="bg-gray-100 mt-10 flex justify-center">
      <div className="pt-10 w-[1200px] flex">
        <div className="w-[282px] h-[990px] bg-white rounded-xl">
          <h1 className="text-[24px] font-bold ml-5 text-black pt-5">Records</h1>
          <div className="w-[250px] h-[32px] bg-blue-600 rounded-xl flex justify-center items-center ml-2 mt-5 hover:bg-blue-400">
            <button className="text-white">+ Add</button>
          </div>
          <div className="bg-white ml-3 mt-5">
            <label className="input w-[250px] h-[32px] bg-[#D1D5DB] text-black flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
          </div>

          <div className="ml-5 mt-5 flex flex-col">
            <h1 className="text-black font-bold">Types</h1>
            <div className="flex flex-col gap-2 justify-start items-start mt-5 ml-3">
              <div className="flex gap-3">
                <input type="radio" id="type-all" />
                <label htmlFor="type-all" className="text-black">All</label>
              </div>
              <div className="flex gap-3">
                <input type="radio" id="type-income" />
                <label htmlFor="type-income" className="text-black">Income</label>
              </div>
              <div className="flex gap-3">
                <input type="radio" id="type-expense" />
                <label htmlFor="type-expense" className="text-black">Expense</label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <h1 className="ml-5 text-black font-bold">Category</h1>
              <button className="mr-5 hover:text-gray-200">Clear</button>
            </div>
            <div className="mt-7 ml-5 flex flex-col gap-5">
              {[
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
              ].map((category, index) => (
                <div key={index} className="flex">
                  <button className="mt-1">
                    <EyeIcon />
                  </button>
                  <h1 className="text-black ml-5">{category}</h1>
                </div>
              ))}
            </div>
            <div className="flex ml-5 mt-10 gap-3">
              <h1 className="mt-1">
                <PluseaIcon />
              </h1>
              <button className="text-black hover:text-gray-500">Add Category</button>
            </div>
          </div>
        </div>
        <div className="ml-10 w-full">
          <ListofExpense />
        </div>
      </div>
    </div>
  );
};
