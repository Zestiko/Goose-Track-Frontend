import PropTypes from 'prop-types';
import scss from './ColumnsTasksList.module.scss';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

// const ColumnsTasksList = () => {
const ColumnsTasksList = ({ tasks }) => {

    return (
        <ul className={scss.column}>
            {tasks.map((task) =>
                <TaskColumnCard task={task} key={task.id} />
            )}
        </ul>
    );
};

export default ColumnsTasksList;

ColumnsTasksList.propTypes = {
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
};