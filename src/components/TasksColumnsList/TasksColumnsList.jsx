import PropTypes from 'prop-types';
import TasksColumn from 'components/TasksColumn/TasksColumn';
import css from './TasksColumnsList.module.css';

const TasksColumnsList = ({ selectedDay, tasks }) => {
  const columns = ['toDo', 'inProgress', 'done'];
  const tasksByColumns = columns.reduce((acc, column) => {
    return {
      ...acc,
      [column]: tasks.filter(task => {
        const taskDate = new Date(task.taskDate).toLocaleDateString();
        const userSelectedDay = new Date(selectedDay).toLocaleDateString();
        return task.column === column && taskDate === userSelectedDay;
      }),
    };
  }, {});

  return (
    <div className={css.listBox}>
      {columns.map(column => {
        console.log('column', column);
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
  tasks: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      taskDate: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
      priority: PropTypes.string.isRequired,
    })
  ),
  selectedDay: PropTypes.string.isRequired,
};
