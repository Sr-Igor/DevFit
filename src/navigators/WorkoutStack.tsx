import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Wokout from 'pages/Tab/Workout/Default';

import { WorkoutStackParamList } from 'types/Workouts';

const MainStack = createNativeStackNavigator<WorkoutStackParamList>();

const MyWorkoutStack = () => (
  <MainStack.Navigator
    initialRouteName="Wokout"
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="Wokout" component={Wokout} />
  </MainStack.Navigator>
);

export default MyWorkoutStack;
