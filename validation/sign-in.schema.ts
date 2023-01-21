import * as yup from 'yup';

export const signInSchema = yup.object().shape({
    login: yup.string()
        .email('Incorrect email format')
        .required('Email is a required field'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Password is a required field'),
});