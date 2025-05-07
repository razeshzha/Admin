import * as yup from 'yup';

const orderInputSchema = yup.object().shape({
  userId: yup.string().required('User ID is required'),
  items: yup
    .array()
    .of(
      yup.object().shape({
        productId: yup.string().required('Product ID is required'),
        quantity: yup
          .number()
          .typeError('Quantity must be a number')
          .min(1, 'Minimum quantity is 1')
          .required('Quantity is required'),
      })
    )
    .min(1, 'At least one product is required')
    .required('Items are required'),
  status: yup
    .string()
    .oneOf(['pending', 'shipped', 'delivered'], 'Invalid order status')
    .required('Status is required'),
});

export default orderInputSchema;
