import * as S from './styled';
import { useEffect, useState } from 'react';
import { formatDate } from 'utils/formatDate';
import { BallonConfigs, formatBallon } from './actions';
import DefaultButton from 'components/Button';

type DayStatus = {
  selectedMonth: number;
  selectedDay: number;
  // setSelectedDay: (day: number) => void;
  dailyProgress: string[];
  workoutDays: number[];
  handleDailyProgress: (date: string) => void;
  goToWorkout: () => void;
};

const DayStatus = ({
  selectedMonth,
  selectedDay,
  // setSelectedDay,
  dailyProgress,
  workoutDays,
  handleDailyProgress,
  goToWorkout
}: DayStatus) => {
  const [stringfyDate, setStringfyDate] = useState<string>('');
  const [configs, setConfigs] = useState<BallonConfigs>({
    text: '',
    button: '',
    buttonColor: 'ligth'
  });

  useEffect(() => {
    const date = new Date(new Date().getFullYear(), selectedMonth, selectedDay);
    const formatedDate = formatDate(date);
    const format = formatBallon(workoutDays, formatedDate, date, dailyProgress);
    setConfigs(format);
    setStringfyDate(formatedDate);
  }, [selectedDay, dailyProgress]);

  const handlePress = () => {
    if (configs.button === 'Treinar') {
      goToWorkout();
    } else {
      handleDailyProgress(stringfyDate);
    }
  };

  return (
    <S.Container>
      <S.BallonArrow />
      <S.BallonArea>
        <S.BallonBigText>{configs.text}</S.BallonBigText>
        {configs.button && (
          <DefaultButton
            text={configs.button}
            onPress={handlePress}
            bgColor={configs.buttonColor}
            width={'70%'}
          />
        )}
      </S.BallonArea>
    </S.Container>
  );
};

export default DayStatus;
