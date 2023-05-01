import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import css from './MainPage.module.scss';

import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'lightTheme'
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleBurgerMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  return (
    <>
      <div className={`${css.mainPage}`}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleBurgerMenuClick={handleBurgerMenuClick}
          theme={theme}
        />
        <main className={`${css.appPage} ${theme}`}>
          <Header
            header="HEADER"
            handleToggleThemeClick={handleToggleTheme}
            handleBurgerMenuClick={handleBurgerMenuClick}
            theme={theme}
          />
          <div>
            <Suspense>
              <Outlet theme={theme} />
            </Suspense>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
