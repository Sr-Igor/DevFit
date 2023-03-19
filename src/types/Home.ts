import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type HomeStackParamList = {
  //Hight Order
  Home: undefined;
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>;

export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Home'>,
  BottomTabNavigationProp<HomeStackParamList>
>;
