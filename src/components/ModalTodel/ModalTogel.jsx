import Modal from "components/Modal/Modal";
import { TaskForm } from "components/TaskForm/TaskForm";


const { useToggle } = require("hooks/useToggle")

const ModalToggel = () => {
  const { isOpen, onOpen, onClose,  } = useToggle(false);
  return (
    <div>
      <>
        <button onClick={onOpen}>Open modal</button>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <TaskForm title={"title"} onClose={onClose} />
          </Modal>
        )}
      </>
    </div>
  );
}

export default ModalToggel;