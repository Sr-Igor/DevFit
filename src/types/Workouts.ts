import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type WorkoutStackParamList = {
  //Hight Order
  Wokout: undefined;
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<WorkoutStackParamList, 'Wokout'>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<WorkoutStackParamList, 'Wokout'>,
  BottomTabNavigationProp<WorkoutStackParamList>
>;
