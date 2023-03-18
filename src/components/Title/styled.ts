import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.xlarge};
    font-weight: ${theme.font.bold}};
  `}
`;
