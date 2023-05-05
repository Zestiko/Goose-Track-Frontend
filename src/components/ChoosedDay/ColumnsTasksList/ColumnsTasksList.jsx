import scss from './ColumnsTasksList.module.scss';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  const taskSortedByStartTime = tasks.sort((a, b) => {
    if (a.startTime < b.startTime) return -1;
    if (a.startTime > b.startTime) return 1;
    return 0;
  });
  return (
    <ul className={scss.column}>
      {taskSortedByStartTime.map((task, i) => (
        <TaskColumnCard task={task} key={i} />
      ))}
    </ul>
  );
};

export default ColumnsTasksList;
