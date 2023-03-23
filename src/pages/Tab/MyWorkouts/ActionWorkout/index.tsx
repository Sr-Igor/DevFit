import * as S from './styled';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackScreenRouteProp, StackScreenNavigationProp } from 'types/MyWorkouts';

import { useLayoutEffect } from 'react';

const ActionWorkout = () => {
  const route = useRoute<StackScreenRouteProp>();
  const navigation = useNavigation<StackScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.id ? 'Editar treino' : 'Criar treino'
    });
  }, [navigation, route.params?.id]);

  return (
    <S.Container>
      <S.Title>Workout {route.params?.id || 'Criar'}</S.Title>
    </S.Container>
  );
};

export default ActionWorkout;
