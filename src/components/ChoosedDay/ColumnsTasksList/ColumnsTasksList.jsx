import PropTypes from 'prop-types';
import scss from './ColumnsTasksList.module.scss';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

// const ColumnsTasksList = () => {
const ColumnsTasksList = ({ tasks }) => {
    // console.log('Hi', tasks);
    return (
        <ul className={scss.column}>
            {tasks.map((task) =>
                <TaskColumnCard task={task} key={task._id} />
            )}
        </ul>
    );
};

export default ColumnsTasksList;

ColumnsTasksList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        column: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
      })
    ),
};