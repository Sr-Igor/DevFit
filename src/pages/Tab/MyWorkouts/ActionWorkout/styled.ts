import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `}
`;

export const Title = styled.Text``;

export const InputName = styled.TextInput`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ExerciceArea = styled.FlatList`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;
