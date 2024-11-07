import { HomeIcon, HouseeIcon, IDIcon, IdIcon, LatherIcon } from "@/svg/Close";

export const Categor= ({ onClose }) => {

  return (
    <div className="bg-gray-100 mt-10 flex justify-center">
      <div className="pt-10 flex flex-col">
        <div className="w-[312px] h-[336px] rounded-xl bg-white border border-gray-200 ">
         <button><HouseeIcon/></button>
           <button><HomeIcon/></button>
             <button><IdIcon/></button>
               <button><IDIcon/></button>
                 <button><LatherIcon/></button>
        </div>
      </div>
    </div>
  );
};