import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
    title: Yup.string()
        .required('Required'),
    dueDate: Yup.date()
        .required('Required'),
    category: Yup.string().required('Required'),
});