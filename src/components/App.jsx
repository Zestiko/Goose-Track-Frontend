import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import KillMe from './KillMe';

export const App = () => {
  return (
    <BrowserRouter basename="Goose-Track-Frontend">
      <MainPage>
        <Routes>
          <Route path="" element={<KillMe />} />
        </Routes>
      </MainPage>
    </BrowserRouter>
  );
};
