import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.tasks;
export const selectMonth = state => state.tasks.date;
export const selectFilter = state => state.tasks.filter;
export const selectIsLoading = state => state.tasks.status;

export const selectTasksByDay = day =>
  createSelector(selectTasks, tasks =>
    tasks.filter(task => {
      const taskDate = new Date(task.taskDate).toLocaleDateString();
      const userSelectedDay = new Date(day).toLocaleDateString();
      return taskDate === userSelectedDay;
    })
  );

export const selectTasksByFilter = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) =>
    tasks.filter(task => {
      const normalizedFilter = filter.toLowerCase();
      console.log('🚀 ~ normalizedFilter:', normalizedFilter);

      for (const key in task) {
        if (
          task.hasOwnProperty(key) &&
          String(task[key]).toLowerCase().includes(normalizedFilter)
        ) {
          console.log('TRUE');
          return true;
        }
      }

      console.log('FALSE');
      return false;
    })
);
