import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCover from '../../components/bookCover/BookCover';
import Categories from '../../components/categories/Categories';
import TitleBook from '../../components/titleBook/TitleBook';
import Authors from '../../components/authors/Authors';
import Description from '../../components/description/Description';
import { ResponseSpecificBook } from '../../api/type';
import { getBookInfo } from '../../api/api';
import style from './BookPage.module.scss';

function BookPage() {
  const [bookInfo, setBookInfo] = useState<ResponseSpecificBook | null>(null);

  const { id } = useParams();

  const fetchBookInfo = async () => {
    if (id) {
      const data = await getBookInfo(id);

      setBookInfo(data);
    }
  };

  useEffect(() => {
    fetchBookInfo();
  }, []);

  if (!bookInfo) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div className={style['book-page']}>
      <div className={style['book-cover__wrapper']}>
        <BookCover
          className={style['book-cover']}
          srcImg={bookInfo.volumeInfo.imageLinks.thumbnail}
        />
      </div>
      <div className={style['book-description_wrapper']}>
        <TitleBook
          title={bookInfo.volumeInfo.title}
        />
        <Categories
          categories={bookInfo.volumeInfo.categories.join(' ')}
        />
        <Authors
          authors={bookInfo.volumeInfo.authors.join(', ')}
        />
        <Description
          description={bookInfo.volumeInfo.description}
        />
      </div>
    </div>
  );
}

export default BookPage;
