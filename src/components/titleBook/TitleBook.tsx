import style from './TitleBook.module.scss';

type Props = {
  title: string,
};

function TitleBook({ title }: Props) {
  return (
    <span className={style['title-book']}>
      {title}
    </span>
  );
}

export default TitleBook;
