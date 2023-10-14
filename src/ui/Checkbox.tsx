import {ErrorMessage, FastField} from "formik";

interface ICheckbox {
    label: string;
    name: string;
}

export const Checkbox = ({label, name}: ICheckbox) => {
    return (
        <div className="d-flex flex-row justify-content-between">
            <label className="fw-bolder" htmlFor={name}>{label}</label>
            <FastField className="px-2 border-1 rounded-3 border-dark" name={name}
                       type="checkbox"
            />
            <ErrorMessage name={label}>
                {msg => <div style={{color: 'red'}}>{msg}</div>}
            </ErrorMessage>
        </div>
    )
}