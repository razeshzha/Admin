import * as Yup from 'yup';
import { ICategoryInput } from '@/src/interface/category.interface'; // Ensure ICategoryInput is correctly imported

const categoryInputSchema: Yup.ObjectSchema<ICategoryInput> = Yup.object({
  _id: Yup.string(),  // Add the _id field as a string, as it is required by ICategoryInput
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),
  description: Yup.string()
    .optional() // description is optional
    .max(255, 'Description must be at most 255 characters'),
});

export default categoryInputSchema;
