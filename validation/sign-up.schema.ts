import * as yup from 'yup';
import {Gender} from "../enums";
import {extractEnumValues} from "../utils/extractEnumValues";

export const signUpSchema = yup.object().shape({
    username: yup.string()
        .email('Incorrect email format')
        .required('Email is a required field'),
    name: yup.string().required('Name is a required field'),
    surname: yup.string().required('Surname is a required field'),
    birthday: yup.string().required('Birthday is a required field'),
    gender: yup.string()
        .test((value) => extractEnumValues(Gender).includes(value as any))
        .required('Gender is a required field'),
    password: yup.string()
        .min(8, 'Password must contain at least 8 characters')
        .required('Password is a required field'),
    repeatPassword: yup.string().test(
        'equal',
        'Repeat password must be the same as password',
        function (v) {
            const ref = yup.ref('password');
            return v === this.resolve(ref);
        }
    ),
});