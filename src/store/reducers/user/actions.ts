import * as types from './types';

export const setUserName = (name: string) => ({
  type: types.SET_USER_NAME,
  payload: { name }
});

export const setWorkoutDays = (workoutDays: number[]) => ({
  type: types.SET_WORKOUT_DAYS,
  payload: { workoutDays }
});
