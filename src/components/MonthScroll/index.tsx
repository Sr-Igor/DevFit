import * as S from './styled';

import { useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { months } from './constants';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { NativeScrollEvent } from 'react-native/Libraries/Components/ScrollView/ScrollView';

type MonthScrollProps = {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
};

const screenWidth = Math.round(Dimensions.get('window').width);
const thirdW = screenWidth / 3;

const MonthScroll = ({ selectedMonth, setSelectedMonth }: MonthScrollProps) => {
  const MonthRef = useRef(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / thirdW);
    setSelectedMonth(index);
  };

  const scrollToMonth = (month: number) => {
    const current = MonthRef.current;
    current.scrollTo({
      x: month * thirdW,
      animated: true
    });
  };

  useEffect(() => {
    scrollToMonth(selectedMonth);
  }, [selectedMonth]);

  return (
    <S.Container
      horizontal
      ref={MonthRef}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={thirdW}
      onMomentumScrollEnd={handleScroll}
      contentContainerStyle={{
        paddingHorizontal: thirdW
      }}
    >
      {months.map((month, index) => (
        <S.MonthButton
          key={index}
          width={thirdW}
          underlayColor="none"
          onPress={() => setSelectedMonth(index)}
        >
          <S.MonthItem selected={index === selectedMonth}>
            <S.MonthText>{month}</S.MonthText>
          </S.MonthItem>
        </S.MonthButton>
      ))}
    </S.Container>
  );
};

export default MonthScroll;
