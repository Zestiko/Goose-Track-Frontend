import { Outlet } from 'react-router-dom';
import { useState, Suspense } from 'react';

import css from './Layout.module.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';

const Layout = () => {
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
        <Header handleBurgerMenuClick={handleBurgerMenuClick} />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
