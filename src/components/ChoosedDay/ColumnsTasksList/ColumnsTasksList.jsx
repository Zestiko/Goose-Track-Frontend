import PropTypes from 'prop-types';
import scss from './ColumnsTasksList.module.scss';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  return (
    <ul className={scss.column}>
      {tasks.map((task, i) => (
        <TaskColumnCard task={task} key={i} />
      ))}
    </ul>
  );
};

export default ColumnsTasksList;

// ColumnsTasksList.propTypes = {
//   tasks: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       startTime: PropTypes.string.isRequired,
//       endTime: PropTypes.string.isRequired,
//       priority: PropTypes.string.isRequired,
//       column: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//     })
//   ),
// };
