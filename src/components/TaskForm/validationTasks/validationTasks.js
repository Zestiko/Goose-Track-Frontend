import * as Yup from 'yup';

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
