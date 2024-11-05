"use client"
import { DownIcon, LeftIcon, RightIcon } from "@/svg/Right";
import { FoodIcon, HouseIcon } from "@/svg/Home";

export const ListofExpense = () => {

  return (
    <div className="flex flex-col w-full">
      <div className=" ml-10 flex justify-between  mr-[150px] ">
        <div className="flex  gap-5">
        <button className="bg-slate-300 w-[32px] h-[32px] rounded-lg flex justify-center items-center" ><LeftIcon/></button>
          <h1 className="text-black">Last 30 days</h1>
          <button className="bg-slate-300 w-[32px] h-[32px] rounded-lg flex justify-center items-center"><RightIcon/></button>
          </div>
          <div  className=" flex gap-5  bg-white border border-[#D1D5DB] w-[180px] h-[48px] justify-center rounded-lg ">
            <button className="text-black font-bold">Newest fisrt</button> 
            <button> <DownIcon/></button>
            </div>
         </div>
         <div className="pt-10 ">
          <h1 className="ml-10 text-black font-bold ">Today</h1>
          <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><HouseIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-green-500 mt-5 mr-5">
              + 1,000₮
            </div>
            </div>
              <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-red-500 mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> 
            
            <div className="pt-10 ">
          <h1 className="ml-10 text-black font-bold ">Yesterday</h1>
          <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div>
              <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> 
            <div className="ml-10  mt-5 w-full h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div>
            </div>
          </div>
          </div>
 
  );
};
