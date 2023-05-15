import { COLUMNS } from 'constants/columns.constans';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import { spriteIcons } from 'images/icons';
import { useToggle } from 'hooks/useToggle';

import TaskModal from 'components/TaskModal/TaskModal';
import scss from './TaskToolbar.module.scss';
import { removeTask } from 'redux/tasks/tasksOperations';
import ColumnToggler from '../ColumnToggler/ColumnToggler';

const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  const { column } = task;
  const [openChoice, setOpenChoice] = useState(false);
  const { isOpen, onOpen, onClose } = useToggle();
  const [togglerPosition, setTogglerPosition] = useState({ top: 0, left: 0 });

  const otherColumns = COLUMNS.filter(item => item !== column);

  const iconRef = useRef();
  const popupRef = useRef(null);

  const handleDeleteTask = async () => {
    await dispatch(removeTask(task._id));
  };

  const openOpenChoise = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTogglerPosition({ top: rect.top, left: rect.left });
    setOpenChoice(true);
  };

  const closeOpenChoise = () => {
    setOpenChoice(false);
  };

  return (
    <>
      <ul className={scss.cardBox}>
        <li className={scss.itemChoice}>
          <button>
            <svg
              ref={iconRef}
              className={scss.iconButton}
              onClick={openOpenChoise}
            >
              <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
            </svg>
          </button>
        </li>
        <li>
          <button onClick={onOpen}>
            <svg className={scss.iconButton}>
              <use href={spriteIcons + '#icon-pencil'}></use>
            </svg>
          </button>
        </li>
        <li>
          <button onClick={handleDeleteTask}>
            <svg className={scss.iconButton}>
              <use href={spriteIcons + '#icon-trash'}></use>
            </svg>
          </button>
        </li>
      </ul>

      {isOpen && <TaskModal taskData={task} onClose={onClose} />}
      {openChoice && (
        <ColumnToggler
          columns={otherColumns}
          taskData={task}
          onClose={closeOpenChoise}
          popupRef={popupRef}
          position={togglerPosition}
        />
      )}
    </>
  );
};

export default TaskToolbar;
