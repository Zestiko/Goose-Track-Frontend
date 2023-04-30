import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import Notiflix from 'notiflix';
import { FiLogIn } from 'react-icons/fi';

// import { selectorAuthStatus } from 'redux/auth/authSelector';
import { authLoginThunk } from 'redux/user/user-operations';
import scss from './LoginForm.module.scss';
import { loginUserSchema } from 'components/ValidationUserYup/ValidationUserYup';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);

    try {
      await dispatch(authLoginThunk(values)).unwrap();
      Notiflix.Notify.success("It's ok!");
      resetForm();
      navigate('/main/calendar/month/2023-04');
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
                scss.label +
                (errors.email && touched.email ? ' is-invalid' : '')
              }
            >
              Email
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className={
                  scss.input +
                  (errors.email && touched.email ? ' is-invalid' : '')
                }
                // onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              ></ErrorMessage>
            </label>
            <label
              className={
                scss.label +
                (errors.password && touched.password ? ' is-invalid' : '')
              }
            >
              Password
              <Field
                id="password"
                name="password"
                type={'password'}
                placeholder="Enter password"
                className={
                  scss.input +
                  (errors.password && touched.password ? ' is-invalid' : '')
                }
                // onChange={handleChange}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              ></ErrorMessage>
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
