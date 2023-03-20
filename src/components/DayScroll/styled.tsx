import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  width: 100%;
  height: 50px;
`;

// export const DayButton = styled.TouchableHighlight<{ width: number }>`
//   ${({ theme, width }) => css`
//     width: ${`${width}px`};
//     justify-content: center;
//     align-items: center;
//   `}
// `;

// export const DayItem = styled.View<{ selected: boolean }>`
//   ${({ theme, selected }) => css`
//     width: 90%;
//     height: 30px;
//     background-color: ${!selected ? theme.colors.red : theme.colors.primary};
//     border-radius: ${theme.border.circle};
//     align-items: center;
//     justify-content: center;
//     transition: all ${theme.transition.fast};
//   `}
// `;

// export const DayText = styled.Text`
//   ${({ theme }) => css`
//     color: ${theme.colors.white};
//   `}
// `;
