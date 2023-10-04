import style from './Categories.module.scss';

type Props = {
  categories: string,
};

function Categories({ categories }: Props) {
  return (
    <span className={style.categories}>
      {categories}
    </span>
  );
}

export default Categories;
