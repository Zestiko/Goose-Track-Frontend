import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/tasks/taskSelectors';
import { setFilter } from 'redux/tasks/taskSlice';
import { tasksInitState } from 'redux/tasks/tasks.init-state';

export const useInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return [
    { filter, onChange: e => dispatch(setFilter(e.target.value)) },
    () => setFilter(tasksInitState.filter),
  ];
};
// const { useState } = require('react');

// export const useInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   return [
//     { value, onChange: e => setValue(e.target.value) },
//     () => setValue(initialValue),
//   ];
// };
