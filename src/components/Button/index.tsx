import * as S from './styled';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  textColor?: 'ligth' | 'dark';
  bgColor?: 'ligth' | 'dark';
  width?: string;
};

const DefaultButton = ({
  text = 'Button',
  onPress,
  textColor = 'dark',
  bgColor = 'ligth',
  width = '100%'
}: ButtonProps) => {
  return (
    <S.ButtonArea onPress={onPress} width={width} bgColor={bgColor}>
      <S.ButtonText textColor={textColor}>{text}</S.ButtonText>
    </S.ButtonArea>
  );
};

export default DefaultButton;
