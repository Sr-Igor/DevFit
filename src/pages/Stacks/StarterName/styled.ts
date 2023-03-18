import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.lightBg};
    align-items: center;
    justify-content: center;
    padding: 0px ${theme.spacings.medium};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.xlarge};
  `}
`;

export const ImageArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ImageItem = styled.Image`
  width: 200px;
  height: 200px;
`;
