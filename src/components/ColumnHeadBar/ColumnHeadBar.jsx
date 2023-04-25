import PropTypes from 'prop-types';
import { header, columnTitle } from './ColumnHeadBar.module.css';

const ColumnHeadBar = ({ title, openModalNewTask }) => {

    return (
        <div className={header}>
            <p className={columnTitle}>{title}</p>
            <button className="" onClick={openModalNewTask}>
                <svg>

                </svg>
                Add Task
            </button>
        </div>
    );
};

export default ColumnHeadBar;

ColumnHeadBar.propTypes = {
    title: PropTypes.string.isRequired,
    openModalNewTask: PropTypes.func.isRequired,
};
