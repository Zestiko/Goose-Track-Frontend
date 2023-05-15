import { Outlet } from 'react-router-dom';
import { useState, Suspense } from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import css from './MainPage.module.scss';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={css.mainPage}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleBurgerMenuClick={handleBurgerMenuClick}
      />
      <main className={css.appPage}>
        <Header header="HEADER" handleBurgerMenuClick={handleBurgerMenuClick} />
        <div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
