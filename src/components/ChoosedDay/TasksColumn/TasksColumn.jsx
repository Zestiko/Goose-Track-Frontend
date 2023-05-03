import PropTypes from 'prop-types';
import { useToggle } from 'hooks/useToggle';

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import TaskModal from 'components/TaskModal/TaskModal';

import scss from './TasksColumn.module.scss';

const TasksColumn = ({ title, tasks, column }) => {
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <>
      <li className={scss.columnBox}>
        <ColumnHeadBar title={title} openModalNewTask={onOpen} />
        {tasks && <ColumnsTasksList tasks={tasks || {}} />}
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
    })
  ),
  title: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
};
