import styles from './TaskForm.module.scss';
import { useState } from 'react';
import { ReactComponent as Close } from '../../images/icons/x-close.svg';
import { ReactComponent as Pencil } from '../../images/icons/icon-pencil-01.svg';
import { ReactComponent as Plus } from '../../images/icons/icon-plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/tasks/tasksOperations';
import { getCurrentDate } from 'redux/calendar/selectors';
import moment from 'moment';
import { updateTask } from 'redux/tasks/tasksOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Required'),
  startTime: Yup.string('Invalid startTime').required('Required'),
  endTime: Yup.string('Invalid endTime').required('Required'),
  taskData: Yup.string('Invalid taskData').required('Required'),
  priority: Yup.string('Invalid priority'),
});

export const TaskForm = ({ props, onClose }) => {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const [title, setInTitle] = useState(props?.taskData?.title || '');
  const [startTime, setstartTime] = useState(
    props?.taskData?.startTime || moment().format('HH:mm')
  );
  const [endTime, setEndTime] = useState(
    props?.taskData?.endTime || moment().add(1, 'hour').format('HH:mm')
  );
  const [priority, setPriority] = useState(props?.taskData?.priority);
  const { taskData } = props;

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
    const newTaskData = {
      priority,
      taskDate: currentDate,
      title,
      startTime,
      endTime,
    };
    if (taskData) {
      dispatch(updateTask({ taskId: taskData._id, updatedTask: newTaskData }));
    } else {
      dispatch(addTask(newTaskData));
    }
    onClose();
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
            value={title}
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
              autoComplete="on"
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
                checked={priority === 'low'}
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
                checked={priority === 'medium'}
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
                id="high"
                name="priority"
                checked={priority === 'high'}
                onChange={handleChange}
              />
              <span>High</span>
            </div>
          </label>
        </div>
        {!taskData ? (
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
