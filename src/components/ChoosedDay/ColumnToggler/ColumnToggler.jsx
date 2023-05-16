import { useDispatch } from 'react-redux';
import { updateTask } from 'redux/tasks/tasksOperations';
import { spriteIcons } from 'images/icons';
import clsx from 'clsx';
import scss from './ColumnToggler.module.scss';

const ColumnToggler = ({ columns, onClose, taskData }) => {
  const dispatch = useDispatch();

  const openModalColumnToggler = (e, column) => {
    const { __v, owner, _id, ...restTaskData } = taskData;
    const task = {
      taskId: _id,
      updatedTask: {
        ...restTaskData,
        column,
      },
    };

    dispatch(updateTask(task));
    onClose && onClose();
  };

  return (
    <div className={clsx(scss.movesBox)}>
      <ul>
        {columns.map(column => (
          <li
            key={column}
            className={clsx(scss.line)}
            onClick={e => openModalColumnToggler(e, column)}
          >
            <p className={clsx(scss.text)}>
              {column}
              <svg className={clsx(scss.iconMove)}>
                <use
                  href={spriteIcons + '#icon-arrow-circle-broken-right'}
                ></use>
              </svg>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnToggler;
