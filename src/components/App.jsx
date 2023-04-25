import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Sidebar from './MainPage/Sidebar/Sidebar';

export const App = () => {
  return (
    <BrowserRouter basename="Goose-Track-Frontend">
      <MainPage>
        <Routes>
          <Route path='' element={<Sidebar/>}/>
        </Routes>
      </MainPage>
    </BrowserRouter>
  );
};
