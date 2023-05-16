import { useTasksByChoosedDay } from 'hooks/useTasksByChoosedDay';

import classNames from 'classnames';

import CalendarNotice from '../CalendarNotice/CalendarNotice';
import CalendarPin from '../CalendarPin/CalendarPin';

import scss from './CalendarCell.module.scss';

const CalendarCell = ({ item }) => {
  const { tasks } = useTasksByChoosedDay(item);
  const countTask = tasks.length > 3;
  return (
    <ul className={classNames([countTask && scss.noticeBox])}>
      {tasks
        .filter((e, i) => i < 10)
        .map(task => {
          return countTask ? (
            <CalendarPin key={task._id} {...task} />
          ) : (
            <CalendarNotice key={task._id} {...task} />
          );
        })}
    </ul>
  );
};

export default CalendarCell;
