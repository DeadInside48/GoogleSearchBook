/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from './Search.module.scss';
import SearchInput from '../../components/searchInput/SearchInput';
import Dropdown from '../../components/sortingBySelect/Dropdown';
import { categoriesList, orderByList } from '../../consts/testData';

function Search() {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [categories, setCategories] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('relevance');

  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      q: inputSearch,
      categories,
      orderBy,
    });
  }, [inputSearch, categories, orderBy]);

  return (
    <div
      className={style.search}
    >
      <SearchInput
        onChange={setInputSearch}
        value={inputSearch}
      />
      <div className={style['selector-wrapper']}>
        <Dropdown
          onChange={setCategories}
          value={categories}
          title="categories"
          optionList={categoriesList}
        />
        <Dropdown
          onChange={setOrderBy}
          value={orderBy}
          title="order by"
          optionList={orderByList}
        />
      </div>
    </div>
  );
}

export default Search;
