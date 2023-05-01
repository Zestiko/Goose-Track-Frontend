// import { PRIORITY } from 'constants/priority.constans';

import TaskToolbar from '../TaskToolbar/TaskToolbar';
import scss from './TaskColumnCard.module.scss';

const TaskColumnCard = ({ task }) => {
  const {
    title,
    // startTime,
    // endTime,
    priority,
    // priority=PRIORITY.HIGHT,
    owner,
    // column,
    // taskDate,
    // _id,
  } = task;

  return (
    <li className={scss.card}>
      <p className={scss.title}>{title}</p>
      <div className={scss.block}>
        <div className={scss.user}>
          <div className={scss.avatar}>avatar{owner}</div>
          <p className="">{priority}</p>
        </div>
        <TaskToolbar task={task} />
      </div>
    </li>
  );
};

export default TaskColumnCard;
