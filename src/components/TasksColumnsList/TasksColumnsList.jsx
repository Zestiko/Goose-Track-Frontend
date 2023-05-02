import { useTasksByChoosedDay } from 'hooks/useTasksByChoosedDay';
import TasksColumn from 'components/ChoosedDay/TasksColumn/TasksColumn';
import scss from './TasksColumnsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { getCurrentDate } from 'redux/calendar/selectors';
import { COLUMNS_OPTIONS } from 'constants/columns.constans';

const COLUMNS = ['toDo', 'inProgress', 'done'];

const TasksColumnsList = () => {
  const currentDate = useSelector(getCurrentDate);

  const { tasks } = useTasksByChoosedDay(currentDate) || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks(currentDate));
  }, [currentDate, dispatch]);

  const tasksByColumns = COLUMNS.reduce((acc, column) => {
    return {
      ...acc,
      [column]: tasks.filter(task => task.column === column),
    };
  }, {});

  return (
    <div className={scss.listBox}>
      {/* {COLUMNS.map(column => {
        return (
          <TasksColumn
            key={column}
            tasks={tasksByColumns[column]}
            title={column}
          />
        );
      })} */}
      {COLUMNS_OPTIONS.map(item => (
        <TasksColumn
          key={item.column}
          title={item.title}
          tasks={tasksByColumns[item.column]}
        />
      ))}
    </div>
  );
};

export default TasksColumnsList;
