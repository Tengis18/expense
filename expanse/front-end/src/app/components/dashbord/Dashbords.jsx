import { BlueArowIcon, BluedotIcon } from "@/svg/Blue";
import { GreenArowIcon, GreendotIcon, GreenrowIcon } from "@/svg/Green";
import { HeadWhitIcon } from "@/svg/head";

export const Dashboards = () => {
  return (
    <div className="flex justify-center gap-20 bg-slate-100 h-[1200px] pt-20">
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
        <div className=" bg-white w-[384px] h-[56px] rounded-t-xl border flex gap-2  border-gray-200 pt-5 pl-8">
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

      <div></div>
    </div>
  );
};
