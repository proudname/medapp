import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string()
        .email('Incorrect email format')
        .required('Email is a required field'),
});