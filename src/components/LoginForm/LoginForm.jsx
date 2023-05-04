import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
  useDispatch,
  useSelector,
  // useSelector
} from 'react-redux';
import Notiflix from 'notiflix';
import { FiLogIn } from 'react-icons/fi';
import { authLoginThunk } from 'redux/user/user-operations';
import scss from './LoginForm.module.scss';
import { loginUserSchema } from 'components/ValidationUserYup/ValidationUserYup';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BsEyeFill } from 'react-icons/bs';
import { useState } from 'react';
import { getCurrentDate } from 'redux/calendar/selectors';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = useSelector(getCurrentDate);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<BsEyeSlashFill />);

  const handleShowPassword = () => {
    if (type === 'password') {
      setIcon(<BsEyeFill />);
      setType('text');
    } else {
      setIcon(<BsEyeSlashFill />);
      setType('password');
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(authLoginThunk(values)).unwrap();
      Notiflix.Notify.success("It's ok!");
      resetForm();
      navigate(`/calendar/month/${currentDate.slice(0, 7)}`);
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure('Oops! You make some mistake:-(');
    }
  };

  return (
    <div className={scss.container}>
      <div className={scss.bgimages}></div>
      <div className={scss.bgImagesMsg}>
        <p className={scss.bgImagesText}>
          Quickly <span className={scss.span}>come in</span> and write down your
          tasks for the day!
        </p>
      </div>
      <Formik
        const
        initialValues={initialState}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, resetForm }) => (
          <Form autoComplete="off" className={scss.form}>
            <h1 className={scss.title}>Log In</h1>
            <label
              className={
                errors.email && touched.email ? scss.isInvalidLabel : scss.label
              }
            >
              <p className={scss.labelText}>Email</p>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className={
                  errors.email && touched.email ? scss.isInvalid : scss.input
                }
              />
              <div className={scss.feedback}>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={scss.invalidFeedback}
                ></ErrorMessage>
              </div>
            </label>
            <label
              className={
                errors.password && touched.password
                  ? scss.isInvalidLabel
                  : scss.label
              }
            >
              <p className={scss.labelText}>Password</p>
              <Field
                id="password"
                name="password"
                type={type}
                placeholder="Enter password"
                className={
                  errors.password && touched.password
                    ? scss.isInvalid
                    : scss.input
                }
              />
              <button
                className={scss.btnToggle}
                type="button"
                onClick={handleShowPassword}
              >
                <div className={scss.spanIcon}>{icon}</div>
              </button>
              <div className={scss.feedback}>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={scss.invalidFeedback}
                ></ErrorMessage>
              </div>
            </label>
            <button className={scss.button} type="submit">
              Log in
              <FiLogIn className={scss.icon} />
            </button>
          </Form>
        )}
      </Formik>
      <Link className={scss.link} to="/register">
        Sign up
      </Link>
    </div>
  );
};
export default LoginForm;
