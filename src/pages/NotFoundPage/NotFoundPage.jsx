import { Link } from 'react-router-dom';
import scss from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={scss.pageBox}>
      <div className={scss.wrapper}>
        <h1 className={`${scss.sectionTitle}`}>404</h1>
      </div>

      <div className={scss.infoInner}>
        <h2 className={scss.infoTitle}>Look like you're lost</h2>
        <p className={scss.infoMeta}>
          the page you are looking for not avaible!
        </p>
        <Link to="/" className={scss.returnButton}>
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
