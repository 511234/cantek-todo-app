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
        <>
            <label htmlFor={name}>{name}</label>
            <FastField name={label} type={type} placeholder={placeholder} innerRef={ref}/>
            <ErrorMessage name={label}>
                {msg => <div style={{color: 'red'}}>{msg}</div>}
            </ErrorMessage>
        </>
    )
})