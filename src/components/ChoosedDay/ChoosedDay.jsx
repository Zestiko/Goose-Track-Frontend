// import { useParams } from 'react-router-dom';

import scss from './ChoosedDay.module.css';

import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';

const ChoosedDay = () => {
  // const { currentDay } = useParams();
  const currentDay = '2023-04-25';

  return (
    <div className={scss.boxChoosedDay}>
      <DayCalendarHead selectedDay={currentDay} />
      <TasksColumnsList selectedDay={currentDay} />
    </div>
  );
};

export default ChoosedDay;
