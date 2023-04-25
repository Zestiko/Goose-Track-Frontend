// import tasks from '../tasks.json';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import ColumnHeadBar from "components/ColumnHeadBar/ColumnHeadBar";
import ColumnsTasksList from "components/ColumnsTasksList/ColumnsTasksList";
import { tasksBox } from './TaskColumn.module.css';

const TasksColumn = ({ title, tasks }) => {
    const navigate = useNavigate();
    const openModalNewTask = () => {
        navigate({
            pathname: '',
        });
}
    return(
        <li className={tasksBox}>
            <ColumnHeadBar title={title} openModalNewTask={openModalNewTask} />

            {tasks && <ColumnsTasksList tasks={tasks} />}
            <button type="button" className="" onClick={openModalNewTask}>

            </button>
        </li>
    );
};

export default TasksColumn;

TasksColumn.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startTime: PropTypes.number.isRequired,
        endTime: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        column: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string.isRequired,
};