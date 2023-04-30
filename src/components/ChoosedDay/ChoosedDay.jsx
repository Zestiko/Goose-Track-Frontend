import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import scss from './ChoosedDay.module.scss';
import { selectMonth, selectTasks } from 'redux/tasks/taskSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeMonth } from 'redux/tasks/tasksOperations';
import { useEffect } from 'react';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';

// import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
// import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';

const ChoosedDay = () => {
  // const { currentDay } = useParams();
  // const day = currentDay || moment(new Date()).format('YYYY-MM-DD');
  // const month = useSelector(selectMonth);

  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  const newMonth = '2023-05';

  useEffect(() => {
    const newMonthFormatted = moment(newMonth).format('YYYY-MM');
    dispatch(changeMonth(newMonthFormatted));
  }, [dispatch]);

  console.log('tasks, tasks', tasks);
  return (
    <div className={scss.boxChoosedDay}>
      <p>sdkjfsdfhsdkhfkj</p>
      {/* <DayCalendarHead selectedDay={day} /> */}
      {/* <TasksColumnsList selectedDay={day} /> */}
      <TasksColumnsList tasks={tasks} />
    </div>
  );
};

export default ChoosedDay;