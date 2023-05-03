import { selectorGetUserAvatar } from 'redux/user/selectors';
import TaskToolbar from '../TaskToolbar/TaskToolbar';
import scss from './TaskColumnCard.module.scss';
import { useSelector } from 'react-redux';
import { spriteIcons } from 'images/icons';
import clsx from "clsx";

const TaskColumnCard = ({ task }) => {
  const { title, priority } = task;

  const avatarPath = useSelector(selectorGetUserAvatar);

  return (
    <li className={scss.card}>
      <p className={scss.title}>{title}</p>
      <div className={scss.block}>
        <div className={scss.user}>
          {!avatarPath ? (
            <svg className={scss.userAvatar}>
              <use href={spriteIcons + '#icon-avatar'}></use>
            </svg>
          ) : (
            <img className={scss.userAvatar} src={avatarPath} alt="avatar" />
          )}

          <p className={clsx(scss.priority, scss[priority])} >{priority}</p>
          <TaskToolbar task={task} />
        </div>
      </div>
    </li>
  );
};

export default TaskColumnCard;