import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['personal', 'small', 'medium', 'large', 'family'], 'Please select a size'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    olives: yup.boolean(),
    tomatoes: yup.boolean(),
    chicken: yup.boolean(),
    extraCheese: yup.boolean(),
    specialInstructions: yup
        .string(),
})

export default formSchema;