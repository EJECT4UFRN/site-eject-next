import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  lastName: yup.string().required('O campo sobrenome é obrigatório'),
  email: yup
    .string()
    .email('O campo e-mail é obrigatório')
    .required('O campo e-mail é obrigatório'),
  phone: yup.string().required('O campo número é obrigatório'),
  textField: yup.string().min(2),
});
