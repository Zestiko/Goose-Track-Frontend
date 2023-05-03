import PropTypes from 'prop-types';
// import { COLUMNS } from 'constants/columns.constans';

import TasksColumn from 'components/ChoosedDay/TasksColumn/TasksColumn';
import scss from './TasksColumnsList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from 'redux/calendar/selectors';
import { useTasksByChoosedDay } from 'hooks/useTasksByChoosedDay';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { useEffect } from 'react';

import { COLUMNS_OPTIONS, COLUMNS } from 'constants/columns.constans';




const TasksColumnsList = () => {
    
  const dispatch = useDispatch();
 const currentDate = useSelector(getCurrentDate);
   useEffect(() => {
     dispatch(fetchTasks());
   }, [currentDate, dispatch]);
  
  const { tasks } = useTasksByChoosedDay(currentDate) || [];

  const dayTasks = tasks;
  
  const tasksByColumns = COLUMNS.reduce((acc, column) => {
    return {
      ...acc,
      [column]: dayTasks.filter(task => task.column === column),
    };
  }, {});

  return (
    <div className={scss.listBox}>
      {COLUMNS.map(column => {
        const columnOptions = COLUMNS_OPTIONS.find(option => option.column === column);
        const title = columnOptions ? columnOptions.title : '';

        return (
          <TasksColumn
            key={column}
            tasks={tasksByColumns[column]}
            title={title}
            column={column}
          />
        );
      })}
    </div>
  );
};

export default TasksColumnsList;

TasksColumnsList.propTypes = {
  dayTasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      taskDate: PropTypes.string.isRequired,
    })
  ),
};
