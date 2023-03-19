import * as types from './types';
import { User } from 'types/user';

const initialState = {
  name: '',
  level: '', // 1 - 2 - 3
  workoutDays: [], // 1- 0
  myWorkouts: [],
  lastWorkout: '', //ID
  dailyProgress: []
};

type Action = {
  type: string;
  payload: User;
};

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        name: action.payload.name
      };
    case types.SET_WORKOUT_DAYS:
      return {
        ...state,
        workoutDays: action.payload.workoutDays
      };
    case types.SET_USER_LEVEL:
      return {
        ...state,
        level: action.payload.level
      };
    case types.SET_WORKOUTS_USER:
      return {
        ...state,
        myWorkouts: action.payload.myWorkouts
      };
    default:
      return state;
  }
}
