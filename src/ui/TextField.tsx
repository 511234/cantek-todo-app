import {ErrorMessage, FastField} from "formik";
import {forwardRef, MutableRefObject} from "react";

interface ITextField {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    ref?: MutableRefObject<HTMLInputElement>
}

export const TextField = forwardRef<HTMLInputElement, ITextField>(({label, name, placeholder, type}, ref) => {
    return (
        <div className="d-flex flex-column">
            <label className="fw-bolder" htmlFor={name}>{name}</label>
            <FastField className="px-2 border-1 rounded-3 border-dark" name={label}
                       type={type}
                       placeholder={placeholder}
                       innerRef={ref}/>
            <ErrorMessage name={label}>
                {msg => <div style={{color: 'red'}}>{msg}</div>}
            </ErrorMessage>
        </div>
    )
})