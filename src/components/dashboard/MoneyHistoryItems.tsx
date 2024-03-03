import React from "react";

export const MoneyHistoryItems = () => {
  return (
    <div className="flex items-center justify-between h-[45px]">
      <div>
        <p className="text-[14px] font-medium">Pool</p>
        <p className="text-[14px] text-gray-1 font-medium mt-1">
          27 March 2020, at 12:30 PM
        </p>
      </div>
      <p className="text-[14px] font-medium text-green-1">+2500$</p>
    </div>
  );
};
