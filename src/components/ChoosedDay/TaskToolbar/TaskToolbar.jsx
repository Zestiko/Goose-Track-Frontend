
import { COLUMNS } from 'constants/columns.constans';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';


import { spriteIcons } from 'images/icons';
import { useToggle } from 'hooks/useToggle';
import { getCurrentDate } from 'redux/calendar/selectors';
import TaskModal from 'components/TaskModal/TaskModal';
import scss from './TaskToolbar.module.scss';

import {
  fetchTasks,
  removeTask,
  updateTask,
} from 'redux/tasks/tasksOperations';


  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const { column, _id, title, startTime, endTime, priority, taskDate } = task;
  const [openChoice, setOpenChoice] = useState(false);
  const { isOpen, onOpen, onClose } = useToggle();



const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  // const { column, _id } = task;
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [openChoice, setOpenChoice] = useState(false);
  const { isOpen, onOpen, onClose } = useToggle();
  // const handleChangeColumn = () => {
  //   // return (
  //   // <ModalClear>
  //   //   {otherColumns.map(item => (
  //   //     <button
  //   //       type="button"
  //   //       onClick={() => {
  //   //         dispatch(updateTask(id, item));
  //   //       }}
  //   //       className=""
  //   //     >
  //   //       {item}
  //   //     </button>
  //   //   ))}
  //   // </ModalClear>
  //   // );
  // };


  const handleDeleteTask = async () => {
    await dispatch(removeTask(task._id));
    await dispatch(fetchTasks(currentDate));
  };

  // const otherColumns = COLUMNS.filter(item => item !== column);

  // console.log(openChoice);
  const columnRef = useRef();
  const iconRef = useRef();

  // window.addEventListener('click', evt => {
  //   console.log(evt.target === iconRef.current);
  //   console.log(evt.target === evt.currentTarget);
  // console.log(iconRef)
  // console.log(iconRef)
  // if (evt.target !== columnRef.target && evt.target !== iconRef.target) {
  // console.log(evt.target === iconRef.currentTarget);
  // console.log(evt.target);

  // setOpenChoice(false);
  // console.log(evt.target, columnRef.current);
  // console.log(evt.target, iconRef.current);
  // }
  // });


  window.addEventListener('click', evt => {
    if (evt.target !== columnRef.current && evt.target !== iconRef.current) {
      setOpenChoice(false);
      // console.log(evt.target, columnRef.current);
      // console.log(evt.target, iconRef.current);
    }
  });

  return (
    <>
      <ul className={scss.cardBox}>
        <li className={scss.itemChoice}>
          <button>

            <svg
              ref={iconRef}
              className={scss.iconButton}
              onClick={() => setOpenChoice(!openChoice)}


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
                        console.log(task._id, newTaskData);
                        setOpenChoice(false);
                      }}
                    >
                      <p className={scss.text}>
                        {item}
                        <svg className={scss.iconButton}>
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

      {isOpen && <TaskModal taskData={task} />}

    </>
  );
};

export default TaskToolbar;
