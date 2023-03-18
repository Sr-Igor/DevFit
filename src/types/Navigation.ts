import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  StackDefault: undefined;
  TabDefault: undefined;
  Preload: undefined;
};

//Default Stack Types
export type StackScreenRouteProp = RouteProp<
  RootStackParamList,
  'StackDefault'
>;
export type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'StackDefault'>,
  BottomTabNavigationProp<RootStackParamList>
>;

//Default Tab Types
export type TabScreenRouteProp = RouteProp<RootStackParamList, 'TabDefault'>;
export type TabScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'TabDefault'>,
  BottomTabNavigationProp<RootStackParamList>
>;
