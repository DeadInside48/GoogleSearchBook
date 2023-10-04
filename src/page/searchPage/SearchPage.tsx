/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookCard from '../../widgets/bookCard/BookCard';
import LoadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn';
import { ResponseBooksApi } from '../../api/type';
import { getBookList } from '../../api/api';
import { AMOUNT_BOOKS_PER_REQUEST } from '../../consts/testData';
import style from './SearchPage.module.scss';

function SearchPage() {
  const [dataSearch, setDataSearch] = useState<ResponseBooksApi | null>(null);
  const [numOfPage, setNumOfPage] = useState(0);
  const [timeId, setTimeId] = useState<number | undefined>(undefined);

  const [searchParams] = useSearchParams();

  const dataForSearch = {
    searchInput: searchParams.get('q') || '',
    categories: searchParams.get('categories') === 'all' ? '' : searchParams.get('categories') || '',
    orderBy: searchParams.get('orderBy') || '',
  };

  const checkCountBookOnPage = () => dataSearch?.totalItems
    ? dataSearch?.totalItems > numOfPage * AMOUNT_BOOKS_PER_REQUEST
    : false;

  const loadMoreBooks = async () => {
    const data = await getBookList({
      ...dataForSearch,
      countPagination: numOfPage,
      maxResultSearch: AMOUNT_BOOKS_PER_REQUEST,
    });

    setNumOfPage(numOfPage + 1);

    if (dataSearch?.items) {
      setDataSearch({
        ...dataSearch,
        items: [...dataSearch.items, ...data.items],
      });
    }
  };

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    clearTimeout(timeId);

    const request = async () => {
      const data = await getBookList({
        ...dataForSearch,
        countPagination: numOfPage,
        maxResultSearch: AMOUNT_BOOKS_PER_REQUEST,
      });
      setDataSearch(data);
    };

    setTimeId(setTimeout(request, 1000));
  }, [searchParams]);

  return (
    <div className={style['book-search']}>
      {
        dataSearch ? (
          <div className={style['count-found-items']}>
            <span>
              Find {dataSearch.totalItems} books
            </span>
          </div>
        ) : null
      }
      <div className={style.title}>
        {
          dataSearch ? (
            dataSearch.items?.map((el, index) => (
              <BookCard
                key={el.volumeInfo.title + index}
                bookId={el.id}
                srcImg={(() => !el.volumeInfo.imageLinks ? '' : el.volumeInfo.imageLinks.thumbnail)()}
                categories={(() => !el.volumeInfo.categories ? '' : el.volumeInfo.categories[0])()}
                title={el.volumeInfo.title}
                authors={!el.volumeInfo.authors ? '' : el.volumeInfo.authors.join(', ')}
              />
            ))
          ) : null
        }
      </div>
      {
        checkCountBookOnPage() ? (
          <LoadMoreBtn
            onClick={loadMoreBooks}
          />
        ) : null
      }
    </div>
  );
}

export default SearchPage;
