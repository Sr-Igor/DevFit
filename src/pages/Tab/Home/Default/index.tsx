import * as S from './styled';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import ConfgButton from 'components/ConfigButton';
import MonthScroll from 'components/MonthScroll';
import DaysScroll from 'components/DaysScroll';
import DayStatus from 'components/DayStatus';
import { legends } from './constants';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ConfgButton />
    });
  }, [navigation]);

  return (
    <S.Container>
      <MonthScroll />
      <DaysScroll />
      <DayStatus />

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
