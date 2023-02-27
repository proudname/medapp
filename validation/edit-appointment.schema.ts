import * as yup from 'yup';

export const editAppointmentSchema = yup.object().shape({
    date: yup.string()
        .min(10, 'Select a correct date')
        .max(10, 'Select a correct date')
        .nullable()
        .required('Select a date'),
    centerId: yup.mixed()
        .nullable()
        .required('Select a medical center'),
});