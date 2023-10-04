import { AiOutlineSearch } from 'react-icons/ai';
import style from './SearchInput.module.scss';

type Props = {
  value: string,
  onChange: (event: HTMLInputElement['value']) => void;
};

function SearchInput({ onChange, value }: Props) {
  return (
    <div className={style['search-input']}>
      <input
        type="text"
        className={style.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <AiOutlineSearch
        className={style['search-icons']}
      />
    </div>
  );
}

export default SearchInput;
