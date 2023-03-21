import * as S from './styled';

import { useLayoutEffect, useState } from 'react';
import { useAppSelector } from 'hooks/redux-hook';
import { useNavigation } from '@react-navigation/native';

import DayScroll from 'components/DayScroll';
import DayStatus from 'components/DayStatus';
import MonthScroll from 'components/MonthScroll';
import ConfgButton from 'components/ConfigButton';

import { legends } from './constants';

import { User } from 'types/user';

const Home = () => {
  const navigation = useNavigation();

  const user: User = useAppSelector((state) => state.profile);
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ConfgButton />
    });
  }, [navigation]);

  return (
    <S.Container>
      <MonthScroll selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      <DayScroll
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dailyProgress={user.dailyProgress}
        workoutDays={user.workoutDays}
      />
      <DayStatus />

      {/* <S.LegendTitle>Mes: {selectedMonth}</S.LegendTitle>
      <S.LegendTitle>Dia: {selectedDay}</S.LegendTitle> */}

      <S.LegendArea>
        <S.LegendText>Legendas:</S.LegendText>
        {legends.map((legend, index) => (
          <S.LegendItem key={index}>
            <S.LegendBox bgColor={legend.color} />
            <S.LegendTitle>{legend.title}</S.LegendTitle>
          </S.LegendItem>
        ))}
      </S.LegendArea>
    </S.Container>
  );
};

export default Home;
