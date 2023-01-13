import * as yup from 'yup';
const sendMoney = yup.object().shape({
  acNumber: yup.number().required('Account Number is required'),
  acHolderName: yup.string().required('Account holder name is required'),
  amount: yup.number().required('Amount is required'),
  purpose: yup.string().required('Please enter transaction purpose'),
  remarks: yup.string().required('Please enter transaction remarks'),
});

export default sendMoney;
