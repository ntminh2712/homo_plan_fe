import React from "react";

export const DailyChallengeItems = () => {
  return (
    <div className="w-full h-[109px] rounded-[20px] bg-[#0075FF0D] p-4 flex items-center justify-between">
      <div>
        <p className="text-[24px] font-semibold">Visit our Kickstarter</p>
        <p className="text-[14px] opacity-50">Visit our Kickstarter</p>
        <div className="flex items-center gap-x-1">
          <p className="font-medium text-[14px] text-green-1">Phần thường:</p>
          <p className="text-[16px]">2.38 USD</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-[7px]">
        <div className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF80] text-[14px] font-medium flex items-center justify-center border border-[#0075FF] border-solid">
          Visit
        </div>
        <div className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF33] text-[14px] font-medium flex items-center justify-center">
          Chưa hoàn thành
        </div>
      </div>
    </div>
  );
};
