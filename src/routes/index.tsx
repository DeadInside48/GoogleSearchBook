import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';
import SearchPage from '../page/searchPage/SearchPage';
import BookPage from '../page/bookPage/BookPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <SearchPage />,
      },
      {
        path: 'book/:id',
        element: <BookPage />,
      },
    ],
  },
]);

export default router;
