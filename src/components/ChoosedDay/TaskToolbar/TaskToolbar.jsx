import { COLUMNS } from 'constants/columns.constans';
import { useDispatch } from 'react-redux';

import { spriteIcons } from 'images/icons';

// import { updateTask } from 'redux/tasks/tasksOperations';
import scss from './TaskToolbar.module.scss';
import { useRef, useState } from 'react';
import { removeTask, updateTask } from 'redux/tasks/tasksOperations';
import ModalToggel from 'components/ModalTogel/ModalToggel';
import Modal from 'components/Modal/Modal';
import TaskModal from 'components/TaskModal/TaskModal';
import { useToggle } from 'hooks/useToggle';

const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  const { column, _id } = task;
  const [showUpdateModal, setShowUpdateModal] = useState(false);
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

  const handleUpdateTaskInfo = async () => {
    setShowUpdateModal(!showUpdateModal);
    await dispatch(updateTask(task._id));
  };

  const handleDeleteTask = async () => {
    await dispatch(removeTask(task._id));
  };

  const otherColumns = COLUMNS.filter(item => item !== column);

  // console.log(openChoice);
  const columnRef = useRef();
  const iconRef = useRef();
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
            <svg className={scss.iconCircle}>
              <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
            </svg>
          </button>
          {/* <button className={scss.button}>
          <svg
            className={scss.iconCircle}
            onClick={() => setOpenChoice(true)}
            ref={iconRef}
          >
            <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
          </svg>
          {openChoice &&
            <div
              className={scss.movesBox}
              ref={columnRef}
            >
              <ul>
                {otherColumns.map(item => (
                  <li
                    key={item}
                    className={scss.line}
                    onClick={e => {
                      setOpenChoice(false);
                      dispatch(updateTask(_id, column === item));
                      console.log(e.target);
                      // console.log(_id, column)
                      // console.log(task);
                    }}
                  >
                    <p className={scss.text}>
                      {item}
                      <svg className={scss.iconChoice}>
                        <use
                          href={spriteIcons + '#icon-arrow-circle-broken-right'}
                        ></use>
                      </svg>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          }
        </button> */}
        </li>
        <li>
          <button onClick={onOpen}>
            <svg className={scss.iconButton}>
              {/* <use href={iconPencil}></use> */}
              <use href={spriteIcons + '#icon-pencil'}></use>
            </svg>
          </button>
        </li>
        <li>
          <button onClick={handleDeleteTask}>
            <svg className={scss.iconButton}>
              {/* <use href={iconTrash}></use> */}
              <use href={spriteIcons + '#icon-trash'}></use>
            </svg>
          </button>
        </li>
      </ul>
      {isOpen && <TaskModal onClose={onClose} taskData={task} />}
    </>
  );
};

export default TaskToolbar;
