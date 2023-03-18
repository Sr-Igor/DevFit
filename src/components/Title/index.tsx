import * as S from './styled';

type DefaultTitleProps = {
  title: string;
};

const DefaultTitle = ({ title = 'Title' }: DefaultTitleProps) => {
  return <S.Title>{title}</S.Title>;
};

export default DefaultTitle;
