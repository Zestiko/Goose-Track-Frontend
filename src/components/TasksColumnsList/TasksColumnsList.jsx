import TasksColumn from 'components/ChoosedDay/TasksColumn/TasksColumn';
import scss from './TasksColumnsList.module.scss';

const COLUMNS = ['toDo', 'inProgress', 'done'];

const TasksColumnsList = ({ dayTasks }) => {
  const tasksByColumns = COLUMNS.reduce((acc, column) => {
    return {
      ...acc,
      [column]: dayTasks.filter(task => task.column === column),
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
            column={column}
          />
        );
      })}
    </div>
  );
};

export default TasksColumnsList;
