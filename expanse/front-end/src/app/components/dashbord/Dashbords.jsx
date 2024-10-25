import { BigBlueIcon, BlueArowIcon, BluedotIcon, LigtGreenIcon, OrengIcon, PinkIcon, YlIcon } from "@/svg/Blue";
import { GreenArowIcon, GreendotIcon, } from "@/svg/Green";
import { HeadWhitIcon } from "@/svg/head";
import { HouseIcon } from "@/svg/Home";
// import { Utils } from 'chart.js';

export const Dashboards = () => {

//   const labels = Uti.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };
  return (
    <div className=" bg-slate-100 h-[1200px]">
      <div className="flex justify-center gap-8 pt-20">
      <div className="w-[384px] h-[216px] rounded-xl  bg-[#0166FF] text-white">
        <div className="flex gap-3 font-bold pt-5 ml-5 z-10">
          <h1 className="ml-3">
            <HeadWhitIcon />
          </h1>
          <h1 className="text-[22px]">Geld</h1>
        </div>
        <div className=" z-10">
          <h1 className="mt-20 ml-5 text-gray-400">
            Cash
            <p className="text-white font-bold text-[24px]"> 10,000,00</p>
          </h1>
        </div>
      </div>

      <div>
        <div className=" bg-white w-[384px] h-[56px] rounded-t-xl border flex gap-2  border-gray-200 pt-5 pl-8">
          <p className="mt-2">
            <GreendotIcon />
          </p>
          <h1>Your Income</h1>
        </div>
        <div className="bg-white w-[384px] h-[160px] rounded-b-xl border border-gray-200 pt-5 pl-8">
          <div>
            <p className="text-[32px] font-bold">1,200,000₮</p>
            <p className="text-[18px] text-[#64748B]">Your Income Amount</p>
          </div>
          <div className="flex gap-3">
            <p className="mt-[22px] ">
              <GreenArowIcon />
            </p>
            <p className="text-[Your Income Amount] mt-5 text-[18px]">
              32 % from last month.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className=" bg-white w-[384px] h-[56px] rounded-t-xl flex gap-2 border  border-gray-200 pt-5 pl-8">
          <p className="mt-2">
            <BluedotIcon />
          </p>
          <h1>Total Expenses</h1>
        </div>
        <div className="bg-white w-[384px] h-[160px] rounded-b-xl border border-gray-200 pt-5 pl-8">
          <div>
            <p className="text-[32px] font-bold">1,200,000₮</p>
            <p className="text-[18px] text-[#64748B]">Your expence Amount</p>
          </div>
          <div className="flex gap-3">
            <p className="mt-[22px] ">
              <BlueArowIcon />
            </p>
            <p className="t] mt-5 text-[18px]">32% from last month.</p>
          </div>
        </div>
      </div>
     </div>
        <div className="flex justify-center items-center mt-20 gap-10">

  <div>
    <div className="w-[588px] h-[56px] bg-white border border-gray-200 rounded-t-xl">
      <h1 className="font-bold pt-5 pl-10">Income - Expense</h1>
    </div>
    <div className="w-[588px] h-[226px] bg-white border border-gray-200 rounded-b-xl">
      <div className="flex">
        <div className="flex flex-col gap-5 mt-10 ml-10">
          <h1>3'000'000</h1>
          <h1>2'000'000</h1>
          <h1>1'000'000</h1>
          <h1>0</h1>
        </div>
        <div className="flex flex-col gap-5 mt-10 ml-10">
          <h1 className="decoration-dashed text-gray-400">2</h1>
          <h1 className="decoration-dotted text-gray-400">4</h1>
          <h1 className="decoration-dashed text-gray-400">r</h1>
          <h1 className="decoration-dashed text-gray-400">t</h1>
        </div>
      </div>
    </div>
  </div>


  <div>
    <div className="w-[588px] h-[56px] flex justify-between bg-white border border-gray-200 rounded-t-xl">
      <h1 className="font-bold pt-5 pl-10">Income - Expense</h1>
      <h1 className="text-[#6B7280] pt-5 pr-10">Jun 1 - Nov 30</h1>
    </div>
    <div className="w-[588px] h-[226px] bg-white border border-gray-200 rounded-b-xl">
      <div className="flex flex-col gap-3 mt-5 ml-10">

        <div className="flex justify-between">
          <div className="flex gap-1">
            <h1 className="mt-[7px]"><BigBlueIcon/></h1>  
            <h1>Bills</h1>
            </div>
         <h1>5’000’000₮</h1>
        <h1 className="mr-20">15.50%</h1>
        </div>
        <div className="flex justify-between"> 
           <div className="flex gap-2">
            <h1 className="mt-[7px]"><PinkIcon/></h1>  
            <h1>Food</h1>
            </div>
         <h1>5’000’000₮</h1>
        <h1 className="mr-20">15.50%</h1>
        </div>


        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="mt-[7px]"><YlIcon/></h1>  
            <h1>Shopping</h1>
            </div>
         <h1>5’000’000₮</h1>
        <h1 className="mr-20">15.50%</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h1 className="mt-[7px]"><LigtGreenIcon/></h1>  
            <h1>Insurance</h1>
            </div>
         <h1>5’000’000₮</h1>
        <h1 className="mr-20">15.50%</h1>
        </div> 
         <div className="flex justify-between">     
          <div className="flex gap-2">
            <h1 className="mt-[7px]"><OrengIcon/></h1>  
            <h1>Clothing</h1>
            </div>
         <h1>5’000’000₮</h1>
        <h1 className="mr-20">15.50%</h1>
        </div>
     </div>
    </div>
  </div>
</div>

    <div className="flex flex-col justify-center items-center pt-10">  
      <div>
      <div className="w-[1200px] h-[56px] bg-white  border border-gray-200 rounded-t-xl">
        <h1 className="font-bold mt-5 ml-10">Last Records</h1>
      </div>
      </div>
      <div>
      <div className="w-[1200px] h-[400px] bg-white  border border-gray-200 rounded-b-xl ">
        <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>
          <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>


           <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div> <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div> <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>
          <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>

          <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>
          <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div> <div className="flex justify-between">
        <div className="flex mt-5 ml-10 gap-3">
          <h1 className="mt-[5px]"><HouseIcon/></h1>
          <h1 className=""> Lending & Renting <p className="text-gray-400">3 hours ago</p></h1>
          </div>
          <h1 className="text-green-500 pt-10 mr-10">- 1,000₮</h1>
          </div>
      </div>
      </div>
    </div>

    </div>
  );
};
