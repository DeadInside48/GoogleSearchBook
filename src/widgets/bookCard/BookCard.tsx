import { Link } from 'react-router-dom';
import Authors from '../../components/authors/Authors';
import BookCover from '../../components/bookCover/BookCover';
import Categories from '../../components/categories/Categories';
import TitleBook from '../../components/titleBook/TitleBook';
import { BOOK_PAGE } from '../../consts/urls';
import style from './BookCard.module.scss';

type Props = {
  title: string,
  categories: string,
  srcImg: string,
  authors: string,
  bookId: string,
};

function BookCard({
  title,
  categories,
  srcImg,
  authors,
  bookId,
}: Props) {
  const bookPageUrl = BOOK_PAGE;
  return (
    <Link
      className={style['book-card']}
      to={`${bookPageUrl}${bookId}`}
    >
      <BookCover
        className={style['book-cover']}
        srcImg={srcImg}
      />
      <Categories
        categories={categories}
      />
      <TitleBook
        title={title}
      />
      <Authors
        authors={authors}
      />
    </Link>
  );
}

export default BookCard;
