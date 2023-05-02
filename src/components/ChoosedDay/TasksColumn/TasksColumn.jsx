import PropTypes from 'prop-types';
import scss from './TasksColumn.module.scss';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import TaskModal from 'components/TaskModal/TaskModal';
import { useToggle } from 'hooks/useToggle';


const TasksColumn = ({ title, tasks, column }) => {
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <>
      <li className={scss.columnBox}>
        <ColumnHeadBar title={title} openModalNewTask={onOpen} />
        {tasks && <ColumnsTasksList tasks={tasks} />}
        <AddTaskBtn onClick={onOpen} />
      </li>
      {isOpen && <TaskModal onClose={onClose} column={column} />}
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
