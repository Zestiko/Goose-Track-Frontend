import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from 'redux/tasks/tasksOperations';
import { getCurrentDate } from 'redux/calendar/selectors';

import { PRIORITY_OPTIONS } from 'constants/priority.constans';
import { taskSchema } from './validationTasks/validationTasks';

import moment from 'moment';
import clsx from 'clsx';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomRadio from './CustomRadio/CustomRadio';

import styles from './TaskForm.module.scss';
import { ReactComponent as Plus } from '../../images/icons/icon-plus.svg';
import { BsPencil } from 'react-icons/bs';

export const TaskForm = ({ props, onClose }) => {
  const theme = localStorage.getItem('theme') || 'lightTheme';
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const { taskData, column } = props;
  const initialFormikValues = taskData
    ? {
        title: taskData.title,
        startTime: taskData.startTime,
        endTime: taskData.endTime,
        taskDate: taskData.taskDate,
        priority: taskData.priority,
      }
    : {
        title: '',
        startTime: moment().format('HH:mm'),
        endTime: moment().add(1, 'hour').format('HH:mm'),
        taskDate: currentDate,
        priority: 'low',
      };

  const submiting = values => {
    if (!taskData) {
      dispatch(addTask({ ...values, column }));
    } else {
      dispatch(
        updateTask({
          taskId: taskData._id,
          updatedTask: values,
        })
      );
    }
    onClose();
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialFormikValues}
        validationSchema={taskSchema}
        onSubmit={submiting}
      >
        {formik => {
          const handleStartTimeChange = event => {
            const startTime = event.target.value;
            const endTime = moment(startTime, 'HH:mm')
              .add(1, 'hour')
              .format('HH:mm');
            formik.setFieldValue('startTime', startTime);
            formik.setFieldValue('endTime', endTime);
          };
          const handleEndTimeChange = event => {
            const endTime = event.target.value;
            const startTime = moment(endTime, 'HH:mm')
              .subtract(1, 'hour')
              .format('HH:mm');
            formik.setFieldValue('endTime', endTime);
            formik.setFieldValue('startTime', startTime);
          };
          return (
            <Form className={clsx(styles.form, theme)}>
              <label htmlFor="title" className={clsx(styles.title, theme)}>
                Title
                <Field
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Enter some text..."
                  className={clsx(
                    styles.input,
                    theme,
                    formik.errors.title && formik.touched.title
                      ? styles.isInvalid
                      : '',
                    !formik.errors.title && formik.touched.title
                      ? styles.isValid
                      : ''
                  )}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className={styles.invalid_feedback}
                />
              </label>
              <div className={styles.flex}>
                <label
                  htmlFor="startTime"
                  className={clsx(styles.title, theme)}
                >
                  Start
                  <Field
                    name="startTime"
                    type="time"
                    onChange={handleStartTimeChange}
                    className={clsx(
                      styles.timeInput,
                      theme,
                      formik.errors.startTime && formik.touched.startTime
                        ? styles.is_invalid
                        : ''
                    )}
                  />
                  <ErrorMessage
                    name="startTime"
                    component="div"
                    className={styles.invalid_startTime}
                  />
                </label>
                <label htmlFor="endTime" className={clsx(styles.title, theme)}>
                  End
                  <Field
                    name="endTime"
                    type="time"
                    onChange={handleEndTimeChange}
                    min={formik.values.startTime || formik.values.endTime}
                    className={clsx(
                      styles.timeInput,
                      theme,
                      formik.errors.endTime && formik.touched.endTime
                        ? styles.is_invalid
                        : ''
                    )}
                  />
                  <ErrorMessage
                    name="endTime"
                    component="div"
                    className={styles.invalid_endTime}
                  />
                </label>
              </div>
              <div className={styles.flex}>
                <CustomRadio
                  options={PRIORITY_OPTIONS}
                  value={formik.values.priority}
                  setFieldValue={formik.setFieldValue}
                />
              </div>

              <div className={clsx(styles.submit, theme)}>
                {!taskData ? (
                  <>
                    <button
                      type="submit"
                      className={clsx(styles.button, theme)}
                      disabled={!formik.dirty || !formik.isValid}
                    >
                      <Plus className={clsx(styles.logo, theme)} />
                      Add
                    </button>
                    <button
                      className={clsx(styles.btn_cansel, theme)}
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className={clsx(styles.buttonEdit, theme)}
                    disabled={!formik.dirty || !formik.isValid}
                  >
                    <BsPencil className={clsx(styles.logo, theme)} />
                    Edit
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

TaskForm.propTypes = {
  props: PropTypes.shape({
    taskData: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      taskDate: PropTypes.string.isRequired,
      column: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    }),
    column: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};
