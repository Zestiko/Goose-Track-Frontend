import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist';

import scss from './TasksColumn.module.scss';
import { ROUTES } from 'constants/routes.constans';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';

const TasksColumn = ({ title, tasks }) => {
  const navigate = useNavigate();
  const { choosedDay } = useParams();

  // const openModalNewColumn = () => {
  //   navigate({
  //     pathname: '',
  //     /** Додавання нового типу завдань */
  //   });
  // };

  const openModalNewTask = () => {
    navigate({
      pathname: `${ROUTES.calendar}${ROUTES.day}/${choosedDay}/add`,
    });
  };

  return (
    <li className={scss.columnBox}>
      <ColumnHeadBar title={title} openModalNewTask={openModalNewTask} />

      {/* {tasks && <ColumnsTasksList tasks={tasks} />} */}
      <ColumnsTasksList tasks={tasks} />

      <AddTaskBtn onClick={openModalNewTask} />
    </li>
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
