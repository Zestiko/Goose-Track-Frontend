import { useSelector } from 'react-redux';
import {
    selectTasks,
} from 'redux/tasks/tasks-selectors';

export const useTasksByChoosedDay = () => {
  return {tasks: useSelector(selectTasks)}
};