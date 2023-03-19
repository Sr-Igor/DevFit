import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator();

//Bar
import TabBar from 'components/TabBar';

import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutStack from './MyWorkoutStack';

const DefaultTab = () => (
  <MainTab.Navigator initialRouteName="Default" tabBar={(props) => <TabBar {...props} />}>
    <MainTab.Screen
      name="WorkoutStack"
      component={WorkoutStack}
      // options={{
      //   tabBarLabel: 'Tab 1'
      // }}
    />
    <MainTab.Screen
      name="HomeStack"
      component={HomeStack}
      // options={{
      //   tabBarLabel: 'Default'
      // }}
    />
    <MainTab.Screen
      name="MyWorkoutStack"
      component={MyWorkoutStack}
      // options={{
      //   tabBarLabel: 'Tab 2'
      // }}
    />
  </MainTab.Navigator>
);

export default DefaultTab;
