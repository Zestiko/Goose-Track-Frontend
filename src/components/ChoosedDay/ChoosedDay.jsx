import { useParams } from 'react-router-dom';

import scss from './ChoosedDay.module.scss';

import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import moment from 'moment/moment';

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
