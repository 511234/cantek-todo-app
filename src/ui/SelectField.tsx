import {ErrorMessage, FastField} from "formik";

interface ISelectField {
    label: string;
    name: string;
    optionList: string[] | Readonly<string[]>
}

export const SelectField = ({label, name, optionList}: ISelectField) => {
    return (
        <div className="d-flex flex-column">
            <label className="fw-bolder" htmlFor={name}>{label}</label>
            <FastField as="select" className="px-2 mr-3 border-1 rounded-3 border-dark" name={name}>
                {optionList.map((category) =>
                    <option key={category} value={category}>{category}</option>
                )}
            </FastField>
            <ErrorMessage name={label}>
                {msg => <div style={{color: 'red'}}>{msg}</div>}
            </ErrorMessage>
        </div>
    )
}