import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import scss from './ChoosedDay.module.scss';

import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';

const ChoosedDay = () => {
  const { currentDay } = useParams();
  const day = currentDay || moment(new Date()).format('YYYY-MM-DD');

  return (
    <div className={scss.boxChoosedDay}>
      <DayCalendarHead selectedDay={day} />
      <TasksColumnsList selectedDay={day} />
    </div>
  );
};

export default ChoosedDay;
