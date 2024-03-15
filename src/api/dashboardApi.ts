import apiClient from "./apiClient";
import { useQuery } from "react-query";
import { ParamsGetDailyReward } from "./../type/api/dashboardType";

const dashboardApi = {
  getChallengerTasks() {
    const url = `/ChallengeTasks`;
    return apiClient.get(url);
  },
  getDailyTasks() {
    const url = `/DailyTasks`;
    return apiClient.get(url);
  },
  getRanking() {
    const url = `/TransactionHistory/GetRanking`;
    return apiClient.get(url);
  },
  getDailyReward(params: ParamsGetDailyReward) {
    const url = `/TransactionHistory/GetRewardDailyByUser`;
    return apiClient.get(url, { params });
  },
};

export const useQueryChallengeTask = () => {
  return useQuery(["get-challenge-task"], () =>
    dashboardApi.getChallengerTasks()
  );
};

export const useQueryDailyTask = () => {
  return useQuery(["get-daily-task"], () => dashboardApi.getDailyTasks());
};

export const useQueryGetRanking = () => {
  return useQuery(["get-ranking"], () => dashboardApi.getRanking());
};
export const useQueryGetDailyReward = (userId: string) => {
  return useQuery(
    ["get-daily-reward", userId],
    () => dashboardApi.getDailyReward({ userId: userId }),
    { enabled: !!userId }
  );
};

export default dashboardApi;
