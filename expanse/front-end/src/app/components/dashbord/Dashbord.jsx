import { HeadIcon } from "@/svg/head";
import { PluseIcon } from "@/svg/plus";
import React from "react";
import Link from "next/link";


export const Dashboard = () => {
  return (
    <div >
      <div className="flex justify-between">
        <div className="flex ml-32 mt-10 gap-5">
          <button>
            <HeadIcon />
          </button>
          <Link href={`/dashbord`}>
            <button className="hover:font-bold text-[16px]">Dashbord</button>
          </Link>

          <Link href={`/record`}>
            <button className="hover:font-bold">Records</button>
          </Link>
        </div>
        <div className="flex gap-10 mt-5 mr-32">
          <button className="flex gap-2 items-center bg-blue-600 text-white w-[99px] rounded-xl h-[30px] mt-3 ">
            <h1 className="ml-2 mt-1">
              <PluseIcon />
            </h1>
            Record
          </button>
          <div>
            <img src="./profile.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
