import PropTypes from 'prop-types';
import { useTasksByChoosedDay } from 'hooks/useTasksByChoosedDay';
import TasksColumn from 'components/ChoosedDay/TasksColumn/TasksColumn';
import scss from './TasksColumnsList.module.scss';

const COLUMNS = ['toDo', 'inProgress', 'done'];

const TasksColumnsList = ({ selectedDay }) => {
  const { tasks } = useTasksByChoosedDay(selectedDay) || [];

  const tasksByColumns = COLUMNS.reduce((acc, column) => {
    return {
      ...acc,
      [column]: tasks.filter(task => task.column === column),
    };
  }, {});

  return (
    <div className={scss.listBox}>
      {COLUMNS.map(column => {
        return (
          <TasksColumn
            key={column}
            tasks={tasksByColumns[column]}
            title={column}
          />
        );
      })}
    </div>
  );
};

export default TasksColumnsList;

TasksColumnsList.propTypes = {
  selectedDay: PropTypes.string.isRequired,
};
