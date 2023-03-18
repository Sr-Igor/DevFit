//Styles
import * as S from './styled';

//React
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const StarterName = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.Title>Start Name</S.Title>
    </S.Container>
  );
};

export default StarterName;
