import { CloseIcon } from "@/svg/Close";

export const AddRecord= () => {

  return (
    <div className="bg-gray-100 flex justify-center " >
      <div className="pt-5 flex flex-col">
        <div className="w-[792px] h-[68px] bg-white rounded-t-lg border border-gray-200 flex items-center justify-between ">
            <h1 className="text-black font-bold text-[20px] ml-10">Add Record</h1>
            <button className="mr-10"><CloseIcon/></button>
        </div>
        <div className="w-[792px] h-[444px] bg-white rounded-b-lg border border-gray-200">
            <div className=""> 
                <button className="text-black">Expense</button>
                 <button></button>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};