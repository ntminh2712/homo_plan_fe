import apiClient from "./apiClient";
import { useQuery } from "react-query";

const dashboardApi = {
  getChallengerTasks() {
    const url = `/ChallengeTasks`;
    return apiClient.get(url);
  },
};

export const useQueryChallengeTask = () => {
  return useQuery(["get-challenge-task"], () =>
    dashboardApi.getChallengerTasks()
  );
};

export default dashboardApi;
