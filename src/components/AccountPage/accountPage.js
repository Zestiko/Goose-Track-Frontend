import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorGetUser } from '../../redux/user/selectors';
import {
  updateUserProfile,
  uploadAvatar,
} from '../../redux/user/user-operations';
import userAvatar from '../../images/icons/ph_user.svg';
import { Formik, Form, Field } from 'formik';

const UserForm = () => {
  const dispatch = useDispatch();
  
  const { userName, email, birthday, phone, telegram, avatar } =
    useSelector(selectorGetUser);
  const [localUser, setLocalUser] = useState("")
  const [localEmail, setLocalEmail] = useState("")
  const [localBirthDay, setlocalBirthDay] = useState("")
  const [localPhone, setLocalPhone] = useState("")
  const [localTelegram, setLocalTelegram] = useState("")
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [isImageSaved, setIsImageSaved] = useState(false);

  const handleAvatarChange = async e => {
    /*e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);
    const imageUrl = window.URL.createObjectURL(file);
    console.log(imageUrl);
    setPreviewImageUrl(imageUrl);*/
     e.preventDefault();
     const file = e.target.files[0];
     if (!file) return;

     try {
      const imageUrl = await uploadAvatar(file);
       setPreviewImageUrl(imageUrl);
       setIsImageSaved(true);
     } catch (error) {
       console.error(error);
       }
  };

  const handleSubmit = async values => {
    // const formattedBirthday = birthday.replace(
    //   /(\d{4})-(\d{2})-(\d{2})/,
    //   '$3/$2/$1'
    // );
    const response = await fetch(previewImageUrl);
  const blob = await response.blob();
    const formData = new FormData();
     if (previewImageUrl) {
    formData.append('avatar', blob);
  } else {
    formData.append('avatar', avatar);
    }
    console.log(previewImageUrl)
    formData.append('userName', localUser || userName);
    formData.append('email', localEmail || email);
    formData.append('birthday', localBirthDay || birthday);
    formData.append('phone', localPhone || phone);
    formData.append('telegram', localTelegram || telegram);
    
    console.log(values)
    try {
      await dispatch(updateUserProfile(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="user-page">
      <div className="user-page__avatar-container">
        <img
          className="user-page__avatar"
          src={previewImageUrl || avatar || userAvatar}
          alt="User Avatar"
        />
        <div className="avatar-upload-container">
          <input
            id="avatar-upload"
            name="avatar"
            type="file"
            accept="image/*"
        
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="avatar-upload" className="avatar-upload-btn"></label>
        </div>
        <h3 className="user-page__name">{userName || 'Username'}</h3>
        <p className="user-page__role">User</p>
      </div>
      <Formik
        initialValues={{
          userName: userName,
          email: email,
          birthday: birthday,
          phone: phone,
          telegram: telegram,
          avatar: avatar,
        }}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className="username_form">
            <label htmlFor="userName" className="username_form-label">
              Username
               <Field
              className="username_form-input"
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setLocalUser(e.target.value)}
              value={localUser || userName}
                />
              </label>

            <label htmlFor="birthday" className="username_form-label">
              Birthday:
              <Field
              className="username_form-input"
              id="birthday"
              name="birthday"
              type="date"
              lang="en"
              placeholder="Enter your birthday"
              onChange={(e) => setlocalBirthDay(e.target.value)}
              value={localBirthDay || birthday.slice(0,10) || `2001-11-11`}
            />
              </label>


            <label htmlFor="email" className="username_form-label">
              Email
              <Field
              className="username_form-input"
              id="email"
              name="email"
              type="email"
              onChange={(e)=> setLocalEmail(e.target.value)}
              value={localEmail || email}
              placeholder="Enter your email"
            />
              </label>

            <label htmlFor="phone" className="username_form-label">
              Phone:
             <Field
              className="username_form-input"
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone"
              onChange={(e)=> setLocalPhone(e.target.value)}
              value={localPhone || phone}
            />
              </label>
            <label htmlFor="telegram" className="username_form-label">
              Telegram:
              <Field
              className="username_form-input username_form-input--last"
              id="telegram"
              name="telegram"
              type="text"
              placeholder="Enter your Telegram link"
              onChange={(e)=> setLocalTelegram(e.target.value)}
              value={localTelegram || telegram}
            />
              </label>
            <button type="submit" className="username__form-submit">
              Save
              </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default UserForm;
