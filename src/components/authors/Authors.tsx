import style from './Authors.module.scss';

type Props = {
  authors: string,
};

function Authors({ authors }: Props) {
  return (
    <span className={style.authors}>
      {
        authors
      }
    </span>
  );
}

export default Authors;
