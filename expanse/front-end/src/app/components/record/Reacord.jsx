
import { PluseaIcon } from "@/svg/plus";

export const Reacord = () => {
 
    return (
  <div className=" h-[1800px]w-full  bg-gray-100 mt-10 ">
    <div className="pt-10">
    <div className="w-[282px] h-[990px] bg-white ml-24 rounded-xl">
      <h1 className="text-[24px] font-bold ml-5 text-black pt-5">Records</h1>
      <div className="w-[250px] h-[32px] bg-blue-600 rounded-xl flex justify-center items-center ml-4 mt-5 hover:bg-blue-400"> 
      <button className="text-white ">+  Add</button>
      </div>
      <div className="bg-white ml-5 mt-10 ">
        <input 
        type="search "
        id="search" 
        name="search"
        className="bg-gray-200 w-[250px] h-[32px] rounded-lg"
        />
      </div>

      <div className="ml-5 mt-5 flex flex-col">
        <h1 className="text-black font-bold ">Types</h1>
        <div className="flex flex-col gap-2 justify-start items-start mt-5 ml-3">
         <div className="flex gap-3 ">
        <input type="radio"/>
        <label htmlFor="All" className="text-black">All</label>
        </div>
        <div className="flex gap-3">
        <input type="radio"  />
        <label htmlFor="All" className="text-black">Income</label>
        </div>
        <div className="flex gap-3">
        <input type="radio"  />
        <label htmlFor="All" className="text-black">Expense</label>
        </div>
        </div>
      </div>

      <div > 
        <div className="flex justify-between mt-10" >
        <h1 className="ml-5 text-black font-bold">Category</h1>
        <button className="mr-5">Clear</button>
        </div>
        <div className="mt-7 ml-5 flex flex-col gap-5">
          <div className="flex">
            <button className="mt-1">
         
          </button>
          <h1 className="text-black ml-5">Food & Drinks</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
          
          </button>
          <h1 className="text-black ml-5">Shopping</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
       
          </button>
          <h1 className="text-black ml-5">Housing</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
     
          </button>
          <h1 className="text-black ml-5">Transportation</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
      
          </button>
          <h1 className="text-black ml-5">Vehicle</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
       
          </button>
          <h1 className="text-black ml-5">Life & Entertainment</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
          
          </button>
          <h1 className="text-black ml-5">Communication, PC</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
          
          </button>
          <h1 className="text-black ml-5">Financial expenses</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
          
          </button>
          <h1 className="text-black ml-5">Investments</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
      
          </button>
          <h1 className="text-black ml-5">Income</h1>
          </div>
             <div className="flex">
            <button className="mt-1">
        
          </button>
          <h1 className="text-black ml-5">Others</h1>
          </div>
        </div>
        <div className="flex ml-5 mt-10 gap-3">
          <h1 className="mt-1">
          <PluseaIcon/></h1>
          <button className="text-black">Add Category</button>
        </div>
      </div>
    
      </div>
      </div>
  </div>
    );
  };
  

  
