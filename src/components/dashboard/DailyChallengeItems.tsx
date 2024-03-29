import { useState } from "react";
import dashboardApi, { useQuerySuccessDailyTask } from "../../api/dashboardApi";
import { useMutation } from "react-query";
import { ParamsClaimReward } from "../../type/api/dashboardType";
import { useLoading } from "../../hooks/useLoading";

export const DailyChallengeItems = ({ data, userId, refetch }: any) => {
  const [callSuccess, setCallSuccess] = useState(false);
  const { isLoading } = useQuerySuccessDailyTask(
    userId,
    Number(data.daily_tasks_id),
    callSuccess
  );
  const handleSuccessDailyTask = async () => {
    await setCallSuccess(true);
    window.open(data.link);
    refetch();
  };

  const mutationClaimReward = useMutation((params: ParamsClaimReward) => {
    return dashboardApi.claimReward(params);
  });

  useLoading(mutationClaimReward.isLoading || isLoading);
  return (
    <div className="w-full h-[109px] rounded-[20px] bg-[#0075FF0D] p-4 flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <div className="w-[36px] aspect-square fullhd:w-[48px]">
          <img src={data.icon} alt="" className="rounded-full object-cover" />
        </div>
        <div>
          <p className="text-[22px] fullhd:text-[24px] font-semibold">
            {data.title}
          </p>
          <p className="text-[14px] opacity-50">{data.description}</p>
          <div className="flex items-center gap-x-1">
            <p className="font-medium text-[14px] text-green-1">Phần thường:</p>
            <p className="text-[16px]">{data.reward_amount} USD</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[7px]">
        <div
          className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF80] text-[14px] font-medium flex items-center justify-center border border-[#0075FF] border-solid"
          onClick={handleSuccessDailyTask}
        >
          Visit
        </div>
        {data.status === 0 ? (
          <div className="cursor-pointer w-[150px] h-[35px] rounded-[8px] bg-[#0075FF33] text-[14px] font-medium flex items-center justify-center">
            Chưa hoàn thành
          </div>
        ) : (
          <div className="w-[150px] h-[35px] rounded-[8px] bg-[#0075FF] text-[14px] font-medium flex items-center justify-center">
            Đã nhận thưởng
          </div>
        )}
      </div>
    </div>
  );
};
