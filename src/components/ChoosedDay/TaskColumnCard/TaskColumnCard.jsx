// import { PRIORITY } from 'constants/priority.constans';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ task }) => {


  const {
    title,
    // title= 'Find new cool job!',
    // startTime,
    // endTime,
    priority,
    // priority=PRIORITY.HIGHT,
    owner,
    // column,
    // taskDate,
    // _id: id,
  } = task;


  return (
    <li className="">
      <p className="">{title}</p>
      <p>luhjbjhb</p>
      <div className="">avatar{owner}</div>
      <p className="">{priority}</p>
      <TaskToolbar task={task}/>
    </li>
  );
};

export default TaskColumnCard;