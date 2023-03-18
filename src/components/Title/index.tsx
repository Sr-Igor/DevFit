import * as S from './styled';

export type DefaultTitleProps = {
  title: string;
  noMargin?: boolean;
};

const DefaultTitle = ({ title = 'Title', noMargin }: DefaultTitleProps) => {
  return <S.Title noMargin={noMargin}>{title}</S.Title>;
};

export default DefaultTitle;
