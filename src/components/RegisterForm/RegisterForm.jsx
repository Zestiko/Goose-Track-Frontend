import { Link } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { registerUserSchema } from "components/ValidationUserYup/ValidationUserYup";
import scss from './RegisterForm.module.scss';
import { FiLogIn } from 'react-icons/fi';

const initialState = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {

    const handleSubmit = async (values, {resetForm}) => {
        console.log(values);
        resetForm();
    };

    return (
    <div className={scss.container}>
        <div className={scss.bgimages}></div>
        <div className={scss.bgImagesMsg}>
            <p className={scss.bgImagesText}>Quickly <span className={scss.span}>register</span> and familiarize yourself with the application!</p>
        </div>
        <Formik const initialValues={initialState}
            validationSchema={registerUserSchema}
            onSubmit={handleSubmit}
        >
            <Form autoComplete="off" className={scss.form}>
                <h1 className={scss.title}>Sing Up</h1>
                <label className={scss.label}>
                    Name
                    <Field
                        id="name"
                        name="name"
                        type="name"
                        placeholder="Enter your name"
                        className={scss.input} />
                    <ErrorMessage name="name" component="div">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                </label>
                <label className={scss.label}>
                    Email
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className={scss.input} />
                    <ErrorMessage name="email" component="div">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                </label>
                <label className={scss.label}>
                    Password
                    <Field
                        id="password"
                        name="password"
                        type={'password'}
                        placeholder="Enter password"
                        className={scss.input} />
                    <ErrorMessage name="password" component="div">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                </label>
                <button className={scss.button} type="submit">Sing Up
                    <FiLogIn className={scss.icon} />
                </button>
            </Form>
        </Formik>
        <Link className={scss.link} to="/login">
            Log In
        </Link>
    </div>
    );
};