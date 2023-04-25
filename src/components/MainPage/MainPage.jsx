import css from './MainPage.module.css';

const MainPage = ({ children }) => (
  <>
    <div>
      <main className={css.mainPage}>
        <div className="">{children}</div>
      </main>
    </div>
  </>
);

export default MainPage;
