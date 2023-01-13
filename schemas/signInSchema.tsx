import * as yup from 'yup';

const signInSchema = yup.object().shape({
  phone: yup.number().required('Please Enter your Email or Phone'),
  password: yup.string().required('Please Enter your Password'),
});

export default signInSchema;
