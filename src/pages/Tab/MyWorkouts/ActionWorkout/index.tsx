import * as S from './styled';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackScreenRouteProp, StackScreenNavigationProp } from 'types/MyWorkouts';
import HeaderButton from 'components/HeaderButton';
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import ExerciceItem from 'components/Exercise';

import { useLayoutEffect, useState } from 'react';
import { User } from 'types/user';
import DefaultButton from 'components/Button';
import { Exercise as ExerciseType } from 'types/workout';
import Modal from 'components/Modal';

const ActionWorkout = () => {
  const route = useRoute<StackScreenRouteProp>();
  const navigation = useNavigation<StackScreenNavigationProp>();

  const user: User = useAppSelector((state) => state.profile);
  const workout = user.myWorkouts.find((workout) => workout.id === route.params?.id);
  const dispatch = useAppDispatch();

  //Form States
  const [name, setName] = useState(workout?.name || '');
  const [exercices, setExercices] = useState(workout?.exercises || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [editableExercise, setEditableExercise] = useState<ExerciseType | null>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params?.id ? 'Editar treino' : 'Criar treino',
      headerRight: () => (
        <HeaderButton
          text="Salvar"
          onPress={() => {
            alert('In buil...');
          }}
        />
      )
    });
  }, [navigation, route.params?.id]);

  const editAction = (exercise: ExerciseType) => {
    setEditableExercise(exercise);
    setModalVisible(true);
  };

  const delAction = (exercise: ExerciseType) => {
    const newExercices = exercices.filter((item) => item.id !== exercise.id);
    setExercices(newExercices);
  };

  return (
    <>
      <S.Container>
        <S.InputName
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Digite o do treino"
        />
        <DefaultButton text="Adicionar exercício" onPress={() => setModalVisible(true)} />

        <S.ExerciceArea
          data={exercices as ExerciseType[]}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <ExerciceItem
              exercise={item as ExerciseType}
              editAction={editAction}
              delAction={delAction}
            />
          )}
        />
      </S.Container>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <S.InputName
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Digite o do treino"
        />
      </Modal>
    </>
  );
};

export default ActionWorkout;
