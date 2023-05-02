import Modal from "components/Modal/Modal";
import { TaskForm } from "components/TaskForm/TaskForm";


const { useToggle } = require("hooks/useToggle")

const ModalToggel = () => {
  const { isOpen, onClose,  } = useToggle(true);
  console.log("🚀 ~ file: ModalToggel.jsx:8 ~ ModalToggel ~ isOpen:", isOpen)
  return (
    <div>
      <>
        {/* <button onClick={onOpen}>Open modal</button> */}
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