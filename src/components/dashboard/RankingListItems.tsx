import React from "react";

export const RankingListItems = ({ data, ranking }: any) => {
  return (
    <div className="flex items-center justify-between border-b border-[#0075FF1A] border-solid h-[60px]">
      <div className="flex items-center gap-x-3 fullhd:gap-x-6">
        <div className="text-[22px] fullhd:text-[32px] font-bold leading-[48px] w-[36px] fullhd:w-[50px] flex items-center justify-center">
          {ranking}
        </div>
        <div className="flex items-center gap-x-2 fullhd:gap-x-4">
          <div className="w-10 h-10 rounded-[10px] border border-white border-solid">
            <img src="/img/avatar.jpg" alt="" className="rounded-[8px]" />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[14px]">{data.full_name}</p>
            <p className="font-medium text-[12px] text-gray-1 mt-[3px]">
              {data.email}
            </p>
          </div>
        </div>
      </div>
      <div className="font-semibold text-[18px] fullhd:text-[24px]">
        ${data.reward_amount}
      </div>
    </div>
  );
};
