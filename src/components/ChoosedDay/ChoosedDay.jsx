import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeMonth } from 'redux/tasks/tasksOperations';

import TasksColumnsList from 'components/ChoosedDay/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import moment from 'moment/moment';
import { selectMonth } from 'redux/tasks/taskSelectors';

const ChoosedDay = () => {
  const dispatch = useDispatch();
  const { currentDay } = useParams();
  const date = useSelector(selectMonth);

  useEffect(() => {
    const currenChoosedMonth = moment(currentDay).format('YYYY-MM');
    const monthFromSate = moment(date).format('YYYY-MM');
    currenChoosedMonth !== monthFromSate &&
      dispatch(changeMonth(currenChoosedMonth));
  }, [dispatch, currentDay, date]);

  return (
    <>
      <DayCalendarHead currentDay={currentDay} />
      <TasksColumnsList currentDay={currentDay} />
    </>
  );
};

export default ChoosedDay;
