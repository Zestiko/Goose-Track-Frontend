import PropTypes from 'prop-types';
import {listBox} from "./TasksColumnsList.module.css";

const TasksColumnsList = ({tasks}) => {
    return (
      <div className={listBox}>
      {tasks.map(task => (
          <TasksColumn key={task.id} item={task} />
        ))}
    </div>    );
  };
  
  export default TasksColumnsList;
  
TasksColumnsList.propTypes = {
  };