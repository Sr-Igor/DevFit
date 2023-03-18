//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Types
import { RootStackParamList } from 'types/Navigation';

//Pages
import Starter from './Starter';
import StarterName from './StarterName';
import StarterDays from './StarterDays';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator initialRouteName="Starter">
    <MainStack.Screen name="Starter" component={Starter} />
    <MainStack.Screen name="StarterName" component={StarterName} />
    <MainStack.Screen name="StarterDays" component={StarterDays} />
  </MainStack.Navigator>
);

export default DefaultStack;
