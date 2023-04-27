import { useSelector } from 'react-redux';
import { selectTasksByDay } from 'redux/tasks/tasks-selectors';

export const useTasksByChoosedDay = currentDay => {
  const tasksByCurrentDay = selectTasksByDay(currentDay);
  return { tasks: useSelector(tasksByCurrentDay) };
};
