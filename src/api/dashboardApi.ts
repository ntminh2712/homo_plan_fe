import apiClient from "./apiClient";
import { useQuery } from "react-query";
import { ParamsGetDailyReward, ParamsSuccessDailyTask, ParamsClaimReward } from "./../type/api/dashboardType";

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
    const url = `/Transaction/GetRanking`;
    return apiClient.get(url);
  },
  getDailyReward(params: ParamsGetDailyReward) {
    const url = `/Transaction/GetRewardDailyByUser`;
    return apiClient.get(url, { params });
  },
  getWalletByUser(params: ParamsGetDailyReward) {
    const url = `/Transaction/GetWalletByUser`;
    return apiClient.get(url, { params });
  },
  successDailyTask(params: ParamsSuccessDailyTask) {
    const url = `/DailyTasks/SuccessDailyTask/${params.userId}/${params.dailyTaskId}`;
    return apiClient.get(url);
  },
  claimReward(params: ParamsClaimReward) {
    const url = `/Transaction/CreatedTransaction`
    return apiClient.post(url, params)
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

export const useQueryGetWalletUser = (userId: string) => {
  return useQuery(
    ["get-wallet-user", userId],
    () => dashboardApi.getWalletByUser({ userId: userId }),
    { enabled: !!userId }
  );
};

export const useQuerySuccessDailyTask = (userId: string, dailyTaskId: number, callApi: boolean) => {
  return useQuery(
    ["success-daily-task", userId, dailyTaskId, callApi],
    () => dashboardApi.successDailyTask({ userId: userId, dailyTaskId: dailyTaskId }),
    { enabled: !!userId && !!dailyTaskId && !!callApi }
  );
};

export default dashboardApi;
