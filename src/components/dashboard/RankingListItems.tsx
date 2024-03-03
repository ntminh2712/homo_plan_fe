import React from "react";

export const RankingListItems = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#0075FF1A] border-solid h-[60px]">
      <div className="flex items-center gap-x-6">
        <div className="text-[32px] font-bold leading-[48px] w-[50px] flex items-center justify-center">
          1
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-10 h-10 rounded-[10px] border border-white border-solid">
            <img src="/img/avatar.png" alt="" className="rounded-[10px]" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[14px]">Nguyen Van A</p>
            <p className="font-medium text-[12px] text-gray-1 mt-[3px]">
              abc@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="font-semibold text-[24px]">$2400</div>
    </div>
  );
};
