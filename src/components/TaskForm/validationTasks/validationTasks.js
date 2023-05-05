import moment from 'moment';
import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Type something title'),
  startTime: Yup.string('Set start time').required('Set start time'),
  endTime: Yup.string('Invalid endTime')
    .required('Set end time')
    .test(
      'is-greater',
      'End time must be greater than start time',
      function (value, { parent }) {
        const startTime = parent.startTime;
        if (!startTime || !value) {
          return true;
        }
        const endTime = moment(value, 'HH:mm');
        const diff = endTime.diff(moment(startTime, 'HH:mm'), 'minutes');
        return diff > 0;
      }
    ),
  taskData: Yup.string('Invalid taskData'),
  priority: Yup.string('Invalid priority'),
});
