import { Workout } from 'types/workout';
import * as S from './styled';
import { formatMuscleImage } from './actions';
import { useEffect, useState } from 'react';
import { User } from 'types/user';

export type WorkoutItemProps = {
  data: Workout;
  onPress: (data: Workout) => void;
  userWorkouts: Workout[];
};

const WorkoutItem = ({ data, onPress, userWorkouts }: WorkoutItemProps) => {
  const [included, setIncluded] = useState(false);
  const [muslceGroups, setMuscleGroups] = useState<string[]>([]);

  useEffect(() => {
    userWorkouts.map((item) => {
      if (item.id === data.id) {
        setIncluded(true);
      }
    });

    const muslceGp: string[] = [];
    for (const i in data.exercises) {
      if (!muslceGp.includes(data.exercises[i].muscle)) {
        muslceGp.push(data.exercises[i].muscle);
      }
    }
    setMuscleGroups(muslceGp);
  }, [data]);

  const toggleItem = () => {
    setIncluded(!included);
    onPress(data);
  };

  return (
    <S.Container>
      <S.WorkoutInfo>
        <S.WorkoutTitle>{data.name}</S.WorkoutTitle>
        <S.MuscleScroll horizontal showsHorizontalScrollIndicator={false}>
          {muslceGroups.map((item, index) => (
            <S.MuscleGroup key={index}>
              {<S.MuscleImage source={formatMuscleImage(item)} />}
            </S.MuscleGroup>
          ))}
        </S.MuscleScroll>
      </S.WorkoutInfo>

      <S.WorkoutActions>
        <S.WorkoutButton onPress={() => toggleItem()} underlayColor="none">
          <S.WorkoutButtonImage
            source={!included ? require('assets/add.png') : require('assets/check-black.png')}
          />
        </S.WorkoutButton>
      </S.WorkoutActions>
    </S.Container>
  );
};

export default WorkoutItem;
