import { Link } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { registerUserSchema } from "components/ValidationUserYup/ValidationUserYup";
import scss from './RegisterForm.module.scss';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux'
import {authRegisterThunk} from '../../redux/auth/auth.thunk'

const initialState = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async ({name:userName, email, password}, {resetForm}) => {
        console.log({ userName, email, password });
        dispatch(authRegisterThunk({ userName, email, password }));
        resetForm();
    };

    return (
    <><div className={scss.container}>
        <div className={scss.bgimages}></div>
        <div className={scss.bgImagesMsg}>
            <p className={scss.bgImagesText}>Quickly <span className={scss.span}>register</span> and familiarize yourself with the application!</p>
        </div>
        <Formik const initialValues={initialState}
            validationSchema={registerUserSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
            <Form autoComplete="off" className={scss.form}>
                <h1 className={scss.title}>Sing Up</h1>
                <label className={scss.label +
                            (errors.name && touched.name ? ' is-invalid' : '')}>
                    Name
                    <Field
                        id="name"
                        name="name"
                        type="name"
                        placeholder="Enter your name"
                        className={scss.input  +
                            (errors.name && touched.name ? ' is-invalid' : '')} />
                    <ErrorMessage name="name" component="div" className="invalid-feedback"></ErrorMessage>
                </label>
                <label className={scss.label +
                            (errors.email && touched.email ? ' is-invalid' : '')}>
                    Email
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className={scss.input  +
                            (errors.email && touched.email ? ' is-invalid' : '')} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback"></ErrorMessage>
                </label>
                <label className={scss.label + (errors.password && touched.password ? ' is-invalid' : '')}>
                    Password
                    <Field
                        id="password"
                        name="password"
                        type={'password'}
                        placeholder="Enter password"
                        className={scss.input  + (errors.password && touched.password ? ' is-invalid' : '')} />
                    <ErrorMessage name="password" component="div" className="invalid-feedback"></ErrorMessage>
                </label>
                <button className={scss.button} type="submit">Sing Up
                    <FiLogIn className={scss.icon} />
                </button>
            </Form>)}
        </Formik>
        <Link className={scss.link} to="/login">
            Log In
        </Link>
    </div>
    </>
    );
};