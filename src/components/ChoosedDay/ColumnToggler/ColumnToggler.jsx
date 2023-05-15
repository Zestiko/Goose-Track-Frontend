import { createPortal } from 'react-dom';
import scss from './ColumnToggler.module.scss';
import { updateTask } from 'redux/tasks/tasksOperations';
import { useDispatch } from 'react-redux';
import { spriteIcons } from 'images/icons';
import clsx from 'clsx';

const ColumnToggler = ({ columns, onClose, taskData, position }) => {
  const dispatch = useDispatch();

  const openModalColumnToggler = (e, column) => {
    const { __v, owner, _id, ...restTaskData } = taskData;
    dispatch(
      updateTask({
        taskId: _id,
        updatedTask: {
          column,
          ...restTaskData,
        },
      })
    );
    onClose && onClose();
  };

  return createPortal(
    <>
      <div className={clsx(scss.togglerOverlay)} onClick={onClose}></div>
      <div
        className={clsx(scss.movesBox)}
        style={{ top: position.top, left: position.left }}
      >
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
    </>,
    document.getElementById('portal')
  );
};

export default ColumnToggler;
