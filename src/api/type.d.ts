type ImagaLinks = {
  smallThumbnail: string,
  thumbnail: string,
  small: string,
  medium: string,
  large: string,
  extraLarge: string,
};

type ValumeInfo = {
  title: string,
  authors: string[],
  description: string,
  categories: string[],
  imageLinks: ImagaLinks,
};

type Item = {
  id: string,
  volumeInfo: ValumeInfo,
};

export type ResponseBooksApi = {
  items: Item[],
  totalItems: number,
};

type RequestBooksApi = {
  searchInput: string,
  categories: string,
  orderBy: string,
  countPagination: number,
  maxResultSearch: number,
};

export type ResponseSpecificBook = {
  volumeInfo: ValumeInfo,
};
