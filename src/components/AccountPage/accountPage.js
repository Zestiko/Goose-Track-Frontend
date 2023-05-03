import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorGetUser } from '../../redux/user/selectors';
import { updateUserProfile } from '../../redux/user/user-operations';
import userAvatar from '../../images/icons/ph_user.svg';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import moment from 'moment';
import css from './accountPage.module.scss';

const today = new Date().toISOString().split('T')[0];
const infoUserSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(36, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone:Yup.string().matches(/^\+380\d{9}$/, "Phone number must be in the format +380XXXXXXXXX").required(),
  telegram: Yup.string().matches(/^\+380\d{9}$/, "Telegram number must be in the format +380XXXXXXXXX"),
  avatar: Yup.mixed().test(
      "fileType",
      "Avatar must be a valid image file (jpg, jpeg, png)",
      (value) =>
        value && ["image/jpeg", "image/png"].includes(value.type)
    ),
  birthday: Yup.date().required().max(new Date(), "Birthday can't be in the future"),
});


const MyDatePicker = ({ name = '', birthday }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;
  // const currentDate = moment();

  // const isOutsideMonth = date => {
  //   return date.getMonth() !== new Date().getMonth();
  // };

  const isWeekend = date => {
    const day = moment(date).format('dddd');
    return day === 'Saturday' || day === 'Sunday';
  };

  const dayClassNames = date => {
    const classNames = [''];
    // if (isOutsideMonth(date)) {
    //   classNames.push('outside-month');
    // }

    if (isWeekend(date)) {
      classNames.push('highlighted-weekend');
    }
    return classNames.join(' ');
  };

  return (
    
    <DatePicker
      className={css.date_picker}
      showPopperArrow={false}
      {...field}
      selected={value || new Date(birthday || today)}
      onChange={date => setValue(date)}
      dayClassName={dayClassNames}
      calendarStartDay={1}
      placeholderText={birthday || 'Choose a date'}
      weekdayShort={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      />
      
  );
};

const UserForm = ({ theme }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectorGetUser);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  let updatedUserInfo = {
    phone: userInfo.phone || '',
    telegram: userInfo.telegram || '',
    userName: userInfo.userName,
    email: userInfo.email,
    // birthday: userInfo.birthday
    //   ? moment(userInfo.birthday).format('YYYY-MM-DD')
    //   : moment().format('YYYY-MM-DD'),
    birthday: userInfo.birthday,
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
    keys.forEach(key => {
      if (key === "date") {
        const birthday = moment(values[key]).format('YYYY-MM-DD');       
        formData.append('birthday', birthday);
        return;
      }
      if (key === 'birthday') {
        return
      }
      formData.append(key, values[key])
    });
    
    if (file) {
      formData.append('avatar', file);
    
    }
    
    try {
      await dispatch(updateUserProfile(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={`${css.user_page} ${theme}`}>
      <div className={`${css.user_page__avatar_container} ${theme}`}>
        <img
          className={`${css.user_page__avatar} ${theme}`}
          src={previewImageUrl || userInfo.avatar || userAvatar}
          alt="User Avatar"
        />
        <div className={`${css.avatar_upload_container} ${theme}`}>
          <input
            id="avatar-upload"
            name="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
          <label
            htmlFor="avatar-upload"
            className={`${css.avatar_upload_btn} ${theme}`}
          ></label>
        </div>
        <h3 className={`${css.user_page__name} ${theme}`}>
          {userInfo.userName || 'Username'}
        </h3>
        <p className={`${css.user_page__role} ${theme}`}>User</p>
      </div>
      <Formik
        initialValues={updatedUserInfo}
        validationSchema={infoUserSchema}
        onSubmit={submiting}
      >
        {formik => {
          return (
            <Form className={`${css.username_form} ${theme}`}>
              <label
                htmlFor="userName"
                className={`${css.username_form__label} ${theme}`}
              >
                Username
                <Field
                  name="userName"
                  type="text"
                  className={
                    `${css.username_form_input} ${theme}` +
                    (formik.errors.userName && formik.touched.userName
                      ? css.is_invalid
                      : '')
                  }
                  placeholder="User name"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className={css.invalid_feedback}
                />
              </label>

              <label
                htmlFor="birthday"
                className={`${css.username_form__label} ${theme}`}
              >
                Birthday:
                <MyDatePicker
                  name="date"
                  birthday={formik.values.birthday}
                  className={css.my_date_picker}
                />
                <ErrorMessage
                  name="birthday"
                  component="div"
                  className={css.invalid_feedback}
                />
              </label>

              <label
                htmlFor="email"
                className={`${css.username_form__label} ${theme}`}
              >
                Email Address
                <Field
                  name="email"
                  type="email"
                  className={`${css.username_form_input} ${theme}`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.invalid_feedback}
                />
              </label>
              <label
                htmlFor="phone"
                className={`${css.username_form__label} ${theme}`}
              >
                Phone:
                <Field
                  className={`${css.username_form_input} ${theme}`}
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.invalid_feedback}
                />
              </label>

              <label
                htmlFor="telegram"
                className={`${css.username_form__label} ${theme}`}
              >
                Telegram:
                <Field
                  className={`${css.username_form_input} ${theme}`}
                  id="telegram"
                  name="telegram"
                  type="text"
                  placeholder="Enter your Telegram link"
                />
                <ErrorMessage
                  name="telegram"
                  component="div"
                  className={css.invalid_feedback}
                />
              </label>
              <button
                type="submit"
                className={`${css.username_form__submit} ${theme}`}
                disabled={!formik.dirty}
              >
                Save Changes
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default UserForm;
