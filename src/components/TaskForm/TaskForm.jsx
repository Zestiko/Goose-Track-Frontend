import styles from './TaskForm.module.scss';
import { ReactComponent as Plus } from '../../images/icons/icon-plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/tasks/tasksOperations';
import { getCurrentDate } from 'redux/calendar/selectors';
import moment from 'moment';
import { updateTask } from 'redux/tasks/tasksOperations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomRadio from './CustomRadio';
import { BsPencil } from 'react-icons/bs';

const options = [
  { label: 'Low', value: 'low', color: 'blue' },
  { label: 'Medium', value: 'medium', color: 'green' },
  { label: 'High', value: 'high', color: 'red' },
];

export const taskSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Type something title'),
  startTime: Yup.string('Set start time').required('Set start time'),
  endTime: Yup.string('Invalid endTime').required('Set end time'),
  taskData: Yup.string('Invalid taskData'),
  priority: Yup.string('Invalid priority'),
});

export const TaskForm = ({ props, onClose, theme }) => {
  const dispatch = useDispatch();
  const currentDate = useSelector(getCurrentDate);
  const { taskData } = props;

  const initialFormikValues = taskData
    ? { ...taskData }
    : {
        title: '',
        startTime: moment().format('HH:mm'),
        endTime: moment().add(1, 'hour').format('HH:mm'),
        taskDate: currentDate,
        priority: 'low',
      };

  const submiting = async values => {
    if (taskData) {
      dispatch(updateTask({ taskId: taskData._id, updatedTask: values }));
    } else {
      dispatch(addTask(values));
    }
    onClose();
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialFormikValues}
        validationSchema={taskSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            submiting(values).then(() => {
              setSubmitting(false);
            });
          }, 700);
        }}
      >
        {formik => {
          console.log('!formik.dirty', !formik.dirty);
          console.log('!formik.isValid', !formik.isValid);
          return (
            <Form
              className={`${styles.form} ${theme}`}
              onSubmit={formik.handleSubmit}
            >
              <label htmlFor="title" className={`${styles.title} ${theme}`}>
                Title
                <Field
                  name="title"
                  type="text"
                  className={
                    `${styles.input} ${theme}` +
                    (formik.errors.userName && formik.touched.userName
                      ? styles.is_invalid
                      : '')
                  }
                  placeholder="Enter text"
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
                  className={`${styles.title} ${theme}`}
                >
                  Start
                  <Field
                    name="startTime"
                    type="time"
                    className={
                      `${styles.timeInput} ${theme}` +
                      (formik.errors.timeInput && formik.touched.timeInput
                        ? styles.is_invalid
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="startTime"
                    component="div"
                    className={styles.invalid_feedback}
                  />
                </label>
                <label htmlFor="endTime" className={`${styles.title} ${theme}`}>
                  End
                  <Field
                    name="endTime"
                    type="time"
                    className={
                      `${styles.timeInput} ${theme}` +
                      (formik.errors.endTime && formik.touched.endTime
                        ? styles.is_invalid
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="endTime"
                    component="div"
                    className={styles.invalid_feedback}
                  />
                </label>
              </div>
              <div className={styles.flex}>
                <CustomRadio
                  options={options}
                  value={formik.values.priority}
                  setFieldValue={formik.setFieldValue}
                />
              </div>

              <div className={`${styles.submit}`}>
                {!taskData ? (
                  <>
                    <button
                      type="submit"
                      className={styles.button}
                      disabled={!formik.dirty || !formik.isValid}
                    >
                      <Plus className={styles.logo} />
                      Add
                    </button>
                    <button className={styles.btn_cansel} onClick={onClose}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className={styles.buttonEdit}
                    disabled={!formik.dirty || !formik.isValid}
                  >
                    <BsPencil className={styles.logo} />
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
