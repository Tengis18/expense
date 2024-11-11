"use client";

import { HeadIcon } from "@/svg/head";
import { PluseIcon } from "@/svg/plus";
import React, { useState } from "react";
import Link from "next/link";



export const Dashboard = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-[1200px]">
        <div className="flex mt-10 gap-5">
          <button>
            <HeadIcon />
          </button>
          <Link href={`/dashbord`}>
            <button className="hover:font-bold text-[16px] text-black">Dashboard</button>
          </Link>
          <Link href={`/record`}>
            <button className="hover:font-bold text-black">Records</button>
          </Link>
        </div>
        <div className="flex gap-10 mt-5">
          <button
            onClick={() => setShowAddRecord(true)} 
            className="flex gap-2 items-center bg-blue-600 text-white w-[99px] rounded-xl h-[30px] mt-3"
          >
            <h1 className="ml-2 mt-1">
              <PluseIcon />
            </h1>
            Record
          </button>
          <div>
            <img src="./profile.png" alt="Profile" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

