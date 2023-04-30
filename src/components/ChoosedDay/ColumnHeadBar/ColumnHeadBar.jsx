import PropTypes from 'prop-types';
import scss from './ColumnHeadBar.module.scss';
// import iconPlusCircle from '../../../images/icons/icon-plus-circle.svg';
import { spriteIcons } from 'images/icons';

const ColumnHeadBar = ({ title, openModalNewTask }) => {
  return (
    <div className={scss.header}>
      <p className={scss.columnTitle}>{title}</p>
      <button className={scss.iconButton} onClick={openModalNewTask}>
        <svg className={scss.icon}>
          {/* <use href={iconPlusCircle}></use> */}
          {/* I need help */}
          <use href={spriteIcons + '#icon-plus-circle'}></use>
        </svg>
      </button>
    </div>
  );
};

export default ColumnHeadBar;

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  openModalNewTask: PropTypes.func.isRequired,
};