import { AIcon, BallIcon, BaseeballIcon, ExelIcon, FiveIcon, HalfIcon, HokIcon, HomeIcon,
   HouseeIcon, IDIcon, IdIcon, ImageIcon, JinIcon, LatherIcon, LineIcon, MickIcon, NavchIcon, 
   OrengIcon, PanIcon, PeaceIcon, PhotoIcon, PlIcon, QustenIcon, RoadIcon, SevenIcon, TimeIcon, 
   ToleitIcon, TreaIcon, TreIcon, TwoIcon, WatchIcon } from "@/svg/Close";

export const Categor= () => {

  return (
    <div className="bg-gray-100 flex justify-center modal" id="my_modal_1" >
      <div className="pt-5 flex flex-col">
        <div className="w-[312px] h-[336px] rounded-xl bg-white border border-gray-200 ">
          <div className="flex gap-6 ml-5 mt-7"> 
                <button><HouseeIcon/></button>
                <button><HomeIcon/></button>
                <button><IdIcon/></button>
                <button><IDIcon/></button>
                <button><LatherIcon/></button>
                <button><TwoIcon/></button>
            </div>
              <div className="flex gap-6 ml-5 mt-6">
                   <button><ImageIcon/></button>
                   <button><PlIcon/></button>
                   <button><MickIcon/></button>
                   <button><ExelIcon/></button>
                   <button><TreIcon/></button>
                   <button><TreaIcon/></button>
             </div>
              <div className="flex gap-6 ml-5 mt-6">
                   <button><NavchIcon/></button>
                   <button><FiveIcon/></button>
                   <button><SevenIcon/></button>
                   <button><RoadIcon/></button>
                   <button><TimeIcon/></button>
                   <button><HokIcon/></button>
               </div> 
               <div className="flex gap-6 ml-5 mt-6">
                   <button><JinIcon/></button>
                   <button><BallIcon/></button>
                   <button><PhotoIcon/></button>
                   <button><BaseeballIcon/></button>
                   <button><QustenIcon/></button>
                   <button><AIcon/></button>
                </div>
               <div className="flex gap-6 ml-5 mt-6">
                   <button><WatchIcon/></button>
                   <button><HalfIcon/></button>
                   <button><OrengIcon/></button>
                   <button><PeaceIcon/></button>
                   <button><ToleitIcon/></button>
                   <button><PanIcon/></button>
              </div>
              <h1 className="ml-5 mt-5"><LineIcon/></h1>
              <div className="ml-5 mt-6 flex gap-4">
                <button className="w-[24px] h-[24px] bg-[#0166FF] hover:bg-blue-500 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#01B3FF] hover:bg-cyan-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#41CC00] hover:bg-green-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#F9D100] hover:bg-yellow-300 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#FF7B01] hover:bg-orange-400 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#AE01FF] hover:bg-fuchsia-500 rounded-3xl"></button>
                <button className="w-[24px] h-[24px] bg-[#FF0101] hover:bg-red- rounded-3xl"></button>
              </div>
        </div>
      </div>
    </div>
  );
};