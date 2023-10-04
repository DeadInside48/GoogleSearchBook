import Search from '../../entity/search/Search';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <span className={style.title}>
        Search for book
      </span>
      <Search />
    </div>
  );
}

export default Header;
