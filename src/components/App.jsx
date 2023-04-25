import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

export const App = () => {
  return (
    <BrowserRouter basename="goose_track">
      <MainPage />
    </BrowserRouter>
  );
};
