import scss from './ModalClear.module.scss';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 *
 * @parentElementComponents
 * import { useToggle } from 'hooks/useToggle';
 *  const {isOpen, onOpen,onClose} = useToggle();
 *
 * Example
 * <button type='button' onClick={onOpen}>Open Modal</button>
 *
 * { isOpen &&
 * <BasicModal onClose={onClose}>
 * <h2>Modal title</h2>
 * <p>Modal content goes here</p>
 * <button type='submit' onClick={onClose}>DONE</button>
 * </BasicModal>}
 */

const ModalClear = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose && onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };


  return createPortal(
    <div className={scss.modalBox}>
      <div className={scss.modalOverlay} onClick={handleClickBackdrop}></div>
      <div className={scss.modalBody}>

        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ModalClear;
