// import { useParams } from 'react-router-dom';
import css from './ChoosedDay.module.css';

import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import { useTasksByChoosedDay } from '../../hooks/useTasksByChoosedDay';

const ChoosedDay = () => {
  // const { currentDay } = useParams();
  const currentDay = '2023-04-25';

  const tasks = useTasksByChoosedDay() || [];
  return (
    <div className={css.boxChoosedDay}>
      <DayCalendarHead selectedDay={currentDay} />
      <TasksColumnsList selectedDay={currentDay} tasks={tasks} />
    </div>
  );
};

export default ChoosedDay;
