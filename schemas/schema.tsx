import * as yup from 'yup';

export const receiveControlSchema = yup.object().shape({
  controlNumber: yup
    .number()
    .required('Please Enter your Control Number')
    .min(100000, 'Control Number should be at least 6 digits')
    .max(999999999999999, 'Control Number should be more than 18 digits'),
});
