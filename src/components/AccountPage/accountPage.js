import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorGetUser } from '../../redux/user/selectors';
import {
  authCurrentThunk,
  updateUserProfile,
  uploadAvatar
} from '../../redux/user/user-operations';
import userAvatar from '../../images/icons/ph_user.svg';
import { Formik, Form, Field } from 'formik';


const UserForm = () => {
  const dispatch = useDispatch();
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const { userName, email, birthday, phone, telegram, avatar } =
    useSelector(selectorGetUser);
  const valuesRef = useRef({ userName, email, birthday, phone, telegram, avatar });
  const dispatchRef = useRef(dispatch);



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
    console.log(imageUrl);
    setPreviewImageUrl(imageUrl);
    valuesRef.current = { ...valuesRef.current, avatar: imageUrl };
  } catch (error) {
    console.error(error);
    }
  
  };

  const handleSubmit = async (values) => {
    const { userName, email, birthday, phone, telegram, avatar } = valuesRef.current;
    
    const formattedBirthday = birthday.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1');
    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('email', email);
    formData.append('birthday', birthday);
    formData.append('phone', phone);
    formData.append('telegram', telegram);
    formData.append('avatar', avatar);
    console.log(values)
    try {
      await dispatchRef.current(updateUserProfile(values));
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <section className="user-page">
      <div className="user-page__avatar-container">
        <img
          className="user-page__avatar"
          src={ avatar || previewImageUrl || userAvatar}
          alt="User Avatar"
        />
        <div className="avatar-upload-container">
          <input
            id="avatar-upload"
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
        }}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className="username_form">
            <label htmlFor="userName" className="username_form-label">
              Username
            </label>
            <Field
              className="username_form-input"
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your name" 
            />
            <label htmlFor="birthday" className="username_form-label">
              Birthday:
            </label>
            <Field
              className="username_form-input"
              id="birthday"
              name="birthday"
              type="date"
              lang="en"
              placeholder="Enter your birthday"
            />
            <label htmlFor="email" className="username_form-label">
              Email
            </label>
            <Field
              className="username_form-input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <label htmlFor="phone" className="username_form-label">
              Phone:
            </label>
            <Field
              className="username_form-input"
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone"
            />
            <label htmlFor="telegram" className="username_form-label">
              Telegram:
            </label>
            <Field
              className="username_form-input username_form-input--last"
              id="telegram"
              name="telegram"
              type="text"
              placeholder="Enter your Telegram link"
            />
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
