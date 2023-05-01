import { Link } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { registerUserSchema } from "components/ValidationUserYup/ValidationUserYup";
import scss from './RegisterForm.module.scss';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {authRegisterThunk} from '../../redux/user/user-operations';
import {BsEyeSlashFill } from 'react-icons/bs';
import {BsEyeFill } from 'react-icons/bs';
import { useState } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
};

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<BsEyeSlashFill/>);

    const handleShowPassword = () => {
        if(type==='password'){
            setIcon(<BsEyeFill/>);
            setType('text')
        } else {
            setIcon(<BsEyeSlashFill/>);
            setType('password')
        }
    }

    const handleSubmit = async ({name:userName, email, password}, {resetForm}) => {
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
                    <label className={(errors.name && touched.name ? scss.isInvalidLabel : scss.label)}>
                        Name
                        <Field
                            id="name"
                            name="name"
                            type="name"
                            placeholder="Enter your name"
                            className={(errors.name && touched.name ? scss.isInvalid : scss.input)} />
                        <div className={scss.feedback}><ErrorMessage name="name" component="div" className={scss.invalidFeedback}></ErrorMessage></div>
                    </label>
                    <label className={(errors.email && touched.email ? scss.isInvalidLabel : scss.label)}>
                        Email
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            className={(errors.email && touched.email ? scss.isInvalid : scss.input)} />
                        <div className={scss.feedback}><ErrorMessage name="email" component="div" className={scss.invalidFeedback}></ErrorMessage></div>
                    </label>
                    <label className={(errors.password && touched.password ? scss.isInvalidLabel : scss.label)}>
                        Password
                        <Field
                            id="password"
                            name="password"
                            type={type}
                            placeholder="Enter password"
                            className={(errors.password && touched.password ? scss.isInvalid : scss.input)}
                            />
                            <button className={scss.btnToggle} type="button" onClick={handleShowPassword} ><div className={scss.spanIcon}>{icon}</div></button>
                        <div className={scss.feedback}><ErrorMessage name="password" component="div" className={scss.invalidFeedback}></ErrorMessage></div>
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