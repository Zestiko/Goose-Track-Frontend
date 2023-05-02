import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom/dist';

import scss from './TasksColumn.module.scss';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import { useState } from 'react';
import ModalToggel from 'components/ModalTogel/ModalToggel';


const TasksColumn = ({ title, tasks }) => {
  // const { choosedDay } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const openModalNewTask = () => {

    setOpenModal(true);
  };

  return (
    <>
      <li className={scss.columnBox}>
        <ColumnHeadBar title={title} openModalNewTask={openModalNewTask} />

        {tasks && <ColumnsTasksList tasks={tasks} />}


        <AddTaskBtn onClick={openModalNewTask} />
      </li>
      {openModal && <ModalToggel/>}
    </>
  );
};

export default TasksColumn;

TasksColumn.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      taskDate: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};