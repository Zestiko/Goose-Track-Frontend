import { COLUMNS } from 'constants/columns.constans';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import { spriteIcons } from 'images/icons';
import { useToggle } from 'hooks/useToggle';
import { getCurrentDate } from 'redux/calendar/selectors';
import TaskModal from 'components/TaskModal/TaskModal';
import scss from './TaskToolbar.module.scss';
import {
  removeTask,
  updateTask,
} from 'redux/tasks/tasksOperations';

const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  const { column, _id, title, startTime, endTime, priority, taskDate } = task;
  const [openChoice, setOpenChoice] = useState(false);
  const { isOpen, onOpen, onClose } = useToggle();
  const currentDate = useSelector(getCurrentDate);

  const otherColumns = COLUMNS.filter(item => item !== column);

  const columnRef = useRef();
  const iconRef = useRef();

  const handleDeleteTask = async () => {
    await dispatch(removeTask(task._id));
  };

  return (
    <>
      <ul className={scss.cardBox}>
        <li className={scss.itemChoice}>
          <button>
            <svg
              ref={iconRef}
              className={scss.iconButton}
              onClick={() => setOpenChoice(!openChoice)}
            >
              <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
            </svg>
            {openChoice && (
              <div className={scss.movesBox}>
                <ul>
                  {otherColumns.map(item => (
                    <li
                      ref={columnRef}
                      key={item}
                      className={scss.line}
                      onClick={e => {
                        const newTaskData = {
                          column: item,
                          title,
                          startTime,
                          endTime,
                          priority,
                          taskDate,
                        };
                        dispatch(
                          updateTask({ taskId: _id, updatedTask: newTaskData })
                        );
                        setOpenChoice(false);
                      }}
                    >
                      <p className={scss.text}>
                        {item}
                        <svg className={scss.iconMove}>
                          <use
                            href={
                              spriteIcons + '#icon-arrow-circle-broken-right'
                            }
                          ></use>
                        </svg>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
    </>
  );
};

export default TaskToolbar;
