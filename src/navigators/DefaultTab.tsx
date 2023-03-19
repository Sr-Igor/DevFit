import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainTab = createBottomTabNavigator();

//Bar
import TabBar from 'components/TabBar';

import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutStack from './MyWorkoutStack';

const DefaultTab = () => (
  <MainTab.Navigator initialRouteName="WorkoutStack" tabBar={(props) => <TabBar {...props} />}>
    <MainTab.Screen
      name="HomeStack"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <MainTab.Screen
      name="WorkoutStack"
      component={WorkoutStack}
      options={{
        tabBarLabel: 'WorkoutStack'
      }}
    />

    <MainTab.Screen
      name="MyWorkoutStack"
      component={MyWorkoutStack}
      options={{
        tabBarLabel: 'MyWorkoutStack'
      }}
    />
  </MainTab.Navigator>
);

export default DefaultTab;
