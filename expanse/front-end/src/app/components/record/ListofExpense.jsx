"use client"
import { FoodIcon, HouseIcon } from "@/svg/Home";

export const ListofExpense = () => {

  return (
    <div className="flex flex-col ">
      <div className=" ml-10 flex justify-between ">
        <div className="flex  gap-5">
 
          <h1 className="text-black">Last 30 days</h1>
         
          </div>
          {/* <div  className=" flex gap-5  bg-white border border-[#D1D5DB] w-[180px] h-[48px] justify-center rounded-lg ">
            <button className="text-black font-bold">Newest fisrt</button> 
            <button> <DownIcon/></button>
            </div> */}
         </div>
         <div className="mt-14  carousel carousel-vertical h-[950px] ">
          <h1 className="ml-10 carousel-item text-black font-bold ">Today</h1> 
          <div className="ml-10 carousel-item mt-5 w-[895px] h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><HouseIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Lending & Renting</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-green-500 mt-5 mr-5">
              + 10,000₮
            </div>
            </div>
              <div className="ml-10 carousel-item mt-5  w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-red-500 mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10 carousel-item mt-5  w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10 carousel-item mt-5  w-[895px] h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  carousel-item mt-5  w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> 
            
            <div className="pt-10 ">
          <h1 className="ml-10 text-black font-bold ">Yesterday</h1>
          <div className="ml-10  mt-5 carousel-item  w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div>
              <div className="ml-10  mt-5 carousel-item w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5 carousel-item  w-[895px]  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5  w-[895px] carousel-item  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> <div className="ml-10  mt-5  w-[895px] carousel-item  h-[64px] bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div> 
            <div className="ml-10  mt-5 w-[895px]  h-[64px] carousel-item bg-white  rounded-lg flex justify-between">
            <div className="flex">
            <h1 className="ml-5 pt-3"><FoodIcon/> </h1>
            <div className="pt-2 ml-5">
            <h1 className="text-black ">Food & Drinks</h1>
            <p>14:00</p>
            </div></div>
            <div className="text-[#EAB308] mt-5 mr-5">
              - 1,000₮
            </div>
            </div>
            <div className="ml-10 carousel-item mt-5 w-[895px] h-[64px] bg-white  rounded-lg flex justify-between">
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
            </div>
          </div>
          </div>
 
  );
};
