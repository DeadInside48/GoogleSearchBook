import axios from 'axios';
import { RequestBooksApi, ResponseBooksApi, ResponseSpecificBook } from './type';
import { BASE_SEARCH_URL, SPECIFIC_BOOK_URL } from '../consts/urls';

const searchUrl = BASE_SEARCH_URL;
const spicificBookUrl = SPECIFIC_BOOK_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getBookList = async ({
  searchInput,
  categories,
  orderBy,
  countPagination,
  maxResultSearch,
}: RequestBooksApi): Promise<ResponseBooksApi> => {
  const { data } = await axios.get(`${searchUrl}`, {
    params: {
      q: `${searchInput}+subject:${categories}`,
      orderBy,
      startIndex: countPagination * maxResultSearch,
      maxResults: maxResultSearch,
      key: apiKey,
    },
  });

  return data;
};

export const getBookInfo = async (bookId: string): Promise<ResponseSpecificBook> => {
  const { data } = await axios.get(`${spicificBookUrl}${bookId}?${apiKey}`);

  return data;
};
