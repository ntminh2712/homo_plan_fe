import moment from "moment";

export const MoneyHistoryItems = ({ data }: any) => {
  return (
    <div className="flex items-center justify-between h-[45px]">
      <div className="truncate">
        <p className="text-[14px] font-medium truncate pr-4">
          {data.title_daily_tasks ?? data.title_challenge_tasks}
        </p>
        <p className="text-[14px] text-gray-1 font-medium mt-1">
          {moment(data.created_at).format("DD MMMM YYYY")}, at{" "}
          {moment(data.created_at).format("LT")}
        </p>
      </div>
      <p className="text-[14px] font-medium text-green-1">
        +{data.reward_amount}$
      </p>
    </div>
  );
};
