import {ErrorMessage, FastField} from "formik";

interface ISelectField {
    label: string;
    name: string;
    optionList: string[] | Readonly<string[]>
}

export const SelectField = ({label, name, optionList}: ISelectField) => {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <FastField as="select" name={label}>
                {optionList.map((category) =>
                    <option value={category}>{category}</option>
                )}
            </FastField>
            <ErrorMessage name={label}>
                {msg => <div style={{color: 'red'}}>{msg}</div>}
            </ErrorMessage>
        </>
    )
}