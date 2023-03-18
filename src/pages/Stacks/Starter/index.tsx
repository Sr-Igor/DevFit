//Styles
import * as S from './styled';

//React
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

//Components
import DefaultButton from 'components/Button';

//Types
import { StackScreenNavigationProp } from 'types/Navigation';

const Starter = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const start = () => {
    navigation.navigate('StarterName');
  };

  return (
    <S.Container>
      <S.Title>Bem vindo(a) ao DevFit</S.Title>
      <S.ImageArea>
        <S.ImageItem source={require('../../../assets/boneco.png')} />
      </S.ImageArea>
      <S.ConfigArea>
        <DefaultButton text="Iniciar" onPress={start} />
      </S.ConfigArea>
    </S.Container>
  );
};

export default Starter;
