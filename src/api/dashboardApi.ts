import apiClient from "./apiClient";
import { useQuery } from "react-query";

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
};

export const useQueryChallengeTask = () => {
  return useQuery(["get-challenge-task"], () =>
    dashboardApi.getChallengerTasks()
  );
};

export const useQueryDailyTask = () => {
  return useQuery(["get-daily-task"], () =>
    dashboardApi.getDailyTasks()
  );
};

export const useQueryGetRanking = () => {
  return useQuery(["get-ranking"], () =>
    dashboardApi.getRanking()
  );
};

export default dashboardApi;
