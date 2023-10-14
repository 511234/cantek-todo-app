import {Form, Formik} from "formik";
import CATEGORIES from "../categories.ts";
import {taskSchema} from "../schema/task.ts";
import {TextField} from "../ui/TextField.tsx";
import {SelectField} from "../ui/SelectField.tsx";
import {MutableRefObject} from "react";
import {RBButton} from "../ui/RBButton.tsx";

interface ITaskForm {
    handleSubmit: (values, props) => void;
    titleRef: MutableRefObject<HTMLInputElement>
}

export const TaskForm = ({handleSubmit, titleRef}: ITaskForm) => {
    return (
        <Formik
            initialValues={{title: "", dueDate: null, category: CATEGORIES[0]}}
            onSubmit={handleSubmit}
            validationSchema={taskSchema}
        >
            <Form className="d-flex flex-column gap-3">
                <TextField label="title" name="Todo Title" ref={titleRef}/>
                <SelectField label="Category" name="category" optionList={CATEGORIES}/>
                <TextField label="dueDate" name="Due Date" type="date"/>
                <div className="d-flex justify-content-end" id="submit-section">
                    <RBButton className="mt-1" variant="outline-success" type="submit" label="Submit"/>
                </div>
            </Form>
        </Formik>)

}