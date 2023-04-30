import { COLUMNS_OPTIONS } from 'constants/columns.constans';
import { useDispatch } from 'react-redux';

import { spriteIcons } from 'images/icons';
// import ModalClear from 'components/ModalClear/ModalClear';
// import { updateTask } from 'redux/tasks/tasksOperations';

const TaskToolbar = ({ task }) => {
  // const dispatch = useDispatch();
  const {
    title,
    // title= 'Find new cool job!',
    startTime,
    endTime,
    priority,
    // priority=PRIORITY.HIGHT,
    // owner,
    column,
    taskDate,
    _id: id,
  } = task;
  const handleChangeColumn = () => {
    const otherColumns = COLUMNS_OPTIONS.filter(item => item.column !== column);

    // return (
      // <ModalClear>
      //   {otherColumns.map(item => (
      //     <button
      //       type="button"
      //       onClick={() => {
      //         dispatch(updateTask(id, item));
      //       }}
      //       className=""
      //     >
      //       {item}
      //     </button>
      //   ))}
      // </ModalClear>
    // );
  };

  const handleUpdateTaskInfo = task => {};

  const handleDeleteTask = () => {};

  return (
    <ul>
      <li>
        <button onClick={handleChangeColumn}>
          <svg className="">
            {/* <use href={iconCircle}></use> */}
            <use href={spriteIcons + '#icon-arrow-circle-broken-right'}></use>
          </svg>
        </button>
      </li>
      <li>
        <button onClick={handleUpdateTaskInfo}>
          <svg className="">
            {/* <use href={iconPencil}></use> */}
            <use href={spriteIcons + '#icon-pencil'}></use>
          </svg>
        </button>
      </li>
      <li>
        <button onClick={handleDeleteTask}>
          <svg className="">
            {/* <use href={iconTrash}></use> */}
            <use href={spriteIcons + '#icon-trash'}></use>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default TaskToolbar;
