import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'pages/Tab/Home/Default';

import { HomeStackParamList } from 'types/Home';

const MainStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <MainStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
);

export default HomeStack;
