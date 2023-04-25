import Header from './Header/Header';
import css from './MainPage.module.scss';
import Sidebar from './Sidebar/Sidebar';

const MainPage = ({header, children }) => (
  <>
    <div className={css.mainPage}>
      <Sidebar />
      <main className={css.appPage}>
        <Header header='HEADER' />
        <div className="">{children}</div>
      </main>
    </div>
  </>
);

export default MainPage;
