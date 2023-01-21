import * as yup from 'yup';

export const newContractSchema = yup.object().shape({
    images: yup.array().min(1, 'At least one image must be chosen').required(),
});