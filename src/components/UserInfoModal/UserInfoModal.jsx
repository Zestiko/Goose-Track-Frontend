import { useSelector } from 'react-redux';
import { selectorGetUserName } from 'redux/user/selectors';
import { useToggle } from 'hooks/useToggle';

import Logout from 'components/Logout/Logout';
import Modal from 'components/Modal/Modal';
import UserPopup from './UserPopup/UserPopup';
import UserAvatar from './UserAvatar/UserAvatar';
import scss from './UserInfoModal.module.scss';
import { useState } from 'react';

function UserInfoModal() {
  const userName = useSelector(selectorGetUserName);
  const popup = useToggle();
  const modal = useToggle();
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const openPopup = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPosition({ top: rect.top + 150, left: rect.left });
    popup.onOpen();
  };

  const handleLogout = e => {
    popup.onClose();
    modal.onOpen();
  };
  return (
    <>
      <div className={scss.userHeader} onClick={openPopup}>
        <p className={scss.userNameHeader}>{userName}</p>
        <UserAvatar />
      </div>
      {popup.isOpen && (
        <Modal
          onClose={popup.onClose}
          notStyled={true}
          position={popupPosition}
        >
          <UserPopup
            onClose={popup.onClose}
            handleLogout={handleLogout}
            userName={userName}
          />
        </Modal>
      )}
      {modal.isOpen && (
        <Modal onClose={modal.onClose}>
          <Logout onClose={modal.onClose} />
        </Modal>
      )}
    </>
  );
}

export default UserInfoModal;
