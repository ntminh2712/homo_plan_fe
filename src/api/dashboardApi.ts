import apiClient from "./apiClient";
import { useQuery } from "react-query";
import { ParamsGetDailyReward, ParamsSuccessDailyTask, ParamsClaimReward } from "./../type/api/dashboardType";

const dashboardApi = {
  getChallengerTasks(params: ParamsGetDailyReward) {
    const url = `/ChallengeTasks/GetAllChallengeTaskByUser`;
    return apiClient.get(url, { params });
  },
  getDailyTasks(params: ParamsGetDailyReward) {
    const url = `/Transaction/GetDailyTasksByUser`;
    return apiClient.get(url, { params });
  },
  getRanking(params: ParamsGetDailyReward) {
    const url = `/Transaction/GetRanking`;
    return apiClient.get(url, { params });
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

export const useQueryChallengeTask = (userId: string) => {
  return useQuery(
    ["get-challenge-task", userId],
    () => dashboardApi.getChallengerTasks({ userId: userId }),
    { enabled: !!userId }
  );
};

export const useQueryDailyTask = (userId: string) => {
  return useQuery(
    ["get-daily-task", userId],
    () => dashboardApi.getDailyTasks({ userId: userId }),
    { enabled: !!userId }
  );
};

export const useQueryGetRanking = (userId: string) => {
  return useQuery(
    ["get-ranking", userId],
    () => dashboardApi.getRanking({ userId: userId }),
    { enabled: !!userId }
  );
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
