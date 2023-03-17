export type User = {
  name: string;
  level: 1 | 2 | 3; // 1 - 2 - 3
  workoutDays: number[]; // 1- 0
  myWorkouts: Array<string>;
  lastWorkout: number; //ID
  dailyProgress: string[];
};
