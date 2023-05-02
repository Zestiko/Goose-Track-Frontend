import styles from './TaskForm.module.scss';
import { useState } from 'react';
import { ReactComponent as Close } from '../../images/icons/x-close.svg';
import { ReactComponent as Pencil } from '../../images/icons/icon-pencil-01.svg';
import { ReactComponent as Plus } from '../../images/icons/icon-plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/tasks/tasksOperations';
// import { useParams } from 'react-router-dom';
import { getCurrentDate } from 'redux/calendar/selectors';

export const TaskForm = ({ data, onClose }) => {
  const dispatch = useDispatch();
const currentDate = useSelector(getCurrentDate);

  const task = null;

  const [title, setInTitle] = useState('');
  const [startTime, setstartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('14:00');
  const [priority, setPriority] = useState('low');

  const dataForm = {
    taskDate: currentDate,
    title,
    startTime,
    endTime,
    priority,
  };

  const handleChange = event => {
    const { id, name, value } = event.target;
    if (name === 'title') {
      setInTitle(value);
    }
    if (name === 'startTime') {
      setstartTime(value);
    }
    if (name === 'endTime') {
      setEndTime(+value);
    }
    if (name === 'priority') {
      setPriority(id);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addTask(dataForm));
    console.log(dataForm);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="">
          <label className={styles.label} htmlFor="title">
            <p className={styles.title}>Title</p>
          </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter text"
            maxLength={250}
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.start}>
            <label className={styles.label} htmlFor="startTime">
              <p>Start</p>
            </label>
            <input
              onChange={handleChange}
              type="time"
              name="startTime"
              className={styles.timeInput}
              value={startTime}
            />
          </div>
          <div className="">
            <label className={styles.label} htmlFor="endTime">
              <p>End</p>
            </label>
            <input
              onChange={handleChange}
              type="time"
              name="endTime"
              className={styles.timeInput}
              value={endTime}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <label className={styles.check}>
            <div className={styles.flex}>
              <input
                className={styles.checkbox}
                type="radio"
                id="low"
                name="priority"
                onChange={handleChange}
              />
              <span>Low</span>
            </div>
          </label>
          <label className={styles.check}>
            <div className={styles.flex}>
              <input
                className={styles.checkbox}
                type="radio"
                id="medium"
                name="priority"
                onChange={handleChange}
              />
              <span>Medium</span>
            </div>
          </label>
          <label className={styles.check}>
            <div className={styles.flex}>
              <input
                className={styles.checkbox}
                type="radio"
                id="higt"
                name="priority"
                onChange={handleChange}
              />
              <span>High</span>
            </div>
          </label>
        </div>
        {task === null ? (
          <div className={styles.flex}>
            <button type="submit" className={styles.button}>
              <div>
                <Plus className={styles.logo} />
                Add
              </div>
            </button>
            <button className={styles.btn_cansel} onClick={onClose}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="submit" className={styles.button}>
            <>
              <Pencil className={styles.logo} />
              Edit
            </>
          </button>
        )}
      </form>
      <Close onClick={onClose} className={styles.btn_close} />
    </div>
  );
};