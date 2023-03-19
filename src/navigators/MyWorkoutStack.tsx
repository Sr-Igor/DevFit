import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyWokout from 'pages/Tab/MyWorkouts/Default';

import { MyWorkoutStackParamList } from 'types/MyWorkouts';

const MainStack = createNativeStackNavigator<MyWorkoutStackParamList>();

const MyWorkoutStack = () => (
  <MainStack.Navigator
    initialRouteName="MyWokout"
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="MyWokout" component={MyWokout} />
  </MainStack.Navigator>
);

export default MyWorkoutStack;
