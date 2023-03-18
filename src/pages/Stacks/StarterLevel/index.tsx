//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { setUserName } from 'store/reducers/user/actions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';
import HeaderButton from 'components/HeaderButton';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp } from 'types/Navigation';

const StarterLevel = () => {
  // const navigation = useNavigation<StackScreenNavigationProp>();
  // const user: User = useAppSelector((state) => state.profile);
  // const dispatch = useAppDispatch();

  // const [name, setName] = useState(user.name);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: '',
  //     headerRight: () => <HeaderButton onPress={handleNextAction} />
  //   });
  // }, [navigation, name]);

  // const handleNextAction = () => {
  //   if (!name) {
  //     alert('Insira seu nome para continuar');
  //   } else {
  //     dispatch(setUserName(name));
  //     navigation.navigate('StarterDays');
  //   }
  // };

  return (
    <S.Container>
      <DefaultTitle title="Starter Level" />
    </S.Container>
  );
};

export default StarterLevel;
