import * as Yup from "yup";

export const registerUserSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(36, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').max(16, 'Too Long!').required('Required'),
});

export const loginUserSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required to fill out'),
    password: Yup.string().min(6, 'Too Short!').max(16, 'Too Long!').required('Required to fill out'),
});