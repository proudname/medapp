import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    login: yup.string()
        .email('Incorrect email format')
        .required('Email is a required field'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Password is a required field'),
    repeatPassword: yup.string().test(
        'equal',
        'Repeat password must be the same as password',
        function (v) {
            const ref = yup.ref('password');
            return v !== this.resolve(ref);
        }
    ),
});