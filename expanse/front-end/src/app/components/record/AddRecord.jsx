"use client";

import { CloseIcon } from "@/svg/Close";
import { DownIcon } from "@/svg/Right";
import React, { useState } from "react";

export const AddRecord = ({ onClose }) => {
  const [transactionType, setTransactionType] = useState("EXP"); 

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="pt-5 flex flex-col">
        <div className="w-[792px] h-[68px] bg-white rounded-t-lg border border-gray-200 flex items-center justify-between">
          <h1 className="text-black font-bold text-[20px] ml-10">Add Record</h1>
          <button className="mr-10" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="w-[792px] h-[444px] bg-white rounded-b-lg border border-gray-200 flex gap-5">
          <div>
            <div className="w-[348px] h-[40px] bg-slate-200 rounded-xl flex items-center gap-1 mt-5 ml-5">
              <button
                type="button"
                className={`text-black ${transactionType === "EXP" ? "bg-blue-600 text-white" : "bg-gray-200"} rounded-2xl w-[171px] h-[40px] text-[20px]`}
                onClick={() => setTransactionType("EXP")}
              >
                Expense
              </button>
              <button
                type="button"
                className={`text-black ${transactionType === "INC" ? "bg-green-500 text-white" : ""} rounded-2xl w-[171px] h-[40px] text-[20px]`}
                onClick={() => setTransactionType("INC")}
              >
                Income
              </button>
            </div>
            <div>
              <div className="w-[348px] h-[76px] bg-slate-100 rounded-2xl mt-5 ml-5 border border-gray-300">
                <h1 className="text-black ml-5 pt-3">Amount</h1>
                <input type="text" placeholder=" ₮000.00" className="ml-5 bg-gray-100 mt-2" />
              </div>
              <div className="ml-5 mt-5">
                <h1 className="text-black">Category</h1>
                <div className="w-[348px] h-[48px] bg-slate-100 flex items-center justify-center rounded-xl border border-gray-300">
                  <input type="text" placeholder="Choose" className="bg-gray-100 w-[292px]" />
                  <button className="w-[24px] h-[24px] flex justify-center items-center">
                    <DownIcon />
                  </button>
                </div>
              </div>
              <div className="w-[348px]">
                <div className="flex ml-5 mt-5 text-black justify-between">
                  <h1>Date</h1>
                  <h1 className="mr-24">Time</h1>
                </div>
                <div className="flex gap-5 text-black">
                  <input type="text" className="bg-slate-100 w-[168px] h-[48px] border border-gray-300 ml-5 rounded-xl" />
                  <input type="text" className="bg-slate-100 w-[168px] h-[48px] border border-gray-300 rounded-xl" />
                </div>
              </div>
              
            <button  className="ml-5 mt-5 bg-gradient-to-r bg-blue-500  hover:bg-blue-600
         active:scale-95 text-white font-semibold w-[348px] h-[40px] rounded-3xl flex items-center justify-center gap-2">
         Add Record
           </button>

            </div>
          </div>
          <div className="text-black ml-5 mt-5">
            <h1>Payee</h1>
            <div className="w-[348px] h-[48px] bg-slate-100 flex items-center justify-center rounded-xl border border-gray-300 mt-3">
              <input type="text" placeholder="Write here" className="bg-gray-100 w-[292px]" />
              <button className="w-[24px] h-[24px] flex justify-center items-center">
                <DownIcon />
              </button>
            </div>
            <div className="text-black mt-5">
              <h1>Note</h1>
              <div className="w-[348px] h-[280px] bg-slate-100 rounded-md border border-gray-300">
                <input type="text" placeholder="Write here" className="bg-slate-100 ml-5 mt-5 w-[316px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
