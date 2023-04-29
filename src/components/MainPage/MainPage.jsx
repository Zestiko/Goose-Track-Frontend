import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import css from './MainPage.module.scss';
import { useState, useEffect } from 'react';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import { token } from 'http/http';

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

  token.set(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDNlN2ZkZGQwYzcxNWRiM2U5ODc3NiIsImlhdCI6MTY4Mjc1ODQzMCwiZXhwIjoxNjgzMzYzMjMwfQ.fWnWFKT0MFnqnOG4JvODdQ844yAatctFn_ZxKrJiFz0'
  );

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
          <div>
            <ChoosedDay />
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
