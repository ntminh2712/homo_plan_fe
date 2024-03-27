export interface ParamsChallengeTask {
  skip: number;
  limit: number;
}
export interface ParamsGetDailyReward {
  userId: string;
}
export interface ParamsSuccessDailyTask {
  userId: string;
  dailyTaskId: number;
}
export interface ParamsClaimReward {
  user_id: string;
  daily_tasks_id?: number | string;
  challenge_tasks_id?: number | string;
}
