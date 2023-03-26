import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    /* width: 100%; */
    padding: 0px ${theme.spacings.xsmall};
    /* flex: 1; */
  `}
`;

export const WorkoutList = styled.FlatList`
  ${({ theme }) => css`
    width: 100%;
    /* padding: 0px ${theme.spacings.xsmall}; */
  `}
`;

export const LastWokoutArea = styled.View`
  ${({ theme }) => css`
    width: 100%;
    /* padding: 0px ${theme.spacings.xsmall}; */
    height: 140px;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;
