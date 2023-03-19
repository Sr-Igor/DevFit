//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { setUserWorkouts } from 'store/reducers/user/actions';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';
import HeaderButton from 'components/HeaderButton';
import WorkoutItem from 'components/WorkoutItem';

//Types
import { User } from 'types/user';
import { StackScreenNavigationProp } from 'types/Navigation';
import { Workout } from 'types/workout';

//Utils
import { defaultWorkouts } from 'presetWorkouts';
import { generateWorkout } from 'hooks/generateWorkout';

const StarterLevel = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  const user: User = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  // const [level, setLevel] = useState(user.level);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <HeaderButton onPress={handleNextAction} />
    });
  }, [navigation]);

  const handleNextAction = () => {
    // if (!level) {
    //   alert('Selecione seu nível para continuar!');
    // } else {
    //   dispatch(setUserLevel(level));
    //   navigation.navigate('StarterDays');
    // }
  };

  const handleWorkout = (data: Workout) => {
    const newUserWorkout = generateWorkout(data, user.myWorkouts);
    dispatch(setUserWorkouts(newUserWorkout));
  };

  return (
    <S.Container>
      <DefaultTitle title="Opções de treino para o seu nível" noMargin />
      <DefaultTitle
        title={`Você selecionou ${user.myWorkouts?.length || 0} ${
          user?.myWorkouts?.length > 1 ? 'treinos' : 'treinos'
        }`}
        small
      />
      <S.WorkoutList
        data={defaultWorkouts}
        renderItem={({ item }) => (
          <WorkoutItem
            onPress={(data) => handleWorkout(data)}
            userWorkouts={user.myWorkouts || []}
            data={item as Workout}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </S.Container>
  );
};

export default StarterLevel;
