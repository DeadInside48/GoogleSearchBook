/* eslint-disable react/require-default-props */
import style from './BookCover.module.scss';

type Props = {
  className?: string,
  srcImg: string,
};

function BookCover({ className = '', srcImg }: Props) {
  return (
    <div className={`${style['book-cover']} ${className}`}>
      {
        srcImg ? <img src={srcImg} alt="" />
          : (
            <span>
              Нет изображения
            </span>
          )
      }
    </div>
  );
}

export default BookCover;
