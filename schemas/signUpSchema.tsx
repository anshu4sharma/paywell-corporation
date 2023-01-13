import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  midname: yup.string().required('Middle name is required'),
  password: yup.string().required('Password is required').min(8,"Password must be alteast of 8 characters"),
  businessName: yup.string().required('Business name is required'),
  businessPhone: yup.number().required('Business Phone is required'),
  policy: yup.boolean().required('Please Accept term and conditions'),
});

export default signUpSchema;
