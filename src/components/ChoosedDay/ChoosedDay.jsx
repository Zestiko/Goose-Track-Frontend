import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import {box} from "./ChoosedDay.module.css";

const ChoosedDay = () => {
    const { currentDay } = useParams();
    const { tasks } = useTasksByChoosedDay();
    return (
      <div className={box}>
      <DayCalendarHead day={currentDay} />
      <TasksColumnsList tasks={tasks}>
        <TasksColumn />
      </TasksColumnsList>
      </div>
    );
  };
  
  export default ChoosedDay;
  
ChoosedDay.propTypes = {
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