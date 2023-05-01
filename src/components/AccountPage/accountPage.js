import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorGetUser } from '../../redux/user/selectors';
import {
  updateUserProfile,
  uploadAvatar,
} from '../../redux/user/user-operations';
import userAvatar from '../../images/icons/ph_user.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import scss from './accountPage.module.scss';

export const infoUserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string('Invalid phone'),
  telegram: Yup.string('Invalid telegram'),
  avatar: Yup.string('Invalid avatar'),
  birthday: Yup.string('Invalid avatar'),
});

const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectorGetUser);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  let updatedUserInfo = {
    phone: '',
    telegram: '',
    avatar: '',
    ...userInfo,
    birthday: userInfo?.birthday || moment(new Date()).format('YYYY-MM-DD'),
  };

  const handleAvatarChange = async e => {
    const userAvatarPreviewImg = e.target.files[0];
    setFile(userAvatarPreviewImg);
    const reader = new FileReader();

    const blob = new Blob([userAvatarPreviewImg], {
      type: userAvatarPreviewImg.type,
    });
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setPreviewImageUrl(reader.result);
    };
  };

  const submiting = async values => {
    const formData = new FormData();

    const keys = Object.keys(values);
    keys.forEach(key => formData.append(key, values[key]));
    formData.append('avatar', file);

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
          src={previewImageUrl || userInfo.avatar || userAvatar}
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
        <h3 className="user-page__name">{userInfo.userName || 'Username'}</h3>
        <p className="user-page__role">User</p>
      </div>
      <Formik
        initialValues={updatedUserInfo}
        validationSchema={infoUserSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            submiting(values).then(() => {
              setSubmitting(false);
            });
          }, 700);
          updatedUserInfo = { ...values };
        }}
      >
        {formik => {
          console.log(formik.values);
          return (
            <Form className="username_form">
              <label htmlFor="userName" className="username_form-label">
                Username
                <Field
                  name="userName"
                  type="text"
                  className={
                    scss.username_form_input +
                    (formik.errors.userName && formik.touched.userName
                      ? ' is-invalid'
                      : '')
                  }
                  placeholder="User name"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="invalid_feedback"
                />
              </label>

              <label htmlFor="birthday" className="username_form-label">
                Birthday:
                <Field
                  className="username_form_input"
                  name="birthday"
                  lang="en"
                  type="date"
                  placeholder="Enter your birthday"
                />
                <ErrorMessage
                  name="birthday"
                  component="div"
                  className="invalid_feedback"
                />
              </label>

              <label htmlFor="email" className="username_form-label">
                Email Address
                <Field
                  name="email"
                  type="email"
                  className="username_form_input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid_feedback"
                />
              </label>
              <label htmlFor="phone" className="username_form-label">
                Phone:
                <Field
                  className="username_form_input"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="invalid_feedback"
                />
              </label>

              <label htmlFor="telegram" className="username_form-label">
                Telegram:
                <Field
                  className="username_form_input username_form_input--last"
                  id="telegram"
                  name="telegram"
                  type="text"
                  placeholder="Enter your Telegram link"
                />
                <ErrorMessage
                  name="telegram"
                  component="div"
                  className="invalid_feedback"
                />
              </label>
              <button
                type="submit"
                className="username__form-submit"
                disabled={!formik.dirty || !formik.isValid}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default UserForm;
