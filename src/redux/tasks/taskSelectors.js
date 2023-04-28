import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.tasks;
export const selectIsLoading = state => state.tasks.tasks;
export const selectError = state => state.tasks.error;

export const selectChoosedDate = state => state.choosedDate.value;

export const selectTasksByDay = day =>
  createSelector(selectTasks, tasks =>
    tasks.filter(task => {
      const taskDate = new Date(task.taskDate).toLocaleDateString();
      const userSelectedDay = new Date(day).toLocaleDateString();
      return taskDate === userSelectedDay;
    })
  );
