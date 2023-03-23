import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type MyWorkoutStackParamList = {
  //Hight Order
  MyWokout: undefined;
  ActionWorkout: { id: number | null };
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<MyWorkoutStackParamList, 'MyWokout' | 'ActionWorkout'>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MyWorkoutStackParamList, 'MyWokout', 'ActionWorkout'>,
  BottomTabNavigationProp<MyWorkoutStackParamList>
>;
