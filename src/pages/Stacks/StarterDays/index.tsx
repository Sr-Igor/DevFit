//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { setUserName } from 'store/reducers/user/actions';

//Components
import DefaultButton from 'components/Button';
import DefaultTitle from 'components/Title';

//Types
import { User } from 'types/user';

const StarterDays = () => {
  return (
    <S.Container>
      <DefaultTitle title="Starter Days" />
    </S.Container>
  );
};

export default StarterDays;
