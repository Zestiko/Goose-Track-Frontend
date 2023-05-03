import scss from './AddTaskBtn.module.scss';
import { spriteIcons } from 'images/icons';

const AddTaskBtn = ({ ...btnProps }) => {
  return (
    <button type="button" className={scss.button} {...btnProps}>
      <svg className={scss.icon}>
        <use href={spriteIcons + '#icon-plus-clear'}></use>
      </svg>
      Add task
    </button>
  );
};

export default AddTaskBtn;