import { Outlet } from 'react-router-dom';
import Header from '../widgets/header/Header';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
