import * as S from './styled';

type DayProps = {
  day: number;
  month: number;
  dailyProgress: string[];
  workoutDays: number[];
  onPress: () => void;
};

const Day = ({ day, month, dailyProgress, workoutDays, onPress }: DayProps) => {
  return (
    <S.Container>
      <S.Day>{day}</S.Day>
    </S.Container>
  );
};

export default Day;
