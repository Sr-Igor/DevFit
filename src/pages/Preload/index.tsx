import { useAppSelector } from 'hooks/redux-hook';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
// import { Text, View } from 'react-native';
import { User } from 'types/user';

const PreloadScreen = () => {
  const user: User = useAppSelector((state) => state.profile);
  const navigation = useNavigation();

  if (!user.name) {
    navigation.dispatch(StackActions.replace('StackDefault'));
  } else {
    navigation.dispatch(StackActions.replace('TabDefault'));
  }

  return null;
};

export default PreloadScreen;
