import * as yup from 'yup';

const userInputSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  role: yup.string().oneOf(['user', 'admin'], 'Invalid role').required('Role is required'),
});

export default userInputSchema;
