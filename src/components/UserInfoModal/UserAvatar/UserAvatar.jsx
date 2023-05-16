import { selectorGetUserAvatar } from 'redux/user/selectors';
import { useSelector } from 'react-redux';
import { ReactComponent as DefaultAvatarSvg } from 'images/icons/profile-avatar-f.svg';
import scss from './UserAvatar.module.scss';

const UserAvatar = () => {
  const avatarPath = useSelector(selectorGetUserAvatar);
  return (
    <>
      {avatarPath ? (
        <img className={scss.userAvatarHeader} src={avatarPath} alt="avatar" />
      ) : (
        <DefaultAvatarSvg className={scss.userAvatarHeader} />
      )}
    </>
  );
};

export default UserAvatar;
