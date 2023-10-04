import style from './Description.module.scss';

type Props = {
  description: string,
};

function Description({ description }: Props) {
  return (
    <div className={style.description} dangerouslySetInnerHTML={{ __html: description }} />
  );
}

export default Description;
