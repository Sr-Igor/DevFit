import * as types from './types';
import { User } from '../../../types/user';

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
        state,
        name: action.payload.name
      };
    default:
      return state;
  }
}
