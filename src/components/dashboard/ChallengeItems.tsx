export const ChallengeItems = ({ data }: any) => {
  return (
    <div className="w-full h-[109px] rounded-[20px] bg-[#0075FF0D] p-4 flex items-center justify-between">
      <div>
        <p className="text-[22px] fullhd:text-[24px] font-semibold">
          {data.title}
        </p>
        <p className="text-[14px] opacity-50">{data.description}</p>
      </div>
      <div className="flex flex-col gap-y-[5px]">
        <div className="text-[24px] fullhd:text-[32px] font-bold">
          {data.reward_amount}{" "}
          <span className="text-[14px] text-gray-1">USD</span>
        </div>
        {data.status === 0 ? (
          <div className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF33] text-[14px] font-medium flex items-center justify-center">
            Chưa hoàn thành
          </div>
        ) : (
          <div className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF] text-[14px] font-medium flex items-center justify-center">
            Đã nhận thưởng
          </div>
        )}
      </div>
    </div>
  );
};
