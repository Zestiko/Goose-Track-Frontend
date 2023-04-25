import PropTypes from 'prop-types';
import { column } from './ColumnsTasksList.module.css';

const ColumnsTasksList = ({ tasks }) => {
    return (
        <ul className={column}>
            {tasks.map((item) => {
                <div {...item} key={item.id} />
            })}
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