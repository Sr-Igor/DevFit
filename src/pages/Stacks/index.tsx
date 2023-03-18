//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from 'types/Navigation';

//Pages
import Starter from './Starter';
import StarterName from './StarterName';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="Starter"
    // screenOptions={{
    //   headerShown: false
    // }}
  >
    <MainStack.Screen name="Starter" component={Starter} />
    <MainStack.Screen name="StarterName" component={StarterName} />
  </MainStack.Navigator>
);

export default DefaultStack;
