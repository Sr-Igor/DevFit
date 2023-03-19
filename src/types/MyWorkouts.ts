import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type MyWorkoutStackParamList = {
  //Hight Order
  MyWokout: undefined;
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<MyWorkoutStackParamList, 'MyWokout'>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MyWorkoutStackParamList, 'MyWokout'>,
  BottomTabNavigationProp<MyWorkoutStackParamList>
>;
