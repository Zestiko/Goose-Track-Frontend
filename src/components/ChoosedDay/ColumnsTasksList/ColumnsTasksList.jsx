import scss from './ColumnsTasksList.module.scss';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  return (
    <ul className={scss.column}>
      {tasks.map((task, i) => (
        <TaskColumnCard task={task} key={i} />
      ))}
    </ul>
  );
};

export default ColumnsTasksList;
