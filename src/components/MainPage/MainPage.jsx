import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import css from './MainPage.module.scss';
import { useState, useEffect } from 'react';

const MainPage = ({ children }) => {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => setScreenWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const handleBurgerMenuClick = () => {
    console.log('isSidebarOpen', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <div className={css.mainPage}>
        {/* {screenWidth > 769 ? <Sidebar isSidebarOpen={isSidebarOpen} /> : null} */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleBurgerMenuClick={handleBurgerMenuClick}
        />
        <main className={css.appPage}>
          <Header
            header="HEADER"
            // screenWidth={screenWidth}
            handleBurgerMenuClick={handleBurgerMenuClick}
          />
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
