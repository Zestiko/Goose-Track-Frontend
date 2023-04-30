import  Modal  from '../Modal/Modal';
import { TaskForm } from 'components/TaskForm/TaskForm';

 const TaskModal = ({ onClose, ...allProps }) => {
    return (
      <Modal onClose={onClose}>
        <TaskForm props={allProps} onClose={onClose} />
      </Modal>
    );
};

export default TaskModal;