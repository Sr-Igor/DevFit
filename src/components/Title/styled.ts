import styled, { css } from 'styled-components/native';
import { DefaultTitleProps } from './index';

export const Title = styled.Text<Pick<DefaultTitleProps, 'noMargin'>>`
  ${({ theme, noMargin }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
    margin-top: ${!noMargin ? theme.spacings.xlarge : 0};
    font-weight: ${theme.font.bold}};
  `}
`;
