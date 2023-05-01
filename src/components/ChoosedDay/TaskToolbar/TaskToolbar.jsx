import { COLUMNS } from 'constants/columns.constans';
import { useDispatch } from 'react-redux';

import { spriteIcons } from 'images/icons';
// import ModalClear from 'components/ModalClear/ModalClear';
// import { updateTask } from 'redux/tasks/tasksOperations';
import scss from './TaskToolbar.module.scss';
import { useRef, useState } from 'react';
import { removeTask } from 'redux/tasks/tasksOperations';
import ModalToggel from 'components/ModalTogel/ModalToggel';

const TaskToolbar = ({ task }) => {
  const dispatch = useDispatch();
  const {
    // title,
    // title= 'Find new cool job!',
    // startTime,
    // endTime,
    // priority,
    // priority=PRIORITY.HIGHT,
    // owner,
    column,
    // taskDate,
    // _id,
  } = task;
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [openChoice, setOpenChoice] = useState(false);

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

  const handleUpdateTaskInfo = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  const handleDeleteTask = async () => {
    await dispatch(removeTask(task._id));
  };

  const otherColumns = COLUMNS.filter(item => item !== column);

  console.log(openChoice);
  const columnRef = useRef();
  const iconRef = useRef();
  window.addEventListener('click', evt => {
    if (evt.target !== columnRef.current && evt.target !== iconRef.current) {
      setOpenChoice(true);
    }
  });

  return (
    <>
    <ul className={scss.cardBox}>
      <li className={scss.itemChoice}>
        <button className={scss.button}>
          <svg
            className={scss.iconCircle}
            // onClick={() => setOpenChoice(!openChoice)}
            // ref={iconRef}
          >
            <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
          </svg>
          {openChoice &&
            <div
              className={scss.movesBox}
              // ref={columnRef}
            >
              <ul>
                {otherColumns.map(item => (
                  <li
                    key={item}
                    className={scss.line}
                    // onClick={e => {
                    //   setOpenChoice(false);
                    //   console.log(e.target);
                    // }}
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
        </button>
      </li>
      <li>
        <button onClick={handleUpdateTaskInfo}>
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
      {showUpdateModal && <ModalToggel data={task} />}
    </>
  );
};

export default TaskToolbar;
