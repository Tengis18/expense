import { CloseIcon, DIcon, HouseeIcon } from "@/svg/Close";
import { Categor } from "./Category";


export const AddCategor= ({ onClose }) => {

  return (
    <div className="bg-gray-100 mt-10 flex justify-center">
      <div className="pt-10 flex flex-col">
        <div className="w-[494px] h-[68px] rounded-t-xl bg-white border border-gray-200 flex items-center justify-between">
          <h1 className="font-bold text-[20px] ml-10">Add Category</h1>
          <button className="mr-10" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="w-[494px] h-[168px] rounded-b-xl bg-white border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mt-5 gap-5">
            <button className="ml-10 bg-gray-100 w-[84px] h-[48px] rounded-lg flex justify-center items-center">
              <HouseeIcon />
              <DIcon />
            </button>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-100 w-[350px] h-[48px] mr-10 rounded-lg pl-5"
            />
          </div>
          <button className="mt-7 w-[446px] h-[46px] bg-[#16A34A] rounded-[20px] ml-5 text-white">
            Add
          </button>
        </div>
        <div><Categor/></div>
      </div>
    </div>
  );
};